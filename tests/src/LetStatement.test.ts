import { UNIT } from './../../src/compiler/compiler';
import { describe, it, expect } from 'vitest';
import { Evaluate, EvaluateType } from "./setup";
import { BOOLEAN_TYPE, NUMBER_TYPE, Type, UNIT_TYPE } from '../../src/typeChecker/Type';

describe('Let Statement Test', () => {
    it('Let Statement', () => {
        const program = `
            let a = 1;
            let b = 2;
            let c = 3;
            let d = 4;
            a * a + b * b + c * c + d * d;
        `
        expect(program).toEvaluateTo(30);
    });

    it('Let Statement produce unit', () => {
        const program = `
            let a: bool;
        `
        expect(program).toEvaluateTo(UNIT);
    })
});

describe('Let Statement Type Test', () => {
    it('Let Type 1', () => {
        const program = `
                let b = 4;
                let a = 2+3;
                let c = b * a;
            `
        expect(program).toBeEqualType(UNIT_TYPE);
    });

    it('Let Type 2 ', () => {
        const program = `
            let b = 4;
            let a = 2+3;
            let c = b * a;
            c;
        `
        expect(program).toBeEqualType(NUMBER_TYPE);

    });

    it('Let Type 3', () => {
        const program = `
            let a = 4;
            let b = 2+3;
            let c = true;
            let d = b * a;
            c;
        `
        expect(program).toBeEqualType(BOOLEAN_TYPE);
    });

    it('Let Type 4', () => {
        const program = `
            let a = false;
            true || false && a;
        `
        expect(program).toBeEqualType(BOOLEAN_TYPE);

    });

    it('Let Type 5', () => {
        const program = `
            let a = true;
            (1 > 2) && a;
        `
        expect(program).toBeEqualType(BOOLEAN_TYPE);
    });

    it('Access uninitialized', () => {
        const program = `
            let a;
            a * 1;
        `
        expect(program).toFailTypeCheck();
    })

    it('Conflicting declared type', () => {
        const program = `
            let a: f64 = true;
        `
        expect(program).toFailTypeCheck();
    })

    it('Correct declared type', () => {
        expect(`let a: bool = true;`).toBeEqualType(UNIT_TYPE);
    })
})