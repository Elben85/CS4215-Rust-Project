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
    public static readonly RULE_letStatement = 4;
    public static readonly RULE_expressionStatement = 5;
    public static readonly RULE_expression = 6;
    public static readonly RULE_expressionWithoutBlock = 7;
    public static readonly RULE_primary = 8;
    public static readonly RULE_unop = 9;
    public static readonly RULE_negationExpression = 10;
    public static readonly RULE_dereferenceExpression = 11;
    public static readonly RULE_borrowExpression = 12;
    public static readonly RULE_binopTerminals = 13;
    public static readonly RULE_binop = 14;
    public static readonly RULE_logicalOr = 15;
    public static readonly RULE_logicalAnd = 16;
    public static readonly RULE_comparison = 17;
    public static readonly RULE_additionSubstraction = 18;
    public static readonly RULE_multiplicationDivision = 19;
    public static readonly RULE_primitive = 20;
    public static readonly RULE_accessIdentifier = 21;
    public static readonly RULE_bracket = 22;
    public static readonly RULE_assignmentExpressions = 23;
    public static readonly RULE_expressionWithBlock = 24;
    public static readonly RULE_blockExpression = 25;
    public static readonly RULE_blockBody = 26;
    public static readonly RULE_ifExpression = 27;
    public static readonly RULE_ifExpressionAlternative = 28;
    public static readonly RULE_loopExpression = 29;
    public static readonly RULE_predicateLoopExpression = 30;
    public static readonly RULE_breakExpression = 31;
    public static readonly RULE_continueExpression = 32;
    public static readonly RULE_closureExpression = 33;
    public static readonly RULE_function = 34;
    public static readonly RULE_functionParameters = 35;
    public static readonly RULE_functionParam = 36;
    public static readonly RULE_functionParamPattern = 37;
    public static readonly RULE_functionReturnType = 38;
    public static readonly RULE_returnExpression = 39;
    public static readonly RULE_callExpression = 40;
    public static readonly RULE_callParams = 41;

    public static readonly literalNames = [
        null, "'mut'", "';'", "'let'", "':'", "'='", "'-'", "'!'", "'*'", 
        "'&'", "'||'", "'&&'", "'<'", "'<='", "'>'", "'>='", "'=='", "'!='", 
        "'+'", "'/'", "'%'", "'('", "')'", "'{'", "'}'", "'if'", "'else'", 
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
        "prog", "mutable", "statement", "emptyStatement", "letStatement", 
        "expressionStatement", "expression", "expressionWithoutBlock", "primary", 
        "unop", "negationExpression", "dereferenceExpression", "borrowExpression", 
        "binopTerminals", "binop", "logicalOr", "logicalAnd", "comparison", 
        "additionSubstraction", "multiplicationDivision", "primitive", "accessIdentifier", 
        "bracket", "assignmentExpressions", "expressionWithBlock", "blockExpression", 
        "blockBody", "ifExpression", "ifExpressionAlternative", "loopExpression", 
        "predicateLoopExpression", "breakExpression", "continueExpression", 
        "closureExpression", "function", "functionParameters", "functionParam", 
        "functionParamPattern", "functionReturnType", "returnExpression", 
        "callExpression", "callParams",
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
            this.state = 87;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2057308108) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 93) !== 0)) {
                {
                {
                this.state = 84;
                this.statement();
                }
                }
                this.state = 89;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 90;
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
            this.state = 92;
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
            this.state = 98;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 94;
                this.emptyStatement();
                }
                break;
            case SimpleLangParser.T__2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 95;
                this.letStatement();
                }
                break;
            case SimpleLangParser.T__5:
            case SimpleLangParser.T__6:
            case SimpleLangParser.T__7:
            case SimpleLangParser.T__8:
            case SimpleLangParser.T__9:
            case SimpleLangParser.T__20:
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
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 96;
                this.expressionStatement();
                }
                break;
            case SimpleLangParser.T__31:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 97;
                this.function_();
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
            this.state = 100;
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
    public letStatement(): LetStatementContext {
        let localContext = new LetStatementContext(this.context, this.state);
        this.enterRule(localContext, 8, SimpleLangParser.RULE_letStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 102;
            this.match(SimpleLangParser.T__2);
            this.state = 104;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 103;
                this.mutable();
                }
            }

            this.state = 106;
            this.match(SimpleLangParser.IDENTIFIER);
            this.state = 109;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
                {
                this.state = 107;
                this.match(SimpleLangParser.T__3);
                this.state = 108;
                this.match(SimpleLangParser.TYPE);
                }
            }

            this.state = 113;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 111;
                this.match(SimpleLangParser.T__4);
                this.state = 112;
                this.expression();
                }
            }

            this.state = 115;
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
        this.enterRule(localContext, 10, SimpleLangParser.RULE_expressionStatement);
        try {
            this.state = 124;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 117;
                this.expressionWithBlock();
                this.state = 119;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
                case 1:
                    {
                    this.state = 118;
                    this.match(SimpleLangParser.T__1);
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 121;
                this.expressionWithoutBlock();
                this.state = 122;
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
        this.enterRule(localContext, 12, SimpleLangParser.RULE_expression);
        try {
            this.state = 128;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 126;
                this.expressionWithBlock();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 127;
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
        this.enterRule(localContext, 14, SimpleLangParser.RULE_expressionWithoutBlock);
        try {
            this.state = 136;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 130;
                this.binop();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 131;
                this.breakExpression();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 132;
                this.continueExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 133;
                this.returnExpression();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 134;
                this.callExpression();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 135;
                this.closureExpression();
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
    public primary(): PrimaryContext {
        let localContext = new PrimaryContext(this.context, this.state);
        this.enterRule(localContext, 16, SimpleLangParser.RULE_primary);
        try {
            this.state = 143;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 138;
                this.primitive();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 139;
                this.bracket();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 140;
                this.accessIdentifier();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 141;
                this.unop();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 142;
                this.assignmentExpressions();
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
    public unop(): UnopContext {
        let localContext = new UnopContext(this.context, this.state);
        this.enterRule(localContext, 18, SimpleLangParser.RULE_unop);
        try {
            this.state = 148;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__5:
            case SimpleLangParser.T__6:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 145;
                this.negationExpression();
                }
                break;
            case SimpleLangParser.T__7:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 146;
                this.dereferenceExpression();
                }
                break;
            case SimpleLangParser.T__8:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 147;
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
        this.enterRule(localContext, 20, SimpleLangParser.RULE_negationExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 150;
            localContext._op = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(_la === 6 || _la === 7)) {
                localContext._op = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 151;
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
        this.enterRule(localContext, 22, SimpleLangParser.RULE_dereferenceExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 153;
            this.match(SimpleLangParser.T__7);
            this.state = 156;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__7:
                {
                this.state = 154;
                this.dereferenceExpression();
                }
                break;
            case SimpleLangParser.IDENTIFIER:
                {
                this.state = 155;
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
        this.enterRule(localContext, 24, SimpleLangParser.RULE_borrowExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 158;
            this.match(SimpleLangParser.T__8);
            this.state = 160;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 159;
                this.mutable();
                }
            }

            this.state = 162;
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
        this.enterRule(localContext, 26, SimpleLangParser.RULE_binopTerminals);
        try {
            this.state = 166;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__5:
            case SimpleLangParser.T__6:
            case SimpleLangParser.T__7:
            case SimpleLangParser.T__8:
            case SimpleLangParser.T__20:
            case SimpleLangParser.INT:
            case SimpleLangParser.BOOL:
            case SimpleLangParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 164;
                this.primary();
                }
                break;
            case SimpleLangParser.T__22:
            case SimpleLangParser.T__24:
            case SimpleLangParser.T__26:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 165;
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
    public binop(): BinopContext {
        let localContext = new BinopContext(this.context, this.state);
        this.enterRule(localContext, 28, SimpleLangParser.RULE_binop);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 168;
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
        this.enterRule(localContext, 30, SimpleLangParser.RULE_logicalOr);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 170;
            this.logicalAnd();
            this.state = 175;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 171;
                    this.match(SimpleLangParser.T__9);
                    this.state = 172;
                    this.logicalAnd();
                    }
                    }
                }
                this.state = 177;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context);
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
        this.enterRule(localContext, 32, SimpleLangParser.RULE_logicalAnd);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 178;
            this.comparison();
            this.state = 183;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 179;
                    this.match(SimpleLangParser.T__10);
                    this.state = 180;
                    this.comparison();
                    }
                    }
                }
                this.state = 185;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
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
        this.enterRule(localContext, 34, SimpleLangParser.RULE_comparison);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 186;
            this.additionSubstraction();
            this.state = 189;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 16, this.context) ) {
            case 1:
                {
                this.state = 187;
                localContext._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 258048) !== 0))) {
                    localContext._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 188;
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
        this.enterRule(localContext, 36, SimpleLangParser.RULE_additionSubstraction);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 191;
            this.multiplicationDivision();
            this.state = 196;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 17, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 192;
                    localContext._op = this.tokenStream.LT(1);
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 6 || _la === 18)) {
                        localContext._op = this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 193;
                    this.multiplicationDivision();
                    }
                    }
                }
                this.state = 198;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 17, this.context);
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
        this.enterRule(localContext, 38, SimpleLangParser.RULE_multiplicationDivision);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 199;
            this.binopTerminals();
            this.state = 204;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 200;
                    localContext._op = this.tokenStream.LT(1);
                    _la = this.tokenStream.LA(1);
                    if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1573120) !== 0))) {
                        localContext._op = this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 201;
                    this.binopTerminals();
                    }
                    }
                }
                this.state = 206;
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
    public primitive(): PrimitiveContext {
        let localContext = new PrimitiveContext(this.context, this.state);
        this.enterRule(localContext, 40, SimpleLangParser.RULE_primitive);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 207;
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
        this.enterRule(localContext, 42, SimpleLangParser.RULE_accessIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 209;
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
        this.enterRule(localContext, 44, SimpleLangParser.RULE_bracket);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 211;
            this.match(SimpleLangParser.T__20);
            this.state = 212;
            this.expression();
            this.state = 213;
            this.match(SimpleLangParser.T__21);
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
        this.enterRule(localContext, 46, SimpleLangParser.RULE_assignmentExpressions);
        try {
            this.state = 223;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 215;
                this.accessIdentifier();
                this.state = 216;
                this.match(SimpleLangParser.T__4);
                this.state = 217;
                this.expression();
                }
                break;
            case SimpleLangParser.T__7:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 219;
                this.dereferenceExpression();
                this.state = 220;
                this.match(SimpleLangParser.T__4);
                this.state = 221;
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
        this.enterRule(localContext, 48, SimpleLangParser.RULE_expressionWithBlock);
        try {
            this.state = 228;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__22:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 225;
                this.blockExpression();
                }
                break;
            case SimpleLangParser.T__24:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 226;
                this.ifExpression();
                }
                break;
            case SimpleLangParser.T__26:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 227;
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
        this.enterRule(localContext, 50, SimpleLangParser.RULE_blockExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 230;
            this.match(SimpleLangParser.T__22);
            this.state = 231;
            this.blockBody();
            this.state = 232;
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
        this.enterRule(localContext, 52, SimpleLangParser.RULE_blockBody);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 237;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 234;
                    this.statement();
                    }
                    }
                }
                this.state = 239;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            }
            this.state = 241;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2057308096) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 23) !== 0)) {
                {
                this.state = 240;
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
        this.enterRule(localContext, 54, SimpleLangParser.RULE_ifExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 243;
            this.match(SimpleLangParser.T__24);
            this.state = 244;
            this.expression();
            this.state = 245;
            this.blockExpression();
            this.state = 248;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 26) {
                {
                this.state = 246;
                this.match(SimpleLangParser.T__25);
                this.state = 247;
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
        this.enterRule(localContext, 56, SimpleLangParser.RULE_ifExpressionAlternative);
        try {
            this.state = 252;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__22:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 250;
                this.blockExpression();
                }
                break;
            case SimpleLangParser.T__24:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 251;
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
        this.enterRule(localContext, 58, SimpleLangParser.RULE_loopExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 254;
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
        this.enterRule(localContext, 60, SimpleLangParser.RULE_predicateLoopExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 256;
            this.match(SimpleLangParser.T__26);
            this.state = 257;
            this.expression();
            this.state = 258;
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
        this.enterRule(localContext, 62, SimpleLangParser.RULE_breakExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 260;
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
        this.enterRule(localContext, 64, SimpleLangParser.RULE_continueExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 262;
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
        this.enterRule(localContext, 66, SimpleLangParser.RULE_closureExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 270;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__9:
                {
                this.state = 264;
                this.match(SimpleLangParser.T__9);
                }
                break;
            case SimpleLangParser.T__29:
                {
                this.state = 265;
                this.match(SimpleLangParser.T__29);
                this.state = 267;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 38) {
                    {
                    this.state = 266;
                    this.functionParameters();
                    }
                }

                this.state = 269;
                this.match(SimpleLangParser.T__29);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 276;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__5:
            case SimpleLangParser.T__6:
            case SimpleLangParser.T__7:
            case SimpleLangParser.T__8:
            case SimpleLangParser.T__9:
            case SimpleLangParser.T__20:
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
                this.state = 272;
                this.expression();
                }
                break;
            case SimpleLangParser.T__30:
                {
                this.state = 273;
                this.match(SimpleLangParser.T__30);
                this.state = 274;
                this.match(SimpleLangParser.TYPE);
                this.state = 275;
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
        this.enterRule(localContext, 68, SimpleLangParser.RULE_function);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 278;
            this.match(SimpleLangParser.T__31);
            this.state = 279;
            this.match(SimpleLangParser.IDENTIFIER);
            this.state = 280;
            this.match(SimpleLangParser.T__20);
            this.state = 282;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 38) {
                {
                this.state = 281;
                this.functionParameters();
                }
            }

            this.state = 284;
            this.match(SimpleLangParser.T__21);
            this.state = 286;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 31) {
                {
                this.state = 285;
                this.functionReturnType();
                }
            }

            this.state = 290;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleLangParser.T__22:
                {
                this.state = 288;
                this.blockExpression();
                }
                break;
            case SimpleLangParser.T__1:
                {
                this.state = 289;
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
        this.enterRule(localContext, 70, SimpleLangParser.RULE_functionParameters);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 292;
            this.functionParam();
            this.state = 297;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 31, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 293;
                    this.match(SimpleLangParser.T__32);
                    this.state = 294;
                    this.functionParam();
                    }
                    }
                }
                this.state = 299;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 31, this.context);
            }
            this.state = 301;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 33) {
                {
                this.state = 300;
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
        this.enterRule(localContext, 72, SimpleLangParser.RULE_functionParam);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 303;
            this.functionParamPattern();
            this.state = 304;
            this.match(SimpleLangParser.T__3);
            this.state = 305;
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
        this.enterRule(localContext, 74, SimpleLangParser.RULE_functionParamPattern);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 307;
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
        this.enterRule(localContext, 76, SimpleLangParser.RULE_functionReturnType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 309;
            this.match(SimpleLangParser.T__30);
            this.state = 310;
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
        this.enterRule(localContext, 78, SimpleLangParser.RULE_returnExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 312;
            this.match(SimpleLangParser.T__33);
            this.state = 314;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 33, this.context) ) {
            case 1:
                {
                this.state = 313;
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
    public callExpression(): CallExpressionContext {
        let localContext = new CallExpressionContext(this.context, this.state);
        this.enterRule(localContext, 80, SimpleLangParser.RULE_callExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 316;
            this.primary();
            this.state = 317;
            this.match(SimpleLangParser.T__20);
            this.state = 319;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2057308096) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 23) !== 0)) {
                {
                this.state = 318;
                this.callParams();
                }
            }

            this.state = 321;
            this.match(SimpleLangParser.T__21);
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
        this.enterRule(localContext, 82, SimpleLangParser.RULE_callParams);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 323;
            this.expression();
            this.state = 328;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 324;
                    this.match(SimpleLangParser.T__32);
                    this.state = 325;
                    this.expression();
                    }
                    }
                }
                this.state = 330;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
            }
            this.state = 332;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 33) {
                {
                this.state = 331;
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

    public static readonly _serializedATN: number[] = [
        4,1,39,335,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,
        2,40,7,40,2,41,7,41,1,0,5,0,86,8,0,10,0,12,0,89,9,0,1,0,1,0,1,1,
        1,1,1,2,1,2,1,2,1,2,3,2,99,8,2,1,3,1,3,1,4,1,4,3,4,105,8,4,1,4,1,
        4,1,4,3,4,110,8,4,1,4,1,4,3,4,114,8,4,1,4,1,4,1,5,1,5,3,5,120,8,
        5,1,5,1,5,1,5,3,5,125,8,5,1,6,1,6,3,6,129,8,6,1,7,1,7,1,7,1,7,1,
        7,1,7,3,7,137,8,7,1,8,1,8,1,8,1,8,1,8,3,8,144,8,8,1,9,1,9,1,9,3,
        9,149,8,9,1,10,1,10,1,10,1,11,1,11,1,11,3,11,157,8,11,1,12,1,12,
        3,12,161,8,12,1,12,1,12,1,13,1,13,3,13,167,8,13,1,14,1,14,1,15,1,
        15,1,15,5,15,174,8,15,10,15,12,15,177,9,15,1,16,1,16,1,16,5,16,182,
        8,16,10,16,12,16,185,9,16,1,17,1,17,1,17,3,17,190,8,17,1,18,1,18,
        1,18,5,18,195,8,18,10,18,12,18,198,9,18,1,19,1,19,1,19,5,19,203,
        8,19,10,19,12,19,206,9,19,1,20,1,20,1,21,1,21,1,22,1,22,1,22,1,22,
        1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,224,8,23,1,24,1,24,
        1,24,3,24,229,8,24,1,25,1,25,1,25,1,25,1,26,5,26,236,8,26,10,26,
        12,26,239,9,26,1,26,3,26,242,8,26,1,27,1,27,1,27,1,27,1,27,3,27,
        249,8,27,1,28,1,28,3,28,253,8,28,1,29,1,29,1,30,1,30,1,30,1,30,1,
        31,1,31,1,32,1,32,1,33,1,33,1,33,3,33,268,8,33,1,33,3,33,271,8,33,
        1,33,1,33,1,33,1,33,3,33,277,8,33,1,34,1,34,1,34,1,34,3,34,283,8,
        34,1,34,1,34,3,34,287,8,34,1,34,1,34,3,34,291,8,34,1,35,1,35,1,35,
        5,35,296,8,35,10,35,12,35,299,9,35,1,35,3,35,302,8,35,1,36,1,36,
        1,36,1,36,1,37,1,37,1,38,1,38,1,38,1,39,1,39,3,39,315,8,39,1,40,
        1,40,1,40,3,40,320,8,40,1,40,1,40,1,41,1,41,1,41,5,41,327,8,41,10,
        41,12,41,330,9,41,1,41,3,41,333,8,41,1,41,0,0,42,0,2,4,6,8,10,12,
        14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,
        58,60,62,64,66,68,70,72,74,76,78,80,82,0,5,1,0,6,7,1,0,12,17,2,0,
        6,6,18,18,2,0,8,8,19,20,1,0,35,36,340,0,87,1,0,0,0,2,92,1,0,0,0,
        4,98,1,0,0,0,6,100,1,0,0,0,8,102,1,0,0,0,10,124,1,0,0,0,12,128,1,
        0,0,0,14,136,1,0,0,0,16,143,1,0,0,0,18,148,1,0,0,0,20,150,1,0,0,
        0,22,153,1,0,0,0,24,158,1,0,0,0,26,166,1,0,0,0,28,168,1,0,0,0,30,
        170,1,0,0,0,32,178,1,0,0,0,34,186,1,0,0,0,36,191,1,0,0,0,38,199,
        1,0,0,0,40,207,1,0,0,0,42,209,1,0,0,0,44,211,1,0,0,0,46,223,1,0,
        0,0,48,228,1,0,0,0,50,230,1,0,0,0,52,237,1,0,0,0,54,243,1,0,0,0,
        56,252,1,0,0,0,58,254,1,0,0,0,60,256,1,0,0,0,62,260,1,0,0,0,64,262,
        1,0,0,0,66,270,1,0,0,0,68,278,1,0,0,0,70,292,1,0,0,0,72,303,1,0,
        0,0,74,307,1,0,0,0,76,309,1,0,0,0,78,312,1,0,0,0,80,316,1,0,0,0,
        82,323,1,0,0,0,84,86,3,4,2,0,85,84,1,0,0,0,86,89,1,0,0,0,87,85,1,
        0,0,0,87,88,1,0,0,0,88,90,1,0,0,0,89,87,1,0,0,0,90,91,5,0,0,1,91,
        1,1,0,0,0,92,93,5,1,0,0,93,3,1,0,0,0,94,99,3,6,3,0,95,99,3,8,4,0,
        96,99,3,10,5,0,97,99,3,68,34,0,98,94,1,0,0,0,98,95,1,0,0,0,98,96,
        1,0,0,0,98,97,1,0,0,0,99,5,1,0,0,0,100,101,5,2,0,0,101,7,1,0,0,0,
        102,104,5,3,0,0,103,105,3,2,1,0,104,103,1,0,0,0,104,105,1,0,0,0,
        105,106,1,0,0,0,106,109,5,38,0,0,107,108,5,4,0,0,108,110,5,37,0,
        0,109,107,1,0,0,0,109,110,1,0,0,0,110,113,1,0,0,0,111,112,5,5,0,
        0,112,114,3,12,6,0,113,111,1,0,0,0,113,114,1,0,0,0,114,115,1,0,0,
        0,115,116,5,2,0,0,116,9,1,0,0,0,117,119,3,48,24,0,118,120,5,2,0,
        0,119,118,1,0,0,0,119,120,1,0,0,0,120,125,1,0,0,0,121,122,3,14,7,
        0,122,123,5,2,0,0,123,125,1,0,0,0,124,117,1,0,0,0,124,121,1,0,0,
        0,125,11,1,0,0,0,126,129,3,48,24,0,127,129,3,14,7,0,128,126,1,0,
        0,0,128,127,1,0,0,0,129,13,1,0,0,0,130,137,3,28,14,0,131,137,3,62,
        31,0,132,137,3,64,32,0,133,137,3,78,39,0,134,137,3,80,40,0,135,137,
        3,66,33,0,136,130,1,0,0,0,136,131,1,0,0,0,136,132,1,0,0,0,136,133,
        1,0,0,0,136,134,1,0,0,0,136,135,1,0,0,0,137,15,1,0,0,0,138,144,3,
        40,20,0,139,144,3,44,22,0,140,144,3,42,21,0,141,144,3,18,9,0,142,
        144,3,46,23,0,143,138,1,0,0,0,143,139,1,0,0,0,143,140,1,0,0,0,143,
        141,1,0,0,0,143,142,1,0,0,0,144,17,1,0,0,0,145,149,3,20,10,0,146,
        149,3,22,11,0,147,149,3,24,12,0,148,145,1,0,0,0,148,146,1,0,0,0,
        148,147,1,0,0,0,149,19,1,0,0,0,150,151,7,0,0,0,151,152,3,26,13,0,
        152,21,1,0,0,0,153,156,5,8,0,0,154,157,3,22,11,0,155,157,3,42,21,
        0,156,154,1,0,0,0,156,155,1,0,0,0,157,23,1,0,0,0,158,160,5,9,0,0,
        159,161,3,2,1,0,160,159,1,0,0,0,160,161,1,0,0,0,161,162,1,0,0,0,
        162,163,3,42,21,0,163,25,1,0,0,0,164,167,3,16,8,0,165,167,3,48,24,
        0,166,164,1,0,0,0,166,165,1,0,0,0,167,27,1,0,0,0,168,169,3,30,15,
        0,169,29,1,0,0,0,170,175,3,32,16,0,171,172,5,10,0,0,172,174,3,32,
        16,0,173,171,1,0,0,0,174,177,1,0,0,0,175,173,1,0,0,0,175,176,1,0,
        0,0,176,31,1,0,0,0,177,175,1,0,0,0,178,183,3,34,17,0,179,180,5,11,
        0,0,180,182,3,34,17,0,181,179,1,0,0,0,182,185,1,0,0,0,183,181,1,
        0,0,0,183,184,1,0,0,0,184,33,1,0,0,0,185,183,1,0,0,0,186,189,3,36,
        18,0,187,188,7,1,0,0,188,190,3,36,18,0,189,187,1,0,0,0,189,190,1,
        0,0,0,190,35,1,0,0,0,191,196,3,38,19,0,192,193,7,2,0,0,193,195,3,
        38,19,0,194,192,1,0,0,0,195,198,1,0,0,0,196,194,1,0,0,0,196,197,
        1,0,0,0,197,37,1,0,0,0,198,196,1,0,0,0,199,204,3,26,13,0,200,201,
        7,3,0,0,201,203,3,26,13,0,202,200,1,0,0,0,203,206,1,0,0,0,204,202,
        1,0,0,0,204,205,1,0,0,0,205,39,1,0,0,0,206,204,1,0,0,0,207,208,7,
        4,0,0,208,41,1,0,0,0,209,210,5,38,0,0,210,43,1,0,0,0,211,212,5,21,
        0,0,212,213,3,12,6,0,213,214,5,22,0,0,214,45,1,0,0,0,215,216,3,42,
        21,0,216,217,5,5,0,0,217,218,3,12,6,0,218,224,1,0,0,0,219,220,3,
        22,11,0,220,221,5,5,0,0,221,222,3,12,6,0,222,224,1,0,0,0,223,215,
        1,0,0,0,223,219,1,0,0,0,224,47,1,0,0,0,225,229,3,50,25,0,226,229,
        3,54,27,0,227,229,3,58,29,0,228,225,1,0,0,0,228,226,1,0,0,0,228,
        227,1,0,0,0,229,49,1,0,0,0,230,231,5,23,0,0,231,232,3,52,26,0,232,
        233,5,24,0,0,233,51,1,0,0,0,234,236,3,4,2,0,235,234,1,0,0,0,236,
        239,1,0,0,0,237,235,1,0,0,0,237,238,1,0,0,0,238,241,1,0,0,0,239,
        237,1,0,0,0,240,242,3,14,7,0,241,240,1,0,0,0,241,242,1,0,0,0,242,
        53,1,0,0,0,243,244,5,25,0,0,244,245,3,12,6,0,245,248,3,50,25,0,246,
        247,5,26,0,0,247,249,3,56,28,0,248,246,1,0,0,0,248,249,1,0,0,0,249,
        55,1,0,0,0,250,253,3,50,25,0,251,253,3,54,27,0,252,250,1,0,0,0,252,
        251,1,0,0,0,253,57,1,0,0,0,254,255,3,60,30,0,255,59,1,0,0,0,256,
        257,5,27,0,0,257,258,3,12,6,0,258,259,3,50,25,0,259,61,1,0,0,0,260,
        261,5,28,0,0,261,63,1,0,0,0,262,263,5,29,0,0,263,65,1,0,0,0,264,
        271,5,10,0,0,265,267,5,30,0,0,266,268,3,70,35,0,267,266,1,0,0,0,
        267,268,1,0,0,0,268,269,1,0,0,0,269,271,5,30,0,0,270,264,1,0,0,0,
        270,265,1,0,0,0,271,276,1,0,0,0,272,277,3,12,6,0,273,274,5,31,0,
        0,274,275,5,37,0,0,275,277,3,50,25,0,276,272,1,0,0,0,276,273,1,0,
        0,0,277,67,1,0,0,0,278,279,5,32,0,0,279,280,5,38,0,0,280,282,5,21,
        0,0,281,283,3,70,35,0,282,281,1,0,0,0,282,283,1,0,0,0,283,284,1,
        0,0,0,284,286,5,22,0,0,285,287,3,76,38,0,286,285,1,0,0,0,286,287,
        1,0,0,0,287,290,1,0,0,0,288,291,3,50,25,0,289,291,5,2,0,0,290,288,
        1,0,0,0,290,289,1,0,0,0,291,69,1,0,0,0,292,297,3,72,36,0,293,294,
        5,33,0,0,294,296,3,72,36,0,295,293,1,0,0,0,296,299,1,0,0,0,297,295,
        1,0,0,0,297,298,1,0,0,0,298,301,1,0,0,0,299,297,1,0,0,0,300,302,
        5,33,0,0,301,300,1,0,0,0,301,302,1,0,0,0,302,71,1,0,0,0,303,304,
        3,74,37,0,304,305,5,4,0,0,305,306,5,37,0,0,306,73,1,0,0,0,307,308,
        5,38,0,0,308,75,1,0,0,0,309,310,5,31,0,0,310,311,5,37,0,0,311,77,
        1,0,0,0,312,314,5,34,0,0,313,315,3,12,6,0,314,313,1,0,0,0,314,315,
        1,0,0,0,315,79,1,0,0,0,316,317,3,16,8,0,317,319,5,21,0,0,318,320,
        3,82,41,0,319,318,1,0,0,0,319,320,1,0,0,0,320,321,1,0,0,0,321,322,
        5,22,0,0,322,81,1,0,0,0,323,328,3,12,6,0,324,325,5,33,0,0,325,327,
        3,12,6,0,326,324,1,0,0,0,327,330,1,0,0,0,328,326,1,0,0,0,328,329,
        1,0,0,0,329,332,1,0,0,0,330,328,1,0,0,0,331,333,5,33,0,0,332,331,
        1,0,0,0,332,333,1,0,0,0,333,83,1,0,0,0,37,87,98,104,109,113,119,
        124,128,136,143,148,156,160,166,175,183,189,196,204,223,228,237,
        241,248,252,267,270,276,282,286,290,297,301,314,319,328,332
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
    public letStatement(): LetStatementContext | null {
        return this.getRuleContext(0, LetStatementContext);
    }
    public expressionStatement(): ExpressionStatementContext | null {
        return this.getRuleContext(0, ExpressionStatementContext);
    }
    public function(): FunctionContext | null {
        return this.getRuleContext(0, FunctionContext);
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
    public callExpression(): CallExpressionContext | null {
        return this.getRuleContext(0, CallExpressionContext);
    }
    public closureExpression(): ClosureExpressionContext | null {
        return this.getRuleContext(0, ClosureExpressionContext);
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


export class CallExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public primary(): PrimaryContext {
        return this.getRuleContext(0, PrimaryContext)!;
    }
    public callParams(): CallParamsContext | null {
        return this.getRuleContext(0, CallParamsContext);
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
