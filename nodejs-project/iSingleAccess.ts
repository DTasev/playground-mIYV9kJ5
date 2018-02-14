interface ISingleAccess<T> {
    /** Sets the resource for a single access.
     * @param resource The object of the resource.
     */
    set(resource: T);

    /** Gets the resource. 
     * Marks it as accessed, and removes any references to the object in this class. 
     */
    get(): T;

    /** Checks if the resource is available.
     * @returns true if not accessed and not null, false is accessed or null
     */
    available(): boolean;
}