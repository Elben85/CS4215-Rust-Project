import { describe, it, expect } from 'vitest';
import Evaluate from "./util";

describe('RustEvaluator', () => {
    it('Let Statement', () => {
        const program = `
            let a = 1;
            let b = 2;
            let c = 3;
            let d = 4;
            a + b + c * d;
        `
        expect(Evaluate(program)).toBe(15);
    });
});