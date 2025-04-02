import { describe, it, expect } from 'vitest';
import { Compile, Evaluate, EvaluateType } from "./util";
import { Type, VOID_TYPE } from '../../src/typeChecker/Type';
import { VOID } from '../../src/compiler/compiler';

describe('While Loop Tests', () => {
    it('normal loop', () => {
        const program = `
            let mut i = 0;
            while i < 10 {
                i = i + 1;
            }
            i;
        `
        expect(Evaluate(program)).toBe(10);
    });

    it('while produce void', () => {
        const program = `
            let mut i = 0;
            while i < 10 {
                i = i + 1;
            }
        `
        expect(Evaluate(program)).toBe(VOID);
    });

    it('normal loop with break statement', () => {
        const program = `
            let mut i = 0;
            while i < 10 {
                i = i + 1;
                break;
            }
            i;
        `
        expect(Evaluate(program)).toBe(1);
    });

    it('double while loop with break statement', () => {
        const program = `
            let mut i = 0;
            let mut j = 0;
            while i < 10 {
                i = i + 1;
                let k = 31;
                if (i > 1) {
                    while j < 5 {
                        j = j + 1;
                        if (j > 2) {
                            break;
                        }
                    }
                }
                
                if (j >2) {
                    break;
                }
            }
            j;
        `
        expect(Evaluate(program)).toBe(3);
    });

    it('loop with deep break statement', () => {
        const program = `
            let mut i = 0;
            let mut j = 0;
            if (i < 1) {
                let cc = 1;
                while i < 10 {
                    i = i + 1;
                    if (i > 0) {
                        let k = 11;
                        if (i > 1) {
                            let a = 11;
                            break;
                        }
                    }
                }
            }
            i;
        `
        expect(Evaluate(program)).toBe(2);
    });

    it('normal loop with continue statement', () => {
        const program = `
            let mut i = 0;
            let mut j = 0;
            while i < 10 {
                i = i + 1;
                if (i > 2 && i < 4) {
                    continue;
                }
                j = j + 1;
            }
            j;
        `
        expect(Evaluate(program)).toBe(9);
    });

    it(`test break return correct value`, () => {
        const program = `
            let mut i = 0;
            let mut j = while i < 10 {
                i;
                break;
            };
            j;
        `
        expect(Evaluate(program)).toBe(VOID);
    })

    it(`test continue return correct value`, () => {
        const program = `
            let mut i = 0;
            let mut j = while i < 10 {
                i = i + 1;
            };
            j;
            
        `
        expect(Evaluate(program)).toBe(VOID);
    })

    it(`test break env restoration`, () => {
        const program = `
            let mut i = 0;
            while true {
                let mut i = 1;
                {
                    let mut i = 2;
                    break;
                }
            };
            i;
        `
        expect(Evaluate(program)).toBe(0);
    })

    it(`test continue env restoration`, () => {
        const program = `
            let mut i = 0;
            let mut j = 0;

            while j < 10 {
                let mut i = 1;
                {
                    let mut i = 2;
                    j = j + 1;
                    continue;
                }
                let mut i = 2;
            };
            i;
        `
        expect(Evaluate(program)).toBe(0);
    })
});

describe('While Loop Type Tests', () => {
    it('Predicate wrong type', () => {
        const program = `
            let mut i = 0;
            while i {
                i = i + 1;
            }
        `
        expect(() => EvaluateType(program)).toThrowError();
    });

    it('While loop always evaluate to type void', () => {
        const program = `
            let mut i = 0;
            while i < 10 {
                i = i + 1;
            }
        `
        expect(EvaluateType(program)).toBe(VOID_TYPE);
    });

    it('While loop body must be of type void', () => {
        const program = `
            let mut i = 0;
            while i < 10 {
                i + 1
            }
        `

        expect(() => EvaluateType(program)).toThrowError();
    })
});