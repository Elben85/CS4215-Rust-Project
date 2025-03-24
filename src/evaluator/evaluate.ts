import { Heap } from "../memory/heap";
import { addressToValue, valueToAddress } from "../memory/types";
import { Environment } from "../memory/environment";

let HEAP: Heap;
let OS: number[]; // Stack, list of addresses
let RTS: number[]; // Runtime stack, list of environment addresses
let PC: number; // Program counter
let E: number; // Environment address


// ENTRY POINT
export const evaluate = (instructionArray: any[]) => {
    HEAP = new Heap();
    OS = [];
    RTS = [];
    PC = 0;
    E = Environment.allocate(HEAP, 0);

    while (instructionArray[PC].tag !== 'DONE') {
        let instr = instructionArray[PC];
        let tag = instr.tag;
        microcode[tag](instr);
    }
    return OS.length === 0
        ? undefined
        : stackPop();
}

/**
 * Helper function that converts value to address before pushing to the stack
 */
function stackPush(value: any): void {
    const address = valueToAddress(HEAP, value);
    OS.push(address);
}

/**
 * Helper function that converts address to value before popping from the stack
 */
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
        OS.pop();
        PC++;
    },
    ASSIGN: (instr) => {
        const valueAddr = OS.pop();
        const [frameIndex, valueIndex] = instr.pos;
        Environment.setValue(HEAP, E, frameIndex, valueIndex, valueAddr);
        PC++;
    },
    LD: (instr) => {
        const [frameIndex, valueIndex] = instr.pos;
        const addr = Environment.getValue(HEAP, E, frameIndex, valueIndex);
        OS.push(addr);
        PC++;
    },
    ENTER_SCOPE: (instr) => {
        RTS.push(E);
        E = Environment.extend(HEAP, E, instr.frameSize);
        PC++;
    },
    EXIT_SCOPE: (instr) => {
        E = RTS.pop();
        PC++;
    },
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