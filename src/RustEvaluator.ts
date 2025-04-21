import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { BailErrorStrategy, CharStream, CommonTokenStream } from 'antlr4ng';
import { RustLexer } from './parser/src/RustLexer';
import { RustParser } from './parser/src/RustParser';
import { CompilerVisitor } from "./compiler/compiler";
import { evaluate } from "./evaluator/evaluate";
import { TypeChecker } from "./typeChecker/TypeChecker";
import { BorrowChecker } from "./borrowChecker/BorrowChecker";

export class RustEvaluator extends BasicEvaluator {
    private executionCount: number;
    private visitor: CompilerVisitor;
    private typeChecker: TypeChecker;
    private borrowChecker: BorrowChecker;

    constructor(conductor: IRunnerPlugin) {
        super(conductor);
        this.executionCount = 0;
    }

    async evaluateChunk(chunk: string): Promise<void> {
        this.executionCount++;
        try {
            // Create the lexer and parser
            const inputStream = CharStream.fromString(chunk);
            const lexer = new RustLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new RustParser(tokenStream);
            parser.errorHandler = new BailErrorStrategy();

            // Parse the input
            const tree = parser.prog();

            // Check the type
            this.typeChecker = new TypeChecker();
            const type = this.typeChecker.checkType(tree);

            // Simple borrow checking
            this.borrowChecker = new BorrowChecker(this.typeChecker.typeCache);
            this.borrowChecker.visit(tree);

            // Compile the parsed tree
            this.visitor = new CompilerVisitor(this.typeChecker.typeCache);
            this.visitor.visit(tree);
            const instructions = this.visitor.instructionArray;
            const result = evaluate(instructions);

            // Send the result to the REPL
            this.conductor.sendOutput(`Result of expression: ${result}`);
        } catch (error) {
            // Handle errors and send them to the REPL
            if (error instanceof Error) {
                this.conductor.sendOutput(`Error: ${error.message}`);
            } else {
                this.conductor.sendOutput(`Error: ${String(error)}`);
            }
        }
    }
}