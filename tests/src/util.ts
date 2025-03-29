import { CharStream, CommonTokenStream } from "antlr4ng";
import { evaluate } from "../../src/evaluator/evaluate";
import { CompilerVisitor } from "../../src/compiler/compiler";
import { SimpleLangLexer } from "../../src/parser/src/SimpleLangLexer";
import { SimpleLangParser } from "../../src/parser/src/SimpleLangParser";
import { TypeChecker } from "../../src/typeChecker/TypeChecker";
import { execPath } from "process";

export function Evaluate(program: string) {
    // Create the lexer and parser
    const inputStream = CharStream.fromString(program);
    const lexer = new SimpleLangLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new SimpleLangParser(tokenStream);

    // Parse the input
    const tree = parser.prog();

    // Compile the parsed tree
    const visitor = new CompilerVisitor()
    visitor.visit(tree);
    const instructions = visitor.instructionArray;
    console.log(instructions);
    const result = evaluate(instructions);

    return result;
}

export function EvaluateType(program: string) {
    // Create the lexer and parser
    const inputStream = CharStream.fromString(program);
    const lexer = new SimpleLangLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new SimpleLangParser(tokenStream);

    // Parse the input
    const tree = parser.prog();

    // Compile the parsed tree
    const visitor = new TypeChecker()
    const type = visitor.checkType(tree);
    console.log(type);

    return type;
}

export function ExpectError(lambda: () => any) {
    let result: any
    try {
        result = lambda()
    } catch (e) {
        return;
    }
    throw new Error(`Error expected, but execution completed successfully. Result: ${result}`)
}