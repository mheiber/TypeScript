class A {
    #field = 0;
    static #staticField = 0;
    constructor() {
        this.#field = 1;
        this.#field += 2;
        this.#field -= 3;
        this.#field /= 4;
        this.#field *= 5;
        this.#field **= 6;
        this.#field %= 7;
        this.#field <<= 8;
        this.#field >>= 9;
        this.#field >>>= 10;
        this.#field &= 11;
        this.#field |= 12;
        this.#field ^= 13;
        A.getInstance().#field = 1;
        A.getInstance().#field += 2;
        A.getInstance().#field -= 3;
        A.getInstance().#field /= 4;
        A.getInstance().#field *= 5;
        A.getInstance().#field **= 6;
        A.getInstance().#field %= 7;
        A.getInstance().#field <<= 8;
        A.getInstance().#field >>= 9;
        A.getInstance().#field >>>= 10;
        A.getInstance().#field &= 11;
        A.getInstance().#field |= 12;
        A.getInstance().#field ^= 13;
        A.#staticField = 1;
        A.#staticField += 2;
        A.#staticField -= 3;
        A.#staticField /= 4;
        A.#staticField *= 5;
        A.#staticField **= 6;
        A.#staticField %= 7;
        A.#staticField <<= 8;
        A.#staticField >>= 9;
        A.#staticField >>>= 10;
        A.#staticField &= 11;
        A.#staticField |= 12;
        A.#staticField ^= 13;
        A.getClass().#staticField = 1;
        A.getClass().#staticField += 2;
        A.getClass().#staticField -= 3;
        A.getClass().#staticField /= 4;
        A.getClass().#staticField *= 5;
        A.getClass().#staticField **= 6;
        A.getClass().#staticField %= 7;
        A.getClass().#staticField <<= 8;
        A.getClass().#staticField >>= 9;
        A.getClass().#staticField >>>= 10;
        A.getClass().#staticField &= 11;
        A.getClass().#staticField |= 12;
        A.getClass().#staticField ^= 13;
    }
    static getInstance() {
        return new A();
    }
    static getClass() {
        return this;
    }
}
