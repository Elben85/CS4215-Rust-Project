import { describe, it, expect } from 'vitest';
import { Evaluate } from "./util";

describe('Operator Test', () => {
    it('*', () => expect(Evaluate(`2 * 3;`)).toBe(6));
    it('/', () => expect(Evaluate(`6 / 3;`)).toBe(2));
    it('+', () => expect(Evaluate(`8 + 2;`)).toBe(10));
    it('-', () => expect(Evaluate(`92 - 52;`)).toBe(40));
    it('||', () => expect(Evaluate(`true || false;`)).toBe(true));
    it('&&', () => expect(Evaluate(`false && true;`)).toBe(false));
    it('>', () => expect(Evaluate(`8 > 2;`)).toBe(true));
    it('>=', () => expect(Evaluate(`8 >= 9;`)).toBe(false));
    it('<', () => expect(Evaluate(`8 < 2;`)).toBe(false));
    it('<=', () => expect(Evaluate(`8 <= 9;`)).toBe(true));
    it('==', () => expect(Evaluate(`8 == 8;`)).toBe(true));
    it('!=', () => expect(Evaluate(`8 != 8;`)).toBe(false));
    it('%', () => expect(Evaluate(`7 % 3;`)).toBe(1));
    it('unary -', () => expect(Evaluate(`-2 + (-3);`)).toBe(-5));
    it('unary !', () => expect(Evaluate(`!(1 == 7);`)).toBe(true));

});