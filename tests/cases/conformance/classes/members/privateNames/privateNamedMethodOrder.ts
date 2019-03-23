// @strict: true
// @target: es6


class A {
    static bar: A | undefined = new A("max");
    #foo() {
        A.bar = undefined
    }
    constructor (public name: string) {
        this.#foo()
        console.log(this)
    }
}
