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
    public static readonly INT = 17;
    public static readonly BOOL = 18;
    public static readonly TYPE = 19;
    public static readonly IDENTIFIER = 20;
    public static readonly WS = 21;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'mut'", "';'", "'let'", "'='", "'*'", "'/'", "'+'", "'-'", 
        "'<'", "'<='", "'>'", "'>='", "'&&'", "'||'", "'('", "')'"
    ];

    public static readonly symbolicNames = [
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
        "INT", "BOOL", "TYPE", "IDENTIFIER", "WS",
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
        4,0,21,122,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,4,
        1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,11,1,
        11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,15,1,15,1,16,4,
        16,85,8,16,11,16,12,16,86,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
        1,17,3,17,98,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,107,8,
        18,1,19,1,19,5,19,111,8,19,10,19,12,19,114,9,19,1,20,4,20,117,8,
        20,11,20,12,20,118,1,20,1,20,0,0,21,1,1,3,2,5,3,7,4,9,5,11,6,13,
        7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,
        37,19,39,20,41,21,1,0,4,1,0,48,57,3,0,65,90,95,95,97,122,4,0,48,
        57,65,90,95,95,97,122,3,0,9,10,13,13,32,32,126,0,1,1,0,0,0,0,3,1,
        0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,
        0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,
        0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,
        0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,1,43,1,0,
        0,0,3,47,1,0,0,0,5,49,1,0,0,0,7,53,1,0,0,0,9,55,1,0,0,0,11,57,1,
        0,0,0,13,59,1,0,0,0,15,61,1,0,0,0,17,63,1,0,0,0,19,65,1,0,0,0,21,
        68,1,0,0,0,23,70,1,0,0,0,25,73,1,0,0,0,27,76,1,0,0,0,29,79,1,0,0,
        0,31,81,1,0,0,0,33,84,1,0,0,0,35,97,1,0,0,0,37,106,1,0,0,0,39,108,
        1,0,0,0,41,116,1,0,0,0,43,44,5,109,0,0,44,45,5,117,0,0,45,46,5,116,
        0,0,46,2,1,0,0,0,47,48,5,59,0,0,48,4,1,0,0,0,49,50,5,108,0,0,50,
        51,5,101,0,0,51,52,5,116,0,0,52,6,1,0,0,0,53,54,5,61,0,0,54,8,1,
        0,0,0,55,56,5,42,0,0,56,10,1,0,0,0,57,58,5,47,0,0,58,12,1,0,0,0,
        59,60,5,43,0,0,60,14,1,0,0,0,61,62,5,45,0,0,62,16,1,0,0,0,63,64,
        5,60,0,0,64,18,1,0,0,0,65,66,5,60,0,0,66,67,5,61,0,0,67,20,1,0,0,
        0,68,69,5,62,0,0,69,22,1,0,0,0,70,71,5,62,0,0,71,72,5,61,0,0,72,
        24,1,0,0,0,73,74,5,38,0,0,74,75,5,38,0,0,75,26,1,0,0,0,76,77,5,124,
        0,0,77,78,5,124,0,0,78,28,1,0,0,0,79,80,5,40,0,0,80,30,1,0,0,0,81,
        82,5,41,0,0,82,32,1,0,0,0,83,85,7,0,0,0,84,83,1,0,0,0,85,86,1,0,
        0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,34,1,0,0,0,88,89,5,116,0,0,89,
        90,5,114,0,0,90,91,5,117,0,0,91,98,5,101,0,0,92,93,5,102,0,0,93,
        94,5,97,0,0,94,95,5,108,0,0,95,96,5,115,0,0,96,98,5,101,0,0,97,88,
        1,0,0,0,97,92,1,0,0,0,98,36,1,0,0,0,99,100,5,98,0,0,100,101,5,111,
        0,0,101,102,5,111,0,0,102,107,5,108,0,0,103,104,5,105,0,0,104,105,
        5,54,0,0,105,107,5,52,0,0,106,99,1,0,0,0,106,103,1,0,0,0,107,38,
        1,0,0,0,108,112,7,1,0,0,109,111,7,2,0,0,110,109,1,0,0,0,111,114,
        1,0,0,0,112,110,1,0,0,0,112,113,1,0,0,0,113,40,1,0,0,0,114,112,1,
        0,0,0,115,117,7,3,0,0,116,115,1,0,0,0,117,118,1,0,0,0,118,116,1,
        0,0,0,118,119,1,0,0,0,119,120,1,0,0,0,120,121,6,20,0,0,121,42,1,
        0,0,0,6,0,86,97,106,112,118,1,6,0,0
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