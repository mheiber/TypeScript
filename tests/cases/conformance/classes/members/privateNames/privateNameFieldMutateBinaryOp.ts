class Test {
    #field: number;
    constructor() {
        this.#field += 1;
        this.#field -= 2;
        this.#field /= 3;
        this.#field *= 4;
        this.#field |= 5;
        this.#field **= 6;
        this.#field %= 7;
        this.#field <<= 8;
        this.#field >>= 9;
        this.#field >>>= 10;
        this.#field &= 11;
        this.#field ^= 12;
    }
}
