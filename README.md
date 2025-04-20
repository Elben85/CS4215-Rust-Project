## Virtual Machine Implementation For (Subset of) Rust
This CS4215 Project is an implementation of a sublanguage of rust, applying the notion of virtual machine. The program can be run on sourceacademy by enabling the conductor framework.

## High level pipeline
The program is first passed to the type checker and the type evaluation for the parse trees will be cached to be used later. The type cache is then passed to the borrow checker to determine whether a variable is to be copy or moved. The borrow checker itself acts both as a borrow checker and a drop checker. After the checks, the type cache is the passed again to the compiler which compilers the parse trees into simple instructions for the evaluator to run.

## High Level Directory Structure
- `src/typeChecker`
   Contains code responsible for making sure the passed program is type sage

- `src/borrowChecker`
   Contains code responsible for compile time drop and borrow checks. Assumes program
   has passed type checks.

- `src/compiler`
   Compiles the program into simpler "VM"-like instructions. Assumes program has passed type checks

- `src/evaluator`
   Contains code for running the "VM" instructions.

## How to run the code
1. Go to https://sourceacademy.org
2. Set conductor to https://elben85.github.io/CS4215-Rust-Project/index.js
3. Run the program

## Available commands

### `yarn install`
Install all the necessary dependencies for the app.

### `yarn build`
Compiles the app from typescript to javascript.

### `yarn test`
Runs the test suite. Requires dev dependencies to be installed

### `yarn generate-parser`
Generates the antlr4g parse specified using the grammar specified in `src/Rust.g4`
