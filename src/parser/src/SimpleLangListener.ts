// Generated from src/SimpleLang.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ProgContext } from "./SimpleLangParser.js";
import { StatementContext } from "./SimpleLangParser.js";
import { PrimitiveContext } from "./SimpleLangParser.js";
import { BracketContext } from "./SimpleLangParser.js";
import { BinopContext } from "./SimpleLangParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SimpleLangParser`.
 */
export class SimpleLangListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `SimpleLangParser.prog`.
     * @param ctx the parse tree
     */
    enterProg?: (ctx: ProgContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.prog`.
     * @param ctx the parse tree
     */
    exitProg?: (ctx: ProgContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by the `primitive`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     */
    enterPrimitive?: (ctx: PrimitiveContext) => void;
    /**
     * Exit a parse tree produced by the `primitive`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     */
    exitPrimitive?: (ctx: PrimitiveContext) => void;
    /**
     * Enter a parse tree produced by the `bracket`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     */
    enterBracket?: (ctx: BracketContext) => void;
    /**
     * Exit a parse tree produced by the `bracket`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     */
    exitBracket?: (ctx: BracketContext) => void;
    /**
     * Enter a parse tree produced by the `Binop`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     */
    enterBinop?: (ctx: BinopContext) => void;
    /**
     * Exit a parse tree produced by the `Binop`
     * labeled alternative in `SimpleLangParser.expression`.
     * @param ctx the parse tree
     */
    exitBinop?: (ctx: BinopContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

