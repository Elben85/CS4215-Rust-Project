// Generated from src/Rust.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgContext } from "./RustParser.js";
import { MutableContext } from "./RustParser.js";
import { StatementContext } from "./RustParser.js";
import { EmptyStatementContext } from "./RustParser.js";
import { ItemContext } from "./RustParser.js";
import { LetStatementContext } from "./RustParser.js";
import { ExpressionStatementContext } from "./RustParser.js";
import { ExpressionContext } from "./RustParser.js";
import { ExpressionWithoutBlockContext } from "./RustParser.js";
import { PrimaryContext } from "./RustParser.js";
import { CallExpressionContext } from "./RustParser.js";
import { CallExpressionTerminalContext } from "./RustParser.js";
import { UnopContext } from "./RustParser.js";
import { NegationExpressionContext } from "./RustParser.js";
import { DereferenceExpressionContext } from "./RustParser.js";
import { BorrowExpressionContext } from "./RustParser.js";
import { BinopTerminalsContext } from "./RustParser.js";
import { BinopContext } from "./RustParser.js";
import { LogicalOrContext } from "./RustParser.js";
import { LogicalAndContext } from "./RustParser.js";
import { ComparisonContext } from "./RustParser.js";
import { AdditionSubstractionContext } from "./RustParser.js";
import { MultiplicationDivisionContext } from "./RustParser.js";
import { PrimitiveContext } from "./RustParser.js";
import { AccessIdentifierContext } from "./RustParser.js";
import { BracketContext } from "./RustParser.js";
import { AssignmentExpressionsContext } from "./RustParser.js";
import { ExpressionWithBlockContext } from "./RustParser.js";
import { BlockExpressionContext } from "./RustParser.js";
import { BlockBodyContext } from "./RustParser.js";
import { IfExpressionContext } from "./RustParser.js";
import { IfExpressionAlternativeContext } from "./RustParser.js";
import { LoopExpressionContext } from "./RustParser.js";
import { PredicateLoopExpressionContext } from "./RustParser.js";
import { BreakExpressionContext } from "./RustParser.js";
import { ContinueExpressionContext } from "./RustParser.js";
import { ClosureExpressionContext } from "./RustParser.js";
import { FunctionContext } from "./RustParser.js";
import { FunctionParametersContext } from "./RustParser.js";
import { FunctionParamContext } from "./RustParser.js";
import { FunctionParamPatternContext } from "./RustParser.js";
import { FunctionReturnTypeContext } from "./RustParser.js";
import { ReturnExpressionContext } from "./RustParser.js";
import { CallParamsContext } from "./RustParser.js";
import { FunctionTypeContext } from "./RustParser.js";
import { FunctionTypeParamsContext } from "./RustParser.js";
import { TypeContext } from "./RustParser.js";
import { PointerTypeContext } from "./RustParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RustParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class RustVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `RustParser.prog`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProg?: (ctx: ProgContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.mutable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMutable?: (ctx: MutableContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.emptyStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmptyStatement?: (ctx: EmptyStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitItem?: (ctx: ItemContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.letStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLetStatement?: (ctx: LetStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.expressionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.expressionWithoutBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionWithoutBlock?: (ctx: ExpressionWithoutBlockContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.primary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimary?: (ctx: PrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.callExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallExpression?: (ctx: CallExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.callExpressionTerminal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallExpressionTerminal?: (ctx: CallExpressionTerminalContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.unop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnop?: (ctx: UnopContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.negationExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNegationExpression?: (ctx: NegationExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.dereferenceExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDereferenceExpression?: (ctx: DereferenceExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.borrowExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBorrowExpression?: (ctx: BorrowExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.binopTerminals`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinopTerminals?: (ctx: BinopTerminalsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.binop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinop?: (ctx: BinopContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.logicalOr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalOr?: (ctx: LogicalOrContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.logicalAnd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalAnd?: (ctx: LogicalAndContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.comparison`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparison?: (ctx: ComparisonContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.additionSubstraction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdditionSubstraction?: (ctx: AdditionSubstractionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.multiplicationDivision`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiplicationDivision?: (ctx: MultiplicationDivisionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.primitive`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimitive?: (ctx: PrimitiveContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.accessIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAccessIdentifier?: (ctx: AccessIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.bracket`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBracket?: (ctx: BracketContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.assignmentExpressions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignmentExpressions?: (ctx: AssignmentExpressionsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.expressionWithBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionWithBlock?: (ctx: ExpressionWithBlockContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.blockExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlockExpression?: (ctx: BlockExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.blockBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlockBody?: (ctx: BlockBodyContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.ifExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfExpression?: (ctx: IfExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.ifExpressionAlternative`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfExpressionAlternative?: (ctx: IfExpressionAlternativeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.loopExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoopExpression?: (ctx: LoopExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.predicateLoopExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicateLoopExpression?: (ctx: PredicateLoopExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.breakExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBreakExpression?: (ctx: BreakExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.continueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContinueExpression?: (ctx: ContinueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.closureExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClosureExpression?: (ctx: ClosureExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction?: (ctx: FunctionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.functionParameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionParameters?: (ctx: FunctionParametersContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.functionParam`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionParam?: (ctx: FunctionParamContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.functionParamPattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionParamPattern?: (ctx: FunctionParamPatternContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.functionReturnType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionReturnType?: (ctx: FunctionReturnTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.returnExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnExpression?: (ctx: ReturnExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.callParams`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallParams?: (ctx: CallParamsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.functionType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionType?: (ctx: FunctionTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.functionTypeParams`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTypeParams?: (ctx: FunctionTypeParamsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType?: (ctx: TypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.pointerType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPointerType?: (ctx: PointerTypeContext) => Result;
}

