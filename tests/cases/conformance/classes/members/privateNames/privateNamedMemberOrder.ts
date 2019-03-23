class A {
    #foo: () => 1;
    #bar() {
        return this.#foo;
    }
    baz = this.#bar();
}