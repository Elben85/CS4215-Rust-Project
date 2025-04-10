import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { BailErrorStrategy, CharStream, CommonTokenStream } from 'antlr4ng';
import { SimpleLangLexer } from './parser/src/SimpleLangLexer';
import { SimpleLangParser } from './parser/src/SimpleLangParser';
import { CompilerVisitor } from "./compiler/compiler";
import { evaluate } from "./evaluator/evaluate";
import { TypeChecker } from "./typeChecker/TypeChecker";

export class SimpleLangEvaluator extends BasicEvaluator {
    private executionCount: number;
    private visitor: CompilerVisitor;
    private typeChecker: TypeChecker;

    constructor(conductor: IRunnerPlugin) {
        super(conductor);
        this.executionCount = 0;
    }

    async evaluateChunk(chunk: string): Promise<void> {
        this.executionCount++;
        try {
            // Create the lexer and parser
            const inputStream = CharStream.fromString(chunk);
            const lexer = new SimpleLangLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new SimpleLangParser(tokenStream);
            parser.errorHandler = new BailErrorStrategy();

            // Parse the input
            const tree = parser.prog();
            console.log(tree.toStringTree());

            // Check the type
            this.typeChecker = new TypeChecker();
            const type = this.typeChecker.checkType(tree);

            // Compile the parsed tree
            this.visitor = new CompilerVisitor()
            this.visitor.visit(tree);
            const instructions = this.visitor.instructionArray;
            console.log(instructions);
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