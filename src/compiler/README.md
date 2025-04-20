List of instructions:

- `LDC`
  Allocate literal on the heap and push the allocation address into stack

```
{
    tag: "LDC",
    value: [LITERAL]
}
```

- `BINOP`
  Apply `op` to `Arg1` and `Arg2`. Both args addresses are expected to be on the stack

```
{
    tag: "BINOP",
    op: [OPERATOR]
}
```

- `POP`
  Pop the topmost value on the stack and drop it if there is no owner.
  `{ tag: "POP" }`

- `ASSIGN`
  Assign topmost stack value to specified address (which should be a pointer).
  The instructions expects both the pointer address and the value on the stack.
  Note that the value assigned previously will be dropped and value will be moved to the specified
  address.

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
  Restore the address of the env to one on top of the runtime stack. Move the value on top of the stack
  such that it has no owner. The old environment and the last frame are dropped. 
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
  Produce a pointer referencing to a variable. Expects the address of the borrowed variable on top of the stack.

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
  Restores the previous execution context by popping the top frame from the return stack. If the frame is a call frame, it restores the program counter and environment from it. Drops the top frame in the process of each restoration.
  Move the value on top of the stack such that it has no owner.

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

- `COPY`
  Pop the topmost value from the heap and copy the value. Push the copied value onto the heap.

```
{
    tag: "COPY"
}
```

- `DONE`
  The last instruction indicating execution has finished.
```
{
    tag: "DONE"
}
```

- `TEMP_LDF`
  A placeholder instruction used when compiling functions. To be replaced by the corresponding function
  address.
```
{
  tag: "TEMP_LDF",
  idx: [INSTRUCTION PC],
  sym: [FUNCTION SYMBOL]
}
```