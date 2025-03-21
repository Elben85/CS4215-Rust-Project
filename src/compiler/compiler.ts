import { AbstractParseTreeVisitor } from 'antlr4ng';
import {
    BinopContext,
    BracketContext,
    ExpressionContext,
    PrimitiveContext,
    ProgContext,
    EmptyStatementContext,
    ExpressionStatementContext,
    StatementContext
} from '../parser/src/SimpleLangParser';
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

    visitProg(ctx: ProgContext): void {
        const statements: StatementContext[] = ctx.statement();

        for (let s of statements) {
            this.visit(s);
        }
        this.instructionArray.push({
            tag: "DONE"
        })
    }

    visitEmptyStatement(ctx: EmptyStatementContext): void { };

    visitExpressionStatement(ctx: ExpressionStatementContext): void {
        if (this.isFirstStatement) {
            this.isFirstStatement = false;
        } else {
            this.instructionArray.push({
                tag: "POP"
            });
        }
        this.visit(ctx.expression());
    }

    visitBinop(ctx: BinopContext): void {
        const arg1 = ctx.getChild(0);
        const arg2 = ctx.getChild(2) as ExpressionContext;
        const operator = ctx.getChild(1).getText();
        this.visit(arg1);
        this.visit(arg2);
        this.instructionArray.push({
            tag: "BINOP",
            op: operator
        });
    }

    visitPrimitive(ctx: PrimitiveContext): void {
        let value: any;
        if (ctx.INT()) {
            value = parseInt(ctx.getText())
        } else if (ctx.BOOL()) {
            value = ctx.getText() === 'true';
        } else {
            throw new Error(`unrecognized primitive: ${ctx.getText()}`);
        }

        this.instructionArray.push({
            tag: "LDC",
            value: value
        });
    }

    visitBracket(ctx: BracketContext): void {
        this.visit(ctx.expression())
    }
}