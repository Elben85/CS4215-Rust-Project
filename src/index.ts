import { initialise } from "conductor/dist/conductor/runner/util/";
import { SimpleLangEvaluator } from "./RustEvaluator";

const { runnerPlugin, conduit } = initialise(SimpleLangEvaluator);

// import { CharStream, CommonTokenStream } from 'antlr4ng';
// import { SimpleLangLexer } from './parser/src/SimpleLangLexer';
// import { SimpleLangParser } from './parser/src/SimpleLangParser';
// import { CompilerVisitor } from "./compiler/compiler";
// import { evaluate } from "./evaluator/evaluate";

// // Create the lexer and parser
// const chunk = "2 + 3 - 1 + 2 * 3";
// const inputStream = CharStream.fromString(chunk);
// const lexer = new SimpleLangLexer(inputStream);
// const tokenStream = new CommonTokenStream(lexer);
// const parser = new SimpleLangParser(tokenStream);

// // Parse the input
// const tree = parser.prog();

// // Compile the parsed tree
// const visitor = new CompilerVisitor()
// visitor.visit(tree);
// const instructions = visitor.instructionArray;
// const result = evaluate(instructions);
// console.log(result);