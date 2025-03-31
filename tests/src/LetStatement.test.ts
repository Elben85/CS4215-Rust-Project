import { describe, it, expect } from 'vitest';
import { Evaluate, EvaluateType } from "./util";
import { BOOLEAN_TYPE, NUMBER_TYPE, Type, VOID_TYPE } from '../../src/typeChecker/Type';

describe('Let Statement Test', () => {
    it('Let Statement', () => {
        const program = `
            let a = 1;
            let b = 2;
            let c = 3;
            let d = 4;
            a * a + b * b + c * c + d * d;
        `
        expect(Evaluate(program)).toBe(30);
    });
});

describe('Let Statement Type Test', () => {
    it('Let Type 1', () => {
        const program = `
                let b = 4;
                let a = 2+3;
                let c = b * a;
            `
        expect(EvaluateType(program)).toBe(VOID_TYPE);

    });

    it('Let Type 2 ', () => {
        const program = `
            let b = 4;
            let a = 2+3;
            let c = b * a;
            c;
        `
        expect(EvaluateType(program)).toBe(NUMBER_TYPE);

    });

    it('Let Type 3', () => {
        const program = `
            let a = 4;
            let b = 2+3;
            let c = true;
            let d = b * a;
            c;
        `
        expect(EvaluateType(program)).toBe(BOOLEAN_TYPE);

    });

    it('Let Type 4', () => {
        const program = `
            let a = false;
            true || false && a;
        `
        expect(EvaluateType(program)).toBe(BOOLEAN_TYPE);

    });

    it('Let Type 5', () => {
        const program = `
            let a = true;
            (1 > 2) && a;
        `
        expect(EvaluateType(program)).toBe(BOOLEAN_TYPE);
    });

    it('Access uninitialized', () => {
        const program = `
            let a;
            a * 1;
        `
        expect(() => EvaluateType(program)).toThrowError();
    })

    it('Conflicting declared type', () => {
        const program = `
            let a: f64 = true;
        `
        expect(() => EvaluateType(program)).toThrowError();
    })

    it('Correct declared type', () => {
        expect(EvaluateType(`let a: bool = true;`)).toBe(VOID_TYPE);
    })
})