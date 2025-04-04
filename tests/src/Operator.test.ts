import { describe, it, expect } from 'vitest';
import { Evaluate, EvaluateType } from "./util";
import { BOOLEAN_TYPE, NUMBER_TYPE, Type } from '../../src/typeChecker/Type';

describe('Operator Test', () => {
    it('*', () => expect(Evaluate(`2 * 3;`)).toBe(6));
    it('/', () => expect(Evaluate(`6 / 3;`)).toBe(2));
    it('+', () => expect(Evaluate(`8 + 2;`)).toBe(10));
    it('-', () => expect(Evaluate(`92 - 52;`)).toBe(40));
    it('||', () => expect(Evaluate(`true || false;`)).toBe(true));
    it('&&', () => expect(Evaluate(`false && true;`)).toBe(false));
    it('>', () => expect(Evaluate(`8 > 2;`)).toBe(true));
    it('>=', () => expect(Evaluate(`8 >= 9;`)).toBe(false));
    it('<', () => expect(Evaluate(`8 < 2;`)).toBe(false));
    it('<=', () => expect(Evaluate(`8 <= 9;`)).toBe(true));
    it('==', () => expect(Evaluate(`8 == 8;`)).toBe(true));
    it('!=', () => expect(Evaluate(`8 != 8;`)).toBe(false));
    it('%', () => expect(Evaluate(`7 % 3;`)).toBe(1));
    it('unary -', () => expect(Evaluate(`-2 + (-3);`)).toBe(-5));
    it('unary !', () => expect(Evaluate(`!(1 == 7);`)).toBe(true));

});

describe('Operator Type test', () => {
    it('Operator Type 1', () => {
        const program = `
                2;
                true;
            `
        expect(EvaluateType(program)).toBe(BOOLEAN_TYPE);

    });

    it('Operator Type 2', () => {
        const program = `
                2+2*4;
            `
        expect(EvaluateType(program)).toBe(NUMBER_TYPE);
    });

    it('Operator Type 3', () => {
        const program = `
            3*2 > 2*0 ;
        `
        expect(EvaluateType(program)).toBe(BOOLEAN_TYPE);

    });

    it('Operator Type 4', () => {
        const program = `
            !true;
        `
        expect(EvaluateType(program)).toBe(BOOLEAN_TYPE);

    });

    it('Operator Type 5', () => {
        expect(() => EvaluateType("true + 1;")).toThrowError();
    });

    it('Operator Type 6', () => {
        const program = `
            true || false && true;
        `
        expect(EvaluateType(program)).toBe(BOOLEAN_TYPE);
    });

    it('Operator Type 7', () => {
        const program = `
            -10;
        `
        expect(EvaluateType(program)).toBe(NUMBER_TYPE);
    });
})