import { describe, it, expect } from 'vitest';
import { Evaluate, EvaluateType } from "./setup";
import { PointerType, NUMBER_TYPE, NumberType, BoxedType } from '../../src/typeChecker/Type';

describe('Deref Borrow Expression test', () => {
    it('deref borrow 1', () => {
        const program = `
            let mut a = 1;
            let mut b = &mut a;
            let c = &b;
            let d = **c;
            d;
        `
        expect(program).toEvaluateTo(1);
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
        expect(program).toEvaluateTo(69);
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
        expect(program).toBeEqualType(NUMBER_TYPE);
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
        expect(program).toBeEqualType(new PointerType(new BoxedType(NUMBER_TYPE), true));
    });

    it('deref borrow 3', () => {
        const program = `
            let a = 1;
            let mut b = &mut a;
        `
        expect(program).toFailTypeCheck();
    })

    it('deref borrow 4', () => {
        const program = `
            let mut a = 1;
            let b = &mut a;
            *b = 2;
            b;
        `
        expect(program).toBeEqualType(new PointerType(new BoxedType(NUMBER_TYPE), true));
    })

    it('deref borrow 5', () => {
        const program = `
            let mut a = 1;
            let b = &mut a;
            let c = &b;
            c; 
        `
        const expected = new PointerType(
            new BoxedType(new PointerType(new BoxedType(NUMBER_TYPE), true)),
            false
        )
        expect(program).toBeEqualType(expected);
    })

    it('deref borrow 6', () => {
        const program = `
            let mut a = 1;
            let b = &mut a;
            let mut c = b;
            c;
        `
        const expected = new PointerType(new BoxedType(NUMBER_TYPE), true);
        expect(program).toBeEqualType(expected);
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

