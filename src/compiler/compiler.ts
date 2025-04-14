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
} from '../parser/src/SimpleLangParser';
import { SimpleLangVisitor } from '../parser/src/SimpleLangVisitor';
import * as Instructions from "./instruction";
import { Type } from '../typeChecker/Type';

export const VOID = null;

export class CompilerVisitor extends AbstractParseTreeVisitor<void> implements SimpleLangVisitor<void> {
    // Visit a parse tree produced by SimpleLangParser#prog
    public instructionArray: any[];
    private isFirstStatement: boolean;
    private env: string[][];
    private breakStack: any[];
    private continueStack: any[];
    private expectLvalue: boolean;
    private shouldBeTemporary: boolean;
    private typeCache: Map<ParseTree, Type>;

    public constructor(typeCache: Map<ParseTree, Type>) {
        super();
        this.instructionArray = [];
        this.isFirstStatement = true;
        this.env = [[]];
        this.breakStack = [];
        this.continueStack = [];
        this.expectLvalue = false;
        this.typeCache = typeCache;
        this.shouldBeTemporary = true;
    }

    private assignIdentifierPosition(identifier: string): [number, number] {
        // Note: declaration of the same identifier in the same enclosing block shadows
        // the previous declaration 
        const frameIndex = this.env.length - 1;
        let valueIndex: number | null = this.frameValueIndex(frameIndex, identifier);
        if (valueIndex !== null) {
            return [frameIndex, valueIndex];
        }
        const frameLength = (valueIndex = this.env[frameIndex].length);
        this.env[frameIndex][frameLength] = identifier;
        return [frameIndex, valueIndex];
    }

    private getIdentifierPosition(identifier: string): [number, number] {
        let frameIndex: number = this.env.length;
        let valueIndex: number;
        while (frameIndex > 0) {
            --frameIndex;
            if ((valueIndex = this.frameValueIndex(frameIndex, identifier)) !== null) {
                return [frameIndex, valueIndex];
            }
        }
        throw new Error(`Accessing undeclared identifier ${identifier}`)
    }

    private frameValueIndex(frameIndex: number, identifier: string): number | null {
        const frame: string[] = this.env[frameIndex];
        for (let i = 0; i < frame.length; ++i) {
            if (frame[i] === identifier) return i;
        }
        return null;
    }

    private visitWithFlags(ctx: ParseTree, expectLvalue: boolean, shouldBeTemporary: boolean) {
        const oldLvalue = this.expectLvalue;
        const oldTemp = this.shouldBeTemporary;
        this.expectLvalue = expectLvalue;
        this.shouldBeTemporary = shouldBeTemporary;
        
        const result = this.visit(ctx);

        this.expectLvalue = oldLvalue;
        this.shouldBeTemporary = oldTemp;
        
        return result;
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

    compileStatements(statements: StatementContext[]) {
        const items = statements.filter(this.isItem);

        // for now items are all function declaration
        for (let i of items) {
            this.visitWithFlags(i, this.expectLvalue, true);
        }
        const nonItems = statements.filter(x => !this.isItem(x));
        for (let s of nonItems) {
            const shouldBeTemporary = s !== nonItems[nonItems.length - 1];
            this.visitWithFlags(
                s, false, shouldBeTemporary
            );
        }
    }

    visitProg(ctx: ProgContext): void {
        const enterScopeInstr = Instructions.createEnterScope(null)
        this.instructionArray.push(enterScopeInstr)

        const statements: StatementContext[] = ctx.statement();
        this.compileStatements(statements);
        enterScopeInstr.frameSize = this.env[0].length;
        this.instructionArray.push(Instructions.createDone())
    }

    visitStatement(ctx: StatementContext): void {
        if (this.isFirstStatement) {
            this.isFirstStatement = false;
        } else {
            this.instructionArray.push(Instructions.createPop());
        }
        this.visit(ctx.getChild(0));
        this.instructionArray.push(Instructions.createDrop());
    }

    visitEmptyStatement(_: EmptyStatementContext): void { 
        this.instructionArray.push(Instructions.createLDC(VOID, true));
    };

    visitLetStatement(ctx: LetStatementContext): void {
        let identifier = ctx.IDENTIFIER().getText();
        let expression = ctx.expression();

        let [frameIndex, valueIndex] = this.assignIdentifierPosition(identifier);
        if (expression) {
            this.visitWithFlags(expression, false, false);
            this.instructionArray.push(Instructions.createLDA([frameIndex, valueIndex]));
            this.instructionArray.push(Instructions.createAssign());
        }
        this.instructionArray.push(Instructions.createLDC(VOID, this.shouldBeTemporary));
    }

    visitExpressionStatement(ctx: ExpressionStatementContext): void {
        this.visit(ctx.expressionWithBlock() || ctx.expressionWithoutBlock());
    }

    visitNegationExpression(ctx: NegationExpressionContext): void {
        this.visitWithFlags(
            ctx.binopTerminals(), this.expectLvalue, true
        );
        const op = ctx.getChild(0).getText();
        this.instructionArray.push(Instructions.createUnop(op, this.shouldBeTemporary))
    }

    visitDereferenceExpression(ctx: DereferenceExpressionContext): void {
        this.visit(ctx.accessIdentifier() || ctx.dereferenceExpression());
        this.instructionArray.push(Instructions.createDeref());
    }

    visitBorrowExpression(ctx: BorrowExpressionContext): void {
        this.visitWithFlags(ctx.accessIdentifier(), true, this.shouldBeTemporary);
        this.instructionArray.push(Instructions.createBorrow());
    }

    // BINARY OPERATORS
    // operator associativity: https://doc.rust-lang.org/reference/expressions.html
    compileLeftToRightAssociativeBinop(ctx): void {
        const childCount = ctx.getChildCount();
        console.log(ctx.getText());
        console.log(this.shouldBeTemporary);
        
        if (childCount === 1) {
            this.visitWithFlags(
                ctx.getChild(0),
                this.expectLvalue,
                this.shouldBeTemporary
            )
            return;
        }


        this.visitWithFlags(ctx.getChild(0), this.expectLvalue, true);


        for (let i = 1; i < childCount; i += 2) {
            const operator = ctx.getChild(i).getText();
            this.visitWithFlags(ctx.getChild(i + 1), this.expectLvalue, true);
            const shouldBeTemporary = i + 2 === childCount ? this.shouldBeTemporary : true
            this.instructionArray.push(Instructions.createBinop(operator, shouldBeTemporary))
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
        if (ctx.INT()) {
            value = parseInt(ctx.getText())
        } else if (ctx.BOOL()) {
            value = ctx.getText() === 'true';
        } else {
            throw new Error(`unrecognized primitive: ${ctx.getText()}`);
        }

        this.instructionArray.push(Instructions.createLDC(value, this.shouldBeTemporary));
    }

    visitAccessIdentifier(ctx: AccessIdentifierContext): void {
        let identifier: string = ctx.IDENTIFIER().getText();
        let position = this.getIdentifierPosition(identifier);

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
        this.env.push([]);
        this.visit(body);
        const frame = this.env.pop();
        enterScopeInstr.frameSize = frame.length;
        this.instructionArray.push(Instructions.createExitScope());
    }

    visitBlockBody(ctx: BlockBodyContext): void {
        const tmp = this.isFirstStatement;
        this.isFirstStatement = true;
        this.compileStatements(ctx.statement());
        if (!this.isFirstStatement) {
            // At least have 1 non-empty statement
            this.instructionArray.push(Instructions.createPop());
        }
        if (ctx.expressionWithoutBlock()) {
            this.visit(ctx.expressionWithoutBlock());
        } else {
            this.instructionArray.push(Instructions.createLDC(VOID, this.shouldBeTemporary))
        }
        this.isFirstStatement = tmp;
    }

    visitBracket(ctx: BracketContext): void {
        this.visit(ctx.expression())
    }

    visitIfExpression(ctx: IfExpressionContext): void {
        // predicate
        this.visitWithFlags(ctx.expression(), this.expectLvalue, true);

        const jofInstr = Instructions.createJOF(null);
        this.instructionArray.push(jofInstr);

        this.visit(ctx.blockExpression());

        const gotoInstr = Instructions.createGoto(null);
        this.instructionArray.push(gotoInstr);
        jofInstr.address = this.instructionArray.length;

        if (ctx.ifExpressionAlternative()) {
            this.visit(ctx.ifExpressionAlternative());
        } else {
            this.instructionArray.push(Instructions.createLDC(VOID, this.shouldBeTemporary));
        }

        gotoInstr.address = this.instructionArray.length;
    }

    visitPredicateLoopExpression(ctx: PredicateLoopExpressionContext): void {
        const whileLoopAddress = this.instructionArray.length;
        const predicate = ctx.expression();
        const body = ctx.blockExpression();
        this.visitWithFlags(predicate, this.expectLvalue, true);
        const jofInstr = Instructions.createJOF(null);
        this.instructionArray.push(jofInstr);

        // Stores Instruction and the Env depth
        this.breakStack.push([jofInstr, this.env.length]);
        this.continueStack.push([Instructions.createGoto(whileLoopAddress), this.env.length]);

        this.visit(body);

        this.instructionArray.push(Instructions.createPop());
        this.instructionArray.push(Instructions.createGoto(whileLoopAddress));
        jofInstr.address = this.instructionArray.length;

        this.breakStack.pop();
        this.continueStack.pop();

        this.instructionArray.push(Instructions.createLDC(VOID, this.shouldBeTemporary));
    }

    visitBreakExpression(ctx: BreakExpressionContext): void {
        if (this.breakStack.length === 0) {
            throw new Error("Break statement not within a loop");
        }

        const depth = this.env.length - this.breakStack[this.breakStack.length - 1][1];

        for (let i = 0; i < depth; i++) {
            this.instructionArray.push(Instructions.createExitScope());
        }

        this.instructionArray.push(Instructions.createLDC(VOID, this.shouldBeTemporary));
        this.instructionArray.push(this.breakStack[this.breakStack.length - 1][0]);
    }

    visitContinueExpression(ctx: ContinueExpressionContext): void {
        if (this.continueStack.length === 0) {
            throw new Error("Continue statement not within a loop");
        }

        const depth = this.env.length - this.continueStack[this.continueStack.length - 1][1];

        for (let i = 0; i < depth; i++) {
            this.instructionArray.push(Instructions.createExitScope());
        }

        this.instructionArray.push(this.continueStack[this.continueStack.length - 1][0]);

    }

    visitAssignmentExpressions(ctx: AssignmentExpressionsContext): void {
        this.visitWithFlags(ctx.expression(), false, false);
        if (this.typeCache.get(ctx.expression()).copyable()) {
            this.instructionArray.push(Instructions.createCopy());
        }
        this.visitWithFlags(
            ctx.accessIdentifier() || ctx.dereferenceExpression(),
            true,
            false
        )
        this.instructionArray.push(Instructions.createAssign());
        this.instructionArray.push(Instructions.createLDC(VOID, this.shouldBeTemporary));
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

        // TODO: Compiling type annotation not yet implemented
        this.env.push([]);
        if (parameters) {
            parameters.functionParam().map(param => this.visit(param)); // will visitFunctionParam()
        }

        if (ctx.expression()) {
            this.visit(ctx.expression());
        } else {
            // TODO: Handle return type
            this.visit(ctx.blockExpression());
        }
        this.env.pop();
        this.instructionArray.push(Instructions.createReset());
        gotoInstr.address = this.instructionArray.length;

    }

    visitFunction(ctx: FunctionContext): void {
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

        // TODO: Compiling type annotation not yet implemented
        this.env.push([]);
        if (parameters) {
            parameters.functionParam().map(param => this.visit(param)); // will visitFunctionParam()
        }
        this.visit(ctx.blockExpression());
        this.instructionArray.push(Instructions.createReset());
        this.env.pop();

        gotoInstr.address = this.instructionArray.length;

        // Save name of function
        let identifier = ctx.IDENTIFIER().getText();
        let [frameIndex, valueIndex] = this.assignIdentifierPosition(identifier);
        this.instructionArray.push(Instructions.createLDA([frameIndex, valueIndex]));
        this.instructionArray.push(Instructions.createAssign());
        this.instructionArray.push(Instructions.createPop());
    }

    visitFunctionParam(ctx: FunctionParamContext): void {
        // Assign the function parameter to the environment
        // if (ctx.TYPE()) {
        //     throw new Error("Compiling type annotation not yet implemented");
        // }
        let identifier = ctx.functionParamPattern().IDENTIFIER().getText();
        let [frameIndex, valueIndex] = this.assignIdentifierPosition(identifier);

    }

    visitCallExpression(ctx: CallExpressionContext): void { // Call Expression
        this.visitWithFlags(
            ctx.callExpression() || ctx.callExpressionTerminal(),
            true,
            this.shouldBeTemporary
        );


        if (ctx.callParams() == null) {
            this.instructionArray.push(Instructions.createCall(0, this.shouldBeTemporary));
        } else {
            const args = ctx.callParams().expression();
            for (const arg of args) {
                this.visit(arg);
            }

            this.instructionArray.push(Instructions.createCall(args.length, this.shouldBeTemporary));
        }

    }

    visitReturnExpression(ctx: ReturnExpressionContext): void {
        // TODO: Check if return expression outside function
        this.visit(ctx.expression());
        this.instructionArray.push(Instructions.createReset());
    }
}