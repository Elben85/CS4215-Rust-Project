import { describe, it, expect } from 'vitest';

describe('Drop Checker', () => {
    it('access dropped value', () => {
        const program = `
            let mut i;
            {
                let a = 2;
                i = &a;
            }
            *i;
        `
        expect(program).toFailTypeCheck();
    });

    it('dropped value but not accessed', () => {
        const program = `
            let mut i;
            {
                let a = 2;
                i = &a;
            }
        `
        expect(program).toPassTypeCheck();
    });
});