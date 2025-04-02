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
    public static readonly T__27 = 28;
    public static readonly INT = 29;
    public static readonly BOOL = 30;
    public static readonly TYPE = 31;
    public static readonly IDENTIFIER = 32;
    public static readonly WS = 33;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'mut'", "';'", "'let'", "':'", "'='", "'-'", "'!'", "'||'", 
        "'&&'", "'<'", "'<='", "'>'", "'>='", "'=='", "'!='", "'+'", "'*'", 
        "'/'", "'%'", "'('", "')'", "'{'", "'}'", "'if'", "'else'", "'while'", 
        "'break'", "'continue'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, "INT", "BOOL", "TYPE", 
        "IDENTIFIER", "WS"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "T__8", "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", 
        "T__16", "T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", 
        "T__24", "T__25", "T__26", "T__27", "INT", "BOOL", "TYPE", "IDENTIFIER", 
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
        4,0,33,191,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,
        32,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,
        5,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,10,1,11,1,
        11,1,12,1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,16,1,
        16,1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,
        23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,
        25,1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,
        27,1,27,1,27,1,28,4,28,154,8,28,11,28,12,28,155,1,29,1,29,1,29,1,
        29,1,29,1,29,1,29,1,29,1,29,3,29,167,8,29,1,30,1,30,1,30,1,30,1,
        30,1,30,1,30,3,30,176,8,30,1,31,1,31,5,31,180,8,31,10,31,12,31,183,
        9,31,1,32,4,32,186,8,32,11,32,12,32,187,1,32,1,32,0,0,33,1,1,3,2,
        5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,
        15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,
        26,53,27,55,28,57,29,59,30,61,31,63,32,65,33,1,0,4,1,0,48,57,3,0,
        65,90,95,95,97,122,4,0,48,57,65,90,95,95,97,122,3,0,9,10,13,13,32,
        32,195,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,
        0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,
        0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,
        0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,
        0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,
        0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,
        0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,1,67,1,0,0,0,3,71,1,0,0,
        0,5,73,1,0,0,0,7,77,1,0,0,0,9,79,1,0,0,0,11,81,1,0,0,0,13,83,1,0,
        0,0,15,85,1,0,0,0,17,88,1,0,0,0,19,91,1,0,0,0,21,93,1,0,0,0,23,96,
        1,0,0,0,25,98,1,0,0,0,27,101,1,0,0,0,29,104,1,0,0,0,31,107,1,0,0,
        0,33,109,1,0,0,0,35,111,1,0,0,0,37,113,1,0,0,0,39,115,1,0,0,0,41,
        117,1,0,0,0,43,119,1,0,0,0,45,121,1,0,0,0,47,123,1,0,0,0,49,126,
        1,0,0,0,51,131,1,0,0,0,53,137,1,0,0,0,55,143,1,0,0,0,57,153,1,0,
        0,0,59,166,1,0,0,0,61,175,1,0,0,0,63,177,1,0,0,0,65,185,1,0,0,0,
        67,68,5,109,0,0,68,69,5,117,0,0,69,70,5,116,0,0,70,2,1,0,0,0,71,
        72,5,59,0,0,72,4,1,0,0,0,73,74,5,108,0,0,74,75,5,101,0,0,75,76,5,
        116,0,0,76,6,1,0,0,0,77,78,5,58,0,0,78,8,1,0,0,0,79,80,5,61,0,0,
        80,10,1,0,0,0,81,82,5,45,0,0,82,12,1,0,0,0,83,84,5,33,0,0,84,14,
        1,0,0,0,85,86,5,124,0,0,86,87,5,124,0,0,87,16,1,0,0,0,88,89,5,38,
        0,0,89,90,5,38,0,0,90,18,1,0,0,0,91,92,5,60,0,0,92,20,1,0,0,0,93,
        94,5,60,0,0,94,95,5,61,0,0,95,22,1,0,0,0,96,97,5,62,0,0,97,24,1,
        0,0,0,98,99,5,62,0,0,99,100,5,61,0,0,100,26,1,0,0,0,101,102,5,61,
        0,0,102,103,5,61,0,0,103,28,1,0,0,0,104,105,5,33,0,0,105,106,5,61,
        0,0,106,30,1,0,0,0,107,108,5,43,0,0,108,32,1,0,0,0,109,110,5,42,
        0,0,110,34,1,0,0,0,111,112,5,47,0,0,112,36,1,0,0,0,113,114,5,37,
        0,0,114,38,1,0,0,0,115,116,5,40,0,0,116,40,1,0,0,0,117,118,5,41,
        0,0,118,42,1,0,0,0,119,120,5,123,0,0,120,44,1,0,0,0,121,122,5,125,
        0,0,122,46,1,0,0,0,123,124,5,105,0,0,124,125,5,102,0,0,125,48,1,
        0,0,0,126,127,5,101,0,0,127,128,5,108,0,0,128,129,5,115,0,0,129,
        130,5,101,0,0,130,50,1,0,0,0,131,132,5,119,0,0,132,133,5,104,0,0,
        133,134,5,105,0,0,134,135,5,108,0,0,135,136,5,101,0,0,136,52,1,0,
        0,0,137,138,5,98,0,0,138,139,5,114,0,0,139,140,5,101,0,0,140,141,
        5,97,0,0,141,142,5,107,0,0,142,54,1,0,0,0,143,144,5,99,0,0,144,145,
        5,111,0,0,145,146,5,110,0,0,146,147,5,116,0,0,147,148,5,105,0,0,
        148,149,5,110,0,0,149,150,5,117,0,0,150,151,5,101,0,0,151,56,1,0,
        0,0,152,154,7,0,0,0,153,152,1,0,0,0,154,155,1,0,0,0,155,153,1,0,
        0,0,155,156,1,0,0,0,156,58,1,0,0,0,157,158,5,116,0,0,158,159,5,114,
        0,0,159,160,5,117,0,0,160,167,5,101,0,0,161,162,5,102,0,0,162,163,
        5,97,0,0,163,164,5,108,0,0,164,165,5,115,0,0,165,167,5,101,0,0,166,
        157,1,0,0,0,166,161,1,0,0,0,167,60,1,0,0,0,168,169,5,98,0,0,169,
        170,5,111,0,0,170,171,5,111,0,0,171,176,5,108,0,0,172,173,5,102,
        0,0,173,174,5,54,0,0,174,176,5,52,0,0,175,168,1,0,0,0,175,172,1,
        0,0,0,176,62,1,0,0,0,177,181,7,1,0,0,178,180,7,2,0,0,179,178,1,0,
        0,0,180,183,1,0,0,0,181,179,1,0,0,0,181,182,1,0,0,0,182,64,1,0,0,
        0,183,181,1,0,0,0,184,186,7,3,0,0,185,184,1,0,0,0,186,187,1,0,0,
        0,187,185,1,0,0,0,187,188,1,0,0,0,188,189,1,0,0,0,189,190,6,32,0,
        0,190,66,1,0,0,0,6,0,155,166,175,181,187,1,6,0,0
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