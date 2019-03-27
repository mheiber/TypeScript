class A {
    #myField = "hello world";
    static #myStaticField = "hello world";
    constructor() {
        console.log(this.#myField);
        console.log(A.#myStaticField);
    }
}
