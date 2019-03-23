// @strict: true
// @target: es6

class A {
    #foo = "hello";
    #log(name: string) {
        console.log(this.#foo);
        console.log(name);
    }
    #logIfTallEnough(height: number, name: string) {
        if (height >= 50) {
            this.#log(name);
        }
    }
    #logAll(height: number, ...names: string[]) {
        for (const name of names) {
            this.#logIfTallEnough(height, name);
        }
    }
    constructor() {
        this.#logIfTallEnough(100, "world");
        this.#logAll(100, ...["a", "b", "c"]);
    }
}
