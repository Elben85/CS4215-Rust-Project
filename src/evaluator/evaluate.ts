import { Heap } from "../memory/heap";
import { addressToValue, valueToAddress, Pointer, Closure, tagToType } from "../memory/types";
import { Environment, Callframe } from "../memory/environment";

let HEAP: Heap;
let OS: number[]; // Stack, list of addresses
let RTS: number[]; // Runtime stack, list of environment addresses
let PC: number; // Program counter
let E: number; // Environment address
let TEMPORARIES: number[]; // Address of all temporary values to be dropped at the end of a statement


// ENTRY POINT
export const evaluate = (instructionArray: any[]) => {
    HEAP = new Heap();
    OS = [];
    RTS = [];
    PC = 0;
    E = Environment.allocate(HEAP, 0);
    TEMPORARIES = [];

    console.log(instructionArray);

    while (instructionArray[PC].tag !== 'DONE') {
        // console.log(PC);
        console.log(OS);
        console.log(instructionArray[PC]);
        let instr = instructionArray[PC];
        let tag = instr.tag;
        microcode[tag](instr);
    }
    // console.log(OS);
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
        if (instr.temp) TEMPORARIES.push(OS[OS.length - 1]);
        PC++;
    },
    UNOP: (instr) => {
        const arg = stackPop();
        let result = evaluate_unop(instr.op, arg);
        stackPush(result);
        if (instr.temp) TEMPORARIES.push(OS[OS.length - 1]);
        PC++;
    },
    BINOP: (instr) => {
        const arg2 = stackPop();
        const arg1 = stackPop();

        let result = evaluate_binop(
            instr.op, arg1, arg2
        );

        stackPush(result);
        if (instr.temp) TEMPORARIES.push(OS[OS.length - 1]);
        PC++;
    },
    POP: (instr) => {
        OS.pop();
        PC++;
    },
    ASSIGN: (instr) => {
        const pointerAddr = OS.pop();
        const valueAddr = OS.pop();
        Pointer.setPointer(HEAP, pointerAddr, valueAddr)
        PC++;
    },
    LD: (instr) => {
        const [frameIndex, valueIndex] = instr.pos;
        const addr = Environment.getValue(HEAP, E, frameIndex, valueIndex);
        OS.push(addr);
        PC++;
    },
    LDA: (instr) => {
        const [frameIndex, valueIndex] = instr.pos;
        OS.push(Environment.getPointerAddress(HEAP, E, frameIndex, valueIndex));
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
    GOTO: (instr) => {
        PC = instr.address;
    },
    JOF: (instr) => {
        if (!stackPop()) {
            PC = instr.address;
        } else {
            PC++;
        }
    },
    DEREF: (instr) => {
        const pointerAddr = OS.pop();
        const derefAddr = Pointer.addressToValue(HEAP, Pointer.addressToValue(HEAP, pointerAddr))
        OS.push(derefAddr);
        PC++;
    },
    BORROW: (instr) => {
        const itemAddr = OS.pop();
        let pointerAddr = Pointer.allocate(HEAP, itemAddr);
        OS.push(pointerAddr);
        PC++;
    },
    LDF: (instr) => {
        const closure_address = Closure.allocate(HEAP, [instr.arity, instr.address, E]);
        OS.push(closure_address);
        PC++;
    },
    RESET: (instr) => {
        const topFrame = RTS.pop();
        if (HEAP.getTag(topFrame) == Callframe.getTag()) {
            PC = Callframe.getPC(HEAP, topFrame);
            E = Callframe.getEnvironment(HEAP, topFrame);
        }
        
    },
    CALL: (instr) => {
        const arity = instr.arity;
		const addressFunP = OS.slice(-1 - arity,)[0];
        const addressFun = Pointer.addressToValue(HEAP, addressFunP);

        const callframe = Callframe.allocate(HEAP, [E, PC+1]);
        RTS.push(callframe);

        const closureEnv = Closure.getClosureEnvironment(HEAP, addressFun);
        // TODO: this arity does not check with function definition's arity
        E = Environment.extend(HEAP, closureEnv, arity); 

        for (let i = arity - 1; i >= 0; --i) {
            const pAddress = Environment.getPointerAddress(HEAP, E, HEAP.getSize(closureEnv), i);
            Pointer.setPointer(HEAP, pAddress, OS.pop());
        }
        OS.pop(); // pop the funAddress value

        PC = Closure.getClosurePC(HEAP, addressFun);
    },
    COPY: (instr) => {
        const address = OS.pop();
        const copyAddress = tagToType(HEAP.getTag(address)).copy(HEAP, address);
        OS.push(copyAddress);
        PC++;
    },
    DROP: (instr) => {
        // DROP IN REVERSE ORDER
        if (TEMPORARIES.length === 0) {
            PC++;
            return;
        } else {
            const address = TEMPORARIES.pop();
            HEAP.deallocate(address);
        }
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
        case '==':
            return arg1 == arg2;
        case '!=':
            return arg1 != arg2;
        case '%':
            return arg1 % arg2;
        case '&&':
            return arg1 && arg2;
        case '||':
            return arg1 || arg2;
        default:
            throw new Error(`Unrecognized operator ${operator}`)
    }
}

const evaluate_unop = (operator: string, arg: any) => {
    switch (operator) {
        case '-':
            return -arg;
        case '!':
            return !arg;
        default:
            throw new Error(`Unrecognized unary operator ${operator}`)
    }
}