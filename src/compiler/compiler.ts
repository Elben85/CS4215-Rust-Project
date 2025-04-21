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
    BreakExpressionContext,
    ContinueExpressionContext,
    NegationExpressionContext,
    DereferenceExpressionContext,
    BorrowExpressionContext,
    FunctionContext,
    FunctionParamContext,
    ReturnExpressionContext,
    ClosureExpressionContext,
    CallExpressionContext,
} from '../parser/src/RustParser';
import { RustVisitor } from '../parser/src/RustVisitor';
import * as Instructions from "./instruction";
import { FunctionType, Type } from '../typeChecker/Type';

export const UNIT = null;

class FunctionInfo {
    public constructor(
        public readonly arity,
        public readonly address,
    ) { }
}

class VarInfo {
    public constructor(
        public readonly sym: string,
        public position: number | null,
        public functionInfo: FunctionInfo | null // only for compile time functions
    ) { }
}

class Frame {
    private variables: { [key: string]: VarInfo };
    private dynamicVariableCount: number;

    public constructor() {
        this.variables = {}
        this.dynamicVariableCount = 0;
    }

    public getAndIncrementCount(): number {
        return this.dynamicVariableCount++;
    }

    public findIdentifierInfo(identifier: string): VarInfo | null {
        return identifier in this.variables ? this.variables[identifier] : null;
    }

    public addIdentifier(identifier: string, dynamic: boolean = true): VarInfo {
        const info: VarInfo = this.findIdentifierInfo(identifier) || new VarInfo(identifier, null, null);
        info.functionInfo = null; //reset info
        if (dynamic && (info.position === null)) {
            info.position = this.getAndIncrementCount();
        }
        this.variables[identifier] = info;

        return info
    }

    public length() {
        return this.dynamicVariableCount;
    }
}

export class CompilerVisitor extends AbstractParseTreeVisitor<void> implements RustVisitor<void> {
    // Visit a parse tree produced by RustParser#prog
    public instructionArray: any[];
    private isFirstStatement: boolean;
    private env: Frame[];
    private breakStack: any[];
    private continueStack: any[];
    private functionCtxStack: (FunctionContext | ClosureExpressionContext)[];
    private expectLvalue: boolean;
    private typeCache: Map<ParseTree, Type>;
    private isCompilingFunctionBody: boolean;
    private temporaryFunctionPlaceholders: any[];

    public constructor(typeCache: Map<ParseTree, Type>) {
        super();
        this.instructionArray = [];
        this.isFirstStatement = true;
        this.env = [new Frame()];
        this.breakStack = [];
        this.continueStack = [];
        this.expectLvalue = false;
        this.typeCache = typeCache;
        this.temporaryFunctionPlaceholders = [];
        this.functionCtxStack = [];
    }

    private assignIdentifierPosition(identifier: string): [number, number] {
        // Note: declaration of the same identifier in the same enclosing block shadows
        // the previous declaration 
        const frameIndex = this.env.length - 1;
        const info = this.env[frameIndex].addIdentifier(identifier);
        return [frameIndex, info.position];
    }

    private getIdentifierInfo(identifier: string): [number, VarInfo] {
        let frameIndex: number = this.env.length;
        let varInfo: VarInfo;
        while (frameIndex > 0) {
            --frameIndex;
            if ((varInfo = this.env[frameIndex].findIdentifierInfo(identifier)) !== null) {
                return [frameIndex, varInfo];
            }
        }
        throw new Error(`Accessing undeclared identifier ${identifier}`)
    }

    private getFunctionInfo(identifier: string): FunctionInfo | null {
        const [_, varInfo] = this.getIdentifierInfo(identifier);
        return varInfo.functionInfo;
    }

    private visitWithFlags(ctx: ParseTree, expectLvalue: boolean, isCompilingFunctionBody: boolean) {
        const oldLvalue = this.expectLvalue;
        const oldCompilingFlag = this.isCompilingFunctionBody;
        this.expectLvalue = expectLvalue;
        this.isCompilingFunctionBody = isCompilingFunctionBody;

        const result = this.visit(ctx);

        this.expectLvalue = oldLvalue;
        this.isCompilingFunctionBody = oldCompilingFlag;
        return result;
    }

    private isItem(ctx: StatementContext): boolean {
        return ctx.item() !== null;
    }

    compileStatements(statements: StatementContext[]) {
        const items = statements.filter(this.isItem);


        const placeholder = this.temporaryFunctionPlaceholders
        this.temporaryFunctionPlaceholders = [];
        // for now items are all function declaration
        for (let i of items) {
            this.visit(i);
        }

        const unresolved = [];
        for (let instr of this.temporaryFunctionPlaceholders) {
            const sym: string = instr.sym;
            const idx: number = instr.idx;
            let functionInfo
            try {
                functionInfo = this.getFunctionInfo(sym);
            } catch (e) {
                unresolved.push(instr);
                continue;
            }
            if (functionInfo === null) {
                throw new Error("fn not allowed to capture dynamic environment");
            }
            this.instructionArray[idx] = Instructions.createLDF(
                functionInfo.arity,
                functionInfo.address,
                true
            )
        }
        this.temporaryFunctionPlaceholders = [...placeholder, ...unresolved];

        const nonItems = statements.filter(x => !this.isItem(x));
        for (let s of nonItems) {
            this.visitWithFlags(s, false, this.isCompilingFunctionBody);
        }
    }

    visitProg(ctx: ProgContext): void {
        const enterScopeInstr = Instructions.createEnterScope(null)
        this.instructionArray.push(enterScopeInstr)

        const statements: StatementContext[] = ctx.statement();
        this.compileStatements(statements);

        if (this.temporaryFunctionPlaceholders.length > 0) {
            const unresolvedName = this.temporaryFunctionPlaceholders.pop().sym;
            throw new Error(`unresolved name: ${unresolvedName}`)
        }

        enterScopeInstr.frameSize = this.env[0].length();
        this.instructionArray.push(Instructions.createDone())
    }

    visitStatement(ctx: StatementContext): void {
        if (this.isFirstStatement) {
            this.isFirstStatement = false;
        } else {
            this.instructionArray.push(Instructions.createPop());
        }
        this.visit(ctx.getChild(0));
    }

    visitEmptyStatement(_: EmptyStatementContext): void {
        this.instructionArray.push(Instructions.createLDC(UNIT));
    };

    visitLetStatement(ctx: LetStatementContext): void {
        let identifier = ctx.IDENTIFIER().getText();
        let expression = ctx.expression();

        let [frameIndex, valueIndex] = this.assignIdentifierPosition(identifier);
        if (expression) {
            this.visitWithFlags(expression, false, this.isCompilingFunctionBody);
            this.instructionArray.push(Instructions.createLDA([frameIndex, valueIndex]));
            this.instructionArray.push(Instructions.createAssign());
        }
        this.instructionArray.push(Instructions.createLDC(UNIT));
    }

    visitExpressionStatement(ctx: ExpressionStatementContext): void {
        this.visit(ctx.expressionWithBlock() || ctx.expressionWithoutBlock());
    }

    visitNegationExpression(ctx: NegationExpressionContext): void {
        this.visit(ctx.binopTerminals());
        const op = ctx.getChild(0).getText();
        this.instructionArray.push(Instructions.createUnop(op))
    }

    visitDereferenceExpression(ctx: DereferenceExpressionContext): void {
        this.visit(ctx.accessIdentifier() || ctx.dereferenceExpression());
        this.instructionArray.push(Instructions.createDeref());
    }

    visitBorrowExpression(ctx: BorrowExpressionContext): void {
        this.visitWithFlags(ctx.accessIdentifier(), true, this.isCompilingFunctionBody);
        this.instructionArray.push(Instructions.createBorrow());
    }

    // BINARY OPERATORS
    // operator associativity: https://doc.rust-lang.org/reference/expressions.html
    compileLeftToRightAssociativeBinop(ctx): void {
        const childCount = ctx.getChildCount();

        if (childCount === 1) {
            this.visitWithFlags(
                ctx.getChild(0),
                this.expectLvalue,
                this.isCompilingFunctionBody
            )
            return;
        }

        this.visitWithFlags(ctx.getChild(0), this.expectLvalue, this.isCompilingFunctionBody);

        for (let i = 1; i < childCount; i += 2) {
            const operator = ctx.getChild(i).getText();
            this.visit(ctx.getChild(i + 1));
            this.instructionArray.push(Instructions.createBinop(operator))
        }
    }

    visitLogicalOr(ctx: LogicalOrContext) { this.compileLeftToRightAssociativeBinop(ctx) };
    visitLogicalAnd(ctx: LogicalAndContext) { this.compileLeftToRightAssociativeBinop(ctx); };
    visitComparison(ctx: ComparisonContext) { this.compileLeftToRightAssociativeBinop(ctx); };
    visitAdditionSubstraction(ctx: AdditionSubstractionContext) {
        this.compileLeftToRightAssociativeBinop(ctx);
    };
    visitMultiplicationDivision(ctx: MultiplicationDivisionContext) {
        this.compileLeftToRightAssociativeBinop(ctx);
    };

    visitPrimitive(ctx: PrimitiveContext): void {
        let value: any;
        if (ctx.FLOAT()) {
            value = parseFloat(ctx.getText())
        } else if (ctx.BOOL()) {
            value = ctx.getText() === 'true';
        } else if (ctx.STRING()) {
            value = ctx.STRING().getText();
            value = value.substring(1, value.length - 1);
        } else {
            throw new Error(`unrecognized primitive: ${ctx.getText()}`);
        }

        this.instructionArray.push(Instructions.createLDC(value));
    }

    visitAccessIdentifier(ctx: AccessIdentifierContext): void {
        let identifier: string = ctx.IDENTIFIER().getText();
        let frameIdx: number;
        let info: VarInfo;
        try {
            [frameIdx, info] = this.getIdentifierInfo(identifier);
        } catch (e) {
            if (!this.isCompilingFunctionBody) throw e;

            // assume it's a function placeholder
            const placeholder = Instructions.createFunctionPlaceholder(
                this.instructionArray.length,
                identifier
            )
            this.instructionArray.push(placeholder);
            this.temporaryFunctionPlaceholders.push(placeholder);
            return;
        }

        if (info.functionInfo) {
            this.instructionArray.push(Instructions.createLDF(
                info.functionInfo.arity,
                info.functionInfo.address,
                true
            ))
            return;
        }

        const position: [number, number] = [frameIdx, info.position];
        if (this.expectLvalue) {
            this.instructionArray.push(Instructions.createLDA(position))
        } else {
            this.instructionArray.push(Instructions.createLD(position))
        }
    }

    visitBlockExpression(ctx: BlockExpressionContext): void {
        const enterScopeInstr = Instructions.createEnterScope(null);
        this.instructionArray.push(enterScopeInstr)
        let body = ctx.blockBody();
        this.env.push(new Frame());
        this.visit(body);
        const frame = this.env.pop();
        enterScopeInstr.frameSize = frame.length();
        this.instructionArray.push(Instructions.createExitScope());
    }

    visitBlockBody(ctx: BlockBodyContext): void {
        const tmp = this.isFirstStatement;
        this.isFirstStatement = true;
        this.compileStatements(ctx.statement());
        if (!this.isFirstStatement) {
            this.instructionArray.push(Instructions.createPop());
        }
        if (ctx.expressionWithoutBlock()) {
            this.visit(ctx.expressionWithoutBlock());
            if (this.typeCache.get(ctx.expressionWithoutBlock()).copyable()) {
                this.instructionArray.push(Instructions.createCopy());
            }
        } else {
            this.instructionArray.push(Instructions.createLDC(UNIT))
        }
        this.isFirstStatement = tmp;
    }

    visitBracket(ctx: BracketContext): void {
        this.visit(ctx.expression())
    }

    visitIfExpression(ctx: IfExpressionContext): void {
        // predicate
        this.visitWithFlags(ctx.expression(), false, this.isCompilingFunctionBody);

        const jofInstr = Instructions.createJOF(null);
        this.instructionArray.push(jofInstr);

        this.visit(ctx.blockExpression());

        const gotoInstr = Instructions.createGoto(null);
        this.instructionArray.push(gotoInstr);
        jofInstr.address = this.instructionArray.length;

        if (ctx.ifExpressionAlternative()) {
            this.visit(ctx.ifExpressionAlternative());
        } else {
            this.instructionArray.push(Instructions.createLDC(UNIT));
        }

        gotoInstr.address = this.instructionArray.length;
    }

    visitPredicateLoopExpression(ctx: PredicateLoopExpressionContext): void {
        const whileLoopAddress = this.instructionArray.length;
        const predicate = ctx.expression();
        const body = ctx.blockExpression();
        this.visitWithFlags(predicate, false, this.isCompilingFunctionBody);
        const jofInstr = Instructions.createJOF(null);
        this.instructionArray.push(jofInstr);

        // Stores Instruction and the Env depth
        const breakGotoInstr = Instructions.createGoto(null);
        this.breakStack.push([breakGotoInstr, this.env.length]);
        this.continueStack.push([Instructions.createGoto(whileLoopAddress), this.env.length]);

        this.visit(body);

        this.instructionArray.push(Instructions.createPop());
        this.instructionArray.push(Instructions.createGoto(whileLoopAddress));
        jofInstr.address = this.instructionArray.length;

        this.breakStack.pop();
        this.continueStack.pop();

        this.instructionArray.push(Instructions.createLDC(UNIT));
        breakGotoInstr.address = this.instructionArray.length;
    }

    visitBreakExpression(ctx: BreakExpressionContext): void {
        if (this.breakStack.length === 0) {
            throw new Error("Break statement not within a loop");
        }

        const depth = this.env.length - this.breakStack[this.breakStack.length - 1][1];

        this.instructionArray.push(Instructions.createLDC(UNIT));
        for (let i = 0; i < depth; i++) {
            this.instructionArray.push(Instructions.createExitScope());
        }

        this.instructionArray.push(this.breakStack[this.breakStack.length - 1][0]);
    }

    visitContinueExpression(ctx: ContinueExpressionContext): void {
        if (this.continueStack.length === 0) {
            throw new Error("Continue statement not within a loop");
        }

        const depth = this.env.length - this.continueStack[this.continueStack.length - 1][1];

        this.instructionArray.push(Instructions.createLDC(UNIT));
        for (let i = 0; i < depth; i++) {
            this.instructionArray.push(Instructions.createExitScope());
        }
        this.instructionArray.push(Instructions.createPop());

        this.instructionArray.push(this.continueStack[this.continueStack.length - 1][0]);

    }

    visitAssignmentExpressions(ctx: AssignmentExpressionsContext): void {
        this.visitWithFlags(ctx.expression(), false, this.isCompilingFunctionBody);
        if (this.typeCache.get(ctx.expression()).copyable()) {
            this.instructionArray.push(Instructions.createCopy());
        }
        this.visitWithFlags(
            ctx.accessIdentifier() || ctx.dereferenceExpression(),
            true,
            this.isCompilingFunctionBody
        )
        this.instructionArray.push(Instructions.createAssign());
        this.instructionArray.push(Instructions.createLDC(UNIT));
    }

    visitClosureExpression(ctx: ClosureExpressionContext): void {
        let arity = 0;
        const parameters = ctx.functionParameters()
        if (parameters) {
            arity = parameters.functionParam().length;
        }
        // add 1 + 1 to address because 'this.instructionArray.length' is LDF
        this.instructionArray.push(Instructions.createLDF(arity, this.instructionArray.length + 1 + 1));

        // Push goto to skip the function body
        const gotoInstr = Instructions.createGoto(null);
        this.instructionArray.push(gotoInstr)

        //setup contexts 
        this.env.push(new Frame());
        this.functionCtxStack.push(ctx);
        const continueStack = this.continueStack;
        const breakStack = this.breakStack;
        this.continueStack = [];
        this.breakStack = [];

        if (parameters) {
            parameters.functionParam().map(param => this.visit(param)); // will visitFunctionParam()
        }
        if (ctx.expression()) {
            this.visit(ctx.expression());
        } else {
            // TODO: Handle return type
            this.visit(ctx.blockExpression());
        }

        if ((<FunctionType>this.typeCache.get(ctx)).returnType.copyable()) {
            this.instructionArray.push(Instructions.createCopy())
        }
        this.instructionArray.push(Instructions.createReset());

        //cleanup contexts
        this.functionCtxStack.pop();
        this.env.pop();
        this.continueStack = continueStack;
        this.breakStack = breakStack;

        gotoInstr.address = this.instructionArray.length;

    }

    visitFunction(ctx: FunctionContext): void {
        let arity = 0;
        const parameters = ctx.functionParameters()
        if (parameters) {
            arity = parameters.functionParam().length;
        }

        let identifier = ctx.IDENTIFIER().getText();
        const functionAddress = this.instructionArray.length + 1;
        this.env[this.env.length - 1].addIdentifier(identifier, false).functionInfo = new FunctionInfo(
            arity, functionAddress
        )

        // Push goto to skip the function body
        const gotoInstr = Instructions.createGoto(null);
        this.instructionArray.push(gotoInstr)

        // setup contexts
        const oldEnv = this.env;
        this.functionCtxStack.push(ctx);
        this.env = [new Frame()];
        const continueStack = this.continueStack;
        const breakStack = this.breakStack;
        this.continueStack = [];
        this.breakStack = [];


        if (parameters) {
            parameters.functionParam().map(param => this.visit(param)); // will visitFunctionParam()
        }
        this.visitWithFlags(
            ctx.blockExpression(),
            this.expectLvalue,
            true
        );

        if ((<FunctionType>this.typeCache.get(ctx)).returnType.copyable()) {
            this.instructionArray.push(Instructions.createCopy())
        }
        this.instructionArray.push(Instructions.createReset());

        //cleanup contexts
        this.functionCtxStack.pop();
        this.env = oldEnv;
        this.continueStack = continueStack;
        this.breakStack = breakStack;

        gotoInstr.address = this.instructionArray.length;
        this.instructionArray.push(Instructions.createLDC(UNIT));
    }

    visitFunctionParam(ctx: FunctionParamContext): void {
        let identifier = ctx.functionParamPattern().IDENTIFIER().getText();
        this.assignIdentifierPosition(identifier);
    }

    visitCallExpression(ctx: CallExpressionContext): void { // Call Expression
        this.visitWithFlags(
            ctx.callExpression() || ctx.callExpressionTerminal(),
            false,
            this.isCompilingFunctionBody
        );


        if (ctx.callParams() == null) {
            this.instructionArray.push(Instructions.createCall(0));
        } else {
            const args = ctx.callParams().expression();
            for (const arg of args) {
                this.visit(arg);
                if (this.typeCache.get(arg).copyable()) {
                    this.instructionArray.push(Instructions.createCopy());
                }
            }

            this.instructionArray.push(Instructions.createCall(args.length));
        }

    }

    visitReturnExpression(ctx: ReturnExpressionContext): void {
        this.visit(ctx.expression());

        const funcCtx = this.functionCtxStack[this.functionCtxStack.length - 1];

        if ((<FunctionType>this.typeCache.get(funcCtx)).returnType.copyable()) {
            this.instructionArray.push(Instructions.createCopy())
        }

        this.instructionArray.push(Instructions.createReset());
    }
}