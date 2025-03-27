export const createLDC = (value: any) => {
    return {
        tag: "LDC",
        value: value
    }
}

export const createBinop = (op: string) => {
    return {
        tag: "BINOP",
        op: op
    }
}

export const createUnop = (op: string) => {
    return {
        tag: "UNOP",
        op: op
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

export const createAssign = (pos: [number, number]) => {
    return {
        tag: "ASSIGN",
        pos: pos
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