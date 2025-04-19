import { describe, it, expect } from 'vitest';
import { PointerType, NUMBER_TYPE } from '../../src/typeChecker/Type';

describe('Deref Borrow Expression test', () => {
    it('deref borrow 1', () => {
        const program = `
            let mut a: f64 = 1;
            let mut b: &mut f64 = &mut a;
            let c: & &mut f64 = &b;
            let d: f64 = **c;
            d;
        `
        expect(program).toEvaluateTo(1);
    });

    it('deref borrow 2', () => {
        const program = `
            let mut a: f64 = 1;
            let mut b: &mut f64 = &mut a;
            let mut c: &mut &mut f64 = &mut b;
            **c = 10;
            **c = **c + 59;
            let d: f64 = **c;
            d;
        `
        expect(program).toEvaluateTo(69);
    });
});

describe('Deref Borrow Type test', () => {
    it('deref borrow 1', () => {
        const program = `
            let mut a: f64 = 1;
            let mut b: &mut f64 = &mut a;
            let c: & &mut f64 = &b;
            let d: f64 = **c;
            d;
        `
        expect(program).toBeEqualType(NUMBER_TYPE);
    });

    it('deref borrow 2', () => {
        const program = `
            let mut a: f64 = 1;
            let mut b: &mut f64 = &mut a;
            let mut c: &mut &mut f64 = &mut b;
            **c = 10;
            **c = **c + 59;
            *c;
        `
        expect(program).toBeEqualType(new PointerType(NUMBER_TYPE, true));
    });

    it('deref borrow 3', () => {
        const program = `
            let a: f64 = 1;
            let mut b: &mut f64 = &mut a;
        `
        expect(program).toFailTypeCheck();
    })

    it('deref borrow 4', () => {
        const program = `
            let mut a: f64 = 1;
            let b: &mut f64 = &mut a;
            *b = 2;
            b;
        `
        expect(program).toBeEqualType(new PointerType(NUMBER_TYPE, true));
    })

    it('deref borrow 5', () => {
        const program = `
            let mut a: f64 = 1;
            let b: &mut f64 = &mut a;
            let c: & &mut f64 = &b;
            c; 
        `
        const expected = new PointerType(
            new PointerType(NUMBER_TYPE, true),
            false
        )
        expect(program).toBeEqualType(expected);
    })

    it('deref borrow 6', () => {
        const program = `
            let mut a: f64 = 1;
            let b: &mut f64 = &mut a;
            let mut c: &mut f64 = b;
            c;
        `
        const expected = new PointerType(NUMBER_TYPE, true);
        expect(program).toBeEqualType(expected);
    })
});

