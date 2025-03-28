import { describe, it, expect } from 'vitest';
import { Evaluate } from "./util";

describe('Assignment Tests', () => {
    it('assignments produce value', () => {
        const program = `
            let i = 0;
            i = 69;
        `
        expect(Evaluate(program)).toBe(69);
    });

    it('nested assignments', () => {
        const program = `
            let i = 0;
            let j = 0;
            i = j = 10;
            i * j;
        `
        expect(Evaluate(program)).toBe(100);
    });
});