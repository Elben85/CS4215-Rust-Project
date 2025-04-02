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
    public static readonly T__26 = 27;
    public static readonly INT = 28;
    public static readonly BOOL = 29;
    public static readonly TYPE = 30;
    public static readonly IDENTIFIER = 31;
    public static readonly WS = 32;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'mut'", "';'", "'let'", "':'", "'='", "'-'", "'!'", "'*'", 
        "'&'", "'||'", "'&&'", "'<'", "'<='", "'>'", "'>='", "'=='", "'!='", 
        "'+'", "'/'", "'%'", "'('", "')'", "'{'", "'}'", "'if'", "'else'", 
        "'while'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, "INT", "BOOL", "TYPE", "IDENTIFIER", 
        "WS"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "T__8", "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", 
        "T__16", "T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", 
        "T__24", "T__25", "T__26", "INT", "BOOL", "TYPE", "IDENTIFIER", 
        "WS",
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
        4,0,32,176,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,1,0,1,
        0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,
        6,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,12,1,12,
        1,12,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,1,17,
        1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,
        1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,
        1,26,1,27,4,27,139,8,27,11,27,12,27,140,1,28,1,28,1,28,1,28,1,28,
        1,28,1,28,1,28,1,28,3,28,152,8,28,1,29,1,29,1,29,1,29,1,29,1,29,
        1,29,3,29,161,8,29,1,30,1,30,5,30,165,8,30,10,30,12,30,168,9,30,
        1,31,4,31,171,8,31,11,31,12,31,172,1,31,1,31,0,0,32,1,1,3,2,5,3,
        7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,
        31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,
        53,27,55,28,57,29,59,30,61,31,63,32,1,0,4,1,0,48,57,3,0,65,90,95,
        95,97,122,4,0,48,57,65,90,95,95,97,122,3,0,9,10,13,13,32,32,180,
        0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,
        1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,
        1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,
        1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,
        1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,
        1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,
        1,0,0,0,0,63,1,0,0,0,1,65,1,0,0,0,3,69,1,0,0,0,5,71,1,0,0,0,7,75,
        1,0,0,0,9,77,1,0,0,0,11,79,1,0,0,0,13,81,1,0,0,0,15,83,1,0,0,0,17,
        85,1,0,0,0,19,87,1,0,0,0,21,90,1,0,0,0,23,93,1,0,0,0,25,95,1,0,0,
        0,27,98,1,0,0,0,29,100,1,0,0,0,31,103,1,0,0,0,33,106,1,0,0,0,35,
        109,1,0,0,0,37,111,1,0,0,0,39,113,1,0,0,0,41,115,1,0,0,0,43,117,
        1,0,0,0,45,119,1,0,0,0,47,121,1,0,0,0,49,123,1,0,0,0,51,126,1,0,
        0,0,53,131,1,0,0,0,55,138,1,0,0,0,57,151,1,0,0,0,59,160,1,0,0,0,
        61,162,1,0,0,0,63,170,1,0,0,0,65,66,5,109,0,0,66,67,5,117,0,0,67,
        68,5,116,0,0,68,2,1,0,0,0,69,70,5,59,0,0,70,4,1,0,0,0,71,72,5,108,
        0,0,72,73,5,101,0,0,73,74,5,116,0,0,74,6,1,0,0,0,75,76,5,58,0,0,
        76,8,1,0,0,0,77,78,5,61,0,0,78,10,1,0,0,0,79,80,5,45,0,0,80,12,1,
        0,0,0,81,82,5,33,0,0,82,14,1,0,0,0,83,84,5,42,0,0,84,16,1,0,0,0,
        85,86,5,38,0,0,86,18,1,0,0,0,87,88,5,124,0,0,88,89,5,124,0,0,89,
        20,1,0,0,0,90,91,5,38,0,0,91,92,5,38,0,0,92,22,1,0,0,0,93,94,5,60,
        0,0,94,24,1,0,0,0,95,96,5,60,0,0,96,97,5,61,0,0,97,26,1,0,0,0,98,
        99,5,62,0,0,99,28,1,0,0,0,100,101,5,62,0,0,101,102,5,61,0,0,102,
        30,1,0,0,0,103,104,5,61,0,0,104,105,5,61,0,0,105,32,1,0,0,0,106,
        107,5,33,0,0,107,108,5,61,0,0,108,34,1,0,0,0,109,110,5,43,0,0,110,
        36,1,0,0,0,111,112,5,47,0,0,112,38,1,0,0,0,113,114,5,37,0,0,114,
        40,1,0,0,0,115,116,5,40,0,0,116,42,1,0,0,0,117,118,5,41,0,0,118,
        44,1,0,0,0,119,120,5,123,0,0,120,46,1,0,0,0,121,122,5,125,0,0,122,
        48,1,0,0,0,123,124,5,105,0,0,124,125,5,102,0,0,125,50,1,0,0,0,126,
        127,5,101,0,0,127,128,5,108,0,0,128,129,5,115,0,0,129,130,5,101,
        0,0,130,52,1,0,0,0,131,132,5,119,0,0,132,133,5,104,0,0,133,134,5,
        105,0,0,134,135,5,108,0,0,135,136,5,101,0,0,136,54,1,0,0,0,137,139,
        7,0,0,0,138,137,1,0,0,0,139,140,1,0,0,0,140,138,1,0,0,0,140,141,
        1,0,0,0,141,56,1,0,0,0,142,143,5,116,0,0,143,144,5,114,0,0,144,145,
        5,117,0,0,145,152,5,101,0,0,146,147,5,102,0,0,147,148,5,97,0,0,148,
        149,5,108,0,0,149,150,5,115,0,0,150,152,5,101,0,0,151,142,1,0,0,
        0,151,146,1,0,0,0,152,58,1,0,0,0,153,154,5,98,0,0,154,155,5,111,
        0,0,155,156,5,111,0,0,156,161,5,108,0,0,157,158,5,102,0,0,158,159,
        5,54,0,0,159,161,5,52,0,0,160,153,1,0,0,0,160,157,1,0,0,0,161,60,
        1,0,0,0,162,166,7,1,0,0,163,165,7,2,0,0,164,163,1,0,0,0,165,168,
        1,0,0,0,166,164,1,0,0,0,166,167,1,0,0,0,167,62,1,0,0,0,168,166,1,
        0,0,0,169,171,7,3,0,0,170,169,1,0,0,0,171,172,1,0,0,0,172,170,1,
        0,0,0,172,173,1,0,0,0,173,174,1,0,0,0,174,175,6,31,0,0,175,64,1,
        0,0,0,6,0,140,151,160,166,172,1,6,0,0
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