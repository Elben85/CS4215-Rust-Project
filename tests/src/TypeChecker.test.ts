import { describe, it, expect } from 'vitest';
import { EvaluateType } from "./util";
import { Type } from '../../src/typeChecker/Type';

describe('RustEvaluator', () => {
    it('Type 1', () => {
        const program = `
            2;
            true;
        `
        expect(EvaluateType(program)).toBe(Type.Boolean);
    
    });

    it('Type 2', () => {
        const program = `
            2+2*4;
        `
        expect(EvaluateType(program)).toBe(Type.Number);
    
    });

    it('Type 3', () => {
        const program = `
            let b = 4;
            let a = 2+3;
            let c = b * a;
        `
        expect(EvaluateType(program)).toBe(Type.Number);
    
    });

    it('Type 4 ', () => {
        const program = `
            let b = 4;
            let a = 2+3;
            let c = b * a;
            c;
        `
        expect(EvaluateType(program)).toBe(Type.Number);
    
    });

    it('Type 5', () => {
        const program = `
            let a = 4;
            let b = 2+3;
            let c = true;
            let d = b * a;
            c;
        `
        expect(EvaluateType(program)).toBe(Type.Boolean);
    
    });

    it('Type 6', () => {
        const program = `
            3*2 > 2*0 ;
        `
        expect(EvaluateType(program)).toBe(Type.Boolean);
    
    });

    it('Type 7', () => {
        const program = `
            true || false && true;
        `
        expect(EvaluateType(program)).toBe(Type.Boolean);
    
    });

    it('Type 8', () => {
        const program = `
            let a = false;
            true || false && a;
        `
        expect(EvaluateType(program)).toBe(Type.Boolean);
    
    });

    it('Type 9', () => {
        const program = `
            let a = false;
            {
                let b = 3;
                b;
            }
            b;
        `
        expect(() => EvaluateType(program)).toThrowError("Lookup Fail, frame is Null");
    
    });

    it('Type 10', () => {
        const program = `
            let a = true;
            (1 > 2) && a;
        `
        expect(EvaluateType(program)).toBe(Type.Boolean);
    
    });

    it('Type 11', () => {
        const program = `
            !true
        `
        expect(EvaluateType(program)).toBe(Type.Boolean);
    
    });

    it('Type 12', () => {
        const program = `
            -10
        `
        expect(EvaluateType(program)).toBe(Type.Number);
    
    });
});