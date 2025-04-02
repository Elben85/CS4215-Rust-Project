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
    UnopContext,
    IfExpressionContext,
    PredicateLoopExpressionContext,
    AssignmentExpressionsContext,
    NegationExpressionContext
} from '../parser/src/SimpleLangParser';
import { SimpleLangVisitor } from '../parser/src/SimpleLangVisitor';
import { stringToType, Type } from './Type';

interface identifierInformation {
    type: Type | string,
    is_mutable: boolean,
    assigned: true
}

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

        let type = Type.Void;
        for (let s of statements) {
            type = this.visitWithEnvironment(s, this.typeEnv);
        }

        return type;
    }

    visitEmptyStatement(_: EmptyStatementContext): Type {
        return Type.Void;
    };

    visitLetStatement(ctx: LetStatementContext): Type {
        let declaredType = null;
        if (ctx.TYPE()) {
            declaredType = stringToType(ctx.TYPE().getText());
        }
        let is_mutable = false;
        if (ctx.mutable()) {
            is_mutable = true;
        }
        let identifier = ctx.IDENTIFIER().getText();
        let expression = ctx.expression();

        let expressionType = Type.Void;
        let assigned = false;

        if (expression) {
            expressionType = this.visit(expression);
            assigned = true;

            if (declaredType === null) {
                declaredType = expressionType;
            } else {
                if (declaredType !== expressionType) {
                    throw new Error(
                        `${ctx.getText()}\nExpected ${declaredType.toString()}, got ${expressionType.toString()}`
                    )
                }
            }
        }

        this.addIdentifierType(identifier, <identifierInformation>{
            type: declaredType,
            is_mutable: is_mutable,
            assigned: assigned
        });

        return Type.Void;
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
                if (type != Type.Number) {
                    throw new Error(`Operand type not correct`)
                }
                return Type.Number
            case '!':
                if (type != Type.Boolean) {
                    throw new Error(`not Boolean type for Bool`)
                }
                return Type.Boolean
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
            return Type.Number
        } else if (ctx.BOOL()) {
            return Type.Boolean
        } else {
            throw new Error(`unrecognized primitive type: ${ctx.getText()}`);
        }
    }

    visitAccessIdentifier(ctx: AccessIdentifierContext): Type {
        let identifier: string = ctx.IDENTIFIER().getText();
        const identifierInfo = this.lookupType(identifier, this.typeEnv);

        if (!identifierInfo.assigned) {
            throw new Error(`Trying to access unassigned variable ${identifier}`)
        }

        const type = identifierInfo.type;

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
        let type = Type.Void
        for (let s of ctx.statement()) {
            this.visit(s);
        }

        if (ctx.expressionWithoutBlock()) {
            // TODO:
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

        let type2 = Type.Void;
        for (let i = 1; i < childCount; i += 2) {
            const operator = this.lookupType(ctx.getChild(i).getText(), this.typeEnv).type;
            type2 = this.visit(ctx.getChild(i + 1));

            // TODO: Cleaner Implementation
            switch (operator) {
                case "binary_arith_type":
                    if ((type1 != Type.Number) || (type2 != Type.Number)) {
                        throw new Error(`Operand type not correct for op: ${operator}`)
                    }
                    type1 = Type.Number
                    break;
                case "number_comparison_type":
                    if ((type1 != Type.Number) || (type2 != Type.Number)) {
                        throw new Error(`Operand type not correct for op: ${operator}`)
                    }
                    type1 = Type.Boolean
                    break;
                case "binary_bool_type":
                    if ((type1 != Type.Boolean) || (type2 != Type.Boolean)) {
                        throw new Error(`not Boolean type for Bool op: ${operator}`)
                    }
                    type1 = Type.Boolean
                    break;
                default:
                    throw new Error(`unrecognized operator type: ${operator}`)
            }
        }

        return type1
    }

    visitIfExpression(ctx: IfExpressionContext): Type {
        const predicateType = this.visit(ctx.expression());

        if (predicateType != Type.Boolean) {
            throw new Error(
                `If expression predicate must be boolean. ${ctx.expression().getText()}`
                + `has type ${predicateType}`
            );
        }

        const blockType1: Type = this.visit(ctx.blockExpression());
        const blockType2: Type = ctx.ifExpressionAlternative()
            ? this.visit(ctx.ifExpressionAlternative())
            : Type.Void;

        if (blockType1 !== blockType2) {
            throw new Error(`An if expression must have the same type in all situations: \n ${ctx.getText()}`);
        }

        return blockType1;
    }

    visitPredicateLoopExpression(ctx: PredicateLoopExpressionContext): Type {
        const predicateType = this.visit(ctx.expression());

        if (predicateType != Type.Boolean) {
            throw new Error(
                `Predicate loop expression predicate must be boolean. ${ctx.expression().getText()}`
                + `has type ${predicateType}`
            );
        }

        const bodyType = this.visit(ctx.blockExpression());

        if (bodyType != Type.Void) {
            throw new Error(`${ctx.getText()}\nexpected block body to be ${Type.Void}, got ${bodyType}`);
        }

        return bodyType;
    }

    visitAssignmentExpressions(ctx: AssignmentExpressionsContext): Type {
        const identifier: string = ctx.accessIdentifier().getText();
        const identifierInfo: identifierInformation = this.lookupType(identifier, this.typeEnv)

        if (identifierInfo.assigned && !identifierInfo.is_mutable) {
            throw new Error(`Trying to reassign to immutable variable: ${identifier}`)
        }

        let identifierType: Type = <Type>identifierInfo.type;
        const expressionType: Type = this.visit(ctx.expression());

        if (identifierType === null) {
            identifierInfo.type = expressionType;
            identifierType = expressionType;
        } else if (identifierType !== expressionType) {
            throw new Error(
                `Incompatible types: trying to assign ${expressionType} to variable`
                + ` ${identifier} of type ${identifierType}`
            );
        }

        return identifierType;
    }
}