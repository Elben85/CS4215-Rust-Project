// Generated from src/Rust.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
 * This interface defines a complete listener for a parse tree produced by
 * `RustParser`.
 */
export class RustListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `RustParser.prog`.
     * @param ctx the parse tree
     */
    enterProg?: (ctx: ProgContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.prog`.
     * @param ctx the parse tree
     */
    exitProg?: (ctx: ProgContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.mutable`.
     * @param ctx the parse tree
     */
    enterMutable?: (ctx: MutableContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.mutable`.
     * @param ctx the parse tree
     */
    exitMutable?: (ctx: MutableContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.emptyStatement`.
     * @param ctx the parse tree
     */
    enterEmptyStatement?: (ctx: EmptyStatementContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.emptyStatement`.
     * @param ctx the parse tree
     */
    exitEmptyStatement?: (ctx: EmptyStatementContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.item`.
     * @param ctx the parse tree
     */
    enterItem?: (ctx: ItemContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.item`.
     * @param ctx the parse tree
     */
    exitItem?: (ctx: ItemContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.letStatement`.
     * @param ctx the parse tree
     */
    enterLetStatement?: (ctx: LetStatementContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.letStatement`.
     * @param ctx the parse tree
     */
    exitLetStatement?: (ctx: LetStatementContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.expressionStatement`.
     * @param ctx the parse tree
     */
    enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.expressionStatement`.
     * @param ctx the parse tree
     */
    exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.expressionWithoutBlock`.
     * @param ctx the parse tree
     */
    enterExpressionWithoutBlock?: (ctx: ExpressionWithoutBlockContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.expressionWithoutBlock`.
     * @param ctx the parse tree
     */
    exitExpressionWithoutBlock?: (ctx: ExpressionWithoutBlockContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.primary`.
     * @param ctx the parse tree
     */
    enterPrimary?: (ctx: PrimaryContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.primary`.
     * @param ctx the parse tree
     */
    exitPrimary?: (ctx: PrimaryContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.callExpression`.
     * @param ctx the parse tree
     */
    enterCallExpression?: (ctx: CallExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.callExpression`.
     * @param ctx the parse tree
     */
    exitCallExpression?: (ctx: CallExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.callExpressionTerminal`.
     * @param ctx the parse tree
     */
    enterCallExpressionTerminal?: (ctx: CallExpressionTerminalContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.callExpressionTerminal`.
     * @param ctx the parse tree
     */
    exitCallExpressionTerminal?: (ctx: CallExpressionTerminalContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.unop`.
     * @param ctx the parse tree
     */
    enterUnop?: (ctx: UnopContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.unop`.
     * @param ctx the parse tree
     */
    exitUnop?: (ctx: UnopContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.negationExpression`.
     * @param ctx the parse tree
     */
    enterNegationExpression?: (ctx: NegationExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.negationExpression`.
     * @param ctx the parse tree
     */
    exitNegationExpression?: (ctx: NegationExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.dereferenceExpression`.
     * @param ctx the parse tree
     */
    enterDereferenceExpression?: (ctx: DereferenceExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.dereferenceExpression`.
     * @param ctx the parse tree
     */
    exitDereferenceExpression?: (ctx: DereferenceExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.borrowExpression`.
     * @param ctx the parse tree
     */
    enterBorrowExpression?: (ctx: BorrowExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.borrowExpression`.
     * @param ctx the parse tree
     */
    exitBorrowExpression?: (ctx: BorrowExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.binopTerminals`.
     * @param ctx the parse tree
     */
    enterBinopTerminals?: (ctx: BinopTerminalsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.binopTerminals`.
     * @param ctx the parse tree
     */
    exitBinopTerminals?: (ctx: BinopTerminalsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.binop`.
     * @param ctx the parse tree
     */
    enterBinop?: (ctx: BinopContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.binop`.
     * @param ctx the parse tree
     */
    exitBinop?: (ctx: BinopContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.logicalOr`.
     * @param ctx the parse tree
     */
    enterLogicalOr?: (ctx: LogicalOrContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.logicalOr`.
     * @param ctx the parse tree
     */
    exitLogicalOr?: (ctx: LogicalOrContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.logicalAnd`.
     * @param ctx the parse tree
     */
    enterLogicalAnd?: (ctx: LogicalAndContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.logicalAnd`.
     * @param ctx the parse tree
     */
    exitLogicalAnd?: (ctx: LogicalAndContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.comparison`.
     * @param ctx the parse tree
     */
    enterComparison?: (ctx: ComparisonContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.comparison`.
     * @param ctx the parse tree
     */
    exitComparison?: (ctx: ComparisonContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.additionSubstraction`.
     * @param ctx the parse tree
     */
    enterAdditionSubstraction?: (ctx: AdditionSubstractionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.additionSubstraction`.
     * @param ctx the parse tree
     */
    exitAdditionSubstraction?: (ctx: AdditionSubstractionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.multiplicationDivision`.
     * @param ctx the parse tree
     */
    enterMultiplicationDivision?: (ctx: MultiplicationDivisionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.multiplicationDivision`.
     * @param ctx the parse tree
     */
    exitMultiplicationDivision?: (ctx: MultiplicationDivisionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.primitive`.
     * @param ctx the parse tree
     */
    enterPrimitive?: (ctx: PrimitiveContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.primitive`.
     * @param ctx the parse tree
     */
    exitPrimitive?: (ctx: PrimitiveContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.accessIdentifier`.
     * @param ctx the parse tree
     */
    enterAccessIdentifier?: (ctx: AccessIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.accessIdentifier`.
     * @param ctx the parse tree
     */
    exitAccessIdentifier?: (ctx: AccessIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.bracket`.
     * @param ctx the parse tree
     */
    enterBracket?: (ctx: BracketContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.bracket`.
     * @param ctx the parse tree
     */
    exitBracket?: (ctx: BracketContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.assignmentExpressions`.
     * @param ctx the parse tree
     */
    enterAssignmentExpressions?: (ctx: AssignmentExpressionsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.assignmentExpressions`.
     * @param ctx the parse tree
     */
    exitAssignmentExpressions?: (ctx: AssignmentExpressionsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.expressionWithBlock`.
     * @param ctx the parse tree
     */
    enterExpressionWithBlock?: (ctx: ExpressionWithBlockContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.expressionWithBlock`.
     * @param ctx the parse tree
     */
    exitExpressionWithBlock?: (ctx: ExpressionWithBlockContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.blockExpression`.
     * @param ctx the parse tree
     */
    enterBlockExpression?: (ctx: BlockExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.blockExpression`.
     * @param ctx the parse tree
     */
    exitBlockExpression?: (ctx: BlockExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.blockBody`.
     * @param ctx the parse tree
     */
    enterBlockBody?: (ctx: BlockBodyContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.blockBody`.
     * @param ctx the parse tree
     */
    exitBlockBody?: (ctx: BlockBodyContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.ifExpression`.
     * @param ctx the parse tree
     */
    enterIfExpression?: (ctx: IfExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.ifExpression`.
     * @param ctx the parse tree
     */
    exitIfExpression?: (ctx: IfExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.ifExpressionAlternative`.
     * @param ctx the parse tree
     */
    enterIfExpressionAlternative?: (ctx: IfExpressionAlternativeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.ifExpressionAlternative`.
     * @param ctx the parse tree
     */
    exitIfExpressionAlternative?: (ctx: IfExpressionAlternativeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.loopExpression`.
     * @param ctx the parse tree
     */
    enterLoopExpression?: (ctx: LoopExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.loopExpression`.
     * @param ctx the parse tree
     */
    exitLoopExpression?: (ctx: LoopExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.predicateLoopExpression`.
     * @param ctx the parse tree
     */
    enterPredicateLoopExpression?: (ctx: PredicateLoopExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.predicateLoopExpression`.
     * @param ctx the parse tree
     */
    exitPredicateLoopExpression?: (ctx: PredicateLoopExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.breakExpression`.
     * @param ctx the parse tree
     */
    enterBreakExpression?: (ctx: BreakExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.breakExpression`.
     * @param ctx the parse tree
     */
    exitBreakExpression?: (ctx: BreakExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.continueExpression`.
     * @param ctx the parse tree
     */
    enterContinueExpression?: (ctx: ContinueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.continueExpression`.
     * @param ctx the parse tree
     */
    exitContinueExpression?: (ctx: ContinueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.closureExpression`.
     * @param ctx the parse tree
     */
    enterClosureExpression?: (ctx: ClosureExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.closureExpression`.
     * @param ctx the parse tree
     */
    exitClosureExpression?: (ctx: ClosureExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.function`.
     * @param ctx the parse tree
     */
    enterFunction?: (ctx: FunctionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.function`.
     * @param ctx the parse tree
     */
    exitFunction?: (ctx: FunctionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.functionParameters`.
     * @param ctx the parse tree
     */
    enterFunctionParameters?: (ctx: FunctionParametersContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.functionParameters`.
     * @param ctx the parse tree
     */
    exitFunctionParameters?: (ctx: FunctionParametersContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.functionParam`.
     * @param ctx the parse tree
     */
    enterFunctionParam?: (ctx: FunctionParamContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.functionParam`.
     * @param ctx the parse tree
     */
    exitFunctionParam?: (ctx: FunctionParamContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.functionParamPattern`.
     * @param ctx the parse tree
     */
    enterFunctionParamPattern?: (ctx: FunctionParamPatternContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.functionParamPattern`.
     * @param ctx the parse tree
     */
    exitFunctionParamPattern?: (ctx: FunctionParamPatternContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.functionReturnType`.
     * @param ctx the parse tree
     */
    enterFunctionReturnType?: (ctx: FunctionReturnTypeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.functionReturnType`.
     * @param ctx the parse tree
     */
    exitFunctionReturnType?: (ctx: FunctionReturnTypeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.returnExpression`.
     * @param ctx the parse tree
     */
    enterReturnExpression?: (ctx: ReturnExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.returnExpression`.
     * @param ctx the parse tree
     */
    exitReturnExpression?: (ctx: ReturnExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.callParams`.
     * @param ctx the parse tree
     */
    enterCallParams?: (ctx: CallParamsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.callParams`.
     * @param ctx the parse tree
     */
    exitCallParams?: (ctx: CallParamsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.functionType`.
     * @param ctx the parse tree
     */
    enterFunctionType?: (ctx: FunctionTypeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.functionType`.
     * @param ctx the parse tree
     */
    exitFunctionType?: (ctx: FunctionTypeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.functionTypeParams`.
     * @param ctx the parse tree
     */
    enterFunctionTypeParams?: (ctx: FunctionTypeParamsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.functionTypeParams`.
     * @param ctx the parse tree
     */
    exitFunctionTypeParams?: (ctx: FunctionTypeParamsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.type`.
     * @param ctx the parse tree
     */
    enterType?: (ctx: TypeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.type`.
     * @param ctx the parse tree
     */
    exitType?: (ctx: TypeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.pointerType`.
     * @param ctx the parse tree
     */
    enterPointerType?: (ctx: PointerTypeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.pointerType`.
     * @param ctx the parse tree
     */
    exitPointerType?: (ctx: PointerTypeContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

