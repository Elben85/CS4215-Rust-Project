import { describe, it, expect } from 'vitest';
import { Evaluate, EvaluateType } from "./setup";
import { NUMBER_TYPE, Type, VOID_TYPE } from '../../src/typeChecker/Type';

describe('Block statement test', () => {
    it('Block Statement', () => {
        const program = `
            let a = 2;
            let b = {
                192 + 8302;
                3
            };
            {
                let a = 4; 
            }
            a * b;
        `
        expect(program).toEvaluateTo(6);
    });

    it('Block Statement 2', () => {
        const program = `
            let mut a = 2;
            let x = {
                let b = &mut a;
                let mut i = 0;
                while i < 30000 {
                    i = i + 1;
                };
                b
            };
            *x;
        `
        expect(program).toEvaluateTo(2);
    });
});

describe('Block statement type test', () => {
    it('Block type 1', () => {
        const program = `
            let a = false;
            {
                let b = 3;
                b;
            }
            b;
        `
        expect(program).toFailTypeCheck();
    });

    it('Block type 2', () => {
        const program = `
        {
            let b = 3;
            b;
        }
        `
        expect(program).toBeEqualType(VOID_TYPE);
    })

    it(`Block type 3`, () => {
        const program = `
        {
            let b = 3;
            b + 11
        }
        `
        expect(program).toBeEqualType(NUMBER_TYPE);
    })
})