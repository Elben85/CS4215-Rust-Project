import { describe, it, expect } from 'vitest';
import { Evaluate } from "./util";
import { VOID } from '../../src/compiler/compiler';

describe('While Loop Tests', () => {
    it('normal loop', () => {
        const program = `
            let i = 0;
            while i < 10 {
                i = i + 1;
            }
            i;
        `
        expect(Evaluate(program)).toBe(10);
    });

    it('while produce void', () => {
        const program = `
            let i = 0;
            while i < 10 {
                i = i + 1;
            }
        `
        expect(Evaluate(program)).toBe(VOID);
    });
});