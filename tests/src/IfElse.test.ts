import { describe, it, expect } from 'vitest';
import { Evaluate, EvaluateType } from "./util";
import { BOOLEAN_TYPE, NUMBER_TYPE, Type, VOID_TYPE } from '../../src/typeChecker/Type';

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

describe('If Else Type Tests', () => {
    it('If Else Type 1', () => {
        const program = `
            if (true) { 1 } else { 2 }
        `
        expect(EvaluateType(program)).toBe(NUMBER_TYPE);
    });

    it('If Else Type 2', () => {
        const program = `
            if (false) { 1; }
        `
        expect(EvaluateType(program)).toBe(VOID_TYPE);
    });

    it('If Else Type 3', () => {
        const program = `
            if (false) {
                1
            } else {
                true 
            }
        `
        expect(() => EvaluateType(program)).toThrowError();
    });

    it('If Else Type 4', () => {
        const program = `
            if (true) { 1 }
        `
        expect(() => EvaluateType(program)).toThrowError();
    })

    it('If Else Type 5', () => {
        const program = `
            if (true) {
                true
            } else if (true) {
                false
            } else {
                1 >= 2
            }
        `
        expect(EvaluateType(program)).toBe(BOOLEAN_TYPE)
    })
});