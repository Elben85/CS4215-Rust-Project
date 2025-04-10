List of instructions:

- `LDC`
  Push literal into stack

```
{
    tag: "LDC",
    value: [LITERAL]
}
```

- `BINOP`
  Apply `op` to `Arg1` and `Arg2`. Both args are expected to be on the stack

```
{
    tag: "BINOP",
    op: [OPERATOR]
}
```

- `POP`
  Pop the topmost value on the stack
  `{ tag: "POP" }`

- `ASSIGN`
  Assign topmost stack value to specified address (which should be a pointer).
  The instructions expects both the pointer address and the value on the stack.

```
{
    tag: "ASSIGN",
}
```

- `LDA`
  Load the address of the pointer at `frameIndex` and `valueIndex` to the stack

```
{
    tag: "LDA",
    pos: [frameIndex, valueIndex]
}
```

- `LD`
  Load the value at `frameIndex` and `valueIndex` to the stack

```
{
    tag: "LD",
    pos: [frameIndex, valueIndex]
}
```

- `ENTER_SCOPE`
  Extend the env with a frame of given length. Push the old env to the runtime stack

```
{
    tag: "ENTER_SCOPE",
    frameSize: [NUMBER]
}
```

- `EXIT_SCOPE`
  Restore the address of the env to one on top of the runtime stack.
  `{ tag: "EXIT_SCOPE" }`

- `UNOP`
  Execute unary operator. Gets argument from stack

```
{
    tag: "UNOP",
    op: [OPERATOR]
}
```

- `JOF`
  jump to address if the top of the stack evaluates to false

```
{
    tag: "JOF",
    address: [ADDRESS]
}
```

- `GOTO`
  jump to address

```
{
    tag: "GOTO",
    address: [ADDRESS]
}
```

- `DEREF`
  dereference a pointer to the location it points to. expects a pointer on top of the stack

```
{
    tag: "DEREF"
}
```

- `BORROW`
  Produce a pointer to a heap address of the borrowed value. Expects the address of the borrowed value on top of the stack.

```
{
    tag: "BORROW"
}
```

- `LDF`
  Creates a closure on the heap and pushes its address onto the operand stack. Takes the function's arity and address, and captures the current environment.

```
{
    tag: "LDF",
    arity: number,
    address: number
}
```

- `RESET`  
  Restores the previous execution context by popping the top frame from the return stack. If the frame is a call frame, it restores the program counter and environment from it.

```
{
    tag: "RESET"
}
```

- `CALL`
  Executes a function call. Takes the arity of the function. Expects the function address and arguments on the operand stack. Creates a call frame to save the current execution context, extends the environment with arguments, and jumps to the function's address.

```
{
    tag: "CALL",
    arity: number
}
```
