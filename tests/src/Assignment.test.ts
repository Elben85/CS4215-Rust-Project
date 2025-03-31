import { describe, it, expect } from 'vitest';
import { Evaluate, EvaluateType } from "./util";
import { NUMBER_TYPE, Type } from '../../src/typeChecker/Type';

describe('Assignment Tests', () => {
    it('assignments produce value', () => {
        const program = `
            let mut i = 0;
            i = 69;
        `
        expect(Evaluate(program)).toBe(69);
    });

    it('nested assignments', () => {
        const program = `
            let mut i = 0;
            let mut j = 0;
            i = j = 10;
            i * j;
        `
        expect(Evaluate(program)).toBe(100);
    });
});

describe('Assignment Type Tests', () => {
    it('assignments type 1', () => {
        const program = `
            let mut i = 0;
            i = 69;
        `
        expect(EvaluateType(program)).toBe(NUMBER_TYPE);
    });

    it('assignment type 2', () => {
        const program = `
            let mut i = 0;
            let mut j = 0;
            i = j = 10;
        `
        expect(EvaluateType(program)).toBe(NUMBER_TYPE);
    });

    it(`assignment type 3`, () => {
        const program = `
        let mut i = true;
        let mut j = 0;
        i = j = 10;
        `
        expect(() => EvaluateType(program)).toThrowError();
    })

    it(`test deferred assignment`, () => {
        const program = `
        let i;
        i = 10;
        `
        expect(EvaluateType(program)).toBe(NUMBER_TYPE);
    })

    it(`test reassignment`, () => {
        const program = `
        let i = 10;
        i = 20
        `
        expect(() => EvaluateType(program)).toThrowError();
    })
});
