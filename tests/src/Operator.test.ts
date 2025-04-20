import { describe, it, expect } from 'vitest';
import { Evaluate, EvaluateType } from "./setup";
import { BOOLEAN_TYPE, NUMBER_TYPE, Type } from '../../src/typeChecker/Type';

describe('Operator Test', () => {
    it('*', () => expect(`2 * 3;`).toEvaluateTo(6));
    it('/', () => expect(`6 / 3;`).toEvaluateTo(2));
    it('/ (2)', () => expect(`3.2 / 2.0;`).toEvaluateTo(1.6));
    it('+', () => expect(`8 + 2;`).toEvaluateTo(10));
    it('-', () => expect(`92 - 52;`).toEvaluateTo(40));
    it('||', () => expect(`true || false;`).toEvaluateTo(true));
    it('&&', () => expect(`false && true;`).toEvaluateTo(false));
    it('>', () => expect(`8 > 2;`).toEvaluateTo(true));
    it('>=', () => expect(`8 >= 9;`).toEvaluateTo(false));
    it('<', () => expect(`8 < 2;`).toEvaluateTo(false));
    it('<=', () => expect(`8 <= 9;`).toEvaluateTo(true));
    it('==', () => expect(`8 == 8;`).toEvaluateTo(true));
    it('!=', () => expect(`8 != 8;`).toEvaluateTo(false));
    it('%', () => expect(`7 % 3;`).toEvaluateTo(1));
    it('unary -', () => expect(`-2 + (-3);`).toEvaluateTo(-5));
    it('unary !', () => expect(`!(1 == 7);`).toEvaluateTo(true));

});

describe('Operator Type test', () => {
    it('Operator Type 1', () => {
        const program = `
                2;
                true;
            `
        expect(program).toBeEqualType(BOOLEAN_TYPE);

    });

    it('Operator Type 2', () => {
        const program = `
                2+2*4;
            `
        expect(program).toBeEqualType(NUMBER_TYPE);
    });

    it('Operator Type 3', () => {
        const program = `
            3*2 > 2*0 ;
        `
        expect(program).toBeEqualType(BOOLEAN_TYPE);

    });

    it('Operator Type 4', () => {
        const program = `
            !true;
        `
        expect(program).toBeEqualType(BOOLEAN_TYPE);

    });

    it('Operator Type 5', () => {
        expect("true + 1;").toFailTypeCheck();
    });

    it('Operator Type 6', () => {
        const program = `
            true || false && true;
        `
        expect(program).toBeEqualType(BOOLEAN_TYPE);
    });

    it('Operator Type 7', () => {
        const program = `
            -10;
        `
        expect(program).toBeEqualType(NUMBER_TYPE);
    });
})