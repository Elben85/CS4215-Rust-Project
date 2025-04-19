// Generated from src/SimpleLang.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ProgContext } from "./SimpleLangParser.js";
import { MutableContext } from "./SimpleLangParser.js";
import { StatementContext } from "./SimpleLangParser.js";
import { EmptyStatementContext } from "./SimpleLangParser.js";
import { ItemContext } from "./SimpleLangParser.js";
import { LetStatementContext } from "./SimpleLangParser.js";
import { ExpressionStatementContext } from "./SimpleLangParser.js";
import { ExpressionContext } from "./SimpleLangParser.js";
import { ExpressionWithoutBlockContext } from "./SimpleLangParser.js";
import { PrimaryContext } from "./SimpleLangParser.js";
import { CallExpressionContext } from "./SimpleLangParser.js";
import { CallExpressionTerminalContext } from "./SimpleLangParser.js";
import { UnopContext } from "./SimpleLangParser.js";
import { NegationExpressionContext } from "./SimpleLangParser.js";
import { DereferenceExpressionContext } from "./SimpleLangParser.js";
import { BorrowExpressionContext } from "./SimpleLangParser.js";
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
import { AssignmentExpressionsContext } from "./SimpleLangParser.js";
import { ExpressionWithBlockContext } from "./SimpleLangParser.js";
import { BlockExpressionContext } from "./SimpleLangParser.js";
import { BlockBodyContext } from "./SimpleLangParser.js";
import { IfExpressionContext } from "./SimpleLangParser.js";
import { IfExpressionAlternativeContext } from "./SimpleLangParser.js";
import { LoopExpressionContext } from "./SimpleLangParser.js";
import { PredicateLoopExpressionContext } from "./SimpleLangParser.js";
import { BreakExpressionContext } from "./SimpleLangParser.js";
import { ContinueExpressionContext } from "./SimpleLangParser.js";
import { ClosureExpressionContext } from "./SimpleLangParser.js";
import { FunctionContext } from "./SimpleLangParser.js";
import { FunctionParametersContext } from "./SimpleLangParser.js";
import { FunctionParamContext } from "./SimpleLangParser.js";
import { FunctionParamPatternContext } from "./SimpleLangParser.js";
import { FunctionReturnTypeContext } from "./SimpleLangParser.js";
import { ReturnExpressionContext } from "./SimpleLangParser.js";
import { CallParamsContext } from "./SimpleLangParser.js";
import { FunctionTypeContext } from "./SimpleLangParser.js";
import { FunctionTypeParamsContext } from "./SimpleLangParser.js";
import { TypeContext } from "./SimpleLangParser.js";


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
     * Enter a parse tree produced by `SimpleLangParser.mutable`.
     * @param ctx the parse tree
     */
    enterMutable?: (ctx: MutableContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.mutable`.
     * @param ctx the parse tree
     */
    exitMutable?: (ctx: MutableContext) => void;
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
     * Enter a parse tree produced by `SimpleLangParser.emptyStatement`.
     * @param ctx the parse tree
     */
    enterEmptyStatement?: (ctx: EmptyStatementContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.emptyStatement`.
     * @param ctx the parse tree
     */
    exitEmptyStatement?: (ctx: EmptyStatementContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.item`.
     * @param ctx the parse tree
     */
    enterItem?: (ctx: ItemContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.item`.
     * @param ctx the parse tree
     */
    exitItem?: (ctx: ItemContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.letStatement`.
     * @param ctx the parse tree
     */
    enterLetStatement?: (ctx: LetStatementContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.letStatement`.
     * @param ctx the parse tree
     */
    exitLetStatement?: (ctx: LetStatementContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.expressionStatement`.
     * @param ctx the parse tree
     */
    enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.expressionStatement`.
     * @param ctx the parse tree
     */
    exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.expressionWithoutBlock`.
     * @param ctx the parse tree
     */
    enterExpressionWithoutBlock?: (ctx: ExpressionWithoutBlockContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.expressionWithoutBlock`.
     * @param ctx the parse tree
     */
    exitExpressionWithoutBlock?: (ctx: ExpressionWithoutBlockContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.primary`.
     * @param ctx the parse tree
     */
    enterPrimary?: (ctx: PrimaryContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.primary`.
     * @param ctx the parse tree
     */
    exitPrimary?: (ctx: PrimaryContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.callExpression`.
     * @param ctx the parse tree
     */
    enterCallExpression?: (ctx: CallExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.callExpression`.
     * @param ctx the parse tree
     */
    exitCallExpression?: (ctx: CallExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.callExpressionTerminal`.
     * @param ctx the parse tree
     */
    enterCallExpressionTerminal?: (ctx: CallExpressionTerminalContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.callExpressionTerminal`.
     * @param ctx the parse tree
     */
    exitCallExpressionTerminal?: (ctx: CallExpressionTerminalContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.unop`.
     * @param ctx the parse tree
     */
    enterUnop?: (ctx: UnopContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.unop`.
     * @param ctx the parse tree
     */
    exitUnop?: (ctx: UnopContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.negationExpression`.
     * @param ctx the parse tree
     */
    enterNegationExpression?: (ctx: NegationExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.negationExpression`.
     * @param ctx the parse tree
     */
    exitNegationExpression?: (ctx: NegationExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.dereferenceExpression`.
     * @param ctx the parse tree
     */
    enterDereferenceExpression?: (ctx: DereferenceExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.dereferenceExpression`.
     * @param ctx the parse tree
     */
    exitDereferenceExpression?: (ctx: DereferenceExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.borrowExpression`.
     * @param ctx the parse tree
     */
    enterBorrowExpression?: (ctx: BorrowExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.borrowExpression`.
     * @param ctx the parse tree
     */
    exitBorrowExpression?: (ctx: BorrowExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.binopTerminals`.
     * @param ctx the parse tree
     */
    enterBinopTerminals?: (ctx: BinopTerminalsContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.binopTerminals`.
     * @param ctx the parse tree
     */
    exitBinopTerminals?: (ctx: BinopTerminalsContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.binop`.
     * @param ctx the parse tree
     */
    enterBinop?: (ctx: BinopContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.binop`.
     * @param ctx the parse tree
     */
    exitBinop?: (ctx: BinopContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.logicalOr`.
     * @param ctx the parse tree
     */
    enterLogicalOr?: (ctx: LogicalOrContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.logicalOr`.
     * @param ctx the parse tree
     */
    exitLogicalOr?: (ctx: LogicalOrContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.logicalAnd`.
     * @param ctx the parse tree
     */
    enterLogicalAnd?: (ctx: LogicalAndContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.logicalAnd`.
     * @param ctx the parse tree
     */
    exitLogicalAnd?: (ctx: LogicalAndContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.comparison`.
     * @param ctx the parse tree
     */
    enterComparison?: (ctx: ComparisonContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.comparison`.
     * @param ctx the parse tree
     */
    exitComparison?: (ctx: ComparisonContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.additionSubstraction`.
     * @param ctx the parse tree
     */
    enterAdditionSubstraction?: (ctx: AdditionSubstractionContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.additionSubstraction`.
     * @param ctx the parse tree
     */
    exitAdditionSubstraction?: (ctx: AdditionSubstractionContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.multiplicationDivision`.
     * @param ctx the parse tree
     */
    enterMultiplicationDivision?: (ctx: MultiplicationDivisionContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.multiplicationDivision`.
     * @param ctx the parse tree
     */
    exitMultiplicationDivision?: (ctx: MultiplicationDivisionContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.primitive`.
     * @param ctx the parse tree
     */
    enterPrimitive?: (ctx: PrimitiveContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.primitive`.
     * @param ctx the parse tree
     */
    exitPrimitive?: (ctx: PrimitiveContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.accessIdentifier`.
     * @param ctx the parse tree
     */
    enterAccessIdentifier?: (ctx: AccessIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.accessIdentifier`.
     * @param ctx the parse tree
     */
    exitAccessIdentifier?: (ctx: AccessIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.bracket`.
     * @param ctx the parse tree
     */
    enterBracket?: (ctx: BracketContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.bracket`.
     * @param ctx the parse tree
     */
    exitBracket?: (ctx: BracketContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.assignmentExpressions`.
     * @param ctx the parse tree
     */
    enterAssignmentExpressions?: (ctx: AssignmentExpressionsContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.assignmentExpressions`.
     * @param ctx the parse tree
     */
    exitAssignmentExpressions?: (ctx: AssignmentExpressionsContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.expressionWithBlock`.
     * @param ctx the parse tree
     */
    enterExpressionWithBlock?: (ctx: ExpressionWithBlockContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.expressionWithBlock`.
     * @param ctx the parse tree
     */
    exitExpressionWithBlock?: (ctx: ExpressionWithBlockContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.blockExpression`.
     * @param ctx the parse tree
     */
    enterBlockExpression?: (ctx: BlockExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.blockExpression`.
     * @param ctx the parse tree
     */
    exitBlockExpression?: (ctx: BlockExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.blockBody`.
     * @param ctx the parse tree
     */
    enterBlockBody?: (ctx: BlockBodyContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.blockBody`.
     * @param ctx the parse tree
     */
    exitBlockBody?: (ctx: BlockBodyContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.ifExpression`.
     * @param ctx the parse tree
     */
    enterIfExpression?: (ctx: IfExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.ifExpression`.
     * @param ctx the parse tree
     */
    exitIfExpression?: (ctx: IfExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.ifExpressionAlternative`.
     * @param ctx the parse tree
     */
    enterIfExpressionAlternative?: (ctx: IfExpressionAlternativeContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.ifExpressionAlternative`.
     * @param ctx the parse tree
     */
    exitIfExpressionAlternative?: (ctx: IfExpressionAlternativeContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.loopExpression`.
     * @param ctx the parse tree
     */
    enterLoopExpression?: (ctx: LoopExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.loopExpression`.
     * @param ctx the parse tree
     */
    exitLoopExpression?: (ctx: LoopExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.predicateLoopExpression`.
     * @param ctx the parse tree
     */
    enterPredicateLoopExpression?: (ctx: PredicateLoopExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.predicateLoopExpression`.
     * @param ctx the parse tree
     */
    exitPredicateLoopExpression?: (ctx: PredicateLoopExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.breakExpression`.
     * @param ctx the parse tree
     */
    enterBreakExpression?: (ctx: BreakExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.breakExpression`.
     * @param ctx the parse tree
     */
    exitBreakExpression?: (ctx: BreakExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.continueExpression`.
     * @param ctx the parse tree
     */
    enterContinueExpression?: (ctx: ContinueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.continueExpression`.
     * @param ctx the parse tree
     */
    exitContinueExpression?: (ctx: ContinueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.closureExpression`.
     * @param ctx the parse tree
     */
    enterClosureExpression?: (ctx: ClosureExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.closureExpression`.
     * @param ctx the parse tree
     */
    exitClosureExpression?: (ctx: ClosureExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.function`.
     * @param ctx the parse tree
     */
    enterFunction?: (ctx: FunctionContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.function`.
     * @param ctx the parse tree
     */
    exitFunction?: (ctx: FunctionContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.functionParameters`.
     * @param ctx the parse tree
     */
    enterFunctionParameters?: (ctx: FunctionParametersContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.functionParameters`.
     * @param ctx the parse tree
     */
    exitFunctionParameters?: (ctx: FunctionParametersContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.functionParam`.
     * @param ctx the parse tree
     */
    enterFunctionParam?: (ctx: FunctionParamContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.functionParam`.
     * @param ctx the parse tree
     */
    exitFunctionParam?: (ctx: FunctionParamContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.functionParamPattern`.
     * @param ctx the parse tree
     */
    enterFunctionParamPattern?: (ctx: FunctionParamPatternContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.functionParamPattern`.
     * @param ctx the parse tree
     */
    exitFunctionParamPattern?: (ctx: FunctionParamPatternContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.functionReturnType`.
     * @param ctx the parse tree
     */
    enterFunctionReturnType?: (ctx: FunctionReturnTypeContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.functionReturnType`.
     * @param ctx the parse tree
     */
    exitFunctionReturnType?: (ctx: FunctionReturnTypeContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.returnExpression`.
     * @param ctx the parse tree
     */
    enterReturnExpression?: (ctx: ReturnExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.returnExpression`.
     * @param ctx the parse tree
     */
    exitReturnExpression?: (ctx: ReturnExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.callParams`.
     * @param ctx the parse tree
     */
    enterCallParams?: (ctx: CallParamsContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.callParams`.
     * @param ctx the parse tree
     */
    exitCallParams?: (ctx: CallParamsContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.functionType`.
     * @param ctx the parse tree
     */
    enterFunctionType?: (ctx: FunctionTypeContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.functionType`.
     * @param ctx the parse tree
     */
    exitFunctionType?: (ctx: FunctionTypeContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.functionTypeParams`.
     * @param ctx the parse tree
     */
    enterFunctionTypeParams?: (ctx: FunctionTypeParamsContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.functionTypeParams`.
     * @param ctx the parse tree
     */
    exitFunctionTypeParams?: (ctx: FunctionTypeParamsContext) => void;
    /**
     * Enter a parse tree produced by `SimpleLangParser.type`.
     * @param ctx the parse tree
     */
    enterType?: (ctx: TypeContext) => void;
    /**
     * Exit a parse tree produced by `SimpleLangParser.type`.
     * @param ctx the parse tree
     */
    exitType?: (ctx: TypeContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

