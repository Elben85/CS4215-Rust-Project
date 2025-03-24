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
} from '../parser/src/SimpleLangParser';
import { SimpleLangVisitor } from '../parser/src/SimpleLangVisitor';

export class CompilerVisitor extends AbstractParseTreeVisitor<void> implements SimpleLangVisitor<void> {
    // Visit a parse tree produced by SimpleLangParser#prog
    public instructionArray: any[];
    private isFirstStatement: boolean;
    private env: string[][];

    public constructor() {
        super();
        this.instructionArray = [];
        this.isFirstStatement = true;
        this.env = [[]];
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
        const enterScopeInstr = {
            tag: "ENTER_SCOPE",
            frameSize: null
        }
        this.instructionArray.push(enterScopeInstr)
        this.instructionArray.push({ tag: "POP" })

        const statements: StatementContext[] = ctx.statement();

        for (let s of statements) {
            this.visit(s);
        }
        enterScopeInstr.frameSize = this.env[0].length;
        this.instructionArray.push({ tag: "DONE" })
    }

    visitEmptyStatement(_: EmptyStatementContext): void { };

    visitLetStatement(ctx: LetStatementContext): void {
        if (ctx.TYPE()) {
            throw new Error("Compiling type annotation not yet implemented");
        }
        if (ctx.mutable()) {
            throw new Error("Mutable declaration not yet implemented");
        }
        let identifier = ctx.IDENTIFIER().getText();
        let expression = ctx.expression();

        let [frameIndex, valueIndex] = this.assignIdentifierPosition(identifier);
        if (expression === null) {
            return;
        }
        this.visit(expression);
        this.instructionArray.push({
            tag: "ASSIGN",
            pos: [frameIndex, valueIndex]
        });
    }

    visitExpressionStatement(ctx: ExpressionStatementContext): void {
        if (this.isFirstStatement) {
            this.isFirstStatement = false;
        } else {
            this.instructionArray.push({
                tag: "POP"
            });
        }
        this.visit(ctx.expressionWithBlock() || ctx.expressionWithoutBlock());
    }

    // BINARY OPERATORS
    // operator associativity: https://doc.rust-lang.org/reference/expressions.html
    compileLeftToRightAssociativeBinop(ctx): void {
        const childCount = ctx.getChildCount();
        this.visit(ctx.getChild(0));

        for (let i = 1; i < childCount; i += 2) {
            const operator = ctx.getChild(i).getText();
            this.visit(ctx.getChild(i + 1));
            this.instructionArray.push({
                tag: "BINOP",
                op: operator
            })
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

        this.instructionArray.push({
            tag: "LDC",
            value: value
        });
    }

    visitAccessIdentifier(ctx: AccessIdentifierContext): void {
        let identifier: string = ctx.IDENTIFIER().getText();
        let position = this.getIdentifierPosition(identifier);

        this.instructionArray.push({
            tag: "LD",
            pos: position
        })
    }

    visitBlockExpression(ctx: BlockExpressionContext): void {
        const enterScopeInstr = {
            tag: "ENTER_SCOPE",
            frameSize: null
        }
        this.instructionArray.push(enterScopeInstr)
        let body = ctx.blockBody();
        this.env.push([]);
        this.visit(body);
        const frame = this.env.pop();
        enterScopeInstr.frameSize = frame.length;
        this.instructionArray.push({ tag: "EXIT_SCOPE" });
    }

    visitBlockBody(ctx: BlockBodyContext): void {
        const DEFAULT_VALUE = 0 // TODO: fix this default value
        const tmp = this.isFirstStatement;
        this.isFirstStatement = true;
        for (let s of ctx.statement()) {
            this.visit(s);
        }
        if (!this.isFirstStatement) {
            // At least have 1 non-empty statement
            this.instructionArray.push({ tag: "POP" });
        }
        if (ctx.expressionWithoutBlock()) {
            this.visit(ctx.expressionWithoutBlock());
        } else {
            this.instructionArray.push({
                tag: "LDC",
                value: DEFAULT_VALUE
            })
        }
        this.isFirstStatement = tmp;
    }

    visitBracket(ctx: BracketContext): void {
        this.visit(ctx.expression())
    }
}