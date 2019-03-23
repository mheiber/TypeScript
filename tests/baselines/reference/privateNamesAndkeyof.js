//// [privateNamesAndkeyof.ts]
// @target es6

class A {
    #foo = 3;
    bar = 3;
    baz = 3;
}

type T = keyof A     // should not include '#foo'


//// [privateNamesAndkeyof.js]
// @target es6
var _fooWeakMap_1;
"use strict";
var A = /** @class */ (function () {
    function A() {
        _fooWeakMap_1.set(this, 3);
        this.bar = 3;
        this.baz = 3;
    }
    return A;
}());
_fooWeakMap_1 = new WeakMap();
