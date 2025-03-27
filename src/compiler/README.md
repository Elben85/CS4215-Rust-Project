List of instructions:
1. `LDC`
Push literal into stack
```
{
    tag: "LDC",
    value: [LITERAL]
}
```

2. `BINOP`
Apply `op` to `Arg1` and `Arg2`. Both args are expected to be on the stack
```
{
    tag: "BINOP",
    op: [OPERATOR]
}
```

3. `POP`
Pop the topmost value on the stack
`{ tag: "POP" }`

4. `ASSIGN`
Assign topmost stack value to specified `frameIndex` and `valueIndex`
```
{
    tag: "ASSIGN",
    pos: [frameIndex, valueIndex]
}
```

5. `LD`
Load the value at `frameIndex` and `valueIndex` to the stack
```
{
    tag: "LD",
    pos: [frameIndex, valueIndex]
}
```

6. `ENTER_SCOPE`
Extend the env with a frame of given length. Push the old env to the runtime stack
```
{
    tag: "ENTER_SCOPE",
    frameSize: [NUMBER]
}
```

7. `EXIT_SCOPE`
Restore the address of the env to one on top of the runtime stack.
`{ tag: "EXIT_SCOPE" }`


8. `UNOP`
Execute unary operator. Gets argument from stack
```
{
    tag: "UNOP",
    op: [OPERATOR]
}
```

9. `JOF`
jump to address if the top of the stack evaluates to false
```
{
    tag: "JOF",
    address: [ADDRESS]
}
```

10.  `GOTO`
jump to address
```
{
    tag: "GOTO",
    address: [ADDRESS]
}
```