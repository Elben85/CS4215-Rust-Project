import { describe, it, expect } from 'vitest';
import Evaluate from "./util";

describe('RustEvaluator', () => {
    it('Block Statement', () => {
        const program = `
            let a = 2;
            let b = {
                192 + 8302;
                3
            };
            {
                let a = 4; 
            }
            a * b;
        `
        expect(Evaluate(program)).toBe(6);
    });
});