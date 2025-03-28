// Generated from src/SimpleLang.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class SimpleLangLexer extends antlr.Lexer {
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
    public static readonly INT = 27;
    public static readonly BOOL = 28;
    public static readonly TYPE = 29;
    public static readonly IDENTIFIER = 30;
    public static readonly WS = 31;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'mut'", "';'", "'let'", "':'", "'='", "'-'", "'!'", "'||'", 
        "'&&'", "'<'", "'<='", "'>'", "'>='", "'=='", "'!='", "'+'", "'*'", 
        "'/'", "'%'", "'('", "')'", "'{'", "'}'", "'if'", "'else'", "'while'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, "INT", "BOOL", "TYPE", "IDENTIFIER", 
        "WS"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "T__8", "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", 
        "T__16", "T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", 
        "T__24", "T__25", "INT", "BOOL", "TYPE", "IDENTIFIER", "WS",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, SimpleLangLexer._ATN, SimpleLangLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "SimpleLang.g4"; }

    public get literalNames(): (string | null)[] { return SimpleLangLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return SimpleLangLexer.symbolicNames; }
    public get ruleNames(): string[] { return SimpleLangLexer.ruleNames; }

    public get serializedATN(): number[] { return SimpleLangLexer._serializedATN; }

    public get channelNames(): string[] { return SimpleLangLexer.channelNames; }

    public get modeNames(): string[] { return SimpleLangLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,31,172,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,1,0,1,0,1,0,1,0,
        1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,
        1,7,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,12,1,12,1,12,
        1,13,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,
        1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,23,1,24,
        1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,26,4,26,135,
        8,26,11,26,12,26,136,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,
        3,27,148,8,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,3,28,157,8,28,1,
        29,1,29,5,29,161,8,29,10,29,12,29,164,9,29,1,30,4,30,167,8,30,11,
        30,12,30,168,1,30,1,30,0,0,31,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,
        17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,
        39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,59,30,
        61,31,1,0,4,1,0,48,57,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,
        95,97,122,3,0,9,10,13,13,32,32,176,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,
        0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,
        0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,
        0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,
        0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,
        0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,
        0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,1,63,1,0,0,0,3,67,1,0,
        0,0,5,69,1,0,0,0,7,73,1,0,0,0,9,75,1,0,0,0,11,77,1,0,0,0,13,79,1,
        0,0,0,15,81,1,0,0,0,17,84,1,0,0,0,19,87,1,0,0,0,21,89,1,0,0,0,23,
        92,1,0,0,0,25,94,1,0,0,0,27,97,1,0,0,0,29,100,1,0,0,0,31,103,1,0,
        0,0,33,105,1,0,0,0,35,107,1,0,0,0,37,109,1,0,0,0,39,111,1,0,0,0,
        41,113,1,0,0,0,43,115,1,0,0,0,45,117,1,0,0,0,47,119,1,0,0,0,49,122,
        1,0,0,0,51,127,1,0,0,0,53,134,1,0,0,0,55,147,1,0,0,0,57,156,1,0,
        0,0,59,158,1,0,0,0,61,166,1,0,0,0,63,64,5,109,0,0,64,65,5,117,0,
        0,65,66,5,116,0,0,66,2,1,0,0,0,67,68,5,59,0,0,68,4,1,0,0,0,69,70,
        5,108,0,0,70,71,5,101,0,0,71,72,5,116,0,0,72,6,1,0,0,0,73,74,5,58,
        0,0,74,8,1,0,0,0,75,76,5,61,0,0,76,10,1,0,0,0,77,78,5,45,0,0,78,
        12,1,0,0,0,79,80,5,33,0,0,80,14,1,0,0,0,81,82,5,124,0,0,82,83,5,
        124,0,0,83,16,1,0,0,0,84,85,5,38,0,0,85,86,5,38,0,0,86,18,1,0,0,
        0,87,88,5,60,0,0,88,20,1,0,0,0,89,90,5,60,0,0,90,91,5,61,0,0,91,
        22,1,0,0,0,92,93,5,62,0,0,93,24,1,0,0,0,94,95,5,62,0,0,95,96,5,61,
        0,0,96,26,1,0,0,0,97,98,5,61,0,0,98,99,5,61,0,0,99,28,1,0,0,0,100,
        101,5,33,0,0,101,102,5,61,0,0,102,30,1,0,0,0,103,104,5,43,0,0,104,
        32,1,0,0,0,105,106,5,42,0,0,106,34,1,0,0,0,107,108,5,47,0,0,108,
        36,1,0,0,0,109,110,5,37,0,0,110,38,1,0,0,0,111,112,5,40,0,0,112,
        40,1,0,0,0,113,114,5,41,0,0,114,42,1,0,0,0,115,116,5,123,0,0,116,
        44,1,0,0,0,117,118,5,125,0,0,118,46,1,0,0,0,119,120,5,105,0,0,120,
        121,5,102,0,0,121,48,1,0,0,0,122,123,5,101,0,0,123,124,5,108,0,0,
        124,125,5,115,0,0,125,126,5,101,0,0,126,50,1,0,0,0,127,128,5,119,
        0,0,128,129,5,104,0,0,129,130,5,105,0,0,130,131,5,108,0,0,131,132,
        5,101,0,0,132,52,1,0,0,0,133,135,7,0,0,0,134,133,1,0,0,0,135,136,
        1,0,0,0,136,134,1,0,0,0,136,137,1,0,0,0,137,54,1,0,0,0,138,139,5,
        116,0,0,139,140,5,114,0,0,140,141,5,117,0,0,141,148,5,101,0,0,142,
        143,5,102,0,0,143,144,5,97,0,0,144,145,5,108,0,0,145,146,5,115,0,
        0,146,148,5,101,0,0,147,138,1,0,0,0,147,142,1,0,0,0,148,56,1,0,0,
        0,149,150,5,98,0,0,150,151,5,111,0,0,151,152,5,111,0,0,152,157,5,
        108,0,0,153,154,5,102,0,0,154,155,5,54,0,0,155,157,5,52,0,0,156,
        149,1,0,0,0,156,153,1,0,0,0,157,58,1,0,0,0,158,162,7,1,0,0,159,161,
        7,2,0,0,160,159,1,0,0,0,161,164,1,0,0,0,162,160,1,0,0,0,162,163,
        1,0,0,0,163,60,1,0,0,0,164,162,1,0,0,0,165,167,7,3,0,0,166,165,1,
        0,0,0,167,168,1,0,0,0,168,166,1,0,0,0,168,169,1,0,0,0,169,170,1,
        0,0,0,170,171,6,30,0,0,171,62,1,0,0,0,6,0,136,147,156,162,168,1,
        6,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SimpleLangLexer.__ATN) {
            SimpleLangLexer.__ATN = new antlr.ATNDeserializer().deserialize(SimpleLangLexer._serializedATN);
        }

        return SimpleLangLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SimpleLangLexer.literalNames, SimpleLangLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SimpleLangLexer.vocabulary;
    }

    private static readonly decisionsToDFA = SimpleLangLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}