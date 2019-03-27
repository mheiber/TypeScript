class A {
    #field = 1;
    static #staticField = 1;
    testObject() {
        return { x: 10, y: 6 };
    }
    testArray() {
        return [10, 11];
    }
    constructor() {
        let y: number;
        ({ x: this.#field, y } = this.testObject());
        ([this.#field, y] = this.testArray());
        ({ x: A.#staticField, y } = this.testObject());
        ([A.#staticField, y] = this.testArray());
    }
}
