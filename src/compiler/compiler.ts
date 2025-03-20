import { AbstractParseTreeVisitor } from 'antlr4ng';
import { ExpressionContext, ProgContext } from '../parser/src/SimpleLangParser';
import { SimpleLangVisitor } from '../parser/src/SimpleLangVisitor';

export class CompilerVisitor extends AbstractParseTreeVisitor<void> implements SimpleLangVisitor<void> {
    // Visit a parse tree produced by SimpleLangParser#prog
    public instructionArray: any[];

    public constructor() {
        super();
        this.instructionArray = [];
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
        this.visit(ctx.expression());
        this.instructionArray.push({
            tag: "DONE"
        })
    }

    // Visit a parse tree produced by SimpleLangParser#expression
    visitExpression(ctx: ExpressionContext): void {
        if (ctx.getChildCount() === 1) {
            // INT case
            this.compileLiteral(parseInt(ctx.getText()));
            return;
        } else if (ctx.getChildCount() === 3) {
            if (ctx.getChild(0).getText() === '(' && ctx.getChild(2).getText() === ')') {
                // Parenthesized expression
                this.visit(ctx.getChild(1) as ExpressionContext);
                return;
            } else {
                // Binary operation
                const arg1 = ctx.getChild(0) as ExpressionContext;
                const arg2 = ctx.getChild(2) as ExpressionContext;
                const op = ctx.getChild(1).getText();
                this.compileBinop(op, arg1, arg2)
                return;
            }
        }

        throw new Error(`Invalid expression: ${ctx.getText()}`);
    }
}