import { AbstractParseTreeVisitor, ParseTree } from 'antlr4ng';
import {
    BracketContext,
    PrimitiveContext,
    ProgContext,
    EmptyStatementContext,
    LetStatementContext,
    ExpressionStatementContext,
    StatementContext,
    AccessIdentifierContext,
    LogicalOrContext,
    LogicalAndContext,
    ComparisonContext,
    AdditionSubstractionContext,
    MultiplicationDivisionContext,
    BlockExpressionContext,
    BlockBodyContext,
    IfExpressionContext,
    PredicateLoopExpressionContext,
    AssignmentExpressionsContext,
    NegationExpressionContext,
    ContinueExpressionContext,
    BreakExpressionContext,
    DereferenceExpressionContext,
    BorrowExpressionContext
} from '../parser/src/SimpleLangParser';
import { SimpleLangVisitor } from '../parser/src/SimpleLangVisitor';
import { ownerInfo, HeapValue, HeapBox } from './heapBox';
import { Type } from '../typeChecker/Type';


/**
 * The Borrow Checker. 
 * The class assumes that the parse tree it visits has passed all the typechecks from type checker
 */
export class BorrowChecker extends AbstractParseTreeVisitor<HeapValue> implements SimpleLangVisitor<HeapValue> {
    private env: { [key: string]: ownerInfo }[];
    private expectLvalue: boolean; // indicate whether an expression should result in lvalue or rvalue
    private useForMutable: boolean; // indicate whether a variable will be used for read / write 
    public typeCache: Map<ParseTree, Type>;
    public giveUp: boolean;

    public constructor(typeCache: Map<ParseTree, Type>) {
        super();
        this.env = [];
        this.expectLvalue = false;
        this.useForMutable = false;
        this.typeCache = typeCache;
        this.giveUp = false
    }

    private canCopy(ctx: ParseTree) {
        return this.typeCache.get(ctx).copyable();
    }

    private tryVisit(ctx: ParseTree) {
        if (this.giveUp) return null;
        return this.visit(ctx);
    }

    lookupInfo(x: string) {
        for (let i = this.env.length - 1; i >= 0; --i) {
            const frame = this.env[i];
            if (frame.hasOwnProperty(x)) {
                return frame[x];
            }
        }

        throw new Error(`unbound name: ${x}`);
    };

    addOwnerInfo(x: string, info: ownerInfo) {
        const frame = this.env[this.env.length - 1];
        frame[x] = info;
    }

    extendEnvironment(te: any[]) {
        te.push({});
        return te;
    };

    dropFrame(frame: { [key: string]: ownerInfo }) {
        for (let info of Object.values(frame)) {
            info.box.owner = null;
            if (info.box.value) {
                info.box.value.owner = null
                info.box.value.drop();
            }
        }
    }

    private visitWithEnvironment(ctx: any, env: any[]): HeapValue {
        const currentEnv = this.env;
        this.env = env;
        const result = this.tryVisit(ctx);

        this.env = currentEnv;
        return result;
    }

    private visitWithFlags(ctx: ParseTree, expectLvalue?: boolean, useForMutable?: boolean): HeapValue {
        const oldLvalue = this.expectLvalue;
        const oldUseForMutable = this.useForMutable
        if (expectLvalue !== undefined) {
            this.expectLvalue = expectLvalue;
        }
        if (useForMutable !== undefined) {
            this.useForMutable = useForMutable
        }
        const result = this.tryVisit(ctx);

        this.expectLvalue = oldLvalue;
        this.useForMutable = oldUseForMutable;
        return result
    }

    visitProg(ctx: ProgContext): HeapValue {
        const statements: StatementContext[] = ctx.statement();

        let box: HeapValue = null;
        const frame = {};
        const extendedEnv = [...this.env, frame]
        for (let s of statements) {
            box = this.visitWithEnvironment(s, extendedEnv);
            if (this.giveUp) return null;
        }
        this.dropFrame(frame)
        return box;
    }

    visitEmptyStatement(_: EmptyStatementContext): HeapValue {
        return new HeapValue(true);
    };

    visitLetStatement(ctx: LetStatementContext): HeapValue {
        const identifier: string = ctx.IDENTIFIER().getText();
        const expression: ParseTree = ctx.expression();
        const value: HeapValue = expression ? this.tryVisit(expression) : null;
        if (this.giveUp) return null;
        const info = new ownerInfo(identifier, value);
        this.addOwnerInfo(identifier, info);
        return new HeapValue(true); // void
    }

    visitExpressionStatement(ctx: ExpressionStatementContext): HeapValue {
        return this.visitWithEnvironment(
            ctx.expressionWithBlock() || ctx.expressionWithoutBlock(),
            this.env
        );
    }

    visitNegationExpression(ctx: NegationExpressionContext): HeapValue {
        return new HeapValue(true); // some primitive type
    }

    checkLeftToRightAssociativeBinop(ctx): HeapValue {
        let result = this.tryVisit(ctx.getChild(0));

        for (let i = 2; i < ctx.getChildCount(); i += 2) {
            this.tryVisit(ctx.getChild(i));
            if (this.giveUp) return null;
            result = new HeapValue(result.copyable);
        }
        return result; // some primitive type
    }

    visitLogicalOr(ctx: LogicalOrContext): HeapValue {
        return this.checkLeftToRightAssociativeBinop(ctx);
    };
    visitLogicalAnd(ctx: LogicalAndContext): HeapValue {
        return this.checkLeftToRightAssociativeBinop(ctx);
    };
    visitComparison(ctx: ComparisonContext): HeapValue {
        return this.checkLeftToRightAssociativeBinop(ctx);
    };
    visitAdditionSubstraction(ctx: AdditionSubstractionContext): HeapValue {
        return this.checkLeftToRightAssociativeBinop(ctx);
    };
    visitMultiplicationDivision(ctx: MultiplicationDivisionContext): HeapValue {
        return this.checkLeftToRightAssociativeBinop(ctx);
    };

    visitPrimitive(ctx: PrimitiveContext): HeapValue {
        return new HeapValue(!Boolean(ctx.STRING()));
    }

    visitAccessIdentifier(ctx: AccessIdentifierContext): HeapValue {
        let identifier: string = ctx.IDENTIFIER().getText();
        const identifierInfo = this.lookupInfo(identifier);
        const box: HeapBox = identifierInfo.box;

        box.useAsOwner(this.useForMutable, this.expectLvalue);

        if (this.expectLvalue) {
            const memory = new HeapValue(!this.useForMutable);
            memory.registerReference(box, this.useForMutable);
            return memory;
        }

        if (!box.value) {
            throw new Error(`Value for variable ${identifier} has been moved`)
        }

        if (!box.value.isValid()) {
            throw new Error(`Variable ${identifier} refers to a value that does not live long enough`)
        }

        return box.value;
    }

    visitBlockExpression(ctx: BlockExpressionContext): HeapValue {
        let body = ctx.blockBody();
        const extendedTypeEnv = this.extendEnvironment([...this.env]);
        const newFrame = extendedTypeEnv[extendedTypeEnv.length - 1];
        const box = this.visitWithEnvironment(body, extendedTypeEnv);
        this.dropFrame(newFrame);

        return box;
    }

    visitBlockBody(ctx: BlockBodyContext): HeapValue {
        let box: HeapValue = new HeapValue(true); // void
        for (let s of ctx.statement()) {
            this.tryVisit(s);
            if (this.giveUp) return null;
        }

        if (ctx.expressionWithoutBlock()) {
            box = this.tryVisit(ctx.expressionWithoutBlock());
            if (this.giveUp) return null;
        }
        return box;
    }

    visitBracket(ctx: BracketContext): HeapValue {
        return this.tryVisit(ctx.expression());
    }

    visitIfExpression(ctx: IfExpressionContext): HeapValue {
        this.giveUp = true;
        return null;
    }

    visitPredicateLoopExpression(ctx: PredicateLoopExpressionContext): HeapValue {
        this.giveUp = true;
        return null;
    }

    visitContinueExpression(ctx: ContinueExpressionContext): HeapValue {
        this.giveUp = true;
        return null;
    }
    visitBreakExpression(ctx: BreakExpressionContext): HeapValue {
        this.giveUp = true;
        return null;
    };

    visitAssignmentExpressions(ctx: AssignmentExpressionsContext): HeapValue {
        const value: HeapValue = this.tryVisit(ctx.expression());
        if (this.giveUp) return null;

        const assigneeValue: HeapValue = this.visitWithFlags(
            ctx.accessIdentifier() || ctx.dereferenceExpression(),
            true, true
        )
        if (this.giveUp) return null;

        const box = assigneeValue.sharedReference || assigneeValue.mutableReference;
        box.use(assigneeValue, true);
        box.setMemory(value);

        return new HeapValue(true);
    }

    visitDereferenceExpression(ctx: DereferenceExpressionContext): HeapValue {
        let value: HeapValue;
        if (ctx.accessIdentifier()) {
            value = this.tryVisit(ctx.accessIdentifier());
        } else {
            value = this.tryVisit(ctx.dereferenceExpression());
        }
        if (this.giveUp) return null;

        const referencedBox = value.sharedReference || value.mutableReference
        const isMutable = value.sharedReference === null;

        if (this.expectLvalue) {
            referencedBox.use(value, isMutable)
        }

        return referencedBox.value;
    }

    visitBorrowExpression(ctx: BorrowExpressionContext): HeapValue {
        const mut: boolean = ctx.mutable() !== null;
        let value = this.visitWithFlags(
            ctx.accessIdentifier(), true, mut
        )
        return value;
    }
}