import { describe, it, expect } from 'vitest';
import { Evaluate, EvaluateType } from "./util";
import { Type } from '../../src/typeChecker/Type';

describe('Deref Borrow Expression test', () => {
    it('deref borrow 1', () => {
        const program = `
            let mut a = 1;
            let mut b = &mut a;
            let c = &b;
            let d = **c;
            d;
        `
        expect(Evaluate(program)).toBe(1);
    });

    it('deref borrow 2', () => {
        const program = `
            let mut a = 1;
            let mut b = &mut a;
            let mut c = &mut b;
            **c = 10;
            **c = **c + 59;
            let d = **c;
            d;
        `
        expect(Evaluate(program)).toBe(69);
    });
});
