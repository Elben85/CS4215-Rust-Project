import { TypeChecker } from './../../src/typeChecker/TypeChecker';
import { BorrowChecker } from './../../src/borrowChecker/BorrowChecker';
import { BailErrorStrategy, CharStream, CommonTokenStream } from "antlr4ng";
import { evaluate } from "../../src/evaluator/evaluate";
import { CompilerVisitor } from "../../src/compiler/compiler";
import { RustLexer } from "../../src/parser/src/RustLexer";
import { RustParser } from "../../src/parser/src/RustParser";
import { expect } from "vitest";
import { Type } from "../../src/typeChecker/Type";

function getParseTree(program: string) {
    const inputStream = CharStream.fromString(program);
    const lexer = new RustLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new RustParser(tokenStream);
    // parser.errorHandler = new BailErrorStrategy();

    // Parse the input
    const tree = parser.prog();
    return tree
}

export function Evaluate(program: string) {
    const tree = getParseTree(program)
    // Compile the parsed tree
    const typeChecker = new TypeChecker();
    typeChecker.checkType(tree);
    const visitor = new CompilerVisitor(typeChecker.typeCache)
    visitor.visit(tree);
    const instructions = visitor.instructionArray;
    const result = evaluate(instructions, true);

    return result;
}

export function EvaluateType(program: string) {
    const tree = getParseTree(program)

    // Compile the parsed tree
    const visitor = new TypeChecker()
    const type = visitor.checkType(tree);

    const borrowChecker = new BorrowChecker(visitor.typeCache);
    borrowChecker.visit(tree);

    return type;
}

export function Compile(program: string) {
    const tree = getParseTree(program)

    // Compile the parsed tree
    const typeChecker = new TypeChecker();
    typeChecker.checkType(tree);
    const visitor = new CompilerVisitor(typeChecker.typeCache);
    visitor.visit(tree);
    const instructions = visitor.instructionArray;

    return instructions;
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

expect.extend({
    toBeEqualType(program: string, type: Type) {
        const typeResult = EvaluateType(program);
        const result = typeResult.compare(type);
        return {
            pass: result,
            message: () => `expected ${type.toString()}, received ${typeResult.toString()}`
        }
    },
    toFailTypeCheck(program: string) {
        try {
            const typeResult = EvaluateType(program);
            return {
                pass: false,
                message: () => `expected program to throw error, but program evaluates to type ${typeResult.toString()}`
            }
        } catch (e) {
            return {
                pass: true,
                message: () => ``
            }
        }
    },
    toPassTypeCheck(program: string) {
        const typeResult = EvaluateType(program);
        return {
            pass: true,
            message: () => ``
        }
    },
    toEvaluateTo(program: string, expected: any) {
        const result = Evaluate(program)
        return {
            pass: result === expected,
            message: () => `expected ${expected}, got ${result}`
        }
    }
})