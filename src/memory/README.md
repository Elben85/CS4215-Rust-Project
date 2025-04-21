This directory contains code for the heap and how different types are allocated

Currently there are the following types with the corresponding type tags and how they are allocated (excluding the general metadata):

- Environment (`tag: 0`)
  `n` continuous words of frame address

- Frame (`tag: 1`)
  `n` continuous pointers to the heap. Each pointer on the frame represents a variable.

- Float64 (`tag: 2`)
  1 word for value

- Boolean (`tag: 3`)
  1 word for value

- Unit (`tag: 4`)
  0 word, only metadata

- Pointer (`tag: 5`)
  1 word for address it is pointing to

- Closure (`tag: 6`)
  1 word for the surrounding environment address
  1 word containing closure arity + PC where the instruction for the closure begins

- CallFrame (`tag: 7`)
  1 word for the environment address to restore to
  1 word for PC value to restore to

- String (`tag: 8`)
  1 word for the number of bytes in the encoded string
  followed by bytes of the encoded string