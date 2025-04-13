export const createLDC = (value: any, temporary: boolean) => {
    return {
        tag: "LDC",
        value: value,
        temp: temporary
    }
}

export const createBinop = (op: string, temporary: boolean) => {
    return {
        tag: "BINOP",
        op: op,
        temp: temporary
    }
}

export const createUnop = (op: string, temporary: boolean) => {
    return {
        tag: "UNOP",
        op: op,
        temp: temporary
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

export const createLDF = (arity: number, address: number) => {
    return {
        tag: "LDF",
        arity: arity,
        address: address
    }
}

export const createReset = () => {
    return {
        tag: "RESET"
    }
}

export const createCall = (arity: number, temporary: boolean) => {
    return {
        tag: "CALL",
        arity: arity,
        temp: temporary
    }
}

export const createCopy = () => {
    return {
        tag: "COPY"
    }
}

export const createDrop = () => {
    return {
        tag: "DROP"
    }
}