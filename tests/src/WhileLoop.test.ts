import { describe, it, expect } from 'vitest';
import { Evaluate, EvaluateType } from "./util";
import { Type } from '../../src/typeChecker/Type';
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

describe('While Loop Type Tests', () => {
    it('Predicate wrong type', () => {
        const program = `
            let i = 0;
            while i {
                i = i + 1;
            }
        `
        expect(() => EvaluateType(program)).toThrowError();
    });

    it('While loop always evaluate to type void', () => {
        const program = `
            let i = 0;
            while i < 10 {
                i = i + 1;
            }
        `
        expect(EvaluateType(program)).toBe(Type.Void);
    });

    it('While loop body must be of type void', () => {
        const program = `
            let i = 0;
            while i < 10 {
                i
            }
        `

        expect(() => EvaluateType(program)).toThrowError();
    })
});