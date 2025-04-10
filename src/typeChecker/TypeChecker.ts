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
import { BOOLEAN_TYPE, BooleanType, BoxedType, NUMBER_TYPE, NumberType, PointerType, stringToType, Type, UNKNOWN_TYPE, UnknownType, VOID_TYPE, VoidType } from './Type';

export interface identifierInformation {
    type: Type | string, // type of identifer
    is_mutable: boolean, // is the identifier mutable?
    assigned: true, // whether identifier has been initialized
    owns: BoxedType // the type object the identifier owns
}

export class TypeChecker extends AbstractParseTreeVisitor<Type> implements SimpleLangVisitor<Type> {
    private typeEnv: any[];
    private isFirstStatement: boolean;
    private expectLvalue: boolean; // indicate whether an expression should result in lvalue or rvalue
    private useForMutable: boolean; // indicate whether a variable will be used for read / write 

    public constructor() {
        super();
        this.typeEnv = [];
        this.isFirstStatement = true;
        this.expectLvalue = false;
        this.useForMutable = false;
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
            if (info.owns.value) {
                info.owns.value.owner = null;
                info.owns.value.drop();
            }
        }
    }

    copyOrMove(type: Type): Type {
        if (!type.copyable()) {
            return type
        }
        type = type.copy();
        if (type instanceof PointerType) {
            type.baseType.addBorrow(type);
        }
        return type
    }

    // return the copied / moved type owned by the identifier
    updateOwner(type: Type, identifier: identifierInformation): Type {
        type = this.copyOrMove(type);

        if (type.owner) {
            type.owner.owns.value = null;
        }

        let oldType: Type = null;
        if (identifier.owns.value) {
            oldType = identifier.owns.value
            oldType.owner = null;
        }
        identifier.owns.value = type;
        type.owner = identifier;

        // Case where the type has been dropped, handle edge case like "x = x"
        if (oldType && oldType.owner === null) {
            oldType.drop();
        }

        return type;
    }

    private visitWithEnvironment(ctx: any, env: any[]): Type {
        const currentEnv = this.typeEnv;

        this.typeEnv = env;
        const result = this.visit(ctx);

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
        const result = this.visit(ctx);

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

        let type: Type = new VoidType();
        const frame = {};
        for (let s of statements) {
            type = this.visitWithEnvironment(s, [...this.typeEnv, frame]);
        }
        this.dropFrame(frame)
        return type;
    }

    visitEmptyStatement(_: EmptyStatementContext): Type {
        return new VoidType();
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

        let expressionType: Type = new VoidType();
        let assigned = false;

        if (expression) {
            expressionType = this.visit(expression);
            assigned = true;

            if (ctx.TYPE() && (!declaredType.compare(expressionType))) {
                throw new Error(
                    `${ctx.getText()}\nExpected ${declaredType.toString()}, got ${expressionType.toString()}`
                )
            }
            declaredType = expressionType;
        }
        const identifierInfo = <identifierInformation>{
            type: declaredType.copy(),
            is_mutable: is_mutable,
            assigned: assigned,
            owns: new BoxedType(null)
        };
        (<Type>identifierInfo.type).owner = identifierInfo;
        this.addIdentifierType(identifier, identifierInfo);
        this.updateOwner(declaredType, identifierInfo);

        return new VoidType();
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
        const type = this.visit(ctx.binopTerminals());
        const op = ctx.getChild(0).getText();

        switch (op) {
            case '-':
                if (!type.compare(NUMBER_TYPE)) {
                    throw new Error(`Operand type not correct`)
                }
                return new NumberType();
            case '!':
                if (!type.compare(BOOLEAN_TYPE)) {
                    throw new Error(`not Boolean type for Bool`)
                }
                return new BooleanType();
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
            return new NumberType();
        } else if (ctx.BOOL()) {
            return new BooleanType();
        } else {
            throw new Error(`unrecognized primitive type: ${ctx.getText()}`);
        }
    }

    visitAccessIdentifier(ctx: AccessIdentifierContext): Type {
        let identifier: string = ctx.IDENTIFIER().getText();
        const identifierInfo = this.lookupType(identifier, this.typeEnv);

        const type: BoxedType = identifierInfo.owns;

        type.useAsOwner(this.useForMutable, this.expectLvalue);

        if (this.expectLvalue) {
            return new PointerType(type, identifierInfo.is_mutable);
        }
        if (!identifierInfo.assigned) {
            throw new Error(`Trying to access unassigned variable ${identifier}`)
        }
        if (!identifierInfo.owns.value) {
            throw new Error(`Value for variable ${identifier} has been moved`)
        }
        if (!identifierInfo.owns.value.isValid()) {
            throw new Error(`Variable ${identifier} refers to a value that does not live long enough`)
        }
        return type.value
    }

    visitBlockExpression(ctx: BlockExpressionContext): Type {
        // Block return the type of the last body statement
        let body = ctx.blockBody();
        const extendedTypeEnv = this.extendTypeEnvironment([], [], [...this.typeEnv]);
        const newFrame = extendedTypeEnv[extendedTypeEnv.length - 1];
        const type = this.visitWithEnvironment(body, extendedTypeEnv);
        this.dropFrame(newFrame);

        return type;
    }

    visitBlockBody(ctx: BlockBodyContext): Type {
        // TODO: Implementation not finished
        let type: Type = new VoidType();
        for (let s of ctx.statement()) {
            this.visit(s);
        }

        if (ctx.expressionWithoutBlock()) {
            type = this.visit(ctx.expressionWithoutBlock());
        }
        return type;
    }

    visitBracket(ctx: BracketContext): Type {
        const type = this.visit(ctx.expression())

        return type;
    }

    checkLeftToRightAssociativeBinop(ctx): Type {
        const childCount = ctx.getChildCount();

        let type1 = this.visit(ctx.getChild(0));

        let type2: Type;
        for (let i = 1; i < childCount; i += 2) {
            const operator = this.lookupType(ctx.getChild(i).getText(), this.typeEnv).type;
            type2 = this.visit(ctx.getChild(i + 1));

            // TODO: Cleaner Implementation
            switch (operator) {
                case "binary_arith_type":
                    if (!type1.compare(NUMBER_TYPE) || !type2.compare(NUMBER_TYPE)) {
                        throw new Error(`Operand type not correct for op: ${operator}`)
                    }
                    type1 = new NumberType();
                    break;
                case "number_comparison_type":
                    if (!type1.compare(NUMBER_TYPE) || !type2.compare(NUMBER_TYPE)) {
                        throw new Error(`Operand type not correct for op: ${operator}`)
                    }
                    type1 = new BooleanType();
                    break;
                case "binary_bool_type":
                    if (!type1.compare(BOOLEAN_TYPE) || !type2.compare(BOOLEAN_TYPE)) {
                        throw new Error(`not Boolean type for Bool op: ${operator}`)
                    }
                    type1 = new BooleanType();
                    break;
                default:
                    throw new Error(`unrecognized operator type: ${operator}`)
            }
        }

        return type1
    }

    visitIfExpression(ctx: IfExpressionContext): Type {
        const predicateType = this.visit(ctx.expression());

        if (!predicateType.compare(BOOLEAN_TYPE)) {
            throw new Error(
                `If expression predicate must be boolean. ${ctx.expression().getText()}`
                + `has type ${predicateType}`
            );
        }

        const blockType1: Type = this.visit(ctx.blockExpression());
        const blockType2: Type = ctx.ifExpressionAlternative()
            ? this.visit(ctx.ifExpressionAlternative())
            : new VoidType();

        if (!blockType1.compare(blockType2)) {
            throw new Error(`An if expression must have the same type in all situations: \n ${ctx.getText()}`);
        }

        return blockType1;
    }

    visitPredicateLoopExpression(ctx: PredicateLoopExpressionContext): Type {
        const predicateType = this.visit(ctx.expression());

        if (!predicateType.compare(BOOLEAN_TYPE)) {
            throw new Error(
                `Predicate loop expression predicate must be boolean. ${ctx.expression().getText()}`
                + `has type ${predicateType}`
            );
        }

        const bodyType = this.visit(ctx.blockExpression());

        if (!bodyType.compare(VOID_TYPE)) {
            throw new Error(
                `${ctx.getText()}\nexpected block body to be ${VOID_TYPE.toString()}, `
                + `got ${bodyType.toString()}`
            );
        }

        return bodyType;
    }

    visitContinueExpression(ctx: ContinueExpressionContext): Type { return new VoidType(); }
    visitBreakExpression(ctx: BreakExpressionContext): Type { return new VoidType(); };

    visitAssignmentExpressions(ctx: AssignmentExpressionsContext): Type {
        const expressionType: Type = this.visit(ctx.expression());
        const assigneeType = this.visitWithFlags(
            ctx.accessIdentifier() || ctx.dereferenceExpression(),
            true, true
        )

        if (!(assigneeType instanceof PointerType)) {
            throw new Error(`Invalid assignee expression:\n${ctx.getText()}`);
        }
        let expectedType: Type = assigneeType.baseType.value;
        const owner: identifierInformation = expectedType.owner;
        if (expectedType.compare(UNKNOWN_TYPE)) {
            owner.type = expressionType;
            owner.assigned = true;
        } else if (!(<PointerType>assigneeType).isMutable) {
            throw new Error(`Trying to assign to an immutable reference:\n${ctx.getText()}`);
        } else if (!expectedType.compare(expressionType)) {
            throw new Error(
                `Incompatible types in assignment expression ${ctx.getText()}. Received:`
                + ` ${expressionType.toString()}, Expected: ${expectedType.toString()}`
            );
        }
        const resultType = this.updateOwner(expressionType, owner);
        return VOID_TYPE;
    }

    visitDereferenceExpression(ctx: DereferenceExpressionContext): Type {
        console.log(ctx.getText());
        let type: Type;
        if (ctx.accessIdentifier()) {
            type = this.visit(ctx.accessIdentifier());
        } else {
            type = this.visit(ctx.dereferenceExpression());
        }
        if (!(type instanceof PointerType)) {
            throw new Error(`Trying to dereference a non-pointer ${ctx.getText()}`);
        }

        const pointer = type as PointerType;

        const dereferencedType = pointer.baseType.value;

        if (
            this.useForMutable
            && (dereferencedType instanceof PointerType)
            && !(dereferencedType as PointerType).isMutable
        ) {
            throw new Error("Trying to mutate value under immutable reference");
        }


        if (dereferencedType instanceof PointerType) {
            dereferencedType.baseType.useBorrow(dereferencedType);
        }

        return dereferencedType;
    }

    visitBorrowExpression(ctx: BorrowExpressionContext): Type {
        const mut: boolean = ctx.mutable() !== null;
        let type = this.visitWithFlags(
            ctx.accessIdentifier(), true, this.useForMutable
        )

        if (!(type instanceof PointerType)) {
            type = new PointerType(new BoxedType(type), true);
        }

        if (mut && !(type as PointerType).isMutable) {
            throw new Error(`Mutable borrow from non mutable: ${ctx.getText()}`)
        }

        let result = (type as PointerType).copy();
        result.isMutable = mut;
        result.baseType.addBorrow(result);
        return result;
    }
}