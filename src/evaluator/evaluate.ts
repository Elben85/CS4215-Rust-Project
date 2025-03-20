import { Heap } from "../memory/heap";
import { addressToValue, valueToAddress } from "../memory/types";

let HEAP: Heap;
let OS: number[];
let PC: number;


// ENTRY POINT
export const evaluate = (instructionArray: any[]) => {
    HEAP = new Heap();
    OS = [];
    PC = 0;

    while (instructionArray[PC].tag !== 'DONE') {
        let instr = instructionArray[PC];
        let tag = instr.tag;
        microcode[tag](instr);
    }
    return OS.length === 0
        ? undefined
        : stackPop();
}

function stackPush(value: any): void {
    const address = valueToAddress(HEAP, value);
    OS.push(address);
}

function stackPop(): any {
    return addressToValue(HEAP, OS.pop());
}

const microcode = {
    LDC: (instr) => {
        stackPush(instr.value);
        PC++;
    },
    BINOP: (instr) => {
        const arg2 = stackPop();
        const arg1 = stackPop();

        let result = evaluate_binop(
            instr.op, arg1, arg2
        );

        stackPush(result);
        PC++;
    },
    POP: (instr) => {
        stackPop();
        PC++;
    }
}

const evaluate_binop = (operator: string, arg1: any, arg2: any) => {
    switch (operator) {
        case '+':
            return arg1 + arg2;
        case '-':
            return arg1 - arg2;
        case '*':
            return arg1 * arg2;
        case '/':
            if (arg2 === 0) {
                throw new Error("Division by zero");
            }
            return arg1 / arg2;
        case '<':
            return arg1 < arg2;
        case '<=':
            return arg1 <= arg2;
        case '>':
            return arg1 > arg2;
        case '>=':
            return arg1 >= arg2;
        case '&&':
            return arg1 && arg2;
        case '||':
            return arg1 || arg2;
        default:
            throw new Error(`Unrecognized operator ${operator}`)
    }
}