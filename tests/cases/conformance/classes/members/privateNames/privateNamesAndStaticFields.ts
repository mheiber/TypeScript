// @strict: true
// @target ESNext

class A {
    static #foo: number;
    constructor () {
        A.#foo = 3;
    }
}

class B extends A {
    static #foo: string;
    constructor () {
        super();
        B.#foo = "some string";
    }
}
