//// [privateNameDuplicateField.ts]
// @target es6

class A {
    #foo = "foo";
    #foo = "foo";
}


//// [privateNameDuplicateField.js]
// @target es6
var _fooWeakMap_1, _fooWeakMap_2;
"use strict";
var A = /** @class */ (function () {
    function A() {
        _fooWeakMap_2.set(this, "foo");
        _fooWeakMap_2.set(this, "foo");
    }
    return A;
}());
_fooWeakMap_1 = new WeakMap(), _fooWeakMap_2 = new WeakMap();
