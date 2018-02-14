# Single Access Design Pattern

## What is it?

The Single Access design pattern restricts the access to a resource, allowing only a single retrieval. Consecutive accesses trigger an error, which usually points to a logical error in the code.

The design emerged in a project that uses a shared information object across multiple states. It provides a way to ensure that the shared data is being accessed _only_ once in each state, and being updated at the end. This has helped point out logical errors where the object is being accessed multiple times, or not being set properly, within a state.

The pattern is used in the project like this:

- When a new state is entered, the necessary shared information is retrieved and stored in instance variables.
- Trying to retrieve the information from the shared object a second time triggers an access error.
- Not setting the shared information at the end of a state triggers an error in the next access.

This enforces that if a state reads some of the shared information, it must also write back the updated information.

// TODO expand?
This design controls the ownership of an object, it is similar to C++11's `std::unique_ptr`.

## When to use it?

When you must guarantee that a resource:
- must only be accessed once by an instance
- must be updated by the instance that accessed it

## Implementation

@[Interface]({ "stubs": ["iSingleAccess.ts"]})

This is what an interface for the single access implementation looks like. The `<T>` is a generics notation, that allows specifying to TypeScript what the actual object's type is, and also points out that this will work for _any_ object. If you're not familiar with generics, have a look [at the TypeScript's Generics documentation](https://www.typescriptlang.org/docs/handbook/generics.html).

### Usage

@[Usage]({ "stubs": ["singleAccess.test.ts"]})

### Implementation

@[Implementation]({ "stubs": ["singleAccess.ts"], "command": "node_modules/mocha/bin/mocha --require ts-node/register singleAccess.test.ts --reporter list" })

This is an opportunity to have a go at implementing the design pattern. This will help you understand it better, so I definitely recommend spending some time here.

### Final implementation
@[Implementation]({ "stubs": ["fSingleAccess.ts"], "command": "node_modules/mocha/bin/mocha --require ts-node/register singleAccess.test.ts --reporter list" })
