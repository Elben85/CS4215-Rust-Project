// Generated from src/SimpleLang.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgContext } from "./SimpleLangParser.js";
import { MutableContext } from "./SimpleLangParser.js";
import { EmptyStatementContext } from "./SimpleLangParser.js";
import { LetStatementContext } from "./SimpleLangParser.js";
import { ExpressionStatementContext } from "./SimpleLangParser.js";
import { PrimitiveContext } from "./SimpleLangParser.js";
import { AccessIdentifierContext } from "./SimpleLangParser.js";
import { BracketContext } from "./SimpleLangParser.js";
import { BinopContext } from "./SimpleLangParser.js";


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
     * Visit a parse tree produced by the `EmptyStatement`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmptyStatement?: (ctx: EmptyStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `LetStatement`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLetStatement?: (ctx: LetStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `ExpressionStatement`
     * labeled alternative in `SimpleLangParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `Primitive`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimitive?: (ctx: PrimitiveContext) => Result;
    /**
     * Visit a parse tree produced by the `AccessIdentifier`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAccessIdentifier?: (ctx: AccessIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by the `bracket`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBracket?: (ctx: BracketContext) => Result;
    /**
     * Visit a parse tree produced by the `Binop`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinop?: (ctx: BinopContext) => Result;
}

