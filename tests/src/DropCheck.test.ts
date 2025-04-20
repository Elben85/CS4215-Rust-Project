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

    it(`Moved on a branch`, () => {
        const program = `
            let a = "S";
            let b = 1;
            if b > 1 {
                a
            } else {
                "A"
            }
            a;
        `
        expect(program).toFailTypeCheck();
    })

    it(`Moved on a branch 2`, () => {
        const program = `
            let a = "S";
            let b = 1;
            if b > 1 {
                "A"
            } else {
                a
            }
            a;
        `
        expect(program).toFailTypeCheck();
    })

    it(`Moved on a branch 3`, () => {
        const program = `
            let a = "S";
            let b = 1;
            if b > 1 {
                "A"
            } else if true {
                "B"
            } else if false {
                a 
            } else {
                "C"
            }
            a;
        `
        expect(program).toFailTypeCheck();
    })

    it(`Move on a branch but later reassigned`, () => {
        const program = `
            let mut a = "S";
            let b = 1;
            if b > 1 {
                "A"
            } else {
                a
            }
            a = "NEW";
            a;
        `
        expect(program).toPassTypeCheck();
    })

    it(`Cursed if else checks`, () => {
        const program = `
            let mut a = "A";
            let mut b = "B";
            let mut c = "C";

            if true {a} else {b} + if false {c} else {"D"};
        `
        expect(program).toPassTypeCheck();
    })

    it(`Cursed if else checks 2`, () => {
        const program = `
            let mut a = "A";
            let mut b = "B";
            let mut c = "C";

            if true {a} else {b} + if false {c} else {"D"};
            a;
        `
        expect(program).toFailTypeCheck();
    })

    it(`Cursed if else checks 3`, () => {
        const program = `
            let mut a = "A";
            let mut b = "B";
            let mut c = "C";

            if true {a} else {b} + if false {c} else {"D"};
            b;
        `
        expect(program).toFailTypeCheck();
    })

    it(`Cursed if else checks 4`, () => {
        const program = `
            let mut a = "A";
            let mut b = "B";
            let mut c = "C";

            if true {a} else {b} + if false {c} else {"D"};
            c;
        `
        expect(program).toFailTypeCheck();
    })
});