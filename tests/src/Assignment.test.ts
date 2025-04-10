import { describe, it, expect } from 'vitest';
import { Evaluate, EvaluateType } from "./setup";
import { NUMBER_TYPE, NumberType, Type } from '../../src/typeChecker/Type';

describe('Assignment Tests', () => {
    it('assignments produce value', () => {
        const program = `
            let mut i = 0;
            i = 69;
        `
        expect(program).toEvaluateTo(69);
    });

    it('nested assignments', () => {
        const program = `
            let mut i = 0;
            let mut j = 0;
            i = j = 10;
            i * j;
        `
        expect(program).toEvaluateTo(100);
    });
});

describe('Assignment Type Tests', () => {
    it('assignments type 1', () => {
        const program = `
            let mut i = 0;
            i = 69;
        `
        expect(program).toBeEqualType(NUMBER_TYPE);
    });

    it('assignment type 2', () => {
        const program = `
            let mut i = 0;
            let mut j = 0;
            i = j = 10;
        `
        expect(program).toBeEqualType(NUMBER_TYPE);
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
});
