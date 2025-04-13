import { describe, it, expect } from 'vitest';
import { NUMBER_TYPE, VOID_TYPE } from '../../src/typeChecker/Type';
import { VOID } from '../../src/compiler/compiler';

describe('Assignment Tests', () => {
    it('assignments produce value', () => {
        const program = `
            let mut i = 0;
            i = 69;
            i;
        `
        expect(program).toEvaluateTo(69);
    });

    it('nested assignments', () => {
        const program = `
            let mut i;
            let mut j;
            i = j = 10;
            i;
        `
        expect(program).toEvaluateTo(VOID);
    });

    it('nested assignments 2', () => {
        const program = `
            let mut i;
            let mut j;
            i = j = 10;
            j;
        `
        expect(program).toEvaluateTo(10);
    });
});

describe('Assignment Type Tests', () => {
    it('assignments type 1', () => {
        const program = `
            let mut i = 0;
            i = 69;
            i;
        `
        expect(program).toBeEqualType(NUMBER_TYPE);
    });

    it('assignment type 2', () => {
        const program = `
            let mut i;
            let mut j;
            i = j = 10;
        `
        expect(program).toBeEqualType(VOID_TYPE);
    });

    it(`assignment type 3`, () => {
        const program = `
        let mut i = true;
        let mut j = 0;
        i = j = 10;
        `
        expect(program).toFailTypeCheck();
    })

    it(`test deferred assignment`, () => {
        const program = `
        let i;
        i = 10;
        i;
        `
        expect(program).toBeEqualType(NUMBER_TYPE);
    })

    it(`test reassignment`, () => {
        const program = `
        let i = 10;
        i = 20;
        `
        expect(program).toFailTypeCheck();
    })

    it(`access unitialized var`, () => {
        const program = `
        let i: f64;
        i;
        `
        expect(program).toFailTypeCheck();
    })

    it(`no type could be inferred`, () => {
        expect('let i;').toFailTypeCheck();
    })
});
