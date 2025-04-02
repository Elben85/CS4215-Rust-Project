import { describe, it, expect } from 'vitest';
import { Evaluate, EvaluateType } from "./util";
import { PointerType, NUMBER_TYPE, NumberType } from '../../src/typeChecker/Type';

describe('Deref Borrow Expression test', () => {
    it('deref borrow 1', () => {
        const program = `
            let mut a = 1;
            let mut b = &mut a;
            let c = &b;
            let d = **c;
            d;
        `
        expect(Evaluate(program)).toBe(1);
    });

    it('deref borrow 2', () => {
        const program = `
            let mut a = 1;
            let mut b = &mut a;
            let mut c = &mut b;
            **c = 10;
            **c = **c + 59;
            let d = **c;
            d;
        `
        expect(Evaluate(program)).toBe(69);
    });
});

describe('Deref Borrow Type test', () => {
    it('deref borrow 1', () => {
        const program = `
            let mut a = 1;
            let mut b = &mut a;
            let c = &b;
            let d = **c;
            d;
        `
        expect(EvaluateType(program).compare(NUMBER_TYPE)).toBe(true);
    });

    it('deref borrow 2', () => {
        const program = `
            let mut a = 1;
            let mut b = &mut a;
            let mut c = &mut b;
            **c = 10;
            **c = **c + 59;
            *c;
        `
        expect(EvaluateType(program).compare(new PointerType(NUMBER_TYPE, true))).toBe(true);
    });

    it('deref borrow 3', () => {
        const program = `
            let a = 1;
            let mut  b = &mut a;
        `
        expect(() => EvaluateType(program)).toThrowError();
    })

    it('deref borrow 4', () => {
        const program = `
            let mut a = 1;
            let b = &mut a;
            *b = 2;
            b;
        `
        expect(EvaluateType(program).compare(new PointerType(NUMBER_TYPE, true))).toBe(true);
    })

    it('deref borrow 5', () => {
        const program = `
            let mut a = 1;
            let b = &mut a;
            let c = &b;
            c; 
        `
        const expected = new PointerType(
            new PointerType(NUMBER_TYPE, true),
            false
        )
        expect(EvaluateType(program).compare(expected)).toBe(true);
    })

    it('deref borrow 6', () => {
        const program = `
            let mut a = 1;
            let b = &mut a;
            let mut c = b;
            c;
        `
        const expected = new PointerType(NUMBER_TYPE, true);
        expect(EvaluateType(program).compare(expected)).toBe(true);
    })

    // TODO
    // it('deref borrow 7', () => {
    //     const program = `
    //         let mut a = 1;
    //         let b = &mut a;
    //         let c = &b;
    //         **c = 1; 
    //     `
    //     expect(() => EvaluateType(program)).toThrowError();
    // })
});

