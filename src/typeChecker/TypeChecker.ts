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
    ClosureExpressionContext,
    FunctionParametersContext,
    ReturnExpressionContext,
    CallExpressionContext,
    TypeContext
} from '../parser/src/SimpleLangParser';
import { SimpleLangVisitor } from '../parser/src/SimpleLangVisitor';
import { BOOLEAN_TYPE, NUMBER_TYPE, PointerType, Type, UNKNOWN_TYPE, UnknownType, VOID_TYPE, VoidType, FunctionType } from './Type';

export interface identifierInformation {
    type: Type, // type of identifer
    is_mutable: boolean, // is the identifier mutable?
    assigned: true, // whether identifier has been initialized
}

export class TypeChecker extends AbstractParseTreeVisitor<Type> implements SimpleLangVisitor<Type> {
    private typeEnv: any[];
    private isFirstStatement: boolean;
    private expectLvalue: boolean; // indicate whether an expression should result in lvalue or rvalue
    private useForMutable: boolean; // indicate whether a variable will be used for read / write 
    // stack to indicate the expected return type of an enclosing function body 
    private returnTypeStack: Type[];
    public typeCache: Map<ParseTree, Type>;

    public constructor() {
        super();
        this.typeEnv = [];
        this.isFirstStatement = true;
        this.expectLvalue = false;
        this.useForMutable = false;
        this.typeCache = new Map<ParseTree, Type>();
        this.returnTypeStack = [];
    }

    private globalTypeEnvironment = [];

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

        te = [...te];
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
        this.typeEnv = [{}];
        return this.visitWithEnvironment(ctx, this.typeEnv);
    }

    private isItem(ctx: StatementContext): boolean {
        return ctx.item() !== null;
    }

    private getFunctionBody(ctx: StatementContext): BlockExpressionContext {
        return ctx.item().function().blockExpression();
    }

    private getFunctionName(ctx: StatementContext): string {
        return ctx.item().function().IDENTIFIER().getText();
    }

    visitProg(ctx: ProgContext): Type {
        const statements: StatementContext[] = ctx.statement();
        const frame = this.typeEnv[0];
        const type = this.checkStatements(statements);
        this.dropFrame(frame)

        return type;
    }

    checkStatements(statements: StatementContext[]): Type {
        const items = statements.filter(this.isItem);

        // for now items are all function declaration
        const functionTypes = []
        for (let f of items) {
            functionTypes.push(this.visitWithEnvironment(f, this.typeEnv));
        }
        for (let i = 0; i < items.length; ++i) {
            this.checkFunctionBody(
                this.getFunctionBody(items[i]),
                this.lookupType(this.getFunctionName(items[i]), this.typeEnv).type
            );
        }

        let type: Type = VOID_TYPE;
        const nonItems = statements.filter(x => !this.isItem(x));
        for (let s of nonItems) {
            type = this.visitWithEnvironment(s, this.typeEnv);
        }
        return type;
    }

    visitEmptyStatement(_: EmptyStatementContext): Type {
        return VOID_TYPE;
    };

    visitLetStatement(ctx: LetStatementContext): Type {
        let declaredType: Type = new UnknownType();
        if (ctx.type()) {
            declaredType = this.typeContextToType(ctx.type());
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

            if (ctx.type() && (!declaredType.compare(expressionType))) {
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
        this.checkStatements(ctx.statement());

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
            const operator = ctx.getChild(i).getText();
            type2 = this.visitAndCache(ctx.getChild(i + 1));

            // TODO: Cleaner Implementation
            switch (operator) {
                case "+":
                case "-":
                case "*":
                case "/":
                case "%":
                    if (!type1.compare(NUMBER_TYPE) || !type2.compare(NUMBER_TYPE)) {
                        throw new Error(`Operand type not correct for op: ${operator}`)
                    }
                    type1 = NUMBER_TYPE;
                    break;
                case "<":
                case ">":
                case "<=":
                case ">=":
                    if (!type1.compare(NUMBER_TYPE) || !type2.compare(NUMBER_TYPE)) {
                        throw new Error(`Operand type not correct for op: ${operator}`)
                    }
                    type1 = BOOLEAN_TYPE;
                    break;
                case "==":
                case "!=":
                    if (!type1.compare(type2)) {
                        throw new Error(`operand type does not match`)
                    }
                    type1 = BOOLEAN_TYPE;
                    break;
                case "&&":
                case "||":
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

    getFunctionParametersSymbolAndTypes(parameters: FunctionParametersContext): [string[], Type[]] {
        if (parameters === null) {
            return [[], []]
        }
        const functionParams = parameters ? parameters.functionParam() : [];

        const argSymbols: string[] = [];
        const argTypes: Type[] = [];

        for (let p of functionParams) {
            const type: Type = this.typeContextToType(p.type());
            const symbol: string = p.functionParamPattern().getText();
            argSymbols.push(symbol);
            argTypes.push(type);
        }
        return [argSymbols, argTypes];
    }

    visitFunction(ctx: FunctionContext): Type {
        const parameters = ctx.functionParameters();
        const [argSymbols, argTypes] = this.getFunctionParametersSymbolAndTypes(parameters);
        const returnType = ctx.functionReturnType()
            ? this.typeContextToType(ctx.functionReturnType().type())
            : VOID_TYPE
        const functionName = ctx.IDENTIFIER().getText();
        const functionType = new FunctionType(argSymbols, argTypes, returnType);

        if (this.typeEnv[this.typeEnv.length - 1].hasOwnProperty(functionName)) {
            throw new Error(`Redefinition of fn ${functionName}`);
        }

        this.addIdentifierType(functionName, {
            type: functionType,
            is_mutable: false,
            assigned: true,
        })

        return VOID_TYPE;
    }

    visitClosureExpression(ctx: ClosureExpressionContext): Type {
        const parameters = ctx.functionParameters();
        const [argSymbols, argTypes] = this.getFunctionParametersSymbolAndTypes(parameters);
        let returnType: Type;

        if (ctx.expression()) {
            this.returnTypeStack.push(returnType);
            returnType = this.visitWithEnvironment(
                ctx.expression(),
                this.extendTypeEnvironment(
                    argSymbols,
                    argTypes.map(t => {
                        return { type: t, is_mutable: false, assigned: true };
                    }),
                    this.typeEnv
                )
            );
            this.returnTypeStack.pop();
        } else {
            returnType = this.typeContextToType(ctx.type());
        }
        const functionType = new FunctionType(argSymbols, argTypes, returnType);

        if (ctx.blockExpression()) {
            this.checkFunctionBody(ctx.blockExpression(), functionType);
        }
        return functionType;
    }

    checkFunctionBody(ctx: BlockExpressionContext, functionType: FunctionType) {
        this.returnTypeStack.push(functionType.returnType);
        const blockType = this.visitWithEnvironment(
            ctx,
            this.extendTypeEnvironment(
                functionType.argSymbols,
                functionType.args.map(t => {
                    return { type: t, is_mutable: false, assigned: true };
                }),
                this.typeEnv
            )
        )
        if (blockType.compare(functionType.returnType)) {
            // pass type check
        } else if ((ctx.blockBody().expressionWithoutBlock() === null) && new ReturnChecker().visit(ctx)) {
            // pass type check
        } else {
            throw new Error("Function return type mismatch")
        }
        this.returnTypeStack.pop();
    }

    visitReturnExpression(ctx: ReturnExpressionContext): Type {
        const returnType = this.visit(ctx.expression());

        const returnStackLength = this.returnTypeStack.length
        if (returnStackLength === 0) {
            throw new Error("return outside of function");
        }

        const expectedType = this.returnTypeStack[returnStackLength - 1];

        if (expectedType.compare(UNKNOWN_TYPE)) {
            this.returnTypeStack[returnStackLength - 1] = expectedType;
        } else if (!returnType.compare(expectedType)) {
            const expected = expectedType.toString()
            const actual = returnType.toString();
            throw new Error(`Unexpected return type, expected ${expected}, got ${actual}`);
        }

        return VOID_TYPE;
    }

    visitCallExpression(ctx: CallExpressionContext): Type {
        const fun = this.visit(
            ctx.callExpression() || ctx.callExpressionTerminal(),
        );

        if (!(fun instanceof FunctionType)) {
            throw new Error(`Calling a non function ${ctx.getText()}`);
        }

        const args = ctx.callParams() ? ctx.callParams().expression() : [];
        const actualArgTypes = args.map(x => this.visitAndCache(x));
        const expectedArgTypes = fun.args;

        if (actualArgTypes.length !== expectedArgTypes.length) {
            throw new Error(`Mismatched number of arguments: ${ctx.getText()}`);
        }

        for (let i = 0; i < actualArgTypes.length; ++i) {
            if (!actualArgTypes[i].compare(expectedArgTypes[i])) {
                const actual = actualArgTypes[i].toString();
                const expected = expectedArgTypes[i].toString();
                throw new Error(`Mismatched arg type. expected ${expected}, got ${actual}.\n\n${ctx.getText()}`)
            }
        }

        return fun.returnType;
    }

    typeContextToType(typeContext: TypeContext): Type {
        if (typeContext.BASETYPE()) {
            const str = typeContext.BASETYPE().getText();
            switch (str) {
                case "f64":
                    return NUMBER_TYPE;
                case "bool":
                    return BOOLEAN_TYPE;
                default:
                    throw new Error(`Unknown type ${str}`);
            }
        }
      
        const functionTypeContext = typeContext.functionType();
        const functionTypeParam = functionTypeContext.functionTypeParams();
        let argsType = null;
        if (functionTypeParam) {
            argsType = functionTypeParam.type_().map(ctx => this.typeContextToType(ctx));
        } else {
            argsType = [];
        }
      
        const returnType = this.typeContextToType(functionTypeContext.functionReturnType().type())
        return new FunctionType([] , argsType, returnType);
      
      }
}

class ReturnChecker extends AbstractParseTreeVisitor<boolean> implements SimpleLangVisitor<boolean> {
    public constructor() {
        super();
    }
    visitReturnExpression(ctx: ReturnExpressionContext): boolean { return true; }


    visitExpressionStatement(ctx: ExpressionStatementContext): boolean {
        return this.visit(ctx.expressionWithBlock() || ctx.expressionWithoutBlock());
    }

    visitBlockBody(ctx: BlockBodyContext): boolean {
        if (ctx.statement().some(s => this.visit(s))) {
            return true;
        }

        return ctx.expressionWithoutBlock() && this.visit(ctx.expressionWithoutBlock());
    }

    visitBracket(ctx: BracketContext): boolean { return this.visit(ctx.expression()); }

    checkLeftToRightAssociativeBinop(ctx): boolean {
        if (ctx.getChildCount() == 0) {
            return this.visit(ctx.getChild(0));
        } else {
            return false;
        }
    }

    visitIfExpression(ctx: IfExpressionContext): boolean {
        return this.visit(ctx.blockExpression())
            && ctx.ifExpressionAlternative()
            && this.visit(ctx.ifExpressionAlternative());
    }

    visitEmptyStatement(_: EmptyStatementContext): boolean { return false; };
    visitLetStatement(ctx: LetStatementContext): boolean { return false }
    visitNegationExpression(ctx: NegationExpressionContext): boolean { return false; }
    visitLogicalOr(ctx: LogicalOrContext): boolean { return false }
    visitLogicalAnd(ctx: LogicalAndContext): boolean { return false }
    visitComparison(ctx: ComparisonContext): boolean { return false }
    visitAdditionSubstraction(ctx: AdditionSubstractionContext): boolean { return false }
    visitMultiplicationDivision(ctx: MultiplicationDivisionContext): boolean { return false }
    visitPrimitive(ctx: PrimitiveContext): boolean { return false }
    visitAccessIdentifier(ctx: AccessIdentifierContext): boolean { return false }
    visitBlockExpression(ctx: BlockExpressionContext): boolean {
        return this.visit(ctx.blockBody());
    }

    visitPredicateLoopExpression(ctx: PredicateLoopExpressionContext): boolean { return false; }
    visitContinueExpression(ctx: ContinueExpressionContext): boolean { return false; }
    visitBreakExpression(ctx: BreakExpressionContext): boolean { return false; };
    visitAssignmentExpressions(ctx: AssignmentExpressionsContext): boolean { return false; }
    visitDereferenceExpression(ctx: DereferenceExpressionContext): boolean { return false; }
    visitBorrowExpression(ctx: BorrowExpressionContext): boolean { return false; }
    visitFunction(ctx: FunctionContext): boolean { return false; }
    visitClosureExpression(ctx: ClosureExpressionContext): boolean { return false; }
}