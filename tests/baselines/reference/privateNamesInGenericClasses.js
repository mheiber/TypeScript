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
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
var _fooWeakMap_1;
"use strict";
class C {
    constructor() {
        _fooWeakMap_1.set(this, void 0);
    }
    bar(x) { return _classPrivateFieldGet(x, _fooWeakMap_1); } // OK
    baz(x) { return _classPrivateFieldGet(x, _fooWeakMap_1); } // OK
    quux(x) { return _classPrivateFieldGet(x, _fooWeakMap_1); } // OK
}
_fooWeakMap_1 = new WeakMap();
a.#foo; // Error
a = b; // Error
b = a; // Error
