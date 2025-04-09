import { describe, it, expect } from 'vitest';

describe('Borrow Checker test', () => {
    it('No update under immutable reference', () => {
        const program = `
            let mut a = 1;
            let b = &mut a;
            let c = &b;
            **c = 1; 
        `
        expect(program).toFailTypeCheck();
    })

    it('Can update under mutable reference', () => {
        const program = `
            let mut a = 1;
            let mut b = &mut a;
            let c = &mut b;
            **c = 1; 
        `
        expect(program).toPassTypeCheck();
    })

    it('No multiple mutable borrows', () => {
        const program = `
            let mut a = 1;
            let b = &mut a;
            let c = &mut a;
            b;
        `
        expect(program).toFailTypeCheck();
    })

    it('Allow multiple shared borrow', () => {
        const program = `
            let mut i = 1;
            let mut b = &mut i;
            let mut c = &i;
            let mut d = &i;
            i;
            c;
            d;
        `
        expect(program).toPassTypeCheck();
    })

    it('Referenced borrowed value is borrowed after', () => {
        const program = `
            let mut i = 1;
            let mut j = 2;
            let mut b = &mut i;
            let mut c = &mut b;
            let mut d = &mut i;
            **c = 3;
        `
        expect(program).toFailTypeCheck();
    })

    it('Test reborrow scope', () => {
        const program = `
            let mut i = 1;
            let b = &mut i;
            b;
            i = 2;
            let c = &mut i;
            c;
            i = 3;
            let d = &i;
            let e = &i;
            d; e;
            i = 4;
            let f = &i;
            f;
        `
        expect(program).toPassTypeCheck();
    })

    it(`Can't mutable borrow an immutable`, () => {
        const program = `
            let i = 1;
            let b = &mut i;
        `
        expect(program).toFailTypeCheck();
    })


    it(`Pass complicated borrows`, () => {
        const program = `
            let mut a = 1;
            let mut b = &mut a;
            let mut x = &mut b;
            let mut y = 2;
            let mut z = &mut y;
            let mut c = &mut a;
            x = &mut z;
        `
        expect(program).toPassTypeCheck();
    })
});

