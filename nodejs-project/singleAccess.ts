class SingleAccess<T> implements ISingleAccess<T> {
    // you can add variables too
    //

    set(resource: T) {
        throw new Error("Method not implemented.");
    }
    get(): T {
        throw new Error("Method not implemented.");
    }
    available(): boolean {
        throw new Error("Method not implemented.");
    }
}