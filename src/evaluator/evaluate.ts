import { Heap } from "../memory/heap";
import { addressToValue, valueToAddress, Pointer, Closure, tagToType } from "../memory/types";
import { Environment, Callframe } from "../memory/environment";

let HEAP: Heap;
let OS: number[]; // Stack, list of addresses
let RTS: number[]; // Runtime stack, list of environment addresses
let PC: number; // Program counter
let E: number; // Environment address
let GLOBAL_ENV: number;

// ENTRY POINT
export const evaluate = (instructionArray: any[]) => {
    HEAP = new Heap();
    OS = [];
    RTS = [];
    PC = 0;
    E = Environment.allocate(HEAP, 0);
    GLOBAL_ENV = E;

    // console.log(instructionArray);

    while (instructionArray[PC].tag !== 'DONE') {
        // console.log(PC);
        // console.log(OS);
        // console.log(TEMPORARIES);
        // console.log(instructionArray[PC]);
        let instr = instructionArray[PC];
        let tag = instr.tag;
        microcode[tag](instr);
    }

    // console.log(OS);

    if (OS.length > 1) throw new Error("LOL NUB");
    return OS.length === 0
        ? undefined
        : addressToValue(HEAP, OS.pop());
}

function move(vAddress: number, newOwnerAddr: number) {
    const oldOwnerAddress = HEAP.getOwner(vAddress);

    // invalidate old owner pointer
    if (oldOwnerAddress !== Heap.INVALID_OWNER_ADDRESS) {
        Pointer.invalidatePointer(HEAP, oldOwnerAddress);
    }

    if (Pointer.isValidPointer(HEAP, newOwnerAddr)) {
        HEAP.deallocate(Pointer.addressToValue(HEAP, newOwnerAddr));
    }

    Pointer.setPointer(HEAP, newOwnerAddr, vAddress)
    HEAP.setOwner(vAddress, newOwnerAddr);
}

const microcode = {
    LDC: (instr) => {
        const address = valueToAddress(HEAP, instr.value);
        OS.push(address);
        PC++;
    },
    UNOP: (instr) => {
        const argAddress = OS.pop();
        const arg = addressToValue(HEAP, argAddress);

        let result = evaluateUnop(instr.op, arg);
        OS.push(valueToAddress(HEAP, result));

        dropIfNoOwner(argAddress);
        PC++;
    },
    BINOP: (instr) => {
        const arg2Address = OS.pop();
        const arg2 = addressToValue(HEAP, arg2Address);
        const arg1Address = OS.pop();
        const arg1 = addressToValue(HEAP, arg1Address);

        let result = evaluateBinop(
            instr.op, arg1, arg2
        );

        OS.push(valueToAddress(HEAP, result));
        dropIfNoOwner(arg2Address);
        dropIfNoOwner(arg1Address);
        PC++;
    },
    POP: (instr) => {
        dropIfNoOwner(OS.pop());
        PC++;
    },
    ASSIGN: (instr) => {
        const newOwnerAddr = OS.pop();
        const valueAddr = OS.pop();
        move(valueAddr, newOwnerAddr);
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
        // prevent block result to be dropped
        const resultAddr = OS[OS.length - 1];
        Environment.dropEnvAndLastFrame(HEAP, E, resultAddr);
        E = RTS.pop();
        PC++;
    },
    GOTO: (instr) => {
        PC = instr.address;
    },
    JOF: (instr) => {
        const predicateAddr = OS.pop();
        const predicate = addressToValue(HEAP, predicateAddr);
        if (!predicate) {
            PC = instr.address;
        } else {
            PC++;
        }
        dropIfNoOwner(predicateAddr);
    },
    DEREF: (instr) => {
        const pointerAddr = OS.pop();
        const derefAddr = Pointer.addressToValue(HEAP, Pointer.addressToValue(HEAP, pointerAddr))
        OS.push(derefAddr);

        dropIfNoOwner(pointerAddr);
        PC++;
    },
    BORROW: (instr) => {
        const itemAddr = OS.pop();

        let pointerAddr = Pointer.allocate(HEAP, itemAddr);
        OS.push(pointerAddr);
        PC++;
    },
    LDF: (instr) => {
        const env = instr.useGlobal ? GLOBAL_ENV : E
        const closure_address = Closure.allocate(HEAP, [instr.arity, instr.address, env]);
        OS.push(closure_address);
        PC++;
    },
    RESET: (instr) => {
        // The following code is to make sure return value not accidentally dropped
        const resultAddr = OS[OS.length - 1];
        const topFrame = RTS.pop();
        Environment.dropEnvAndLastFrame(HEAP, E, resultAddr);
        if (HEAP.getTag(topFrame) == Callframe.getTag()) {
            PC = Callframe.getPC(HEAP, topFrame);
            E = Callframe.getEnvironment(HEAP, topFrame);
        } else {
            E = topFrame;
        }

    },
    CALL: (instr) => {
        const arity = instr.arity;
        const addressFun = OS.slice(-1 - arity,)[0];

        const callframe = Callframe.allocate(HEAP, [E, PC + 1]);
        RTS.push(callframe);

        const closureEnv = Closure.getClosureEnvironment(HEAP, addressFun);
        E = Environment.extend(HEAP, closureEnv, arity);

        for (let i = arity - 1; i >= 0; --i) {
            const pAddress = Environment.getPointerAddress(HEAP, E, HEAP.getSize(closureEnv), i);
            const valueAddress = OS.pop();
            move(valueAddress, pAddress);
        }
        dropIfNoOwner(OS.pop()); // pop the funAddress value

        PC = Closure.getClosurePC(HEAP, addressFun);
    },
    COPY: (instr) => {
        const address = OS.pop();

        const copyAddress = tagToType(HEAP.getTag(address)).copy(HEAP, address);
        OS.push(copyAddress);
        dropIfNoOwner(address);
        PC++;
    }
}

const dropIfNoOwner = (address) => {
    if (HEAP.getOwner(address) === Heap.INVALID_OWNER_ADDRESS) {
        HEAP.deallocate(address);
    }
}

const evaluateBinop = (operator: string, arg1: any, arg2: any) => {
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

const evaluateUnop = (operator: string, arg: any) => {
    switch (operator) {
        case '-':
            return -arg;
        case '!':
            return !arg;
        default:
            throw new Error(`Unrecognized unary operator ${operator}`)
    }
}