class A {
    #foo: number;
}

class B extends A {
    #foo: string;   // OK: private names are unique to each class
}
