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
import { BOOLEAN_TYPE, NUMBER_TYPE, PointerType, stringToType, Type, UNKNOWN_TYPE, UnknownType, VOID_TYPE, VoidType } from './Type';

export interface identifierInformation {
    type: Type | string, // type of identifer
    is_mutable: boolean, // is the identifier mutable?
    assigned: true, // whether identifier has been initialized
}

export class TypeChecker extends AbstractParseTreeVisitor<Type> implements SimpleLangVisitor<Type> {
    private typeEnv: any[];
    private isFirstStatement: boolean;
    private expectLvalue: boolean; // indicate whether an expression should result in lvalue or rvalue
    private useForMutable: boolean; // indicate whether a variable will be used for read / write 
    public typeCache: Map<ParseTree, Type>;

    public constructor() {
        super();
        this.typeEnv = [];
        this.isFirstStatement = true;
        this.expectLvalue = false;
        this.useForMutable = false;
        this.typeCache = new Map<ParseTree, Type>();
    }

    // TYPE ENV
    private emptyTypeEnvironment = null;

    private globalTypeFrame = {
        // TODO: Use Better Implementation
        "+": { type: "binary_arith_type" },
        "-": { type: "binary_arith_type" },
        "*": { type: "binary_arith_type" },
        "/": { type: "binary_arith_type" },
        "<": { type: "number_comparison_type" },
        ">": { type: "number_comparison_type" },
        "<=": { type: "number_comparison_type" },
        ">=": { type: "number_comparison_type" },
        "&&": { type: "binary_bool_type" },
        "||": { type: "binary_bool_type" },
        "!": { type: "unary_bool_type" }
    };
    private globalTypeEnvironment = [this.emptyTypeEnvironment, this.globalTypeFrame];

    lookupType(x: string, te: any[]) {
        let copiedEnv = [...te];

        while (copiedEnv.length > 0) {
            const frame = copiedEnv.pop();
            if (!frame) {
                throw new Error(`Lookup Fail, frame is Null`);
            } else if (frame.hasOwnProperty(x)) {
                return frame[x];
            }
        }

        throw new Error(`unbound name: ${x}`);
    };

    addIdentifierType(x: string, info: identifierInformation) {
        const frame = this.typeEnv.pop();

        if (!frame) {
            throw new Error(`Add Identifier ${x} Fail, frame is Null`);
        }

        frame[x] = info;
        this.typeEnv.push(frame);
    }

    extendTypeEnvironment(xs: string[], ts: identifierInformation[], te: any[]) {
        if (ts.length > xs.length) throw new Error('too few parameters in declaration');
        if (ts.length < xs.length) throw new Error('too many parameters in declaration');

        const newFrame: { [key: string]: identifierInformation } = {};
        for (let i = 0; i < xs.length; i++) {
            newFrame[xs[i]] = ts[i];
        }

        te.push(newFrame);
        return te;
    };

    dropFrame(frame: { [key: string]: identifierInformation }) {
        for (let info of Object.values(frame)) {
            if ((<Type>info.type).compare(UNKNOWN_TYPE)) {
                throw new Error(`Type annotation needed`)
            }
        }
    }

    private visitAndCache(ctx: ParseTree) {
        const result = this.visit(ctx);
        this.typeCache.set(ctx, result);
        return result
    }

    private visitWithEnvironment(ctx: any, env: any[]): Type {
        const currentEnv = this.typeEnv;

        this.typeEnv = env;
        const result = this.visitAndCache(ctx);

        this.typeEnv = currentEnv;
        return result;
    }

    private visitWithFlags(ctx: ParseTree, expectLvalue?: boolean, useForMutable?: boolean): Type {
        const oldLvalue = this.expectLvalue;
        const oldUseForMutable = this.useForMutable
        if (expectLvalue !== undefined) {
            this.expectLvalue = expectLvalue;
        }
        if (useForMutable !== undefined) {
            this.useForMutable = useForMutable
        }
        const result = this.visitAndCache(ctx);

        this.expectLvalue = oldLvalue;
        this.useForMutable = oldUseForMutable;
        return result
    }

    checkType(ctx: ProgContext): Type {
        this.typeEnv = this.globalTypeEnvironment;
        return this.visitWithEnvironment(ctx, this.typeEnv);
    }

    visitProg(ctx: ProgContext): Type {
        const statements: StatementContext[] = ctx.statement();

        let type: Type = VOID_TYPE;
        const frame = {};
        for (let s of statements) {
            type = this.visitWithEnvironment(s, [...this.typeEnv, frame]);
        }
        this.dropFrame(frame)
        return type;
    }

    visitEmptyStatement(_: EmptyStatementContext): Type {
        return VOID_TYPE;
    };

    visitLetStatement(ctx: LetStatementContext): Type {
        let declaredType: Type = new UnknownType();
        if (ctx.TYPE()) {
            declaredType = stringToType(ctx.TYPE().getText());
        }
        let is_mutable = false;
        if (ctx.mutable()) {
            is_mutable = true;
        }
        let identifier = ctx.IDENTIFIER().getText();
        let expression = ctx.expression();

        let expressionType: Type = VOID_TYPE;
        let assigned = false;

        if (expression) {
            expressionType = this.visitAndCache(expression);
            assigned = true;

            if (ctx.TYPE() && (!declaredType.compare(expressionType))) {
                throw new Error(
                    `${ctx.getText()}\nExpected ${declaredType.toString()}, got ${expressionType.toString()}`
                )
            }
            declaredType = expressionType;
        }
        const identifierInfo = <identifierInformation>{
            type: declaredType,
            is_mutable: is_mutable,
            assigned: assigned,
        };
        this.addIdentifierType(identifier, identifierInfo);

        return VOID_TYPE;
    }

    visitExpressionStatement(ctx: ExpressionStatementContext): Type {
        if (this.isFirstStatement) {
            this.isFirstStatement = false;
        }

        const type = this.visitWithEnvironment(
            ctx.expressionWithBlock() || ctx.expressionWithoutBlock(), this.typeEnv);

        return type;
    }

    visitNegationExpression(ctx: NegationExpressionContext): Type {
        const type = this.visitAndCache(ctx.binopTerminals());
        const op = ctx.getChild(0).getText();

        switch (op) {
            case '-':
                if (!type.compare(NUMBER_TYPE)) {
                    throw new Error(`Operand type not correct`)
                }
                return NUMBER_TYPE;
            case '!':
                if (!type.compare(BOOLEAN_TYPE)) {
                    throw new Error(`not Boolean type for Bool`)
                }
                return BOOLEAN_TYPE;
            default:
                throw new Error(`Unknown negation expression op: ${op}`)
        }
    }

    visitLogicalOr(ctx: LogicalOrContext): Type {
        return this.checkLeftToRightAssociativeBinop(ctx);
    };
    visitLogicalAnd(ctx: LogicalAndContext): Type {
        return this.checkLeftToRightAssociativeBinop(ctx);
    };
    visitComparison(ctx: ComparisonContext): Type {
        return this.checkLeftToRightAssociativeBinop(ctx);
    };
    visitAdditionSubstraction(ctx: AdditionSubstractionContext): Type {
        return this.checkLeftToRightAssociativeBinop(ctx);
    };
    visitMultiplicationDivision(ctx: MultiplicationDivisionContext): Type {
        return this.checkLeftToRightAssociativeBinop(ctx);
    };

    visitPrimitive(ctx: PrimitiveContext): Type {
        if (ctx.INT()) {
            return NUMBER_TYPE;
        } else if (ctx.BOOL()) {
            return BOOLEAN_TYPE;
        } else {
            throw new Error(`unrecognized primitive type: ${ctx.getText()}`);
        }
    }

    visitAccessIdentifier(ctx: AccessIdentifierContext): Type {
        let identifier: string = ctx.IDENTIFIER().getText();
        const identifierInfo = this.lookupType(identifier, this.typeEnv);

        const type: Type = identifierInfo.type;

        if (this.expectLvalue) {
            return new PointerType(type, identifierInfo.is_mutable);
        }
        if (!identifierInfo.assigned) {
            throw new Error(`Trying to access unassigned variable ${identifier}`)
        }
        return type
    }

    visitBlockExpression(ctx: BlockExpressionContext): Type {
        let body = ctx.blockBody();
        const extendedTypeEnv = this.extendTypeEnvironment([], [], [...this.typeEnv]);
        const newFrame = extendedTypeEnv[extendedTypeEnv.length - 1];
        const type = this.visitWithEnvironment(body, extendedTypeEnv);
        this.dropFrame(newFrame);

        return type;
    }

    visitBlockBody(ctx: BlockBodyContext): Type {
        let type: Type = VOID_TYPE;
        for (let s of ctx.statement()) {
            this.visitAndCache(s);
        }

        if (ctx.expressionWithoutBlock()) {
            type = this.visitAndCache(ctx.expressionWithoutBlock());
        }
        return type;
    }

    visitBracket(ctx: BracketContext): Type {
        const type = this.visitAndCache(ctx.expression())

        return type;
    }

    checkLeftToRightAssociativeBinop(ctx): Type {
        const childCount = ctx.getChildCount();

        let type1 = this.visitAndCache(ctx.getChild(0));

        let type2: Type;
        for (let i = 1; i < childCount; i += 2) {
            const operator = this.lookupType(ctx.getChild(i).getText(), this.typeEnv).type;
            type2 = this.visitAndCache(ctx.getChild(i + 1));

            // TODO: Cleaner Implementation
            switch (operator) {
                case "binary_arith_type":
                    if (!type1.compare(NUMBER_TYPE) || !type2.compare(NUMBER_TYPE)) {
                        throw new Error(`Operand type not correct for op: ${operator}`)
                    }
                    type1 = NUMBER_TYPE;
                    break;
                case "number_comparison_type":
                    if (!type1.compare(NUMBER_TYPE) || !type2.compare(NUMBER_TYPE)) {
                        throw new Error(`Operand type not correct for op: ${operator}`)
                    }
                    type1 = BOOLEAN_TYPE;
                    break;
                case "binary_bool_type":
                    if (!type1.compare(BOOLEAN_TYPE) || !type2.compare(BOOLEAN_TYPE)) {
                        throw new Error(`not Boolean type for Bool op: ${operator}`)
                    }
                    type1 = BOOLEAN_TYPE;
                    break;
                default:
                    throw new Error(`unrecognized operator type: ${operator}`)
            }
        }

        return type1
    }

    visitIfExpression(ctx: IfExpressionContext): Type {
        const predicateType = this.visitAndCache(ctx.expression());

        if (!predicateType.compare(BOOLEAN_TYPE)) {
            throw new Error(
                `If expression predicate must be boolean. ${ctx.expression().getText()}`
                + `has type ${predicateType}`
            );
        }

        const blockType1: Type = this.visitAndCache(ctx.blockExpression());
        const blockType2: Type = ctx.ifExpressionAlternative()
            ? this.visitAndCache(ctx.ifExpressionAlternative())
            : VOID_TYPE;

        if (!blockType1.compare(blockType2)) {
            throw new Error(`An if expression must have the same type in all situations: \n ${ctx.getText()}`);
        }

        return blockType1;
    }

    visitPredicateLoopExpression(ctx: PredicateLoopExpressionContext): Type {
        const predicateType = this.visitAndCache(ctx.expression());

        if (!predicateType.compare(BOOLEAN_TYPE)) {
            throw new Error(
                `Predicate loop expression predicate must be boolean. ${ctx.expression().getText()}`
                + `has type ${predicateType}`
            );
        }

        const bodyType = this.visitAndCache(ctx.blockExpression());

        if (!bodyType.compare(VOID_TYPE)) {
            throw new Error(
                `${ctx.getText()}\nexpected block body to be ${VOID_TYPE.toString()}, `
                + `got ${bodyType.toString()}`
            );
        }

        return bodyType;
    }

    visitContinueExpression(ctx: ContinueExpressionContext): Type { return VOID_TYPE; }
    visitBreakExpression(ctx: BreakExpressionContext): Type { return VOID_TYPE; };

    visitAssignmentExpressions(ctx: AssignmentExpressionsContext): Type {
        const expressionType: Type = this.visitAndCache(ctx.expression());

        if (ctx.accessIdentifier()) {
            const identifier: string = ctx.accessIdentifier().getText();
            const identifierInfo: identifierInformation = this.lookupType(identifier, this.typeEnv)
            if ((<Type>identifierInfo.type).compare(UNKNOWN_TYPE)) {
                identifierInfo.type = expressionType;
                identifierInfo.assigned = true;
                return VOID_TYPE;
            }
        }

        const assigneeType = this.visitWithFlags(
            ctx.accessIdentifier() || ctx.dereferenceExpression(),
            true, true
        )

        if (!(assigneeType instanceof PointerType)) {
            throw new Error(`Invalid assignee expression:\n${ctx.getText()}`);
        }
        
        let expectedType: Type = assigneeType.baseType;
        if (!(<PointerType>assigneeType).isMutable) {
            throw new Error(`Trying to assign to an immutable reference:\n${ctx.getText()}`);
        } else if (!expectedType.compare(expressionType)) {
            throw new Error(
                `Incompatible types in assignment expression ${ctx.getText()}. Received:`
                + ` ${expressionType.toString()}, Expected: ${expectedType.toString()}`
            );
        }
        return VOID_TYPE;
    }

    visitDereferenceExpression(ctx: DereferenceExpressionContext): Type {
        let type: Type;
        if (ctx.accessIdentifier()) {
            type = this.visitAndCache(ctx.accessIdentifier());
        } else {
            type = this.visitAndCache(ctx.dereferenceExpression());
        }
        if (!(type instanceof PointerType)) {
            throw new Error(`Trying to dereference a non-pointer ${ctx.getText()}`);
        }

        const pointer = type as PointerType;

        const dereferencedType = pointer.baseType;

        if (
            this.useForMutable
            && (dereferencedType instanceof PointerType)
            && !(dereferencedType as PointerType).isMutable
        ) {
            throw new Error("Trying to mutate value under immutable reference");
        }

        return dereferencedType;
    }

    visitBorrowExpression(ctx: BorrowExpressionContext): Type {
        const mut: boolean = ctx.mutable() !== null;
        let type = this.visitWithFlags(
            ctx.accessIdentifier(), true, this.useForMutable
        )

        if (!(type instanceof PointerType)) {
            type = new PointerType(type, true);
        }

        if (mut && !(type as PointerType).isMutable) {
            throw new Error(`Mutable borrow from non mutable: ${ctx.getText()}`)
        }

        let result = (type as PointerType)
        result.isMutable = mut;
        return result;
    }
}