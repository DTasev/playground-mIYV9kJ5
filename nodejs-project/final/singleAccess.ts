export class SingleAccess<T> implements ISingleAccess<T> {
    private resource: T = null;
    private accessed: boolean = false;

    set(resource: T) {
        this.resource = resource;
        this.accessed = false;
    }
    available(): boolean {
        return !this.accessed && this.resource !== null;
    }
    get(): T {
        if (this.available()) {
            const x = this.resource;
            this.resource = null;
            return x;
        } else if (this.accessed) {
            throw new Error("This object has already been accessed.");
        } else if (this.resource === null) {
            throw new Error("The resource object has not been set.");
        } else {
            throw new Error("Unknown error with single access object");
        }
    }
}