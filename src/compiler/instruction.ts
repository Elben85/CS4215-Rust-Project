export const createLDC = (value: any) => {
    return {
        tag: "LDC",
        value: value,
    }
}

export const createBinop = (op: string) => {
    return {
        tag: "BINOP",
        op: op,
    }
}

export const createUnop = (op: string) => {
    return {
        tag: "UNOP",
        op: op,
    }
}

export const createPop = () => {
    return {
        tag: "POP"
    }
}

export const createLD = (pos: [number, number]) => {
    return {
        tag: "LD",
        pos: pos
    }
}

export const createLDA = (pos: [number, number]) => {
    return {
        tag: "LDA",
        pos: pos
    }
}

export const createAssign = () => {
    return {
        tag: "ASSIGN",
    }
}

export const createEnterScope = (frameSize: number) => {
    return {
        tag: "ENTER_SCOPE",
        frameSize: frameSize
    }
}

export const createExitScope = () => {
    return {
        tag: "EXIT_SCOPE"
    }
}

export const createDone = () => {
    return {
        tag: "DONE"
    }
}

export const createJOF = (address: number) => {
    return {
        tag: "JOF",
        address: address
    }
}

export const createGoto = (address: number) => {
    return {
        tag: "GOTO",
        address: address
    }
}

export const createDeref = () => {
    return {
        tag: "DEREF"
    }
}

export const createBorrow = () => {
    return {
        tag: "BORROW"
    }
}

export const createLDF = (arity: number, address: number, useGlobal?: boolean) => {
    return {
        tag: "LDF",
        arity: arity,
        address: address,
        useGlobal: Boolean(useGlobal)
    }
}

export const createReset = () => {
    return {
        tag: "RESET"
    }
}

export const createCall = (arity: number) => {
    return {
        tag: "CALL",
        arity: arity,
    }
}

export const createCopy = () => {
    return {
        tag: "COPY"
    }
}

export const createFunctionPlaceholder = (idx: number, sym: string) => {
    return {
        tag: "TEMP_LDF",
        idx: idx,
        sym: sym
    }
}