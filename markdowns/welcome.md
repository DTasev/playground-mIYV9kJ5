# Single Access Design Pattern

## Table of Contents
- Table of Contents
- What is it?
- When to use it?
- Class Interface
    - Example usage with tests
    - Coding exercise
        - Hints:
    - Final implementation
- Feedback


## What is it?

The Single Access design pattern restricts the access to a resource, allowing only a single retrieval. Consecutive accesses trigger an error, which usually points to a logical error in the code.

The design emerged in a project that uses a shared information object across multiple states. It provides a way to ensure that the shared data is being accessed _only_ once in each state, and being updated at the end. This has helped point out logical errors where the object is being accessed multiple times, or not being set properly, within a state.

The pattern is used in the project like this:

- When a new state is entered, the necessary shared information is retrieved and stored in instance variables. The instance variables can be changed.
- Trying to retrieve the information from the shared object a second time triggers an access error.
- Not setting the shared information at the end of a state triggers an error in the next access.

As this design controls the ownership of an object, it is similar to C++11's `std::unique_ptr`. It also enforces that when a state reads some of the shared information, it must also write back the updated information.

## When to use it?

When you **must** guarantee that a resource:
- is only be accessed once by an instance
- is updated by the instance that accessed it

## Class Interface

@[Interface]({ "stubs": ["iSingleAccess.ts"]})

This is what an interface for the single access implementation looks like. The `<T>` is a generics notation, that allows specifying to TypeScript what the actual object's type is, and also points out that this will work for _any_ object. If you're not familiar with generics, have a look [at the TypeScript's Generics documentation](https://www.typescriptlang.org/docs/handbook/generics.html).

### Example usage with tests

The following file contains some test cases, versus which your implementation will be tested (if you attempt it!). Test cases are a good way of showing off different use cases, while keeping it easy to follow.

@[Single Access Tests]({ "stubs": ["wip/singleAccess.test.ts"]})

### Coding exercise

@[Implementation]({ "stubs": ["wip/singleAccess.ts"], "command": "node_modules/mocha/bin/mocha --require ts-node/register wip/singleAccess.test.ts --reporter list" })

This is an opportunity to have a go at implementing the design pattern. This will help you understand it better, so I definitely recommend giving it a go.

If you want some guidance for where to start, scroll further down. 

If you want the final code, go to the end of the page.
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

#### Hints:
- The resource needs to be stored
- The access to the resource needs to be tracked

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

### Final implementation
@[Implementation]({ "stubs": ["final/singleAccess.ts"], "command": "node_modules/mocha/bin/mocha --require ts-node/register final/singleAccess.test.ts --reporter list" })

## Feedback
For feedback or comments, please [create an issue](https://github.com/DTasev/playground-mIYV9kJ5/issues/new) or drop me an email [dimtasev@gmail.com](mailto:dimtasev@gmail.com?Subject=Single%20Access%20Playground%20Feedback)