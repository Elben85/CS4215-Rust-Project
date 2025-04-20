import { describe, it, expect } from 'vitest';
import { STRING_TYPE } from '../../src/typeChecker/Type';

describe('String Test', () => {
    it('String 1', () => {
        const program = `
            let a: String = "test";
            a;
        `
        expect(program).toEvaluateTo("test");
    })

    it('String 2', () => {
        const program = `
            let a: String = "Hello, ";
            a + "World!":
        `
        expect(program).toEvaluateTo("Hello, World!");
    })
});

describe('String Type test', () => {
    it('String Type 1', () => {
        const program = `
            let a: String = "test";
            a;
        `
        expect(program).toBeEqualType(STRING_TYPE);
    });

    it('String Type 2', () => {
        const program = `
            let a: String = "test" + "hello";
            a;
        `
        expect(program).toBeEqualType(STRING_TYPE);
    });

    it('String Type 3', () => {
        const program = `
            "test" * "hello";
        `
        expect(program).toFailTypeCheck();
    });

    it(`Can't use moved value`, () => {
        const program = `
            let a = "Str";
            let b = a;
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
})