//// [privateNamesInGenericClasses.ts]
class C<T> {
    #foo: T;
    bar(x: C<T>) { return x.#foo; }          // OK
    baz(x: C<number>) { return x.#foo; }     // OK
    quux(x: C<string>) { return x.#foo; }    // OK
}

declare let a: C<number>;
declare let b: C<string>;
a.#foo;                                   // Error
a = b;                                    // Error
b = a;                                    // Error


//// [privateNamesInGenericClasses.js]
var _fooWeakMap_1;
"use strict";
class C {
    constructor() {
        _fooWeakMap_1.set(this, void 0);
    }
    bar(x) { return x.#foo; } // OK
    baz(x) { return x.#foo; } // OK
    quux(x) { return x.#foo; } // OK
}
_fooWeakMap_1 = new WeakMap();
a.#foo; // Error
a = b; // Error
b = a; // Error
