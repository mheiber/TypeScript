class A {
    #name: string;
    static #staticName: string;
    constructor(name: string) {
        this.#name = name;
        A.#staticName = name;
    }
}