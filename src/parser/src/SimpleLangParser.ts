// Generated from src/SimpleLang.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { SimpleLangListener } from "./SimpleLangListener.js";
import { SimpleLangVisitor } from "./SimpleLangVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class SimpleLangParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly T__15 = 16;
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly T__20 = 21;
    public static readonly T__21 = 22;
    public static readonly T__22 = 23;
    public static readonly T__23 = 24;
    public static readonly T__24 = 25;
    public static readonly T__25 = 26;
    public static readonly T__26 = 27;
    public static readonly T__27 = 28;
    public static readonly T__28 = 29;
    public static readonly T__29 = 30;
    public static readonly T__30 = 31;
    public static readonly T__31 = 32;
    public static readonly T__32 = 33;
    public static readonly T__33 = 34;
    public static readonly INT = 35;
    public static readonly BOOL = 36;
    public static readonly BASETYPE = 37;
    public static readonly IDENTIFIER = 38;
    public static readonly WS = 39;
    public static readonly RULE_prog = 0;
    public static readonly RULE_mutable = 1;
    public static readonly RULE_statement = 2;
    public static readonly RULE_emptyStatement = 3;
    public static readonly RULE_item = 4;
    public static readonly RULE_letStatement = 5;
    public static readonly RULE_expressionStatement = 6;
    public static readonly RULE_expression = 7;
    public static readonly RULE_expressionWithoutBlock = 8;
    public static readonly RULE_primary = 9;
    public static readonly RULE_callExpression = 10;
    public static readonly RULE_callExpressionTerminal = 11;
    public static readonly RULE_unop = 12;
    public static readonly RULE_negationExpression = 13;
    public static readonly RULE_dereferenceExpression = 14;
    public static readonly RULE_borrowExpression = 15;
    public static readonly RULE_binopTerminals = 16;
    public static readonly RULE_binop = 17;
    public static readonly RULE_logicalOr = 18;
    public static readonly RULE_logicalAnd = 19;
    public static readonly RULE_comparison = 20;
    public static readonly RULE_additionSubstraction = 21;
    public static readonly RULE_multiplicationDivision = 22;
    public static readonly RULE_primitive = 23;
    public static readonly RULE_accessIdentifier = 24;
    public static readonly RULE_bracket = 25;
    public static readonly RULE_assignmentExpressions = 26;
    public static readonly RULE_expressionWithBlock = 27;
    public static readonly RULE_blockExpression = 28;
    public static readonly RULE_blockBody = 29;
    public static readonly RULE_ifExpression = 30;
    public static readonly RULE_ifExpressionAlternative = 31;
    public static readonly RULE_loopExpression = 32;
    public static readonly RULE_predicateLoopExpression = 33;
    public static readonly RULE_breakExpression = 34;
    public static readonly RULE_continueExpression = 35;
    public static readonly RULE_closureExpression = 36;
    public static readonly RULE_function = 37;
    public static readonly RULE_functionParameters = 38;
    public static readonly RULE_functionParam = 39;
    public static readonly RULE_functionParamPattern = 40;
    public static readonly RULE_functionReturnType = 41;
    public static readonly RULE_returnExpression = 42;
    public static readonly RULE_callParams = 43;
    public static readonly RULE_functionType = 44;
    public static readonly RULE_functionTypeParams = 45;
    public static readonly RULE_type = 46;

    public static readonly literalNames = [
        null, "'mut'", "';'", "'let'", "':'", "'='", "'('", "')'", "'-'", 
        "'!'", "'*'", "'&'", "'||'", "'&&'", "'<'", "'<='", "'>'", "'>='", 
        "'=='", "'!='", "'+'", "'/'", "'%'", "'{'", "'}'", "'if'", "'else'", 
        "'while'", "'break'", "'continue'", "'|'", "'->'", "'fn'", "','", 
        "'return'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, "INT", "BOOL", "BASETYPE", "IDENTIFIER", "WS"
    ];
    public static readonly ruleNames = [
        "prog", "mutable", "statement", "emptyStatement", "item", "letStatement", 
        "expressionStatement", "expression", "expressionWithoutBlock", "primary", 
        "callExpression", "callExpressionTerminal", "unop", "negationExpression", 
        "dereferenceExpression", "borrowExpression", "binopTerminals", "binop", 
        "logicalOr", "logicalAnd", "comparison", "additionSubstraction", 
        "multiplicationDivision", "primitive", "accessIdentifier", "bracket", 
        "assignmentExpressions", "expressionWithBlock", "blockExpression", 
        "blockBody", "ifExpression", "ifExpressionAlternative", "loopExpression", 
        "predicateLoopExpression", "breakExpression", "continueExpression", 
        "closureExpression", "function", "functionParameters", "functionParam", 
        "functionParamPattern", "functionReturnType", "returnExpression", 
        "callParams", "functionType", "functionTypeParams", "type",
    ];

    public get grammarFileName(): string { return "SimpleLang.g4"; }
    public get literalNames(): (string | null)[] { return SimpleLangParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return SimpleLangParser.symbolicNames; }
    public get ruleNames(): string[] { return SimpleLangParser.ruleNames; }
    public get serializedATN(): number[] { return SimpleLangParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, SimpleLangParser._ATN, SimpleLangParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public prog(): ProgContext {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 0, SimpleLangParser.RULE_prog);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 97;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2055216972) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 93) !== 0)) {
                {
                {
                this.state = 94;
                this.statement();
                }
                }
                this.state = 99;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 100;
            this.match(SimpleLangParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mutable(): MutableContext {
        let localContext = new MutableContext(this.context, this.state);
        this.enterRule(localContext, 2, SimpleLangParser.RULE_mutable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 102;
            this.match(SimpleLangParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 4, SimpleLangParser.RULE_statement);
        try {
            this.state = 108;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 104;
                this.emptyStatement();
                }
                break;
            case SimpleLangParser.T__31:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 105;
                this.item();
                }
                break;
            case SimpleLangParser.T__2:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 106;
                this.letStatement();
                }
                break;
            case SimpleLangParser.T__5:
            case SimpleLangParser.T__7:
            case SimpleLangParser.T__8:
            case SimpleLangParser.T__9:
            case SimpleLangParser.T__10:
            case SimpleLangParser.T__11:
            case SimpleLangParser.T__22:
            case SimpleLangParser.T__24:
            case SimpleLangParser.T__26:
            case SimpleLangParser.T__27:
            case SimpleLangParser.T__28:
            case SimpleLangParser.T__29:
            case SimpleLangParser.T__33:
            case SimpleLangParser.INT:
            case SimpleLangParser.BOOL:
            case SimpleLangParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 107;
                this.expressionStatement();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public emptyStatement(): EmptyStatementContext {
        let localContext = new EmptyStatementContext(this.context, this.state);
        this.enterRule(localContext, 6, SimpleLangParser.RULE_emptyStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 110;
            this.match(SimpleLangParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public item(): ItemContext {
        let localContext = new ItemContext(this.context, this.state);
        this.enterRule(localContext, 8, SimpleLangParser.RULE_item);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 112;
            this.function_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public letStatement(): LetStatementContext {
        let localContext = new LetStatementContext(this.context, this.state);
        this.enterRule(localContext, 10, SimpleLangParser.RULE_letStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 114;
            this.match(SimpleLangParser.T__2);
            this.state = 116;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 115;
                this.mutable();
                }
            }

            this.state = 118;
            this.match(SimpleLangParser.IDENTIFIER);
            this.state = 121;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
                {
                this.state = 119;
                this.match(SimpleLangParser.T__3);
                this.state = 120;
                this.type_();
                }
            }

            this.state = 125;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 123;
                this.match(SimpleLangParser.T__4);
                this.state = 124;
                this.expression();
                }
            }

            this.state = 127;
            this.match(SimpleLangParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expressionStatement(): ExpressionStatementContext {
        let localContext = new ExpressionStatementContext(this.context, this.state);
        this.enterRule(localContext, 12, SimpleLangParser.RULE_expressionStatement);
        try {
            this.state = 136;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 129;
                this.expressionWithBlock();
                this.state = 131;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
                case 1:
                    {
                    this.state = 130;
                    this.match(SimpleLangParser.T__1);
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 133;
                this.expressionWithoutBlock();
                this.state = 134;
                this.match(SimpleLangParser.T__1);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expression(): ExpressionContext {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 14, SimpleLangParser.RULE_expression);
        try {
            this.state = 140;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 138;
                this.expressionWithBlock();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 139;
                this.expressionWithoutBlock();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expressionWithoutBlock(): ExpressionWithoutBlockContext {
        let localContext = new ExpressionWithoutBlockContext(this.context, this.state);
        this.enterRule(localContext, 16, SimpleLangParser.RULE_expressionWithoutBlock);
        try {
            this.state = 146;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__5:
            case SimpleLangParser.T__7:
            case SimpleLangParser.T__8:
            case SimpleLangParser.T__9:
            case SimpleLangParser.T__10:
            case SimpleLangParser.T__11:
            case SimpleLangParser.T__22:
            case SimpleLangParser.T__24:
            case SimpleLangParser.T__26:
            case SimpleLangParser.T__29:
            case SimpleLangParser.INT:
            case SimpleLangParser.BOOL:
            case SimpleLangParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 142;
                this.binop();
                }
                break;
            case SimpleLangParser.T__27:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 143;
                this.breakExpression();
                }
                break;
            case SimpleLangParser.T__28:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 144;
                this.continueExpression();
                }
                break;
            case SimpleLangParser.T__33:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 145;
                this.returnExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public primary(): PrimaryContext {
        let localContext = new PrimaryContext(this.context, this.state);
        this.enterRule(localContext, 18, SimpleLangParser.RULE_primary);
        try {
            this.state = 155;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 148;
                this.primitive();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 149;
                this.bracket();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 150;
                this.accessIdentifier();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 151;
                this.unop();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 152;
                this.assignmentExpressions();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 153;
                this.closureExpression();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 154;
                this.callExpression(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public callExpression(): CallExpressionContext;
    public callExpression(_p: number): CallExpressionContext;
    public callExpression(_p?: number): CallExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new CallExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 20;
        this.enterRecursionRule(localContext, 20, SimpleLangParser.RULE_callExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 158;
            this.callExpressionTerminal();
            this.state = 159;
            this.match(SimpleLangParser.T__5);
            this.state = 161;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2055216960) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 23) !== 0)) {
                {
                this.state = 160;
                this.callParams();
                }
            }

            this.state = 163;
            this.match(SimpleLangParser.T__6);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 173;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 12, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new CallExpressionContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, SimpleLangParser.RULE_callExpression);
                    this.state = 165;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 166;
                    this.match(SimpleLangParser.T__5);
                    this.state = 168;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2055216960) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 23) !== 0)) {
                        {
                        this.state = 167;
                        this.callParams();
                        }
                    }

                    this.state = 170;
                    this.match(SimpleLangParser.T__6);
                    }
                    }
                }
                this.state = 175;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 12, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public callExpressionTerminal(): CallExpressionTerminalContext {
        let localContext = new CallExpressionTerminalContext(this.context, this.state);
        this.enterRule(localContext, 22, SimpleLangParser.RULE_callExpressionTerminal);
        try {
            this.state = 179;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__5:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 176;
                this.bracket();
                }
                break;
            case SimpleLangParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 177;
                this.accessIdentifier();
                }
                break;
            case SimpleLangParser.T__22:
            case SimpleLangParser.T__24:
            case SimpleLangParser.T__26:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 178;
                this.expressionWithBlock();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unop(): UnopContext {
        let localContext = new UnopContext(this.context, this.state);
        this.enterRule(localContext, 24, SimpleLangParser.RULE_unop);
        try {
            this.state = 184;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__7:
            case SimpleLangParser.T__8:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 181;
                this.negationExpression();
                }
                break;
            case SimpleLangParser.T__9:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 182;
                this.dereferenceExpression();
                }
                break;
            case SimpleLangParser.T__10:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 183;
                this.borrowExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public negationExpression(): NegationExpressionContext {
        let localContext = new NegationExpressionContext(this.context, this.state);
        this.enterRule(localContext, 26, SimpleLangParser.RULE_negationExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 186;
            localContext._op = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(_la === 8 || _la === 9)) {
                localContext._op = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 187;
            this.binopTerminals();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dereferenceExpression(): DereferenceExpressionContext {
        let localContext = new DereferenceExpressionContext(this.context, this.state);
        this.enterRule(localContext, 28, SimpleLangParser.RULE_dereferenceExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 189;
            this.match(SimpleLangParser.T__9);
            this.state = 192;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__9:
                {
                this.state = 190;
                this.dereferenceExpression();
                }
                break;
            case SimpleLangParser.IDENTIFIER:
                {
                this.state = 191;
                this.accessIdentifier();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public borrowExpression(): BorrowExpressionContext {
        let localContext = new BorrowExpressionContext(this.context, this.state);
        this.enterRule(localContext, 30, SimpleLangParser.RULE_borrowExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 194;
            this.match(SimpleLangParser.T__10);
            this.state = 196;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 195;
                this.mutable();
                }
            }

            this.state = 198;
            this.accessIdentifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public binopTerminals(): BinopTerminalsContext {
        let localContext = new BinopTerminalsContext(this.context, this.state);
        this.enterRule(localContext, 32, SimpleLangParser.RULE_binopTerminals);
        try {
            this.state = 202;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 17, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 200;
                this.primary();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 201;
                this.expressionWithBlock();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public binop(): BinopContext {
        let localContext = new BinopContext(this.context, this.state);
        this.enterRule(localContext, 34, SimpleLangParser.RULE_binop);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 204;
            this.logicalOr();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public logicalOr(): LogicalOrContext {
        let localContext = new LogicalOrContext(this.context, this.state);
        this.enterRule(localContext, 36, SimpleLangParser.RULE_logicalOr);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 206;
            this.logicalAnd();
            this.state = 211;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 207;
                    this.match(SimpleLangParser.T__11);
                    this.state = 208;
                    this.logicalAnd();
                    }
                    }
                }
                this.state = 213;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public logicalAnd(): LogicalAndContext {
        let localContext = new LogicalAndContext(this.context, this.state);
        this.enterRule(localContext, 38, SimpleLangParser.RULE_logicalAnd);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 214;
            this.comparison();
            this.state = 219;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 215;
                    this.match(SimpleLangParser.T__12);
                    this.state = 216;
                    this.comparison();
                    }
                    }
                }
                this.state = 221;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public comparison(): ComparisonContext {
        let localContext = new ComparisonContext(this.context, this.state);
        this.enterRule(localContext, 40, SimpleLangParser.RULE_comparison);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 222;
            this.additionSubstraction();
            this.state = 225;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
            case 1:
                {
                this.state = 223;
                localContext._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1032192) !== 0))) {
                    localContext._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 224;
                this.additionSubstraction();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public additionSubstraction(): AdditionSubstractionContext {
        let localContext = new AdditionSubstractionContext(this.context, this.state);
        this.enterRule(localContext, 42, SimpleLangParser.RULE_additionSubstraction);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 227;
            this.multiplicationDivision();
            this.state = 232;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 228;
                    localContext._op = this.tokenStream.LT(1);
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 8 || _la === 20)) {
                        localContext._op = this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 229;
                    this.multiplicationDivision();
                    }
                    }
                }
                this.state = 234;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public multiplicationDivision(): MultiplicationDivisionContext {
        let localContext = new MultiplicationDivisionContext(this.context, this.state);
        this.enterRule(localContext, 44, SimpleLangParser.RULE_multiplicationDivision);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 235;
            this.binopTerminals();
            this.state = 240;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 236;
                    localContext._op = this.tokenStream.LT(1);
                    _la = this.tokenStream.LA(1);
                    if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 6292480) !== 0))) {
                        localContext._op = this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 237;
                    this.binopTerminals();
                    }
                    }
                }
                this.state = 242;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public primitive(): PrimitiveContext {
        let localContext = new PrimitiveContext(this.context, this.state);
        this.enterRule(localContext, 46, SimpleLangParser.RULE_primitive);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 243;
            _la = this.tokenStream.LA(1);
            if(!(_la === 35 || _la === 36)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public accessIdentifier(): AccessIdentifierContext {
        let localContext = new AccessIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 48, SimpleLangParser.RULE_accessIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 245;
            this.match(SimpleLangParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public bracket(): BracketContext {
        let localContext = new BracketContext(this.context, this.state);
        this.enterRule(localContext, 50, SimpleLangParser.RULE_bracket);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 247;
            this.match(SimpleLangParser.T__5);
            this.state = 248;
            this.expression();
            this.state = 249;
            this.match(SimpleLangParser.T__6);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignmentExpressions(): AssignmentExpressionsContext {
        let localContext = new AssignmentExpressionsContext(this.context, this.state);
        this.enterRule(localContext, 52, SimpleLangParser.RULE_assignmentExpressions);
        try {
            this.state = 259;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 251;
                this.accessIdentifier();
                this.state = 252;
                this.match(SimpleLangParser.T__4);
                this.state = 253;
                this.expression();
                }
                break;
            case SimpleLangParser.T__9:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 255;
                this.dereferenceExpression();
                this.state = 256;
                this.match(SimpleLangParser.T__4);
                this.state = 257;
                this.expression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expressionWithBlock(): ExpressionWithBlockContext {
        let localContext = new ExpressionWithBlockContext(this.context, this.state);
        this.enterRule(localContext, 54, SimpleLangParser.RULE_expressionWithBlock);
        try {
            this.state = 264;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__22:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 261;
                this.blockExpression();
                }
                break;
            case SimpleLangParser.T__24:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 262;
                this.ifExpression();
                }
                break;
            case SimpleLangParser.T__26:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 263;
                this.loopExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public blockExpression(): BlockExpressionContext {
        let localContext = new BlockExpressionContext(this.context, this.state);
        this.enterRule(localContext, 56, SimpleLangParser.RULE_blockExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 266;
            this.match(SimpleLangParser.T__22);
            this.state = 267;
            this.blockBody();
            this.state = 268;
            this.match(SimpleLangParser.T__23);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public blockBody(): BlockBodyContext {
        let localContext = new BlockBodyContext(this.context, this.state);
        this.enterRule(localContext, 58, SimpleLangParser.RULE_blockBody);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 273;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 25, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 270;
                    this.statement();
                    }
                    }
                }
                this.state = 275;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 25, this.context);
            }
            this.state = 277;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2055216960) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 23) !== 0)) {
                {
                this.state = 276;
                this.expressionWithoutBlock();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifExpression(): IfExpressionContext {
        let localContext = new IfExpressionContext(this.context, this.state);
        this.enterRule(localContext, 60, SimpleLangParser.RULE_ifExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 279;
            this.match(SimpleLangParser.T__24);
            this.state = 280;
            this.expression();
            this.state = 281;
            this.blockExpression();
            this.state = 284;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 26) {
                {
                this.state = 282;
                this.match(SimpleLangParser.T__25);
                this.state = 283;
                this.ifExpressionAlternative();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifExpressionAlternative(): IfExpressionAlternativeContext {
        let localContext = new IfExpressionAlternativeContext(this.context, this.state);
        this.enterRule(localContext, 62, SimpleLangParser.RULE_ifExpressionAlternative);
        try {
            this.state = 288;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__22:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 286;
                this.blockExpression();
                }
                break;
            case SimpleLangParser.T__24:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 287;
                this.ifExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public loopExpression(): LoopExpressionContext {
        let localContext = new LoopExpressionContext(this.context, this.state);
        this.enterRule(localContext, 64, SimpleLangParser.RULE_loopExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 290;
            this.predicateLoopExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public predicateLoopExpression(): PredicateLoopExpressionContext {
        let localContext = new PredicateLoopExpressionContext(this.context, this.state);
        this.enterRule(localContext, 66, SimpleLangParser.RULE_predicateLoopExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 292;
            this.match(SimpleLangParser.T__26);
            this.state = 293;
            this.expression();
            this.state = 294;
            this.blockExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public breakExpression(): BreakExpressionContext {
        let localContext = new BreakExpressionContext(this.context, this.state);
        this.enterRule(localContext, 68, SimpleLangParser.RULE_breakExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 296;
            this.match(SimpleLangParser.T__27);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public continueExpression(): ContinueExpressionContext {
        let localContext = new ContinueExpressionContext(this.context, this.state);
        this.enterRule(localContext, 70, SimpleLangParser.RULE_continueExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 298;
            this.match(SimpleLangParser.T__28);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public closureExpression(): ClosureExpressionContext {
        let localContext = new ClosureExpressionContext(this.context, this.state);
        this.enterRule(localContext, 72, SimpleLangParser.RULE_closureExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 306;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__11:
                {
                this.state = 300;
                this.match(SimpleLangParser.T__11);
                }
                break;
            case SimpleLangParser.T__29:
                {
                this.state = 301;
                this.match(SimpleLangParser.T__29);
                this.state = 303;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 38) {
                    {
                    this.state = 302;
                    this.functionParameters();
                    }
                }

                this.state = 305;
                this.match(SimpleLangParser.T__29);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 313;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__5:
            case SimpleLangParser.T__7:
            case SimpleLangParser.T__8:
            case SimpleLangParser.T__9:
            case SimpleLangParser.T__10:
            case SimpleLangParser.T__11:
            case SimpleLangParser.T__22:
            case SimpleLangParser.T__24:
            case SimpleLangParser.T__26:
            case SimpleLangParser.T__27:
            case SimpleLangParser.T__28:
            case SimpleLangParser.T__29:
            case SimpleLangParser.T__33:
            case SimpleLangParser.INT:
            case SimpleLangParser.BOOL:
            case SimpleLangParser.IDENTIFIER:
                {
                this.state = 308;
                this.expression();
                }
                break;
            case SimpleLangParser.T__30:
                {
                this.state = 309;
                this.match(SimpleLangParser.T__30);
                this.state = 310;
                this.type_();
                this.state = 311;
                this.blockExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public function_(): FunctionContext {
        let localContext = new FunctionContext(this.context, this.state);
        this.enterRule(localContext, 74, SimpleLangParser.RULE_function);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 315;
            this.match(SimpleLangParser.T__31);
            this.state = 316;
            this.match(SimpleLangParser.IDENTIFIER);
            this.state = 317;
            this.match(SimpleLangParser.T__5);
            this.state = 319;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 38) {
                {
                this.state = 318;
                this.functionParameters();
                }
            }

            this.state = 321;
            this.match(SimpleLangParser.T__6);
            this.state = 323;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 31) {
                {
                this.state = 322;
                this.functionReturnType();
                }
            }

            this.state = 327;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__22:
                {
                this.state = 325;
                this.blockExpression();
                }
                break;
            case SimpleLangParser.T__1:
                {
                this.state = 326;
                this.match(SimpleLangParser.T__1);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionParameters(): FunctionParametersContext {
        let localContext = new FunctionParametersContext(this.context, this.state);
        this.enterRule(localContext, 76, SimpleLangParser.RULE_functionParameters);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 329;
            this.functionParam();
            this.state = 334;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 330;
                    this.match(SimpleLangParser.T__32);
                    this.state = 331;
                    this.functionParam();
                    }
                    }
                }
                this.state = 336;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
            }
            this.state = 338;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 33) {
                {
                this.state = 337;
                this.match(SimpleLangParser.T__32);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionParam(): FunctionParamContext {
        let localContext = new FunctionParamContext(this.context, this.state);
        this.enterRule(localContext, 78, SimpleLangParser.RULE_functionParam);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 340;
            this.functionParamPattern();
            this.state = 341;
            this.match(SimpleLangParser.T__3);
            this.state = 342;
            this.type_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionParamPattern(): FunctionParamPatternContext {
        let localContext = new FunctionParamPatternContext(this.context, this.state);
        this.enterRule(localContext, 80, SimpleLangParser.RULE_functionParamPattern);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 344;
            this.match(SimpleLangParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionReturnType(): FunctionReturnTypeContext {
        let localContext = new FunctionReturnTypeContext(this.context, this.state);
        this.enterRule(localContext, 82, SimpleLangParser.RULE_functionReturnType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 346;
            this.match(SimpleLangParser.T__30);
            this.state = 347;
            this.type_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public returnExpression(): ReturnExpressionContext {
        let localContext = new ReturnExpressionContext(this.context, this.state);
        this.enterRule(localContext, 84, SimpleLangParser.RULE_returnExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 349;
            this.match(SimpleLangParser.T__33);
            this.state = 351;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 37, this.context) ) {
            case 1:
                {
                this.state = 350;
                this.expression();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public callParams(): CallParamsContext {
        let localContext = new CallParamsContext(this.context, this.state);
        this.enterRule(localContext, 86, SimpleLangParser.RULE_callParams);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 353;
            this.expression();
            this.state = 358;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 354;
                    this.match(SimpleLangParser.T__32);
                    this.state = 355;
                    this.expression();
                    }
                    }
                }
                this.state = 360;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
            }
            this.state = 362;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 33) {
                {
                this.state = 361;
                this.match(SimpleLangParser.T__32);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionType(): FunctionTypeContext {
        let localContext = new FunctionTypeContext(this.context, this.state);
        this.enterRule(localContext, 88, SimpleLangParser.RULE_functionType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 364;
            this.match(SimpleLangParser.T__31);
            this.state = 365;
            this.match(SimpleLangParser.T__5);
            this.state = 367;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 32 || _la === 37) {
                {
                this.state = 366;
                this.functionTypeParams();
                }
            }

            this.state = 369;
            this.match(SimpleLangParser.T__6);
            this.state = 371;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 31) {
                {
                this.state = 370;
                this.functionReturnType();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionTypeParams(): FunctionTypeParamsContext {
        let localContext = new FunctionTypeParamsContext(this.context, this.state);
        this.enterRule(localContext, 90, SimpleLangParser.RULE_functionTypeParams);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 373;
            this.type_();
            this.state = 378;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 42, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 374;
                    this.match(SimpleLangParser.T__32);
                    this.state = 375;
                    this.type_();
                    }
                    }
                }
                this.state = 380;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 42, this.context);
            }
            this.state = 382;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 33) {
                {
                this.state = 381;
                this.match(SimpleLangParser.T__32);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public type_(): TypeContext {
        let localContext = new TypeContext(this.context, this.state);
        this.enterRule(localContext, 92, SimpleLangParser.RULE_type);
        try {
            this.state = 386;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.BASETYPE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 384;
                this.match(SimpleLangParser.BASETYPE);
                }
                break;
            case SimpleLangParser.T__31:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 385;
                this.functionType();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 10:
            return this.callExpression_sempred(localContext as CallExpressionContext, predIndex);
        }
        return true;
    }
    private callExpression_sempred(localContext: CallExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 2);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,39,389,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,
        2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
        7,46,1,0,5,0,96,8,0,10,0,12,0,99,9,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,
        1,2,3,2,109,8,2,1,3,1,3,1,4,1,4,1,5,1,5,3,5,117,8,5,1,5,1,5,1,5,
        3,5,122,8,5,1,5,1,5,3,5,126,8,5,1,5,1,5,1,6,1,6,3,6,132,8,6,1,6,
        1,6,1,6,3,6,137,8,6,1,7,1,7,3,7,141,8,7,1,8,1,8,1,8,1,8,3,8,147,
        8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,156,8,9,1,10,1,10,1,10,1,10,
        3,10,162,8,10,1,10,1,10,1,10,1,10,1,10,3,10,169,8,10,1,10,5,10,172,
        8,10,10,10,12,10,175,9,10,1,11,1,11,1,11,3,11,180,8,11,1,12,1,12,
        1,12,3,12,185,8,12,1,13,1,13,1,13,1,14,1,14,1,14,3,14,193,8,14,1,
        15,1,15,3,15,197,8,15,1,15,1,15,1,16,1,16,3,16,203,8,16,1,17,1,17,
        1,18,1,18,1,18,5,18,210,8,18,10,18,12,18,213,9,18,1,19,1,19,1,19,
        5,19,218,8,19,10,19,12,19,221,9,19,1,20,1,20,1,20,3,20,226,8,20,
        1,21,1,21,1,21,5,21,231,8,21,10,21,12,21,234,9,21,1,22,1,22,1,22,
        5,22,239,8,22,10,22,12,22,242,9,22,1,23,1,23,1,24,1,24,1,25,1,25,
        1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,260,8,26,
        1,27,1,27,1,27,3,27,265,8,27,1,28,1,28,1,28,1,28,1,29,5,29,272,8,
        29,10,29,12,29,275,9,29,1,29,3,29,278,8,29,1,30,1,30,1,30,1,30,1,
        30,3,30,285,8,30,1,31,1,31,3,31,289,8,31,1,32,1,32,1,33,1,33,1,33,
        1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,36,3,36,304,8,36,1,36,3,36,
        307,8,36,1,36,1,36,1,36,1,36,1,36,3,36,314,8,36,1,37,1,37,1,37,1,
        37,3,37,320,8,37,1,37,1,37,3,37,324,8,37,1,37,1,37,3,37,328,8,37,
        1,38,1,38,1,38,5,38,333,8,38,10,38,12,38,336,9,38,1,38,3,38,339,
        8,38,1,39,1,39,1,39,1,39,1,40,1,40,1,41,1,41,1,41,1,42,1,42,3,42,
        352,8,42,1,43,1,43,1,43,5,43,357,8,43,10,43,12,43,360,9,43,1,43,
        3,43,363,8,43,1,44,1,44,1,44,3,44,368,8,44,1,44,1,44,3,44,372,8,
        44,1,45,1,45,1,45,5,45,377,8,45,10,45,12,45,380,9,45,1,45,3,45,383,
        8,45,1,46,1,46,3,46,387,8,46,1,46,0,1,20,47,0,2,4,6,8,10,12,14,16,
        18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,
        62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,0,5,1,0,8,9,1,0,
        14,19,2,0,8,8,20,20,2,0,10,10,21,22,1,0,35,36,398,0,97,1,0,0,0,2,
        102,1,0,0,0,4,108,1,0,0,0,6,110,1,0,0,0,8,112,1,0,0,0,10,114,1,0,
        0,0,12,136,1,0,0,0,14,140,1,0,0,0,16,146,1,0,0,0,18,155,1,0,0,0,
        20,157,1,0,0,0,22,179,1,0,0,0,24,184,1,0,0,0,26,186,1,0,0,0,28,189,
        1,0,0,0,30,194,1,0,0,0,32,202,1,0,0,0,34,204,1,0,0,0,36,206,1,0,
        0,0,38,214,1,0,0,0,40,222,1,0,0,0,42,227,1,0,0,0,44,235,1,0,0,0,
        46,243,1,0,0,0,48,245,1,0,0,0,50,247,1,0,0,0,52,259,1,0,0,0,54,264,
        1,0,0,0,56,266,1,0,0,0,58,273,1,0,0,0,60,279,1,0,0,0,62,288,1,0,
        0,0,64,290,1,0,0,0,66,292,1,0,0,0,68,296,1,0,0,0,70,298,1,0,0,0,
        72,306,1,0,0,0,74,315,1,0,0,0,76,329,1,0,0,0,78,340,1,0,0,0,80,344,
        1,0,0,0,82,346,1,0,0,0,84,349,1,0,0,0,86,353,1,0,0,0,88,364,1,0,
        0,0,90,373,1,0,0,0,92,386,1,0,0,0,94,96,3,4,2,0,95,94,1,0,0,0,96,
        99,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,100,1,0,0,0,99,97,1,0,
        0,0,100,101,5,0,0,1,101,1,1,0,0,0,102,103,5,1,0,0,103,3,1,0,0,0,
        104,109,3,6,3,0,105,109,3,8,4,0,106,109,3,10,5,0,107,109,3,12,6,
        0,108,104,1,0,0,0,108,105,1,0,0,0,108,106,1,0,0,0,108,107,1,0,0,
        0,109,5,1,0,0,0,110,111,5,2,0,0,111,7,1,0,0,0,112,113,3,74,37,0,
        113,9,1,0,0,0,114,116,5,3,0,0,115,117,3,2,1,0,116,115,1,0,0,0,116,
        117,1,0,0,0,117,118,1,0,0,0,118,121,5,38,0,0,119,120,5,4,0,0,120,
        122,3,92,46,0,121,119,1,0,0,0,121,122,1,0,0,0,122,125,1,0,0,0,123,
        124,5,5,0,0,124,126,3,14,7,0,125,123,1,0,0,0,125,126,1,0,0,0,126,
        127,1,0,0,0,127,128,5,2,0,0,128,11,1,0,0,0,129,131,3,54,27,0,130,
        132,5,2,0,0,131,130,1,0,0,0,131,132,1,0,0,0,132,137,1,0,0,0,133,
        134,3,16,8,0,134,135,5,2,0,0,135,137,1,0,0,0,136,129,1,0,0,0,136,
        133,1,0,0,0,137,13,1,0,0,0,138,141,3,54,27,0,139,141,3,16,8,0,140,
        138,1,0,0,0,140,139,1,0,0,0,141,15,1,0,0,0,142,147,3,34,17,0,143,
        147,3,68,34,0,144,147,3,70,35,0,145,147,3,84,42,0,146,142,1,0,0,
        0,146,143,1,0,0,0,146,144,1,0,0,0,146,145,1,0,0,0,147,17,1,0,0,0,
        148,156,3,46,23,0,149,156,3,50,25,0,150,156,3,48,24,0,151,156,3,
        24,12,0,152,156,3,52,26,0,153,156,3,72,36,0,154,156,3,20,10,0,155,
        148,1,0,0,0,155,149,1,0,0,0,155,150,1,0,0,0,155,151,1,0,0,0,155,
        152,1,0,0,0,155,153,1,0,0,0,155,154,1,0,0,0,156,19,1,0,0,0,157,158,
        6,10,-1,0,158,159,3,22,11,0,159,161,5,6,0,0,160,162,3,86,43,0,161,
        160,1,0,0,0,161,162,1,0,0,0,162,163,1,0,0,0,163,164,5,7,0,0,164,
        173,1,0,0,0,165,166,10,2,0,0,166,168,5,6,0,0,167,169,3,86,43,0,168,
        167,1,0,0,0,168,169,1,0,0,0,169,170,1,0,0,0,170,172,5,7,0,0,171,
        165,1,0,0,0,172,175,1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,
        21,1,0,0,0,175,173,1,0,0,0,176,180,3,50,25,0,177,180,3,48,24,0,178,
        180,3,54,27,0,179,176,1,0,0,0,179,177,1,0,0,0,179,178,1,0,0,0,180,
        23,1,0,0,0,181,185,3,26,13,0,182,185,3,28,14,0,183,185,3,30,15,0,
        184,181,1,0,0,0,184,182,1,0,0,0,184,183,1,0,0,0,185,25,1,0,0,0,186,
        187,7,0,0,0,187,188,3,32,16,0,188,27,1,0,0,0,189,192,5,10,0,0,190,
        193,3,28,14,0,191,193,3,48,24,0,192,190,1,0,0,0,192,191,1,0,0,0,
        193,29,1,0,0,0,194,196,5,11,0,0,195,197,3,2,1,0,196,195,1,0,0,0,
        196,197,1,0,0,0,197,198,1,0,0,0,198,199,3,48,24,0,199,31,1,0,0,0,
        200,203,3,18,9,0,201,203,3,54,27,0,202,200,1,0,0,0,202,201,1,0,0,
        0,203,33,1,0,0,0,204,205,3,36,18,0,205,35,1,0,0,0,206,211,3,38,19,
        0,207,208,5,12,0,0,208,210,3,38,19,0,209,207,1,0,0,0,210,213,1,0,
        0,0,211,209,1,0,0,0,211,212,1,0,0,0,212,37,1,0,0,0,213,211,1,0,0,
        0,214,219,3,40,20,0,215,216,5,13,0,0,216,218,3,40,20,0,217,215,1,
        0,0,0,218,221,1,0,0,0,219,217,1,0,0,0,219,220,1,0,0,0,220,39,1,0,
        0,0,221,219,1,0,0,0,222,225,3,42,21,0,223,224,7,1,0,0,224,226,3,
        42,21,0,225,223,1,0,0,0,225,226,1,0,0,0,226,41,1,0,0,0,227,232,3,
        44,22,0,228,229,7,2,0,0,229,231,3,44,22,0,230,228,1,0,0,0,231,234,
        1,0,0,0,232,230,1,0,0,0,232,233,1,0,0,0,233,43,1,0,0,0,234,232,1,
        0,0,0,235,240,3,32,16,0,236,237,7,3,0,0,237,239,3,32,16,0,238,236,
        1,0,0,0,239,242,1,0,0,0,240,238,1,0,0,0,240,241,1,0,0,0,241,45,1,
        0,0,0,242,240,1,0,0,0,243,244,7,4,0,0,244,47,1,0,0,0,245,246,5,38,
        0,0,246,49,1,0,0,0,247,248,5,6,0,0,248,249,3,14,7,0,249,250,5,7,
        0,0,250,51,1,0,0,0,251,252,3,48,24,0,252,253,5,5,0,0,253,254,3,14,
        7,0,254,260,1,0,0,0,255,256,3,28,14,0,256,257,5,5,0,0,257,258,3,
        14,7,0,258,260,1,0,0,0,259,251,1,0,0,0,259,255,1,0,0,0,260,53,1,
        0,0,0,261,265,3,56,28,0,262,265,3,60,30,0,263,265,3,64,32,0,264,
        261,1,0,0,0,264,262,1,0,0,0,264,263,1,0,0,0,265,55,1,0,0,0,266,267,
        5,23,0,0,267,268,3,58,29,0,268,269,5,24,0,0,269,57,1,0,0,0,270,272,
        3,4,2,0,271,270,1,0,0,0,272,275,1,0,0,0,273,271,1,0,0,0,273,274,
        1,0,0,0,274,277,1,0,0,0,275,273,1,0,0,0,276,278,3,16,8,0,277,276,
        1,0,0,0,277,278,1,0,0,0,278,59,1,0,0,0,279,280,5,25,0,0,280,281,
        3,14,7,0,281,284,3,56,28,0,282,283,5,26,0,0,283,285,3,62,31,0,284,
        282,1,0,0,0,284,285,1,0,0,0,285,61,1,0,0,0,286,289,3,56,28,0,287,
        289,3,60,30,0,288,286,1,0,0,0,288,287,1,0,0,0,289,63,1,0,0,0,290,
        291,3,66,33,0,291,65,1,0,0,0,292,293,5,27,0,0,293,294,3,14,7,0,294,
        295,3,56,28,0,295,67,1,0,0,0,296,297,5,28,0,0,297,69,1,0,0,0,298,
        299,5,29,0,0,299,71,1,0,0,0,300,307,5,12,0,0,301,303,5,30,0,0,302,
        304,3,76,38,0,303,302,1,0,0,0,303,304,1,0,0,0,304,305,1,0,0,0,305,
        307,5,30,0,0,306,300,1,0,0,0,306,301,1,0,0,0,307,313,1,0,0,0,308,
        314,3,14,7,0,309,310,5,31,0,0,310,311,3,92,46,0,311,312,3,56,28,
        0,312,314,1,0,0,0,313,308,1,0,0,0,313,309,1,0,0,0,314,73,1,0,0,0,
        315,316,5,32,0,0,316,317,5,38,0,0,317,319,5,6,0,0,318,320,3,76,38,
        0,319,318,1,0,0,0,319,320,1,0,0,0,320,321,1,0,0,0,321,323,5,7,0,
        0,322,324,3,82,41,0,323,322,1,0,0,0,323,324,1,0,0,0,324,327,1,0,
        0,0,325,328,3,56,28,0,326,328,5,2,0,0,327,325,1,0,0,0,327,326,1,
        0,0,0,328,75,1,0,0,0,329,334,3,78,39,0,330,331,5,33,0,0,331,333,
        3,78,39,0,332,330,1,0,0,0,333,336,1,0,0,0,334,332,1,0,0,0,334,335,
        1,0,0,0,335,338,1,0,0,0,336,334,1,0,0,0,337,339,5,33,0,0,338,337,
        1,0,0,0,338,339,1,0,0,0,339,77,1,0,0,0,340,341,3,80,40,0,341,342,
        5,4,0,0,342,343,3,92,46,0,343,79,1,0,0,0,344,345,5,38,0,0,345,81,
        1,0,0,0,346,347,5,31,0,0,347,348,3,92,46,0,348,83,1,0,0,0,349,351,
        5,34,0,0,350,352,3,14,7,0,351,350,1,0,0,0,351,352,1,0,0,0,352,85,
        1,0,0,0,353,358,3,14,7,0,354,355,5,33,0,0,355,357,3,14,7,0,356,354,
        1,0,0,0,357,360,1,0,0,0,358,356,1,0,0,0,358,359,1,0,0,0,359,362,
        1,0,0,0,360,358,1,0,0,0,361,363,5,33,0,0,362,361,1,0,0,0,362,363,
        1,0,0,0,363,87,1,0,0,0,364,365,5,32,0,0,365,367,5,6,0,0,366,368,
        3,90,45,0,367,366,1,0,0,0,367,368,1,0,0,0,368,369,1,0,0,0,369,371,
        5,7,0,0,370,372,3,82,41,0,371,370,1,0,0,0,371,372,1,0,0,0,372,89,
        1,0,0,0,373,378,3,92,46,0,374,375,5,33,0,0,375,377,3,92,46,0,376,
        374,1,0,0,0,377,380,1,0,0,0,378,376,1,0,0,0,378,379,1,0,0,0,379,
        382,1,0,0,0,380,378,1,0,0,0,381,383,5,33,0,0,382,381,1,0,0,0,382,
        383,1,0,0,0,383,91,1,0,0,0,384,387,5,37,0,0,385,387,3,88,44,0,386,
        384,1,0,0,0,386,385,1,0,0,0,387,93,1,0,0,0,45,97,108,116,121,125,
        131,136,140,146,155,161,168,173,179,184,192,196,202,211,219,225,
        232,240,259,264,273,277,284,288,303,306,313,319,323,327,334,338,
        351,358,362,367,371,378,382,386
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SimpleLangParser.__ATN) {
            SimpleLangParser.__ATN = new antlr.ATNDeserializer().deserialize(SimpleLangParser._serializedATN);
        }

        return SimpleLangParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SimpleLangParser.literalNames, SimpleLangParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SimpleLangParser.vocabulary;
    }

    private static readonly decisionsToDFA = SimpleLangParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.EOF, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_prog;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterProg) {
             listener.enterProg(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitProg) {
             listener.exitProg(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MutableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_mutable;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterMutable) {
             listener.enterMutable(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitMutable) {
             listener.exitMutable(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitMutable) {
            return visitor.visitMutable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public emptyStatement(): EmptyStatementContext | null {
        return this.getRuleContext(0, EmptyStatementContext);
    }
    public item(): ItemContext | null {
        return this.getRuleContext(0, ItemContext);
    }
    public letStatement(): LetStatementContext | null {
        return this.getRuleContext(0, LetStatementContext);
    }
    public expressionStatement(): ExpressionStatementContext | null {
        return this.getRuleContext(0, ExpressionStatementContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_statement;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EmptyStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_emptyStatement;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterEmptyStatement) {
             listener.enterEmptyStatement(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitEmptyStatement) {
             listener.exitEmptyStatement(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitEmptyStatement) {
            return visitor.visitEmptyStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public function(): FunctionContext {
        return this.getRuleContext(0, FunctionContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_item;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterItem) {
             listener.enterItem(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitItem) {
             listener.exitItem(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitItem) {
            return visitor.visitItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LetStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.IDENTIFIER, 0)!;
    }
    public mutable(): MutableContext | null {
        return this.getRuleContext(0, MutableContext);
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_letStatement;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterLetStatement) {
             listener.enterLetStatement(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitLetStatement) {
             listener.exitLetStatement(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitLetStatement) {
            return visitor.visitLetStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expressionWithBlock(): ExpressionWithBlockContext | null {
        return this.getRuleContext(0, ExpressionWithBlockContext);
    }
    public expressionWithoutBlock(): ExpressionWithoutBlockContext | null {
        return this.getRuleContext(0, ExpressionWithoutBlockContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_expressionStatement;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterExpressionStatement) {
             listener.enterExpressionStatement(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitExpressionStatement) {
             listener.exitExpressionStatement(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitExpressionStatement) {
            return visitor.visitExpressionStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expressionWithBlock(): ExpressionWithBlockContext | null {
        return this.getRuleContext(0, ExpressionWithBlockContext);
    }
    public expressionWithoutBlock(): ExpressionWithoutBlockContext | null {
        return this.getRuleContext(0, ExpressionWithoutBlockContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_expression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterExpression) {
             listener.enterExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitExpression) {
             listener.exitExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionWithoutBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public binop(): BinopContext | null {
        return this.getRuleContext(0, BinopContext);
    }
    public breakExpression(): BreakExpressionContext | null {
        return this.getRuleContext(0, BreakExpressionContext);
    }
    public continueExpression(): ContinueExpressionContext | null {
        return this.getRuleContext(0, ContinueExpressionContext);
    }
    public returnExpression(): ReturnExpressionContext | null {
        return this.getRuleContext(0, ReturnExpressionContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_expressionWithoutBlock;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterExpressionWithoutBlock) {
             listener.enterExpressionWithoutBlock(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitExpressionWithoutBlock) {
             listener.exitExpressionWithoutBlock(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitExpressionWithoutBlock) {
            return visitor.visitExpressionWithoutBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public primitive(): PrimitiveContext | null {
        return this.getRuleContext(0, PrimitiveContext);
    }
    public bracket(): BracketContext | null {
        return this.getRuleContext(0, BracketContext);
    }
    public accessIdentifier(): AccessIdentifierContext | null {
        return this.getRuleContext(0, AccessIdentifierContext);
    }
    public unop(): UnopContext | null {
        return this.getRuleContext(0, UnopContext);
    }
    public assignmentExpressions(): AssignmentExpressionsContext | null {
        return this.getRuleContext(0, AssignmentExpressionsContext);
    }
    public closureExpression(): ClosureExpressionContext | null {
        return this.getRuleContext(0, ClosureExpressionContext);
    }
    public callExpression(): CallExpressionContext | null {
        return this.getRuleContext(0, CallExpressionContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_primary;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterPrimary) {
             listener.enterPrimary(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitPrimary) {
             listener.exitPrimary(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitPrimary) {
            return visitor.visitPrimary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CallExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public callExpressionTerminal(): CallExpressionTerminalContext | null {
        return this.getRuleContext(0, CallExpressionTerminalContext);
    }
    public callParams(): CallParamsContext | null {
        return this.getRuleContext(0, CallParamsContext);
    }
    public callExpression(): CallExpressionContext | null {
        return this.getRuleContext(0, CallExpressionContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_callExpression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterCallExpression) {
             listener.enterCallExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitCallExpression) {
             listener.exitCallExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitCallExpression) {
            return visitor.visitCallExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CallExpressionTerminalContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public bracket(): BracketContext | null {
        return this.getRuleContext(0, BracketContext);
    }
    public accessIdentifier(): AccessIdentifierContext | null {
        return this.getRuleContext(0, AccessIdentifierContext);
    }
    public expressionWithBlock(): ExpressionWithBlockContext | null {
        return this.getRuleContext(0, ExpressionWithBlockContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_callExpressionTerminal;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterCallExpressionTerminal) {
             listener.enterCallExpressionTerminal(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitCallExpressionTerminal) {
             listener.exitCallExpressionTerminal(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitCallExpressionTerminal) {
            return visitor.visitCallExpressionTerminal(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnopContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public negationExpression(): NegationExpressionContext | null {
        return this.getRuleContext(0, NegationExpressionContext);
    }
    public dereferenceExpression(): DereferenceExpressionContext | null {
        return this.getRuleContext(0, DereferenceExpressionContext);
    }
    public borrowExpression(): BorrowExpressionContext | null {
        return this.getRuleContext(0, BorrowExpressionContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_unop;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterUnop) {
             listener.enterUnop(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitUnop) {
             listener.exitUnop(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitUnop) {
            return visitor.visitUnop(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NegationExpressionContext extends antlr.ParserRuleContext {
    public _op?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public binopTerminals(): BinopTerminalsContext {
        return this.getRuleContext(0, BinopTerminalsContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_negationExpression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterNegationExpression) {
             listener.enterNegationExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitNegationExpression) {
             listener.exitNegationExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitNegationExpression) {
            return visitor.visitNegationExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DereferenceExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public dereferenceExpression(): DereferenceExpressionContext | null {
        return this.getRuleContext(0, DereferenceExpressionContext);
    }
    public accessIdentifier(): AccessIdentifierContext | null {
        return this.getRuleContext(0, AccessIdentifierContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_dereferenceExpression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterDereferenceExpression) {
             listener.enterDereferenceExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitDereferenceExpression) {
             listener.exitDereferenceExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitDereferenceExpression) {
            return visitor.visitDereferenceExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BorrowExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public accessIdentifier(): AccessIdentifierContext {
        return this.getRuleContext(0, AccessIdentifierContext)!;
    }
    public mutable(): MutableContext | null {
        return this.getRuleContext(0, MutableContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_borrowExpression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterBorrowExpression) {
             listener.enterBorrowExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBorrowExpression) {
             listener.exitBorrowExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBorrowExpression) {
            return visitor.visitBorrowExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BinopTerminalsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public primary(): PrimaryContext | null {
        return this.getRuleContext(0, PrimaryContext);
    }
    public expressionWithBlock(): ExpressionWithBlockContext | null {
        return this.getRuleContext(0, ExpressionWithBlockContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_binopTerminals;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterBinopTerminals) {
             listener.enterBinopTerminals(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBinopTerminals) {
             listener.exitBinopTerminals(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBinopTerminals) {
            return visitor.visitBinopTerminals(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BinopContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public logicalOr(): LogicalOrContext {
        return this.getRuleContext(0, LogicalOrContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_binop;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterBinop) {
             listener.enterBinop(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBinop) {
             listener.exitBinop(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBinop) {
            return visitor.visitBinop(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogicalOrContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public logicalAnd(): LogicalAndContext[];
    public logicalAnd(i: number): LogicalAndContext | null;
    public logicalAnd(i?: number): LogicalAndContext[] | LogicalAndContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LogicalAndContext);
        }

        return this.getRuleContext(i, LogicalAndContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_logicalOr;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterLogicalOr) {
             listener.enterLogicalOr(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitLogicalOr) {
             listener.exitLogicalOr(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitLogicalOr) {
            return visitor.visitLogicalOr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogicalAndContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public comparison(): ComparisonContext[];
    public comparison(i: number): ComparisonContext | null;
    public comparison(i?: number): ComparisonContext[] | ComparisonContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ComparisonContext);
        }

        return this.getRuleContext(i, ComparisonContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_logicalAnd;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterLogicalAnd) {
             listener.enterLogicalAnd(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitLogicalAnd) {
             listener.exitLogicalAnd(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitLogicalAnd) {
            return visitor.visitLogicalAnd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComparisonContext extends antlr.ParserRuleContext {
    public _op?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public additionSubstraction(): AdditionSubstractionContext[];
    public additionSubstraction(i: number): AdditionSubstractionContext | null;
    public additionSubstraction(i?: number): AdditionSubstractionContext[] | AdditionSubstractionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AdditionSubstractionContext);
        }

        return this.getRuleContext(i, AdditionSubstractionContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_comparison;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterComparison) {
             listener.enterComparison(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitComparison) {
             listener.exitComparison(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitComparison) {
            return visitor.visitComparison(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AdditionSubstractionContext extends antlr.ParserRuleContext {
    public _op?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public multiplicationDivision(): MultiplicationDivisionContext[];
    public multiplicationDivision(i: number): MultiplicationDivisionContext | null;
    public multiplicationDivision(i?: number): MultiplicationDivisionContext[] | MultiplicationDivisionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MultiplicationDivisionContext);
        }

        return this.getRuleContext(i, MultiplicationDivisionContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_additionSubstraction;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterAdditionSubstraction) {
             listener.enterAdditionSubstraction(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitAdditionSubstraction) {
             listener.exitAdditionSubstraction(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitAdditionSubstraction) {
            return visitor.visitAdditionSubstraction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MultiplicationDivisionContext extends antlr.ParserRuleContext {
    public _op?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public binopTerminals(): BinopTerminalsContext[];
    public binopTerminals(i: number): BinopTerminalsContext | null;
    public binopTerminals(i?: number): BinopTerminalsContext[] | BinopTerminalsContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BinopTerminalsContext);
        }

        return this.getRuleContext(i, BinopTerminalsContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_multiplicationDivision;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterMultiplicationDivision) {
             listener.enterMultiplicationDivision(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitMultiplicationDivision) {
             listener.exitMultiplicationDivision(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitMultiplicationDivision) {
            return visitor.visitMultiplicationDivision(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimitiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(SimpleLangParser.INT, 0);
    }
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(SimpleLangParser.BOOL, 0);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_primitive;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterPrimitive) {
             listener.enterPrimitive(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitPrimitive) {
             listener.exitPrimitive(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitPrimitive) {
            return visitor.visitPrimitive(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AccessIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_accessIdentifier;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterAccessIdentifier) {
             listener.enterAccessIdentifier(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitAccessIdentifier) {
             listener.exitAccessIdentifier(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitAccessIdentifier) {
            return visitor.visitAccessIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BracketContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_bracket;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterBracket) {
             listener.enterBracket(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBracket) {
             listener.exitBracket(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBracket) {
            return visitor.visitBracket(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignmentExpressionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public accessIdentifier(): AccessIdentifierContext | null {
        return this.getRuleContext(0, AccessIdentifierContext);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public dereferenceExpression(): DereferenceExpressionContext | null {
        return this.getRuleContext(0, DereferenceExpressionContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_assignmentExpressions;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterAssignmentExpressions) {
             listener.enterAssignmentExpressions(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitAssignmentExpressions) {
             listener.exitAssignmentExpressions(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitAssignmentExpressions) {
            return visitor.visitAssignmentExpressions(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionWithBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public blockExpression(): BlockExpressionContext | null {
        return this.getRuleContext(0, BlockExpressionContext);
    }
    public ifExpression(): IfExpressionContext | null {
        return this.getRuleContext(0, IfExpressionContext);
    }
    public loopExpression(): LoopExpressionContext | null {
        return this.getRuleContext(0, LoopExpressionContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_expressionWithBlock;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterExpressionWithBlock) {
             listener.enterExpressionWithBlock(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitExpressionWithBlock) {
             listener.exitExpressionWithBlock(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitExpressionWithBlock) {
            return visitor.visitExpressionWithBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public blockBody(): BlockBodyContext {
        return this.getRuleContext(0, BlockBodyContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_blockExpression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterBlockExpression) {
             listener.enterBlockExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBlockExpression) {
             listener.exitBlockExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBlockExpression) {
            return visitor.visitBlockExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public expressionWithoutBlock(): ExpressionWithoutBlockContext | null {
        return this.getRuleContext(0, ExpressionWithoutBlockContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_blockBody;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterBlockBody) {
             listener.enterBlockBody(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBlockBody) {
             listener.exitBlockBody(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBlockBody) {
            return visitor.visitBlockBody(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public blockExpression(): BlockExpressionContext {
        return this.getRuleContext(0, BlockExpressionContext)!;
    }
    public ifExpressionAlternative(): IfExpressionAlternativeContext | null {
        return this.getRuleContext(0, IfExpressionAlternativeContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_ifExpression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterIfExpression) {
             listener.enterIfExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitIfExpression) {
             listener.exitIfExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitIfExpression) {
            return visitor.visitIfExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfExpressionAlternativeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public blockExpression(): BlockExpressionContext | null {
        return this.getRuleContext(0, BlockExpressionContext);
    }
    public ifExpression(): IfExpressionContext | null {
        return this.getRuleContext(0, IfExpressionContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_ifExpressionAlternative;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterIfExpressionAlternative) {
             listener.enterIfExpressionAlternative(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitIfExpressionAlternative) {
             listener.exitIfExpressionAlternative(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitIfExpressionAlternative) {
            return visitor.visitIfExpressionAlternative(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LoopExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public predicateLoopExpression(): PredicateLoopExpressionContext {
        return this.getRuleContext(0, PredicateLoopExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_loopExpression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterLoopExpression) {
             listener.enterLoopExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitLoopExpression) {
             listener.exitLoopExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitLoopExpression) {
            return visitor.visitLoopExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PredicateLoopExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public blockExpression(): BlockExpressionContext {
        return this.getRuleContext(0, BlockExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_predicateLoopExpression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterPredicateLoopExpression) {
             listener.enterPredicateLoopExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitPredicateLoopExpression) {
             listener.exitPredicateLoopExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitPredicateLoopExpression) {
            return visitor.visitPredicateLoopExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BreakExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_breakExpression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterBreakExpression) {
             listener.enterBreakExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitBreakExpression) {
             listener.exitBreakExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitBreakExpression) {
            return visitor.visitBreakExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ContinueExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_continueExpression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterContinueExpression) {
             listener.enterContinueExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitContinueExpression) {
             listener.exitContinueExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitContinueExpression) {
            return visitor.visitContinueExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClosureExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public blockExpression(): BlockExpressionContext | null {
        return this.getRuleContext(0, BlockExpressionContext);
    }
    public functionParameters(): FunctionParametersContext | null {
        return this.getRuleContext(0, FunctionParametersContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_closureExpression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterClosureExpression) {
             listener.enterClosureExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitClosureExpression) {
             listener.exitClosureExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitClosureExpression) {
            return visitor.visitClosureExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.IDENTIFIER, 0)!;
    }
    public blockExpression(): BlockExpressionContext | null {
        return this.getRuleContext(0, BlockExpressionContext);
    }
    public functionParameters(): FunctionParametersContext | null {
        return this.getRuleContext(0, FunctionParametersContext);
    }
    public functionReturnType(): FunctionReturnTypeContext | null {
        return this.getRuleContext(0, FunctionReturnTypeContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_function;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterFunction) {
             listener.enterFunction(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitFunction) {
             listener.exitFunction(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitFunction) {
            return visitor.visitFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionParametersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public functionParam(): FunctionParamContext[];
    public functionParam(i: number): FunctionParamContext | null;
    public functionParam(i?: number): FunctionParamContext[] | FunctionParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionParamContext);
        }

        return this.getRuleContext(i, FunctionParamContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_functionParameters;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterFunctionParameters) {
             listener.enterFunctionParameters(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitFunctionParameters) {
             listener.exitFunctionParameters(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitFunctionParameters) {
            return visitor.visitFunctionParameters(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public functionParamPattern(): FunctionParamPatternContext {
        return this.getRuleContext(0, FunctionParamPatternContext)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_functionParam;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterFunctionParam) {
             listener.enterFunctionParam(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitFunctionParam) {
             listener.exitFunctionParam(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitFunctionParam) {
            return visitor.visitFunctionParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionParamPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_functionParamPattern;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterFunctionParamPattern) {
             listener.enterFunctionParamPattern(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitFunctionParamPattern) {
             listener.exitFunctionParamPattern(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitFunctionParamPattern) {
            return visitor.visitFunctionParamPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionReturnTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_functionReturnType;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterFunctionReturnType) {
             listener.enterFunctionReturnType(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitFunctionReturnType) {
             listener.exitFunctionReturnType(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitFunctionReturnType) {
            return visitor.visitFunctionReturnType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReturnExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_returnExpression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterReturnExpression) {
             listener.enterReturnExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitReturnExpression) {
             listener.exitReturnExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitReturnExpression) {
            return visitor.visitReturnExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CallParamsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_callParams;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterCallParams) {
             listener.enterCallParams(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitCallParams) {
             listener.exitCallParams(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitCallParams) {
            return visitor.visitCallParams(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public functionTypeParams(): FunctionTypeParamsContext | null {
        return this.getRuleContext(0, FunctionTypeParamsContext);
    }
    public functionReturnType(): FunctionReturnTypeContext | null {
        return this.getRuleContext(0, FunctionReturnTypeContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_functionType;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterFunctionType) {
             listener.enterFunctionType(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitFunctionType) {
             listener.exitFunctionType(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitFunctionType) {
            return visitor.visitFunctionType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionTypeParamsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type_(): TypeContext[];
    public type_(i: number): TypeContext | null;
    public type_(i?: number): TypeContext[] | TypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }

        return this.getRuleContext(i, TypeContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_functionTypeParams;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterFunctionTypeParams) {
             listener.enterFunctionTypeParams(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitFunctionTypeParams) {
             listener.exitFunctionTypeParams(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitFunctionTypeParams) {
            return visitor.visitFunctionTypeParams(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BASETYPE(): antlr.TerminalNode | null {
        return this.getToken(SimpleLangParser.BASETYPE, 0);
    }
    public functionType(): FunctionTypeContext | null {
        return this.getRuleContext(0, FunctionTypeContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_type;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if(listener.enterType) {
             listener.enterType(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if(listener.exitType) {
             listener.exitType(this);
        }
    }
    public override accept<Result>(visitor: SimpleLangVisitor<Result>): Result | null {
        if (visitor.visitType) {
            return visitor.visitType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
