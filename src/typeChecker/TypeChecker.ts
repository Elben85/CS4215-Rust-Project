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
import { Type } from './Type';


export class TypeChecker extends AbstractParseTreeVisitor<Type> implements SimpleLangVisitor<Type> {
    private typeEnv: any[];
    private isFirstStatement: boolean;

    public constructor() {
        super();
        this.typeEnv = [];
        this.isFirstStatement = true;
    }


    // TYPE ENV
    private emptyTypeEnvironment = null;

    private globalTypeFrame = { 
        // TODO: Use Better Implementation
        "+": "binary_arith_type",
        "-": "binary_arith_type",
        "*": "binary_arith_type",
        "/": "binary_arith_type",
        "<": "number_comparison_type",
        ">": "number_comparison_type",
        "<=": "number_comparison_type",
        ">=": "number_comparison_type",
        "&&": "binary_bool_type",
        "||": "binary_bool_type"
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

    addIdentifierType(x: string, type: Type) {
        const frame = this.typeEnv.pop();

        if (!frame) {
            throw new Error(`Add Identifier ${x} Fail, frame is Null`);
        }

        frame[x] = type;
        this.typeEnv.push(frame);
    }

    extendTypeEnvironment(xs: string[], ts: any[], te: any[]) {
        if (ts.length > xs.length) throw new Error('too few parameters in declaration');
        if (ts.length < xs.length) throw new Error('too many parameters in declaration');

        const newFrame: { [key: string]: any } = {};
        for (let i = 0; i < xs.length; i++) {
            newFrame[xs[i]] = ts[i];
        }

        te.push(newFrame);
        return te;
    };

    private visitWithEnvironment(ctx: any, env: any[]): Type {
        const currentEnv = this.typeEnv;

        this.typeEnv = env;
        const result = this.visit(ctx);

        this.typeEnv = currentEnv;
        return result;
    }

    checkType(ctx: ProgContext) {
        this.typeEnv = this.globalTypeEnvironment;
        return this.visitWithEnvironment(ctx, this.typeEnv);
    }

    visitProg(ctx: ProgContext): Type {
        const statements: StatementContext[] = ctx.statement();

        let type = Type.Undefined;
        for (let s of statements) {
            type = this.visitWithEnvironment(s, this.typeEnv);
        }

        return type;
    }

    visitEmptyStatement(_: EmptyStatementContext): Type { 
        return Type.Undefined;
    };

    visitLetStatement(ctx: LetStatementContext): Type {
        if (ctx.TYPE()) {
            throw new Error("Compiling type annotation not yet implemented");
        }
        if (ctx.mutable()) {
            throw new Error("Mutable declaration not yet implemented");
        }
        let identifier = ctx.IDENTIFIER().getText();
        let expression = ctx.expression();

        this.addIdentifierType(identifier, Type.Null);
        if (expression === null) {
            return Type.Undefined;
        }
        const type = this.visit(expression);
        this.addIdentifierType(identifier, type);

        return type;
    }

    visitExpressionStatement(ctx: ExpressionStatementContext): Type {
        if (this.isFirstStatement) {
            this.isFirstStatement = false;
        } 

        const type = this.visitWithEnvironment(
            ctx.expressionWithBlock() || ctx.expressionWithoutBlock(), this.typeEnv);

        return type;
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
            return Type.Number
        } else if (ctx.BOOL()) {
            return Type.Boolean
        } else {
            throw new Error(`unrecognized primitive type: ${ctx.getText()}`);
        }
    }

    visitAccessIdentifier(ctx: AccessIdentifierContext): Type {
        let identifier: string = ctx.IDENTIFIER().getText();
        const type = this.lookupType(identifier, this.typeEnv);

        return type;
    }

    visitBlockExpression(ctx: BlockExpressionContext): Type { 
        // Block return the type of the last body statement
        let body = ctx.blockBody();
        const extendedTypeEnv = this.extendTypeEnvironment([], [], [...this.typeEnv]);
        const type = this.visitWithEnvironment(body, extendedTypeEnv);

        return type;
    }

    visitBlockBody(ctx: BlockBodyContext): Type {
        // TODO: Implementation not finished
        const tmp = this.isFirstStatement;
        this.isFirstStatement = true;

        let type = Type.Undefined
        for (let s of ctx.statement()) {
            type = this.visit(s);
        }

        if (ctx.expressionWithoutBlock()) {
            // TODO:
            type = this.visit(ctx.expressionWithoutBlock());
        } 
        
        this.isFirstStatement = tmp;

        return type;
    }

    visitBracket(ctx: BracketContext): Type {
        const type = this.visit(ctx.expression())

        return type;
    }

    checkLeftToRightAssociativeBinop(ctx): Type {
        const childCount = ctx.getChildCount();

        let type1 = this.visit(ctx.getChild(0));

        let type2 = Type.Undefined;
        for (let i = 1; i < childCount; i += 2) {
            const operator = this.lookupType(ctx.getChild(i).getText(), this.typeEnv);
            type2 = this.visit(ctx.getChild(i + 1));

            // TODO: Cleaner Implementation
            if (operator == "binary_arith_type" || operator == "number_comparison_type") {
                if (type2 != Type.Number) {
                    throw new Error(`Operand type not correct`)
                }
            } else if (operator == "binary_bool_type") {
                if (type2 != Type.Boolean) {
                    throw new Error(`not Boolean type for Bool`)
                }
            }
        }

        if (type2 == Type.Undefined) { // temporary fix to handle unop
            return type1
        }

        const firstOperator = this.lookupType(ctx.getChild(1).getText(), this.typeEnv);
        // TODO: Cleaner Implementation
        if (firstOperator == "binary_arith_type" || firstOperator == "binary_bool_type") {
            return type1
        } else if (firstOperator == "number_comparison_type") { 
            return Type.Boolean
        } else {
            throw new Error(`Operand does not match`)
        }
    }
}