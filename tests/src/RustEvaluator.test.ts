import { describe, it, expect } from 'vitest';
import { evaluate } from "../../src/evaluator/evaluate";


describe('RustEvaluator', () => {
  it('simple instr to run', () => {
    const instruction = [{tag: "LDC", value: 1}, {tag: "LDC", value: 2}, {tag: "BINOP", op: "+"}, 
                   {tag: "POP"}, {tag: "LDC", value: 3}, {tag: "LDC", value: 5}, 
                   {tag: "BINOP", op: "*"}, {tag: "DONE"}]
    expect(evaluate(instruction)).toBe(15);
  });

  it('simple instr to run 2', () => {
    const instruction = [{tag: "LDC", value: 1}, {tag: "LDC", value: 2}, {tag: "BINOP", op: "+"}, {tag: "DONE"}]
    expect(evaluate(instruction)).toBe(3);
  });
});
