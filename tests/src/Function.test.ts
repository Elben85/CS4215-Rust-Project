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
    
    it('deferred declaration', () => {
        const program = `
            let x: bool = later();
            fn later() -> bool {
                true
            }
            x;
        `
        expect(program).toEvaluateTo(true);
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

    it('simple closure 4', () => {
        const program = `
            let f = |x: f64| -> f64 {
                return x*x;
            };

            let g = |x: f64| -> f64 {
                return 10 + f(x+x);
            };
            
            
            g(3);
        `
        expect(program).toEvaluateTo(46);
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

    it('simple closure immediate 1', () => {
        const program = `
            (|x: f64, y: f64| 10 + x + y)(5, 6);
        `

        expect(program).toEvaluateTo(21);
    });

    it('simple closure immediate 2', () => {
        const program = `
            (|x: f64| -> f64 {
                return x*x;
            })(8);
        `

        expect(program).toEvaluateTo(64);
    });

    it('closure, high order', () => {
        const program = `
            (|x: f64, y: f64| |a: f64, b: f64| x + y + a*b)(1, 2)(3, 4);
        `

        expect(program).toEvaluateTo(15);
    });

});

describe('Function Type Tests', () => {
    it('Closure wrong return type', () => {
        const program = `
        let mut f = |x: f64| -> f64 {return true;};
        f(1);
        `
        expect(program).toFailTypeCheck();
    })

    it('Closure wrong arg type', () => {
        const program = `
        let mut f = |x: f64| -> f64 {return 1;};
        f(true);
        `
        expect(program).toFailTypeCheck();
    })

    it('Closure wrong number of args', () => {
        const program = `
        let mut f = |x: f64| -> f64 {return 1;};
        f(1, 2);
        `
        expect(program).toFailTypeCheck();
    })

    it('Closure might not always return', () => {
        const program = `
        let mut f = |x: f64| -> f64 {
            if (true) {
                return 1;
            };
        };
        f(1, 2);
        `
        expect(program).toFailTypeCheck();
    })

    it('Closure always return', () => {
        const program = `
        let mut f = |x: f64| -> f64 {
            if (true) {
                return 1;
            } else {
                1; 
            };
            return 2;
            0;
        };
        f(1);
        `
        expect(program).toPassTypeCheck();
    })

    it('Fn wrong return type', () => {
        const program = `
        fn f(x: f64) -> f64 {return true;};
        f(1);
        `
        expect(program).toFailTypeCheck();
    })

    it('Fn wrong arg type', () => {
        const program = `
        fn f(x: f64) -> f64 {return 1;};
        f(true);
        `
        expect(program).toFailTypeCheck();
    })

    it('Fn wrong number of args', () => {
        const program = `
        fn f(x: f64) -> f64 {return 1;};
        f(1, 2);
        `
        expect(program).toFailTypeCheck();
    })

    it('Fn might not always return', () => {
        const program = `
        fn f(x: f64) -> f64 {
            if (true) {
                return 1;
            };
        };
        f(1, 2);
        `
        expect(program).toFailTypeCheck();
    })

    it('Fn always return', () => {
        const program = `
        fn f(x: f64) -> f64 {
            if (true) {
                return 1;
            } else {
                1; 
            };
            return 2;
            0;
        };
        f(1);
        `
        expect(program).toPassTypeCheck();
    })
})