class C {
    #test: number = 24;
    static #staticTest: number = 24;
    constructor() {
        this.#test++;
        this.#test--;
        ++this.#test;
        --this.#test;
        C.#staticTest++;
        C.#staticTest--;
        ++C.#staticTest;
        --C.#staticTest;
    }
    test() {
        this.getInstance().#test++;
        this.getInstance().#test--;
        ++this.getInstance().#test;
        --this.getInstance().#test;
        this.getClass().#staticTest++;
        this.getClass().#staticTest--;
        ++this.getClass().#staticTest;
        --this.getClass().#staticTest;
    }
    getInstance() { return new C(); }
    getClass() { return C; }
}
