import { describe, it, expect } from "vitest";
import { Compile, Evaluate, EvaluateType } from "./util";
import { Type, VOID_TYPE } from '../../src/typeChecker/Type';
import { VOID } from '../../src/compiler/compiler';

describe('Function Tests', () => {
    it('simple', () => {
        const program = `
            fn same() -> f64 {
                return 3*3;
            }
            
            same();
            
        `
        expect(Evaluate(program)).toBe(9);
    });

    it('simple 2', () => {
        const program = `
            fn same(x: f64, y: f64) -> f64 {
                return (3 + x) * y;
            }
            
            same(2, 1);
            
        `
        expect(Evaluate(program)).toBe(5);
    });


    // TODO: doesn't work because closure type not handled
    // it('simple 3', () => {
    //     const program = `
    //         fn first(x: f64, y: f64) -> f64 {
    //             return (3 + x) * y;
    //         }

    //         fn second(b: boolean) -> f64 {
    //             let result1 = first(2, 1)
    //             return b && result1 > 1;
    //         }
             
    //         second(true);
    //     `
    //     expect(Evaluate(program)).toBe(true);
    // });

    it('simple 4', () => {
        const program = `
            let mut x = 1;
            fn first() {
                x = 10;
            }
             
            first();
            
            x;
        `
        expect(Evaluate(program)).toBe(10);
    });

    it('simple closure 1', () => {
        const program = `
            
            let f = || 3;
            f();
        `
        expect(Evaluate(program)).toBe(3);
    });

    it('simple closure 2', () => {
        const program = `
            
            let f = |x: f64, y: f64| x * y;
            f(2, 3);
        `
        expect(Evaluate(program)).toBe(6);
    });

    it('simple closure 3', () => {
        const program = `
            let f = |x: f64| -> f64 {
                let z = 10;
                return 10*x;
            };
            
            f(2);
        `
        expect(Evaluate(program)).toBe(20);
    });

    // TODO:
    // it('simple closure immediate', () => {
    //     const program = `
            
    //         (|x: f64, y: f64| 10 + x + y;)(5, 6);
    //     `
    //     expect(Evaluate(program)).toBe(21);
    // });

});