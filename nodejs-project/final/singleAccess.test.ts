import 'mocha';
import { expect } from "chai";

import { SingleAccess } from "./singleAccess";

class MyClass {
    n: number;
    s: string;

    constructor(n, s) {
        this.n = n;
        this.s = s;
    }
}

describe('Single Access Design Pattern', () => {
    it('should allow setting a resource', () => {
        const singleAccess = new SingleAccess<MyClass>();
        const myClass = new MyClass(13, "apples");

        singleAccess.set(myClass);

        expect(singleAccess.available());
    });
    it('should allow getting a resource once', () => {
        const singleAccess = new SingleAccess<MyClass>();
        const myClass = new MyClass(13, "apples");

        singleAccess.set(myClass);

        const result = singleAccess.get();
        expect(singleAccess.available()).to.be.false;
        expect(result === myClass);
    });
    it('should NOT allow getting a resource more than once', () => {
        const singleAccess = new SingleAccess<MyClass>();
        const myClass = new MyClass(13, "apples");

        singleAccess.set(myClass);

        const result = singleAccess.get();

        expect(singleAccess.available()).to.be.false;
        expect(result === myClass);

        try {
            const fail = singleAccess.get();
            // this should throw an error, if it doesn't then the test must fail, as a second access was allowed
            expect(false);
        } catch (error) {
            expect(error != null);
            expect(singleAccess.available()).to.be.false;
        }
    });
});