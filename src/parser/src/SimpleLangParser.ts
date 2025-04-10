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
    public static readonly TYPE = 37;
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
        null, null, "INT", "BOOL", "TYPE", "IDENTIFIER", "WS"
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
        "callParams",
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
            this.state = 91;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2055216972) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 93) !== 0)) {
                {
                {
                this.state = 88;
                this.statement();
                }
                }
                this.state = 93;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 94;
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
            this.state = 96;
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
            this.state = 102;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 98;
                this.emptyStatement();
                }
                break;
            case SimpleLangParser.T__31:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 99;
                this.item();
                }
                break;
            case SimpleLangParser.T__2:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 100;
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
                this.state = 101;
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
            this.state = 104;
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
            this.state = 106;
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
            this.state = 108;
            this.match(SimpleLangParser.T__2);
            this.state = 110;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 109;
                this.mutable();
                }
            }

            this.state = 112;
            this.match(SimpleLangParser.IDENTIFIER);
            this.state = 115;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
                {
                this.state = 113;
                this.match(SimpleLangParser.T__3);
                this.state = 114;
                this.match(SimpleLangParser.TYPE);
                }
            }

            this.state = 119;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 117;
                this.match(SimpleLangParser.T__4);
                this.state = 118;
                this.expression();
                }
            }

            this.state = 121;
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
            this.state = 130;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 123;
                this.expressionWithBlock();
                this.state = 125;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
                case 1:
                    {
                    this.state = 124;
                    this.match(SimpleLangParser.T__1);
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 127;
                this.expressionWithoutBlock();
                this.state = 128;
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
            this.state = 134;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 132;
                this.expressionWithBlock();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 133;
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
            this.state = 140;
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
                this.state = 136;
                this.binop();
                }
                break;
            case SimpleLangParser.T__27:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 137;
                this.breakExpression();
                }
                break;
            case SimpleLangParser.T__28:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 138;
                this.continueExpression();
                }
                break;
            case SimpleLangParser.T__33:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 139;
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
            this.state = 149;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 142;
                this.primitive();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 143;
                this.bracket();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 144;
                this.accessIdentifier();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 145;
                this.unop();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 146;
                this.assignmentExpressions();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 147;
                this.closureExpression();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 148;
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
            this.state = 152;
            this.callExpressionTerminal();
            this.state = 153;
            this.match(SimpleLangParser.T__5);
            this.state = 155;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2055216960) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 23) !== 0)) {
                {
                this.state = 154;
                this.callParams();
                }
            }

            this.state = 157;
            this.match(SimpleLangParser.T__6);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 167;
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
                    this.state = 159;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 160;
                    this.match(SimpleLangParser.T__5);
                    this.state = 162;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2055216960) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 23) !== 0)) {
                        {
                        this.state = 161;
                        this.callParams();
                        }
                    }

                    this.state = 164;
                    this.match(SimpleLangParser.T__6);
                    }
                    }
                }
                this.state = 169;
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
            this.state = 173;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__5:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 170;
                this.bracket();
                }
                break;
            case SimpleLangParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 171;
                this.accessIdentifier();
                }
                break;
            case SimpleLangParser.T__22:
            case SimpleLangParser.T__24:
            case SimpleLangParser.T__26:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 172;
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
            this.state = 178;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__7:
            case SimpleLangParser.T__8:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 175;
                this.negationExpression();
                }
                break;
            case SimpleLangParser.T__9:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 176;
                this.dereferenceExpression();
                }
                break;
            case SimpleLangParser.T__10:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 177;
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
            this.state = 180;
            localContext._op = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(_la === 8 || _la === 9)) {
                localContext._op = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 181;
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
            this.state = 183;
            this.match(SimpleLangParser.T__9);
            this.state = 186;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__9:
                {
                this.state = 184;
                this.dereferenceExpression();
                }
                break;
            case SimpleLangParser.IDENTIFIER:
                {
                this.state = 185;
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
            this.state = 188;
            this.match(SimpleLangParser.T__10);
            this.state = 190;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 189;
                this.mutable();
                }
            }

            this.state = 192;
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
            this.state = 196;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 17, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 194;
                this.primary();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 195;
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
            this.state = 198;
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
            this.state = 200;
            this.logicalAnd();
            this.state = 205;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 201;
                    this.match(SimpleLangParser.T__11);
                    this.state = 202;
                    this.logicalAnd();
                    }
                    }
                }
                this.state = 207;
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
            this.state = 208;
            this.comparison();
            this.state = 213;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 209;
                    this.match(SimpleLangParser.T__12);
                    this.state = 210;
                    this.comparison();
                    }
                    }
                }
                this.state = 215;
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
            this.state = 216;
            this.additionSubstraction();
            this.state = 219;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
            case 1:
                {
                this.state = 217;
                localContext._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1032192) !== 0))) {
                    localContext._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 218;
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
            this.state = 221;
            this.multiplicationDivision();
            this.state = 226;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 222;
                    localContext._op = this.tokenStream.LT(1);
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 8 || _la === 20)) {
                        localContext._op = this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 223;
                    this.multiplicationDivision();
                    }
                    }
                }
                this.state = 228;
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
            this.state = 229;
            this.binopTerminals();
            this.state = 234;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 230;
                    localContext._op = this.tokenStream.LT(1);
                    _la = this.tokenStream.LA(1);
                    if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 6292480) !== 0))) {
                        localContext._op = this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 231;
                    this.binopTerminals();
                    }
                    }
                }
                this.state = 236;
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
            this.state = 237;
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
            this.state = 239;
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
            this.state = 241;
            this.match(SimpleLangParser.T__5);
            this.state = 242;
            this.expression();
            this.state = 243;
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
            this.state = 253;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 245;
                this.accessIdentifier();
                this.state = 246;
                this.match(SimpleLangParser.T__4);
                this.state = 247;
                this.expression();
                }
                break;
            case SimpleLangParser.T__9:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 249;
                this.dereferenceExpression();
                this.state = 250;
                this.match(SimpleLangParser.T__4);
                this.state = 251;
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
            this.state = 258;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__22:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 255;
                this.blockExpression();
                }
                break;
            case SimpleLangParser.T__24:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 256;
                this.ifExpression();
                }
                break;
            case SimpleLangParser.T__26:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 257;
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
            this.state = 260;
            this.match(SimpleLangParser.T__22);
            this.state = 261;
            this.blockBody();
            this.state = 262;
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
            this.state = 267;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 25, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 264;
                    this.statement();
                    }
                    }
                }
                this.state = 269;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 25, this.context);
            }
            this.state = 271;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2055216960) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 23) !== 0)) {
                {
                this.state = 270;
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
            this.state = 273;
            this.match(SimpleLangParser.T__24);
            this.state = 274;
            this.expression();
            this.state = 275;
            this.blockExpression();
            this.state = 278;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 26) {
                {
                this.state = 276;
                this.match(SimpleLangParser.T__25);
                this.state = 277;
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
            this.state = 282;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__22:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 280;
                this.blockExpression();
                }
                break;
            case SimpleLangParser.T__24:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 281;
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
            this.state = 284;
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
            this.state = 286;
            this.match(SimpleLangParser.T__26);
            this.state = 287;
            this.expression();
            this.state = 288;
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
            this.state = 290;
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
            this.state = 292;
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
            this.state = 300;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__11:
                {
                this.state = 294;
                this.match(SimpleLangParser.T__11);
                }
                break;
            case SimpleLangParser.T__29:
                {
                this.state = 295;
                this.match(SimpleLangParser.T__29);
                this.state = 297;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 38) {
                    {
                    this.state = 296;
                    this.functionParameters();
                    }
                }

                this.state = 299;
                this.match(SimpleLangParser.T__29);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 306;
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
                this.state = 302;
                this.expression();
                }
                break;
            case SimpleLangParser.T__30:
                {
                this.state = 303;
                this.match(SimpleLangParser.T__30);
                this.state = 304;
                this.match(SimpleLangParser.TYPE);
                this.state = 305;
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
            this.state = 308;
            this.match(SimpleLangParser.T__31);
            this.state = 309;
            this.match(SimpleLangParser.IDENTIFIER);
            this.state = 310;
            this.match(SimpleLangParser.T__5);
            this.state = 312;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 38) {
                {
                this.state = 311;
                this.functionParameters();
                }
            }

            this.state = 314;
            this.match(SimpleLangParser.T__6);
            this.state = 316;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 31) {
                {
                this.state = 315;
                this.functionReturnType();
                }
            }

            this.state = 320;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__22:
                {
                this.state = 318;
                this.blockExpression();
                }
                break;
            case SimpleLangParser.T__1:
                {
                this.state = 319;
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
            this.state = 322;
            this.functionParam();
            this.state = 327;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 323;
                    this.match(SimpleLangParser.T__32);
                    this.state = 324;
                    this.functionParam();
                    }
                    }
                }
                this.state = 329;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
            }
            this.state = 331;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 33) {
                {
                this.state = 330;
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
            this.state = 333;
            this.functionParamPattern();
            this.state = 334;
            this.match(SimpleLangParser.T__3);
            this.state = 335;
            this.match(SimpleLangParser.TYPE);
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
            this.state = 337;
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
            this.state = 339;
            this.match(SimpleLangParser.T__30);
            this.state = 340;
            this.match(SimpleLangParser.TYPE);
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
            this.state = 342;
            this.match(SimpleLangParser.T__33);
            this.state = 344;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 37, this.context) ) {
            case 1:
                {
                this.state = 343;
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
            this.state = 346;
            this.expression();
            this.state = 351;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 347;
                    this.match(SimpleLangParser.T__32);
                    this.state = 348;
                    this.expression();
                    }
                    }
                }
                this.state = 353;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
            }
            this.state = 355;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 33) {
                {
                this.state = 354;
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
        4,1,39,358,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,
        2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,1,0,5,0,90,8,0,10,0,12,0,
        93,9,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,3,2,103,8,2,1,3,1,3,1,4,1,
        4,1,5,1,5,3,5,111,8,5,1,5,1,5,1,5,3,5,116,8,5,1,5,1,5,3,5,120,8,
        5,1,5,1,5,1,6,1,6,3,6,126,8,6,1,6,1,6,1,6,3,6,131,8,6,1,7,1,7,3,
        7,135,8,7,1,8,1,8,1,8,1,8,3,8,141,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,
        9,3,9,150,8,9,1,10,1,10,1,10,1,10,3,10,156,8,10,1,10,1,10,1,10,1,
        10,1,10,3,10,163,8,10,1,10,5,10,166,8,10,10,10,12,10,169,9,10,1,
        11,1,11,1,11,3,11,174,8,11,1,12,1,12,1,12,3,12,179,8,12,1,13,1,13,
        1,13,1,14,1,14,1,14,3,14,187,8,14,1,15,1,15,3,15,191,8,15,1,15,1,
        15,1,16,1,16,3,16,197,8,16,1,17,1,17,1,18,1,18,1,18,5,18,204,8,18,
        10,18,12,18,207,9,18,1,19,1,19,1,19,5,19,212,8,19,10,19,12,19,215,
        9,19,1,20,1,20,1,20,3,20,220,8,20,1,21,1,21,1,21,5,21,225,8,21,10,
        21,12,21,228,9,21,1,22,1,22,1,22,5,22,233,8,22,10,22,12,22,236,9,
        22,1,23,1,23,1,24,1,24,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,
        26,1,26,1,26,1,26,3,26,254,8,26,1,27,1,27,1,27,3,27,259,8,27,1,28,
        1,28,1,28,1,28,1,29,5,29,266,8,29,10,29,12,29,269,9,29,1,29,3,29,
        272,8,29,1,30,1,30,1,30,1,30,1,30,3,30,279,8,30,1,31,1,31,3,31,283,
        8,31,1,32,1,32,1,33,1,33,1,33,1,33,1,34,1,34,1,35,1,35,1,36,1,36,
        1,36,3,36,298,8,36,1,36,3,36,301,8,36,1,36,1,36,1,36,1,36,3,36,307,
        8,36,1,37,1,37,1,37,1,37,3,37,313,8,37,1,37,1,37,3,37,317,8,37,1,
        37,1,37,3,37,321,8,37,1,38,1,38,1,38,5,38,326,8,38,10,38,12,38,329,
        9,38,1,38,3,38,332,8,38,1,39,1,39,1,39,1,39,1,40,1,40,1,41,1,41,
        1,41,1,42,1,42,3,42,345,8,42,1,43,1,43,1,43,5,43,350,8,43,10,43,
        12,43,353,9,43,1,43,3,43,356,8,43,1,43,0,1,20,44,0,2,4,6,8,10,12,
        14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,
        58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,0,5,1,0,8,9,1,0,14,
        19,2,0,8,8,20,20,2,0,10,10,21,22,1,0,35,36,365,0,91,1,0,0,0,2,96,
        1,0,0,0,4,102,1,0,0,0,6,104,1,0,0,0,8,106,1,0,0,0,10,108,1,0,0,0,
        12,130,1,0,0,0,14,134,1,0,0,0,16,140,1,0,0,0,18,149,1,0,0,0,20,151,
        1,0,0,0,22,173,1,0,0,0,24,178,1,0,0,0,26,180,1,0,0,0,28,183,1,0,
        0,0,30,188,1,0,0,0,32,196,1,0,0,0,34,198,1,0,0,0,36,200,1,0,0,0,
        38,208,1,0,0,0,40,216,1,0,0,0,42,221,1,0,0,0,44,229,1,0,0,0,46,237,
        1,0,0,0,48,239,1,0,0,0,50,241,1,0,0,0,52,253,1,0,0,0,54,258,1,0,
        0,0,56,260,1,0,0,0,58,267,1,0,0,0,60,273,1,0,0,0,62,282,1,0,0,0,
        64,284,1,0,0,0,66,286,1,0,0,0,68,290,1,0,0,0,70,292,1,0,0,0,72,300,
        1,0,0,0,74,308,1,0,0,0,76,322,1,0,0,0,78,333,1,0,0,0,80,337,1,0,
        0,0,82,339,1,0,0,0,84,342,1,0,0,0,86,346,1,0,0,0,88,90,3,4,2,0,89,
        88,1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,94,1,0,0,
        0,93,91,1,0,0,0,94,95,5,0,0,1,95,1,1,0,0,0,96,97,5,1,0,0,97,3,1,
        0,0,0,98,103,3,6,3,0,99,103,3,8,4,0,100,103,3,10,5,0,101,103,3,12,
        6,0,102,98,1,0,0,0,102,99,1,0,0,0,102,100,1,0,0,0,102,101,1,0,0,
        0,103,5,1,0,0,0,104,105,5,2,0,0,105,7,1,0,0,0,106,107,3,74,37,0,
        107,9,1,0,0,0,108,110,5,3,0,0,109,111,3,2,1,0,110,109,1,0,0,0,110,
        111,1,0,0,0,111,112,1,0,0,0,112,115,5,38,0,0,113,114,5,4,0,0,114,
        116,5,37,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,119,1,0,0,0,117,
        118,5,5,0,0,118,120,3,14,7,0,119,117,1,0,0,0,119,120,1,0,0,0,120,
        121,1,0,0,0,121,122,5,2,0,0,122,11,1,0,0,0,123,125,3,54,27,0,124,
        126,5,2,0,0,125,124,1,0,0,0,125,126,1,0,0,0,126,131,1,0,0,0,127,
        128,3,16,8,0,128,129,5,2,0,0,129,131,1,0,0,0,130,123,1,0,0,0,130,
        127,1,0,0,0,131,13,1,0,0,0,132,135,3,54,27,0,133,135,3,16,8,0,134,
        132,1,0,0,0,134,133,1,0,0,0,135,15,1,0,0,0,136,141,3,34,17,0,137,
        141,3,68,34,0,138,141,3,70,35,0,139,141,3,84,42,0,140,136,1,0,0,
        0,140,137,1,0,0,0,140,138,1,0,0,0,140,139,1,0,0,0,141,17,1,0,0,0,
        142,150,3,46,23,0,143,150,3,50,25,0,144,150,3,48,24,0,145,150,3,
        24,12,0,146,150,3,52,26,0,147,150,3,72,36,0,148,150,3,20,10,0,149,
        142,1,0,0,0,149,143,1,0,0,0,149,144,1,0,0,0,149,145,1,0,0,0,149,
        146,1,0,0,0,149,147,1,0,0,0,149,148,1,0,0,0,150,19,1,0,0,0,151,152,
        6,10,-1,0,152,153,3,22,11,0,153,155,5,6,0,0,154,156,3,86,43,0,155,
        154,1,0,0,0,155,156,1,0,0,0,156,157,1,0,0,0,157,158,5,7,0,0,158,
        167,1,0,0,0,159,160,10,2,0,0,160,162,5,6,0,0,161,163,3,86,43,0,162,
        161,1,0,0,0,162,163,1,0,0,0,163,164,1,0,0,0,164,166,5,7,0,0,165,
        159,1,0,0,0,166,169,1,0,0,0,167,165,1,0,0,0,167,168,1,0,0,0,168,
        21,1,0,0,0,169,167,1,0,0,0,170,174,3,50,25,0,171,174,3,48,24,0,172,
        174,3,54,27,0,173,170,1,0,0,0,173,171,1,0,0,0,173,172,1,0,0,0,174,
        23,1,0,0,0,175,179,3,26,13,0,176,179,3,28,14,0,177,179,3,30,15,0,
        178,175,1,0,0,0,178,176,1,0,0,0,178,177,1,0,0,0,179,25,1,0,0,0,180,
        181,7,0,0,0,181,182,3,32,16,0,182,27,1,0,0,0,183,186,5,10,0,0,184,
        187,3,28,14,0,185,187,3,48,24,0,186,184,1,0,0,0,186,185,1,0,0,0,
        187,29,1,0,0,0,188,190,5,11,0,0,189,191,3,2,1,0,190,189,1,0,0,0,
        190,191,1,0,0,0,191,192,1,0,0,0,192,193,3,48,24,0,193,31,1,0,0,0,
        194,197,3,18,9,0,195,197,3,54,27,0,196,194,1,0,0,0,196,195,1,0,0,
        0,197,33,1,0,0,0,198,199,3,36,18,0,199,35,1,0,0,0,200,205,3,38,19,
        0,201,202,5,12,0,0,202,204,3,38,19,0,203,201,1,0,0,0,204,207,1,0,
        0,0,205,203,1,0,0,0,205,206,1,0,0,0,206,37,1,0,0,0,207,205,1,0,0,
        0,208,213,3,40,20,0,209,210,5,13,0,0,210,212,3,40,20,0,211,209,1,
        0,0,0,212,215,1,0,0,0,213,211,1,0,0,0,213,214,1,0,0,0,214,39,1,0,
        0,0,215,213,1,0,0,0,216,219,3,42,21,0,217,218,7,1,0,0,218,220,3,
        42,21,0,219,217,1,0,0,0,219,220,1,0,0,0,220,41,1,0,0,0,221,226,3,
        44,22,0,222,223,7,2,0,0,223,225,3,44,22,0,224,222,1,0,0,0,225,228,
        1,0,0,0,226,224,1,0,0,0,226,227,1,0,0,0,227,43,1,0,0,0,228,226,1,
        0,0,0,229,234,3,32,16,0,230,231,7,3,0,0,231,233,3,32,16,0,232,230,
        1,0,0,0,233,236,1,0,0,0,234,232,1,0,0,0,234,235,1,0,0,0,235,45,1,
        0,0,0,236,234,1,0,0,0,237,238,7,4,0,0,238,47,1,0,0,0,239,240,5,38,
        0,0,240,49,1,0,0,0,241,242,5,6,0,0,242,243,3,14,7,0,243,244,5,7,
        0,0,244,51,1,0,0,0,245,246,3,48,24,0,246,247,5,5,0,0,247,248,3,14,
        7,0,248,254,1,0,0,0,249,250,3,28,14,0,250,251,5,5,0,0,251,252,3,
        14,7,0,252,254,1,0,0,0,253,245,1,0,0,0,253,249,1,0,0,0,254,53,1,
        0,0,0,255,259,3,56,28,0,256,259,3,60,30,0,257,259,3,64,32,0,258,
        255,1,0,0,0,258,256,1,0,0,0,258,257,1,0,0,0,259,55,1,0,0,0,260,261,
        5,23,0,0,261,262,3,58,29,0,262,263,5,24,0,0,263,57,1,0,0,0,264,266,
        3,4,2,0,265,264,1,0,0,0,266,269,1,0,0,0,267,265,1,0,0,0,267,268,
        1,0,0,0,268,271,1,0,0,0,269,267,1,0,0,0,270,272,3,16,8,0,271,270,
        1,0,0,0,271,272,1,0,0,0,272,59,1,0,0,0,273,274,5,25,0,0,274,275,
        3,14,7,0,275,278,3,56,28,0,276,277,5,26,0,0,277,279,3,62,31,0,278,
        276,1,0,0,0,278,279,1,0,0,0,279,61,1,0,0,0,280,283,3,56,28,0,281,
        283,3,60,30,0,282,280,1,0,0,0,282,281,1,0,0,0,283,63,1,0,0,0,284,
        285,3,66,33,0,285,65,1,0,0,0,286,287,5,27,0,0,287,288,3,14,7,0,288,
        289,3,56,28,0,289,67,1,0,0,0,290,291,5,28,0,0,291,69,1,0,0,0,292,
        293,5,29,0,0,293,71,1,0,0,0,294,301,5,12,0,0,295,297,5,30,0,0,296,
        298,3,76,38,0,297,296,1,0,0,0,297,298,1,0,0,0,298,299,1,0,0,0,299,
        301,5,30,0,0,300,294,1,0,0,0,300,295,1,0,0,0,301,306,1,0,0,0,302,
        307,3,14,7,0,303,304,5,31,0,0,304,305,5,37,0,0,305,307,3,56,28,0,
        306,302,1,0,0,0,306,303,1,0,0,0,307,73,1,0,0,0,308,309,5,32,0,0,
        309,310,5,38,0,0,310,312,5,6,0,0,311,313,3,76,38,0,312,311,1,0,0,
        0,312,313,1,0,0,0,313,314,1,0,0,0,314,316,5,7,0,0,315,317,3,82,41,
        0,316,315,1,0,0,0,316,317,1,0,0,0,317,320,1,0,0,0,318,321,3,56,28,
        0,319,321,5,2,0,0,320,318,1,0,0,0,320,319,1,0,0,0,321,75,1,0,0,0,
        322,327,3,78,39,0,323,324,5,33,0,0,324,326,3,78,39,0,325,323,1,0,
        0,0,326,329,1,0,0,0,327,325,1,0,0,0,327,328,1,0,0,0,328,331,1,0,
        0,0,329,327,1,0,0,0,330,332,5,33,0,0,331,330,1,0,0,0,331,332,1,0,
        0,0,332,77,1,0,0,0,333,334,3,80,40,0,334,335,5,4,0,0,335,336,5,37,
        0,0,336,79,1,0,0,0,337,338,5,38,0,0,338,81,1,0,0,0,339,340,5,31,
        0,0,340,341,5,37,0,0,341,83,1,0,0,0,342,344,5,34,0,0,343,345,3,14,
        7,0,344,343,1,0,0,0,344,345,1,0,0,0,345,85,1,0,0,0,346,351,3,14,
        7,0,347,348,5,33,0,0,348,350,3,14,7,0,349,347,1,0,0,0,350,353,1,
        0,0,0,351,349,1,0,0,0,351,352,1,0,0,0,352,355,1,0,0,0,353,351,1,
        0,0,0,354,356,5,33,0,0,355,354,1,0,0,0,355,356,1,0,0,0,356,87,1,
        0,0,0,40,91,102,110,115,119,125,130,134,140,149,155,162,167,173,
        178,186,190,196,205,213,219,226,234,253,258,267,271,278,282,297,
        300,306,312,316,320,327,331,344,351,355
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
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(SimpleLangParser.TYPE, 0);
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
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(SimpleLangParser.TYPE, 0);
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
    public TYPE(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.TYPE, 0)!;
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
    public TYPE(): antlr.TerminalNode {
        return this.getToken(SimpleLangParser.TYPE, 0)!;
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
