let a = 0;
class Test {
    #one = ++a;
    normalProp = ++a;
    #two = this.#one + 1;
}
