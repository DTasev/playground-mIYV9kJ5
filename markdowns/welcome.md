# Single Access Design Pattern

## What is it?

The Single Access design pattern restricts the access to a resource, allowing only a single retrieval. Consecutive accesses can trigger an error, which would usually point to a logical error in the code.

## When to use it?

- When you must guarantee that a resource will only be accessed once.

## Why?

The design emerged in a project, that has a state object being shared across multiple states. It provides a way to ensure that the shared data is only being accessed _only_ once in each state, and can point out logical errors where the objects is being accessed multiple times, or not being set properly.

The pattern is used in the project like this:

- When a new state is entered, the necessary shared information is retrieved and stored in instance variables.
- Trying to retrieve the information from the shared object a second time triggers an access error.
- Not setting the shared information at the end of a state triggers an error in the next access.

This enforces that if a state reads some of the shared information, it must also write back the updated information.

## Implementation

@[Interface]({ "stubs": ["iSingleAccess.ts"]})

This is what an interface for the single access implementation looks like. The `<T>` is a generics notation, that allows specifying to TypeScript what the actual object's type is, and also points out that this will work for _any_ object. If you're not familiar with generics, have a look [at the TypeScript's Generics documentation](https://www.typescriptlang.org/docs/handbook/generics.html).

### Usage

@[Usage]({ "stubs": ["singleAccess.test.ts"]})

### Implementation

@[Implementation]({ "stubs": ["singleAccess.ts"], "command": "node_modules/mocha/bin/mocha --require ts-node/register singleAccess.spec.ts --reporter list" })

This is an opportunity to have a go at implementing the design pattern. This will help you understand it better, so I definitely recommend spending some time here.

### Final implementation
@[Implementation]({ "stubs": ["fSingleAccess.ts"], "command": "node_modules/mocha/bin/mocha --require ts-node/register singleAccess.spec.ts --reporter list" })
