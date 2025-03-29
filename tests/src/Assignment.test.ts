import { describe, it, expect } from 'vitest';
import { Evaluate, EvaluateType } from "./util";
import { Type } from '../../src/typeChecker/Type';

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

describe('Assignment Type Tests', () => {
    it('assignments type 1', () => {
        const program = `
            let i = 0;
            i = 69;
        `
        expect(EvaluateType(program)).toBe(Type.Number);
    });

    it('assignment type 2', () => {
        const program = `
            let i = 0;
            let j = 0;
            i = j = 10;
        `
        expect(EvaluateType(program)).toBe(Type.Number);
    });

    it(`assignment type 3`, () => {
        const program = `
        let i = true;
        let j = 0;
        i = j = 10;
        `
        expect(() => EvaluateType(program)).toThrowError();
    })
});
