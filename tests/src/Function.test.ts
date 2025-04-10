import { describe, it, expect } from "vitest";
import { Compile } from "./setup";

describe('Function Tests', () => {
    it('simple', () => {
        const program = `
            fn same() -> f64 {
                return 3*3;
            }
            
            same();
            
        `
        expect(program).toEvaluateTo(9);
    });

    it('simple 2', () => {
        const program = `
            fn same(x: f64, y: f64) -> f64 {
                return (3 + x) * y;
            }
            
            same(2, 1);
            
        `
        expect(program).toEvaluateTo(5);
    });


    it('simple 3', () => {
        const program = `
            fn first(x: f64, y: f64) -> f64 {
                return (3 + x) * y;
            }

            fn second(b: bool) -> bool {
                let result1 = first(2, 1);
                return b && (result1 > 1);
            }
             
            second(true);
        `
        expect(program).toEvaluateTo(true);
    });

    it('simple 4', () => {
        const program = `
            let mut x = 1;
            fn first() {
                x = 10;
            }
             
            first();
            
            x;
        `
        expect(program).toEvaluateTo(10);
    });

    it('simple closure 1', () => {
        const program = `
            
            let f = || 3;
            f();
        `
        expect(program).toEvaluateTo(3);
    });

    it('simple closure 2', () => {
        const program = `
            
            let f = |x: f64, y: f64| x * y;
            f(2, 3);
        `
        expect(program).toEvaluateTo(6);
    });

    it('simple closure 3', () => {
        const program = `
            let f = |x: f64| -> f64 {
                let z = 10;
                return 10*x;
            };
            
            f(2);
        `
        expect(program).toEvaluateTo(20);
    });

    it('Test parsing precedence', () => {
        const program = `
        let mut f = |x: f64| -> f64 {return x;};
        let a = 2 + f(4);
        let b = -f(1);
        let c = &mut f;
        let d = {
            let tmp = || -> f64  {return 2;};
            tmp
        };
        a + b + d();
        `
        expect(program).toEvaluateTo(7);
    })

    // TODO: Case not yet handled
    // it('simple closure immediate', () => {
    //     const program = `
    //         (|x: f64, y: f64| 10 + x + y)(5, 6);
    //     `

    //     expect(program).toEvaluateTo(21);
    // });

});