import { describe, it, expect } from 'vitest';

describe('Drop Checker', () => {
    it('access dropped value', () => {
        const program = `
            let mut i;
            {
                let a = 2;
                i = &a;
            }
            *i;
        `
        expect(program).toFailTypeCheck();
    });

    it('dropped value but not accessed', () => {
        const program = `
            let mut i;
            {
                let a = 2;
                i = &a;
            }
        `
        expect(program).toPassTypeCheck();
    });

    it(`Can't use moved value`, () => {
        const program = `
            let a = "Str";
            let b = a;
            a;
        `
        expect(program).toFailTypeCheck();
    });

    it(`Can't use moved value 2`, () => {
        const program = `
            let a = "Str";
            {
                a
            }
            a;
        `
        expect(program).toFailTypeCheck();
    });

    it(`Moved value but unused`, () => {
        const program = `
            let a = "Str";
            let b = a;
        `
        expect(program).toPassTypeCheck();
    });

    it(`Can move value to out of scope`, () => {
        const program = `
            let a;
            {
                let b = "A";
                a = b;
            }
            let c = &a;
            c;
        `
        expect(program).toPassTypeCheck();
    })

    it(`Float and bool copied not moved`, () => {
        const program = `
            let a = 1;
            let b = a;
            a;
            let a = true;
            let b = a;
            a;
        `
        expect(program).toPassTypeCheck();
    })

    it(`Float and bool copied not moved 2`, () => {
        const program = `
            let a = 1;
            let b = {
                a
            };
            a;
            let a = true;
            let b = {
                a
            };
            a;
        `
        expect(program).toPassTypeCheck();
    })
});