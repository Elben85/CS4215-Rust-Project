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
    BorrowExpressionContext,
    FunctionContext,
    ClosureExpressionContext
} from '../parser/src/RustParser';
import { RustVisitor } from '../parser/src/RustVisitor';
import { ownerInfo, HeapValue, HeapBox, copyEnvironment } from './heapBox';
import { Type } from '../typeChecker/Type';

type Frame = { [key: string]: ownerInfo };
type Environment = Frame[];

/**
 * The Borrow Checker. 
 * The class assumes that the parse tree it visits has passed all the typechecks from type checker
 */
export class BorrowChecker extends AbstractParseTreeVisitor<HeapValue[]> implements RustVisitor<HeapValue[]> {
    private environments: Environment[]; // an array of all possible environments from all possible branch of executions
    private expectLvalue: boolean; // indicate whether an expression should result in lvalue or rvalue
    private useForMutable: boolean; // indicate whether a variable will be used for read / write 
    public typeCache: Map<ParseTree, Type>;
    public giveUp: boolean;

    public constructor(typeCache: Map<ParseTree, Type>) {
        super();
        this.environments = [[]];
        this.expectLvalue = false;
        this.useForMutable = false;
        this.typeCache = typeCache;
        this.giveUp = false
    }

    private tryVisit(ctx: ParseTree): HeapValue[] {
        if (this.giveUp) return null;
        return this.visit(ctx);
    }

    /**
     * Utility function to create an array of nulls
     * 
     * @returns Create an array of null with the same length of this.environments 
     */
    private createNulls(): null[] {
        return new Array(this.environments.length).fill(null);
    }

    lookupInfo(x: string): ownerInfo[] {
        const result = [];

        for (const env of this.environments) {
            let isFound = false;
            for (let i = env.length - 1; i >= 0; --i) {
                const frame: Frame = env[i];
                if (frame.hasOwnProperty(x)) {
                    result.push(frame[x]);
                    isFound = true;
                    break;
                }
            }
            if (isFound) continue;
            throw new Error(`possibly unbound name: ${x}`);
        }
        return result;
    };

    addOwnerInfo(x: string, info: ownerInfo, env: Environment) {
        const frame = env[env.length - 1];
        frame[x] = info;
    }

    extendEnvironment(te: Environment): Environment {
        te.push({});
        return te;
    };

    dropFrame(frame: Frame) {
        for (let info of Object.values(frame)) {
            info.box.owner = null;
            if (info.box.value) {
                info.box.value.owner = null
                info.box.value.drop();
            }
        }
    }

    private visitWithFlags(ctx: ParseTree, expectLvalue?: boolean, useForMutable?: boolean): HeapValue[] {
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

    visitProg(ctx: ProgContext): HeapValue[] {
        const statements: StatementContext[] = ctx.statement();

        let box: HeapValue[] = [null];
        this.environments = [[{}]]
        for (let s of statements) {
            box = this.visit(s);
            if (this.giveUp) return null;
        }
        const frames: Frame[] = this.environments.map(e => e[0]);
        frames.map(f => this.dropFrame(f))
        return box;
    }

    visitEmptyStatement(_: EmptyStatementContext): HeapValue[] {
        return this.createNulls().map(_ => new HeapValue(true));
    };

    visitLetStatement(ctx: LetStatementContext): HeapValue[] {
        const identifier: string = ctx.IDENTIFIER().getText();
        const expression: ParseTree = ctx.expression();
        const values: HeapValue[] = expression
            ? this.tryVisit(expression)
            : this.createNulls();
        if (this.giveUp) return null;

        for (let i = 0; i < this.environments.length; ++i) {
            const env = this.environments[i];
            const value = values[i]
            const info = new ownerInfo(identifier, value);
            this.addOwnerInfo(identifier, info, env);
        }
        return this.createNulls().map(_ => new HeapValue(true)); // voids
    }

    visitExpressionStatement(ctx: ExpressionStatementContext): HeapValue[] {
        return this.visit(ctx.expressionWithBlock() || ctx.expressionWithoutBlock());
    }

    visitNegationExpression(ctx: NegationExpressionContext): HeapValue[] {
        return this.createNulls().map(_ => new HeapValue(true)); // some primitive type
    }

    checkLeftToRightAssociativeBinop(ctx): HeapValue[] {
        let result = this.tryVisit(ctx.getChild(0));
        const copyable = this.typeCache.get(ctx.getChild(0)).copyable();

        for (let i = 2; i < ctx.getChildCount(); i += 2) {
            this.tryVisit(ctx.getChild(i));
            if (this.giveUp) return null;
            result = this.environments.map(_ => new HeapValue(copyable));
        }
        return result; // some primitive type
    }

    visitLogicalOr(ctx: LogicalOrContext): HeapValue[] {
        return this.checkLeftToRightAssociativeBinop(ctx);
    };
    visitLogicalAnd(ctx: LogicalAndContext): HeapValue[] {
        return this.checkLeftToRightAssociativeBinop(ctx);
    };
    visitComparison(ctx: ComparisonContext): HeapValue[] {
        return this.checkLeftToRightAssociativeBinop(ctx);
    };
    visitAdditionSubstraction(ctx: AdditionSubstractionContext): HeapValue[] {
        return this.checkLeftToRightAssociativeBinop(ctx);
    };
    visitMultiplicationDivision(ctx: MultiplicationDivisionContext): HeapValue[] {
        return this.checkLeftToRightAssociativeBinop(ctx);
    };

    visitPrimitive(ctx: PrimitiveContext): HeapValue[] {
        return this.createNulls().map(_ => new HeapValue(!Boolean(ctx.STRING())));
    }

    visitAccessIdentifier(ctx: AccessIdentifierContext): HeapValue[] {
        let identifier: string = ctx.IDENTIFIER().getText();
        const identifierInfo = this.lookupInfo(identifier);
        const result = [];

        console.log(this.environments.length)
        console.log(identifierInfo.length)
        for (const info of identifierInfo) {
            const box: HeapBox = info.box;
            box.useAsOwner(this.useForMutable, this.expectLvalue);

            if (this.expectLvalue) {
                const memory = new HeapValue(!this.useForMutable);
                memory.registerReference(box, this.useForMutable);
                result.push(memory);
                continue
            }

            if (!box.value) {
                throw new Error(`Value for variable ${identifier} might have been moved`)
            }

            if (!box.value.isValid()) {
                throw new Error(`Variable ${identifier} might refer to a value that does not live long enough`)
            }

            result.push(box.value);
        }
        return result;
    }

    visitBlockExpression(ctx: BlockExpressionContext): HeapValue[] {
        let body = ctx.blockBody();
        this.environments = this.environments.map(env => this.extendEnvironment(env));
        const boxes = this.tryVisit(body);
        const newFrames: Frame[] = this.environments.map(env => env[env.length - 1]);
        this.environments.map(env => env.pop());
        newFrames.map(f => this.dropFrame(f));

        return boxes;
    }

    visitBlockBody(ctx: BlockBodyContext): HeapValue[] {
        let values: HeapValue[] = this.createNulls().map(_ => new HeapValue(true)); // voids
        for (let s of ctx.statement()) {
            this.tryVisit(s);
            if (this.giveUp) return null;
        }

        if (ctx.expressionWithoutBlock()) {
            values = this.tryVisit(ctx.expressionWithoutBlock());
            if (this.giveUp) return null;
            values = values.map(v => {
                v = v.copyIfPossible()
                // move the value
                if (v.owner) {
                    v.owner.value = null;
                    v.owner = null;
                }
                return v;
            });
        }

        return values;
    }

    visitBracket(ctx: BracketContext): HeapValue[] {
        return this.tryVisit(ctx.expression());
    }

    visitIfExpression(ctx: IfExpressionContext): HeapValue[] {
        this.visitWithFlags(ctx.expression(), false, this.useForMutable);

        const environmentsCopy: Environment[] = this.environments.map(copyEnvironment);
        let result = this.visit(ctx.blockExpression());
        if (ctx.ifExpressionAlternative()) {
            const oldEnvironments = this.environments;
            this.environments = environmentsCopy;
            const altResult = this.visit(ctx.ifExpressionAlternative());
            this.environments = [...oldEnvironments, ...this.environments];
            result = [...result, ...altResult];
            console.log(result);
            for (let e of this.environments) {
                console.log("ENV")
                for (let f of e) {
                    console.log(f);
                }
            }
        } else {
            result.push(new HeapValue(true)); // push void
            this.environments = [...this.environments, ...environmentsCopy];
        }

        console.log(this.environments);

        return result
    }

    visitPredicateLoopExpression(ctx: PredicateLoopExpressionContext): HeapValue[] {
        this.giveUp = true;
        return null;
    }

    visitContinueExpression(ctx: ContinueExpressionContext): HeapValue[] {
        this.giveUp = true;
        return null;
    }
    visitBreakExpression(ctx: BreakExpressionContext): HeapValue[] {
        this.giveUp = true;
        return null;
    };

    visitCallExpression(tree: ParseTree): HeapValue[] {
        this.giveUp = true;
        return null
    }

    visitFunction(ctx: FunctionContext): HeapValue[] {
        this.giveUp = true;
        return null
    }

    visitClosureExpression(ctx: ClosureExpressionContext): HeapValue[] {
        this.giveUp = true;
        return null
    }

    visitAssignmentExpressions(ctx: AssignmentExpressionsContext): HeapValue[] {
        const values: HeapValue[] = this.tryVisit(ctx.expression());
        if (this.giveUp) return null;

        const assigneeValues: HeapValue[] = this.visitWithFlags(
            ctx.accessIdentifier() || ctx.dereferenceExpression(),
            true, true
        )
        if (this.giveUp) return null;

        for (let i = 0; i < assigneeValues.length; ++i) {
            const assigneeValue = assigneeValues[i];
            const value = values[i];
            const box = assigneeValue.sharedReference || assigneeValue.mutableReference;
            box.use(assigneeValue, true);
            box.setMemory(value);
        }

        return this.createNulls().map(_ => new HeapValue(true));
    }

    visitDereferenceExpression(ctx: DereferenceExpressionContext): HeapValue[] {
        let values: HeapValue[];
        if (ctx.accessIdentifier()) {
            values = this.tryVisit(ctx.accessIdentifier());
        } else {
            values = this.tryVisit(ctx.dereferenceExpression());
        }
        if (this.giveUp) return null;

        return values.map(v => {
            const referencedBox = v.sharedReference || v.mutableReference
            const isMutable = v.sharedReference === null;

            if (this.expectLvalue) {
                referencedBox.use(v, isMutable)
            }

            return referencedBox.value;
        })
    }

    visitBorrowExpression(ctx: BorrowExpressionContext): HeapValue[] {
        const mut: boolean = ctx.mutable() !== null;
        let value = this.visitWithFlags(
            ctx.accessIdentifier(), true, mut
        )
        return value;
    }
}