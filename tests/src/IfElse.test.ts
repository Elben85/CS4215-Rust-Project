import { describe, it, expect } from 'vitest';
import { Evaluate } from "./util";

describe('If Else Tests', () => {
    it('true expression', () => {
        const program = `
            if (true) { 1 } else { 2 }
        `
        expect(Evaluate(program)).toBe(1);
    });
    it('false expression', () => {
        const program = `
            if (false) { 1 } else { 2 }
        `
        expect(Evaluate(program)).toBe(2);
    });
    it('nested conditional', () => {
        const program = `
            if (false) {
                1
            } else if (false) {
                2 
            } else if (false) {
                3
            } else {
                4
            }
        `
        expect(Evaluate(program)).toBe(4);
    });
});