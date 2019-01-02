//// [privateNamesAndkeyof.ts]
class A {
    #foo;
    bar;
    baz;
}

type T = keyof A     // should not include '#foo'


//// [privateNamesAndkeyof.js]
var _foo;
"use strict";
var A = /** @class */ (function () {
    function A() {
        _foo.set(this, void 0);
    }
    return A;
}());
_foo = new WeakMap();
