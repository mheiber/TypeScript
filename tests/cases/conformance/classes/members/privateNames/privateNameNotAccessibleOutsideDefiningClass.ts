class A {
    #foo: number = 3;
}

new A().#foo = 4;               // Error
