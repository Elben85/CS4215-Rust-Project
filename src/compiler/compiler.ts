import { AbstractParseTreeVisitor } from 'antlr4ng';
import { ExpressionContext, ProgContext, StatementContext } from '../parser/src/SimpleLangParser';
import { SimpleLangVisitor } from '../parser/src/SimpleLangVisitor';

export class CompilerVisitor extends AbstractParseTreeVisitor<void> implements SimpleLangVisitor<void> {
    // Visit a parse tree produced by SimpleLangParser#prog
    public instructionArray: any[];
    private isFirstStatement: boolean;

    public constructor() {
        super();
        this.instructionArray = [];
        this.isFirstStatement = true;
    }

    public compileLiteral(literal: any) {
        this.instructionArray.push({
            tag: "LDC",
            value: literal
        });
    }

    public compileBinop(operator: any, arg1: ExpressionContext, arg2: ExpressionContext) {
        this.visitExpression(arg1);
        this.visitExpression(arg2);
        this.instructionArray.push({
            tag: "BINOP",
            op: operator
        });
    }

    visitProg(ctx: ProgContext): void {
        if (ctx.EOF() !== null) {
            this.instructionArray.push({
                tag: "DONE"
            })
            return;
        }

        this.visit(ctx.statement());
        this.visit(ctx.prog());
    }

    visitStatement(ctx: StatementContext): void {
        if (this.isFirstStatement) {
            this.isFirstStatement = false;
        } else {
            this.instructionArray.push({
                tag: "POP"
            });
        }
        this.visitExpression(ctx.expression());
    }

    // Visit a parse tree produced by SimpleLangParser#expression
    visitExpression(ctx: ExpressionContext): void {
        if (ctx.getChildCount() === 1) {
            const text = ctx.getText();
            if (text === 'true') {
                this.compileLiteral(true);
            } else if (text === 'false') {
                this.compileLiteral(false);
            } else {
                // INT case
                this.compileLiteral(parseInt(ctx.getText()));
            }
            return;
        } else if (ctx.getChildCount() === 3) {
            if (ctx.getChild(0).getText() === '(' && ctx.getChild(2).getText() === ')') {
                // Parenthesized expression
                this.visit(ctx.getChild(1) as ExpressionContext);
            } else {
                // Binary operation
                const arg1 = ctx.getChild(0) as ExpressionContext;
                const arg2 = ctx.getChild(2) as ExpressionContext;
                const op = ctx.getChild(1).getText();
                this.compileBinop(op, arg1, arg2)
            }
        } else {
            throw new Error(`Invalid expression: ${ctx.getText()}`);
        }
    }
}