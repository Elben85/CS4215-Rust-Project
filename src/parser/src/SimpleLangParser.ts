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
    public static readonly INT = 20;
    public static readonly BOOL = 21;
    public static readonly TYPE = 22;
    public static readonly IDENTIFIER = 23;
    public static readonly WS = 24;
    public static readonly RULE_prog = 0;
    public static readonly RULE_mutable = 1;
    public static readonly RULE_statement = 2;
    public static readonly RULE_emptyStatement = 3;
    public static readonly RULE_letStatement = 4;
    public static readonly RULE_expressionStatement = 5;
    public static readonly RULE_expression = 6;
    public static readonly RULE_expressionWithoutBlock = 7;
    public static readonly RULE_primary = 8;
    public static readonly RULE_binopTerminals = 9;
    public static readonly RULE_binop = 10;
    public static readonly RULE_logicalOr = 11;
    public static readonly RULE_logicalAnd = 12;
    public static readonly RULE_comparison = 13;
    public static readonly RULE_additionSubstraction = 14;
    public static readonly RULE_multiplicationDivision = 15;
    public static readonly RULE_primitive = 16;
    public static readonly RULE_accessIdentifier = 17;
    public static readonly RULE_bracket = 18;
    public static readonly RULE_expressionWithBlock = 19;
    public static readonly RULE_blockExpression = 20;
    public static readonly RULE_blockBody = 21;

    public static readonly literalNames = [
        null, "'mut'", "';'", "'let'", "':'", "'='", "'||'", "'&&'", "'<'",
        "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", "'/'", "'('", "')'",
        "'{'", "'}'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, "INT", "BOOL",
        "TYPE", "IDENTIFIER", "WS"
    ];
    public static readonly ruleNames = [
        "prog", "mutable", "statement", "emptyStatement", "letStatement",
        "expressionStatement", "expression", "expressionWithoutBlock", "primary",
        "binopTerminals", "binop", "logicalOr", "logicalAnd", "comparison",
        "additionSubstraction", "multiplicationDivision", "primitive", "accessIdentifier",
        "bracket", "expressionWithBlock", "blockExpression", "blockBody",
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
                this.state = 47;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 11862028) !== 0)) {
                    {
                        {
                            this.state = 44;
                            this.statement();
                        }
                    }
                    this.state = 49;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 50;
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
                this.state = 52;
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
            this.state = 57;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case SimpleLangParser.T__1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 54;
                        this.emptyStatement();
                    }
                    break;
                case SimpleLangParser.T__2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 55;
                        this.letStatement();
                    }
                    break;
                case SimpleLangParser.T__15:
                case SimpleLangParser.T__17:
                case SimpleLangParser.INT:
                case SimpleLangParser.BOOL:
                case SimpleLangParser.IDENTIFIER:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 56;
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
                this.state = 59;
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
                this.state = 61;
                this.match(SimpleLangParser.T__2);
                this.state = 63;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                        this.state = 62;
                        this.mutable();
                    }
                }

                this.state = 65;
                this.match(SimpleLangParser.IDENTIFIER);
                this.state = 68;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 4) {
                    {
                        this.state = 66;
                        this.match(SimpleLangParser.T__3);
                        this.state = 67;
                        this.match(SimpleLangParser.TYPE);
                    }
                }

                this.state = 72;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 5) {
                    {
                        this.state = 70;
                        this.match(SimpleLangParser.T__4);
                        this.state = 71;
                        this.expression();
                    }
                }

                this.state = 74;
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
            this.state = 83;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 76;
                        this.expressionWithoutBlock();
                        this.state = 77;
                        this.match(SimpleLangParser.T__1);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 79;
                        this.expressionWithBlock();
                        this.state = 81;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context)) {
                            case 1:
                                {
                                    this.state = 80;
                                    this.match(SimpleLangParser.T__1);
                                }
                                break;
                        }
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
            this.state = 87;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 85;
                        this.expressionWithoutBlock();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 86;
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
    public expressionWithoutBlock(): ExpressionWithoutBlockContext {
        let localContext = new ExpressionWithoutBlockContext(this.context, this.state);
        this.enterRule(localContext, 14, SimpleLangParser.RULE_expressionWithoutBlock);
        try {
            this.state = 91;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 89;
                        this.binop();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 90;
                        this.primary();
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
            this.state = 96;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case SimpleLangParser.INT:
                case SimpleLangParser.BOOL:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 93;
                        this.primitive();
                    }
                    break;
                case SimpleLangParser.T__15:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 94;
                        this.bracket();
                    }
                    break;
                case SimpleLangParser.IDENTIFIER:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 95;
                        this.accessIdentifier();
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
    public binopTerminals(): BinopTerminalsContext {
        let localContext = new BinopTerminalsContext(this.context, this.state);
        this.enterRule(localContext, 18, SimpleLangParser.RULE_binopTerminals);
        try {
            this.state = 100;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case SimpleLangParser.T__15:
                case SimpleLangParser.INT:
                case SimpleLangParser.BOOL:
                case SimpleLangParser.IDENTIFIER:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 98;
                        this.primary();
                    }
                    break;
                case SimpleLangParser.T__17:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 99;
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
        this.enterRule(localContext, 20, SimpleLangParser.RULE_binop);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 102;
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
        this.enterRule(localContext, 22, SimpleLangParser.RULE_logicalOr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 104;
                this.logicalAnd();
                this.state = 109;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 6) {
                    {
                        {
                            this.state = 105;
                            this.match(SimpleLangParser.T__5);
                            this.state = 106;
                            this.logicalAnd();
                        }
                    }
                    this.state = 111;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
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
        this.enterRule(localContext, 24, SimpleLangParser.RULE_logicalAnd);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 112;
                this.comparison();
                this.state = 117;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 7) {
                    {
                        {
                            this.state = 113;
                            this.match(SimpleLangParser.T__6);
                            this.state = 114;
                            this.comparison();
                        }
                    }
                    this.state = 119;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
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
        this.enterRule(localContext, 26, SimpleLangParser.RULE_comparison);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 120;
                this.additionSubstraction();
                this.state = 125;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3840) !== 0)) {
                    {
                        {
                            this.state = 121;
                            localContext._op = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3840) !== 0))) {
                                localContext._op = this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 122;
                            this.additionSubstraction();
                        }
                    }
                    this.state = 127;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
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
        this.enterRule(localContext, 28, SimpleLangParser.RULE_additionSubstraction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 128;
                this.multiplicationDivision();
                this.state = 133;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 12 || _la === 13) {
                    {
                        {
                            this.state = 129;
                            localContext._op = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 12 || _la === 13)) {
                                localContext._op = this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 130;
                            this.multiplicationDivision();
                        }
                    }
                    this.state = 135;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
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
        this.enterRule(localContext, 30, SimpleLangParser.RULE_multiplicationDivision);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 136;
                this.binopTerminals();
                this.state = 141;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 14 || _la === 15) {
                    {
                        {
                            this.state = 137;
                            localContext._op = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 14 || _la === 15)) {
                                localContext._op = this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 138;
                            this.binopTerminals();
                        }
                    }
                    this.state = 143;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
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
        this.enterRule(localContext, 32, SimpleLangParser.RULE_primitive);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 144;
                _la = this.tokenStream.LA(1);
                if (!(_la === 20 || _la === 21)) {
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
        this.enterRule(localContext, 34, SimpleLangParser.RULE_accessIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 146;
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
        this.enterRule(localContext, 36, SimpleLangParser.RULE_bracket);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 148;
                this.match(SimpleLangParser.T__15);
                this.state = 149;
                this.expression();
                this.state = 150;
                this.match(SimpleLangParser.T__16);
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
        this.enterRule(localContext, 38, SimpleLangParser.RULE_expressionWithBlock);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 152;
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
    public blockExpression(): BlockExpressionContext {
        let localContext = new BlockExpressionContext(this.context, this.state);
        this.enterRule(localContext, 40, SimpleLangParser.RULE_blockExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 154;
                this.match(SimpleLangParser.T__17);
                this.state = 155;
                this.blockBody();
                this.state = 156;
                this.match(SimpleLangParser.T__18);
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
        this.enterRule(localContext, 42, SimpleLangParser.RULE_blockBody);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 161;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 158;
                                this.statement();
                            }
                        }
                    }
                    this.state = 163;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
                }
                this.state = 165;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 11862016) !== 0)) {
                    {
                        this.state = 164;
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

    public static readonly _serializedATN: number[] = [
        4, 1, 24, 168, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7,
        6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13,
        2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20,
        7, 20, 2, 21, 7, 21, 1, 0, 5, 0, 46, 8, 0, 10, 0, 12, 0, 49, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1,
        2, 1, 2, 1, 2, 3, 2, 58, 8, 2, 1, 3, 1, 3, 1, 4, 1, 4, 3, 4, 64, 8, 4, 1, 4, 1, 4, 1, 4, 3, 4,
        69, 8, 4, 1, 4, 1, 4, 3, 4, 73, 8, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 3, 5, 82, 8, 5,
        3, 5, 84, 8, 5, 1, 6, 1, 6, 3, 6, 88, 8, 6, 1, 7, 1, 7, 3, 7, 92, 8, 7, 1, 8, 1, 8, 1, 8, 3, 8,
        97, 8, 8, 1, 9, 1, 9, 3, 9, 101, 8, 9, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 5, 11, 108, 8, 11,
        10, 11, 12, 11, 111, 9, 11, 1, 12, 1, 12, 1, 12, 5, 12, 116, 8, 12, 10, 12, 12, 12, 119,
        9, 12, 1, 13, 1, 13, 1, 13, 5, 13, 124, 8, 13, 10, 13, 12, 13, 127, 9, 13, 1, 14, 1, 14,
        1, 14, 5, 14, 132, 8, 14, 10, 14, 12, 14, 135, 9, 14, 1, 15, 1, 15, 1, 15, 5, 15, 140,
        8, 15, 10, 15, 12, 15, 143, 9, 15, 1, 16, 1, 16, 1, 17, 1, 17, 1, 18, 1, 18, 1, 18, 1, 18,
        1, 19, 1, 19, 1, 20, 1, 20, 1, 20, 1, 20, 1, 21, 5, 21, 160, 8, 21, 10, 21, 12, 21, 163,
        9, 21, 1, 21, 3, 21, 166, 8, 21, 1, 21, 0, 0, 22, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20,
        22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 0, 4, 1, 0, 8, 11, 1, 0, 12, 13, 1, 0, 14, 15,
        1, 0, 20, 21, 165, 0, 47, 1, 0, 0, 0, 2, 52, 1, 0, 0, 0, 4, 57, 1, 0, 0, 0, 6, 59, 1, 0, 0,
        0, 8, 61, 1, 0, 0, 0, 10, 83, 1, 0, 0, 0, 12, 87, 1, 0, 0, 0, 14, 91, 1, 0, 0, 0, 16, 96, 1,
        0, 0, 0, 18, 100, 1, 0, 0, 0, 20, 102, 1, 0, 0, 0, 22, 104, 1, 0, 0, 0, 24, 112, 1, 0, 0,
        0, 26, 120, 1, 0, 0, 0, 28, 128, 1, 0, 0, 0, 30, 136, 1, 0, 0, 0, 32, 144, 1, 0, 0, 0, 34,
        146, 1, 0, 0, 0, 36, 148, 1, 0, 0, 0, 38, 152, 1, 0, 0, 0, 40, 154, 1, 0, 0, 0, 42, 161,
        1, 0, 0, 0, 44, 46, 3, 4, 2, 0, 45, 44, 1, 0, 0, 0, 46, 49, 1, 0, 0, 0, 47, 45, 1, 0, 0, 0,
        47, 48, 1, 0, 0, 0, 48, 50, 1, 0, 0, 0, 49, 47, 1, 0, 0, 0, 50, 51, 5, 0, 0, 1, 51, 1, 1, 0,
        0, 0, 52, 53, 5, 1, 0, 0, 53, 3, 1, 0, 0, 0, 54, 58, 3, 6, 3, 0, 55, 58, 3, 8, 4, 0, 56, 58,
        3, 10, 5, 0, 57, 54, 1, 0, 0, 0, 57, 55, 1, 0, 0, 0, 57, 56, 1, 0, 0, 0, 58, 5, 1, 0, 0, 0,
        59, 60, 5, 2, 0, 0, 60, 7, 1, 0, 0, 0, 61, 63, 5, 3, 0, 0, 62, 64, 3, 2, 1, 0, 63, 62, 1, 0,
        0, 0, 63, 64, 1, 0, 0, 0, 64, 65, 1, 0, 0, 0, 65, 68, 5, 23, 0, 0, 66, 67, 5, 4, 0, 0, 67,
        69, 5, 22, 0, 0, 68, 66, 1, 0, 0, 0, 68, 69, 1, 0, 0, 0, 69, 72, 1, 0, 0, 0, 70, 71, 5, 5,
        0, 0, 71, 73, 3, 12, 6, 0, 72, 70, 1, 0, 0, 0, 72, 73, 1, 0, 0, 0, 73, 74, 1, 0, 0, 0, 74,
        75, 5, 2, 0, 0, 75, 9, 1, 0, 0, 0, 76, 77, 3, 14, 7, 0, 77, 78, 5, 2, 0, 0, 78, 84, 1, 0, 0,
        0, 79, 81, 3, 38, 19, 0, 80, 82, 5, 2, 0, 0, 81, 80, 1, 0, 0, 0, 81, 82, 1, 0, 0, 0, 82, 84,
        1, 0, 0, 0, 83, 76, 1, 0, 0, 0, 83, 79, 1, 0, 0, 0, 84, 11, 1, 0, 0, 0, 85, 88, 3, 14, 7, 0,
        86, 88, 3, 38, 19, 0, 87, 85, 1, 0, 0, 0, 87, 86, 1, 0, 0, 0, 88, 13, 1, 0, 0, 0, 89, 92,
        3, 20, 10, 0, 90, 92, 3, 16, 8, 0, 91, 89, 1, 0, 0, 0, 91, 90, 1, 0, 0, 0, 92, 15, 1, 0, 0,
        0, 93, 97, 3, 32, 16, 0, 94, 97, 3, 36, 18, 0, 95, 97, 3, 34, 17, 0, 96, 93, 1, 0, 0, 0,
        96, 94, 1, 0, 0, 0, 96, 95, 1, 0, 0, 0, 97, 17, 1, 0, 0, 0, 98, 101, 3, 16, 8, 0, 99, 101,
        3, 38, 19, 0, 100, 98, 1, 0, 0, 0, 100, 99, 1, 0, 0, 0, 101, 19, 1, 0, 0, 0, 102, 103, 3,
        22, 11, 0, 103, 21, 1, 0, 0, 0, 104, 109, 3, 24, 12, 0, 105, 106, 5, 6, 0, 0, 106, 108,
        3, 24, 12, 0, 107, 105, 1, 0, 0, 0, 108, 111, 1, 0, 0, 0, 109, 107, 1, 0, 0, 0, 109, 110,
        1, 0, 0, 0, 110, 23, 1, 0, 0, 0, 111, 109, 1, 0, 0, 0, 112, 117, 3, 26, 13, 0, 113, 114,
        5, 7, 0, 0, 114, 116, 3, 26, 13, 0, 115, 113, 1, 0, 0, 0, 116, 119, 1, 0, 0, 0, 117, 115,
        1, 0, 0, 0, 117, 118, 1, 0, 0, 0, 118, 25, 1, 0, 0, 0, 119, 117, 1, 0, 0, 0, 120, 125, 3,
        28, 14, 0, 121, 122, 7, 0, 0, 0, 122, 124, 3, 28, 14, 0, 123, 121, 1, 0, 0, 0, 124, 127,
        1, 0, 0, 0, 125, 123, 1, 0, 0, 0, 125, 126, 1, 0, 0, 0, 126, 27, 1, 0, 0, 0, 127, 125, 1,
        0, 0, 0, 128, 133, 3, 30, 15, 0, 129, 130, 7, 1, 0, 0, 130, 132, 3, 30, 15, 0, 131, 129,
        1, 0, 0, 0, 132, 135, 1, 0, 0, 0, 133, 131, 1, 0, 0, 0, 133, 134, 1, 0, 0, 0, 134, 29, 1,
        0, 0, 0, 135, 133, 1, 0, 0, 0, 136, 141, 3, 18, 9, 0, 137, 138, 7, 2, 0, 0, 138, 140, 3,
        18, 9, 0, 139, 137, 1, 0, 0, 0, 140, 143, 1, 0, 0, 0, 141, 139, 1, 0, 0, 0, 141, 142, 1,
        0, 0, 0, 142, 31, 1, 0, 0, 0, 143, 141, 1, 0, 0, 0, 144, 145, 7, 3, 0, 0, 145, 33, 1, 0,
        0, 0, 146, 147, 5, 23, 0, 0, 147, 35, 1, 0, 0, 0, 148, 149, 5, 16, 0, 0, 149, 150, 3, 12,
        6, 0, 150, 151, 5, 17, 0, 0, 151, 37, 1, 0, 0, 0, 152, 153, 3, 40, 20, 0, 153, 39, 1, 0,
        0, 0, 154, 155, 5, 18, 0, 0, 155, 156, 3, 42, 21, 0, 156, 157, 5, 19, 0, 0, 157, 41, 1,
        0, 0, 0, 158, 160, 3, 4, 2, 0, 159, 158, 1, 0, 0, 0, 160, 163, 1, 0, 0, 0, 161, 159, 1,
        0, 0, 0, 161, 162, 1, 0, 0, 0, 162, 165, 1, 0, 0, 0, 163, 161, 1, 0, 0, 0, 164, 166, 3,
        14, 7, 0, 165, 164, 1, 0, 0, 0, 165, 166, 1, 0, 0, 0, 166, 43, 1, 0, 0, 0, 18, 47, 57, 63,
        68, 72, 81, 83, 87, 91, 96, 100, 109, 117, 125, 133, 141, 161, 165
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

    private static readonly decisionsToDFA = SimpleLangParser._ATN.decisionToState.map((ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index));
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
        if (listener.enterProg) {
            listener.enterProg(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitProg) {
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
        if (listener.enterMutable) {
            listener.enterMutable(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitMutable) {
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
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_statement;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitStatement) {
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
        if (listener.enterEmptyStatement) {
            listener.enterEmptyStatement(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitEmptyStatement) {
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
        if (listener.enterLetStatement) {
            listener.enterLetStatement(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitLetStatement) {
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
    public expressionWithoutBlock(): ExpressionWithoutBlockContext | null {
        return this.getRuleContext(0, ExpressionWithoutBlockContext);
    }
    public expressionWithBlock(): ExpressionWithBlockContext | null {
        return this.getRuleContext(0, ExpressionWithBlockContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_expressionStatement;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterExpressionStatement) {
            listener.enterExpressionStatement(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitExpressionStatement) {
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
    public expressionWithoutBlock(): ExpressionWithoutBlockContext | null {
        return this.getRuleContext(0, ExpressionWithoutBlockContext);
    }
    public expressionWithBlock(): ExpressionWithBlockContext | null {
        return this.getRuleContext(0, ExpressionWithBlockContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_expression;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitExpression) {
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
    public primary(): PrimaryContext | null {
        return this.getRuleContext(0, PrimaryContext);
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_expressionWithoutBlock;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterExpressionWithoutBlock) {
            listener.enterExpressionWithoutBlock(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitExpressionWithoutBlock) {
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
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_primary;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterPrimary) {
            listener.enterPrimary(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitPrimary) {
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
        if (listener.enterBinopTerminals) {
            listener.enterBinopTerminals(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitBinopTerminals) {
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
        if (listener.enterBinop) {
            listener.enterBinop(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitBinop) {
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
        if (listener.enterLogicalOr) {
            listener.enterLogicalOr(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitLogicalOr) {
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
        if (listener.enterLogicalAnd) {
            listener.enterLogicalAnd(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitLogicalAnd) {
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
        if (listener.enterComparison) {
            listener.enterComparison(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitComparison) {
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
        if (listener.enterAdditionSubstraction) {
            listener.enterAdditionSubstraction(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitAdditionSubstraction) {
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
        if (listener.enterMultiplicationDivision) {
            listener.enterMultiplicationDivision(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitMultiplicationDivision) {
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
        if (listener.enterPrimitive) {
            listener.enterPrimitive(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitPrimitive) {
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
        if (listener.enterAccessIdentifier) {
            listener.enterAccessIdentifier(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitAccessIdentifier) {
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
        if (listener.enterBracket) {
            listener.enterBracket(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitBracket) {
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


export class ExpressionWithBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public blockExpression(): BlockExpressionContext {
        return this.getRuleContext(0, BlockExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleLangParser.RULE_expressionWithBlock;
    }
    public override enterRule(listener: SimpleLangListener): void {
        if (listener.enterExpressionWithBlock) {
            listener.enterExpressionWithBlock(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitExpressionWithBlock) {
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
        if (listener.enterBlockExpression) {
            listener.enterBlockExpression(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitBlockExpression) {
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
        if (listener.enterBlockBody) {
            listener.enterBlockBody(this);
        }
    }
    public override exitRule(listener: SimpleLangListener): void {
        if (listener.exitBlockBody) {
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
