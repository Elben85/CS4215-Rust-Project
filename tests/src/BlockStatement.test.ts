import { describe, it, expect } from 'vitest';
import { Evaluate, EvaluateType } from "./util";
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
        expect(Evaluate(program)).toBe(6);
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
        expect(() => EvaluateType(program)).toThrowError("Lookup Fail, frame is Null");
    });

    it('Block type 2', () => {
        const program = `
        {
            let b = 3;
            b;
        }
        `
        expect(EvaluateType(program)).toBe(VOID_TYPE);
    })

    it(`Block type 3`, () => {
        const program = `
        {
            let b = 3;
            b + 11
        }
        `
        expect(EvaluateType(program)).toBe(NUMBER_TYPE);
    })
})