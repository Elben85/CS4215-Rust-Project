import { describe, it, expect } from "vitest";
import { Compile, Evaluate } from "./setup";

describe('Function Tests', () => {
    it('recursive function', () => {
        const program = `
            fn a(x: f64) -> f64 {
                fn u() -> f64 {
                    fn a() -> f64 {
                        return 2;
                    }
                    a()
                }
                if x == 1 {
                    return u() + x;
                } else {
                    return b(x - 1);
                }
            } 

            fn b(x: f64) -> f64 {
                c(x)
            }

            fn c(x: f64) -> f64 {
                a(x)
            }

            a(2);

        `
        expect(program).toEvaluateTo(3);
    })

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
            let x = 3;
            fn foo(a: f64) -> f64 {
                return a + 69;
            }
            foo(x) + foo(x);
            x;
        `
        expect(program).toEvaluateTo(3);
    });

    it('higher order 1', () => {
        const program = `
            fn first(a: f64) -> f64 {
                return a + 69;
            }

            fn foo(f: fn(f64) -> f64) -> f64 {
                return f(3);
            }
            
            foo(first);
        `
        expect(program).toEvaluateTo(72);
    });

    it('higher order 1', () => {
        const program = `
            fn first(a: f64) -> f64 {
                return a + 69;
            }

            fn foo() -> fn(f64) -> f64 {
                return first;
            }
            
            foo()(2);
        `
        expect(program).toEvaluateTo(71);
    });

    it('higher order 2', () => {
        const program = `
            fn first(a: f64) -> f64 {
                return a + 69;
            }

            fn foo(f: fn(f64) -> f64, b: f64) -> bool {
                return f(b) > f(f(b));
            }
            
            foo(first, 3);
        `
        expect(program).toEvaluateTo(false);
    });

    // it('higher order 3', () => {
    //     const program = `

    //         fn first(a: f64) -> fn(f64) -> bool {
    //             fn inside(b: f64) -> bool {
    //                 return b > a;
    //             }

    //             return inside;
    //         }

    //         first(2)(3);
    //     `
    //     expect(program).toEvaluateTo(true);
    // });

    // it('higher order 4', () => {
    //     const program = `

    //         fn first(a: f64) -> fn(f64) -> bool {
    //             return |x: f64| -> bool {return a > 1;};
    //         }

    //         first(10)(0);
    //     `
    //     expect(program).toEvaluateTo(true);
    // });

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
        b + f(2) * a;
        `
        expect(program).toEvaluateTo(11);
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