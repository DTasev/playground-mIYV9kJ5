# Single Access Design Pattern

## What is it?

The Single Access design pattern restricts the access to a resource, allowing only a single retrieval. Consecutive accesses can trigger an error, which would usually point to a logical error in the code.

## When to use it?

- When you must guarantee that a resource will only be accessed once.

## Why?

The design emerged in one of my projects, where a state object is being shared across multiple states. I needed a way to ensure that the shared data is only being accessed _only_ once in each state. This helped streamline the code, and made it easier to follow.

- When a new state is entered, the necessary shared information is retrieved and stored in instance variables. 
- Forgetting to set the shared information at the end of a state triggers an error in the next access.
- This enforces that if a state reads some of the shared information, it must also write back the possibly updated information.

## Implementation
@[Interface]({ "stubs": ["iSingleAccess.ts"]})

This is what an interface for the single access implementation looks like. The `<T>` is a generics notation, that allows specifying to TypeScript what the actual object's type is, and also points out that this will work for _any_ object.

### Show some tests first
@[Interface]({ "stubs": ["singleAccess.test.ts"]})

### Add implementation file that implements the interface, but doesn't have the code in the funcs
@[Interface]({ "stubs": ["singleAccess.ts"], "command": "node_modules/mocha/bin/mocha --require ts-node/register singleAccess.spec.ts --reporter list" })

## Usage
