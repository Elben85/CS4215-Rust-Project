import { AbstractParseTreeVisitor } from 'antlr4ng';
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
} from '../parser/src/SimpleLangParser';
import { SimpleLangVisitor } from '../parser/src/SimpleLangVisitor';
import * as Instructions from "./instruction";

export const VOID = null;

// interface identifierInformation =

export class CompilerVisitor extends AbstractParseTreeVisitor<void> implements SimpleLangVisitor<void> {
    // Visit a parse tree produced by SimpleLangParser#prog
    public instructionArray: any[];
    private isFirstStatement: boolean;
    private env: string[][];
    private breakStack: any[];
    private continueStack: any[];
    private expectLvalue: boolean;

    public constructor() {
        super();
        this.instructionArray = [];
        this.isFirstStatement = true;
        this.env = [[]];
        this.breakStack = [];
        this.continueStack = [];
        this.expectLvalue = false;
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

    visitProg(ctx: ProgContext): void {
        const enterScopeInstr = Instructions.createEnterScope(null)
        this.instructionArray.push(enterScopeInstr)

        const statements: StatementContext[] = ctx.statement();

        for (let s of statements) {
            this.visit(s);
        }
        enterScopeInstr.frameSize = this.env[0].length;
        this.instructionArray.push(Instructions.createDone())
    }

    visitEmptyStatement(_: EmptyStatementContext): void { };

    visitLetStatement(ctx: LetStatementContext): void {
        if (ctx.TYPE()) {
            throw new Error("Compiling type annotation not yet implemented");
        }
        let identifier = ctx.IDENTIFIER().getText();
        let expression = ctx.expression();

        let [frameIndex, valueIndex] = this.assignIdentifierPosition(identifier);
        if (expression === null) {
            return;
        }
        this.visit(expression);
        this.instructionArray.push(Instructions.createLDA([frameIndex, valueIndex]));
        this.instructionArray.push(Instructions.createAssign());
        this.instructionArray.push(Instructions.createPop());
    }

    visitExpressionStatement(ctx: ExpressionStatementContext): void {
        if (this.isFirstStatement) {
            this.isFirstStatement = false;
        } else {
            this.instructionArray.push(Instructions.createPop());
        }
        this.visit(ctx.expressionWithBlock() || ctx.expressionWithoutBlock());
    }

    visitNegationExpression(ctx: NegationExpressionContext): void {
        this.visit(ctx.binopTerminals());
        const op = ctx.getChild(0).getText();
        this.instructionArray.push(Instructions.createUnop(op))
    }

    visitDereferenceExpression(ctx: DereferenceExpressionContext): void {
        if (ctx.accessIdentifier()) {
            this.visit(ctx.accessIdentifier());
        } else {
            this.visit(ctx.dereferenceExpression());
        }
        this.instructionArray.push(Instructions.createDeref());
    }

    visitBorrowExpression(ctx: BorrowExpressionContext): void {
        const tmp = this.expectLvalue;
        this.expectLvalue = true;
        this.visit(ctx.accessIdentifier());
        this.expectLvalue = tmp;
        this.instructionArray.push(Instructions.createBorrow());
    }

    // BINARY OPERATORS
    // operator associativity: https://doc.rust-lang.org/reference/expressions.html
    compileLeftToRightAssociativeBinop(ctx): void {
        const childCount = ctx.getChildCount();
        this.visit(ctx.getChild(0));

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
        if (ctx.INT()) {
            value = parseInt(ctx.getText())
        } else if (ctx.BOOL()) {
            value = ctx.getText() === 'true';
        } else {
            throw new Error(`unrecognized primitive: ${ctx.getText()}`);
        }

        this.instructionArray.push(Instructions.createLDC(value));
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
        for (let s of ctx.statement()) {
            this.visit(s);
        }
        if (!this.isFirstStatement) {
            // At least have 1 non-empty statement
            this.instructionArray.push(Instructions.createPop());
        }
        if (ctx.expressionWithoutBlock()) {
            this.visit(ctx.expressionWithoutBlock());
        } else {
            this.instructionArray.push(Instructions.createLDC(VOID))
        }
        this.isFirstStatement = tmp;
    }

    visitBracket(ctx: BracketContext): void {
        this.visit(ctx.expression())
    }

    visitIfExpression(ctx: IfExpressionContext): void {
        this.visit(ctx.expression())

        const jofInstr = Instructions.createJOF(null);
        this.instructionArray.push(jofInstr);

        this.visit(ctx.blockExpression());

        const gotoInstr = Instructions.createGoto(null);
        this.instructionArray.push(gotoInstr);
        jofInstr.address = this.instructionArray.length;

        if (ctx.ifExpressionAlternative()) {
            this.visit(ctx.ifExpressionAlternative());
        } else {
            this.instructionArray.push(Instructions.createLDC(VOID));
        }

        gotoInstr.address = this.instructionArray.length;
    }

    visitPredicateLoopExpression(ctx: PredicateLoopExpressionContext): void {
        const whileLoopAddress = this.instructionArray.length;
        const predicate = ctx.expression();
        const body = ctx.blockExpression();
        this.visit(predicate);
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

        this.instructionArray.push(Instructions.createLDC(VOID));
    }

    visitBreakExpression(ctx: BreakExpressionContext): void {
        if (this.breakStack.length === 0) {
            throw new Error("Break statement not within a loop");
        }

        const depth = this.env.length - this.breakStack[this.breakStack.length - 1][1];

        for (let i = 0; i < depth; i++) {
            this.instructionArray.push(Instructions.createExitScope());
        }

        this.instructionArray.push(Instructions.createLDC(VOID));
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
        this.visit(ctx.expression());
        const tmp = this.expectLvalue;
        this.expectLvalue = true;
        this.visit(ctx.accessIdentifier() || ctx.dereferenceExpression());
        this.expectLvalue = tmp;
        this.instructionArray.push(Instructions.createAssign());
    }
}