class A {
    #fieldFunc = () => this.x = 10;
    static #staticFieldFunc = () => A.staticX = 10;
    x = 1;
    static staticX = 1;
    test() {
        this.#fieldFunc();
        const func = this.#fieldFunc;
        func();
        A.#staticFieldFunc();
        const func2 = A.#staticFieldFunc;
        func2();
    }
}
