// Generated from src/SimpleLang.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgContext } from "./SimpleLangParser.js";
import { MutableContext } from "./SimpleLangParser.js";
import { StatementContext } from "./SimpleLangParser.js";
import { EmptyStatementContext } from "./SimpleLangParser.js";
import { LetStatementContext } from "./SimpleLangParser.js";
import { ExpressionStatementContext } from "./SimpleLangParser.js";
import { ExpressionContext } from "./SimpleLangParser.js";
import { ExpressionWithoutBlockContext } from "./SimpleLangParser.js";
import { PrimaryContext } from "./SimpleLangParser.js";
import { UnopContext } from "./SimpleLangParser.js";
import { BinopTerminalsContext } from "./SimpleLangParser.js";
import { BinopContext } from "./SimpleLangParser.js";
import { LogicalOrContext } from "./SimpleLangParser.js";
import { LogicalAndContext } from "./SimpleLangParser.js";
import { ComparisonContext } from "./SimpleLangParser.js";
import { AdditionSubstractionContext } from "./SimpleLangParser.js";
import { MultiplicationDivisionContext } from "./SimpleLangParser.js";
import { PrimitiveContext } from "./SimpleLangParser.js";
import { AccessIdentifierContext } from "./SimpleLangParser.js";
import { BracketContext } from "./SimpleLangParser.js";
import { ExpressionWithBlockContext } from "./SimpleLangParser.js";
import { BlockExpressionContext } from "./SimpleLangParser.js";
import { BlockBodyContext } from "./SimpleLangParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SimpleLangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class SimpleLangVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `SimpleLangParser.prog`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProg?: (ctx: ProgContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.mutable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMutable?: (ctx: MutableContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.emptyStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmptyStatement?: (ctx: EmptyStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.letStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLetStatement?: (ctx: LetStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.expressionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.expressionWithoutBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionWithoutBlock?: (ctx: ExpressionWithoutBlockContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.primary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimary?: (ctx: PrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.unop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnop?: (ctx: UnopContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.binopTerminals`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinopTerminals?: (ctx: BinopTerminalsContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.binop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinop?: (ctx: BinopContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.logicalOr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalOr?: (ctx: LogicalOrContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.logicalAnd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalAnd?: (ctx: LogicalAndContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.comparison`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparison?: (ctx: ComparisonContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.additionSubstraction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdditionSubstraction?: (ctx: AdditionSubstractionContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.multiplicationDivision`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiplicationDivision?: (ctx: MultiplicationDivisionContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.primitive`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimitive?: (ctx: PrimitiveContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.accessIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAccessIdentifier?: (ctx: AccessIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.bracket`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBracket?: (ctx: BracketContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.expressionWithBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionWithBlock?: (ctx: ExpressionWithBlockContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.blockExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlockExpression?: (ctx: BlockExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleLangParser.blockBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlockBody?: (ctx: BlockBodyContext) => Result;
}

