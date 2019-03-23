//// [privateNamesUnique.ts]
// @target es6

class A {
    #foo: number;
}

class B {
    #foo: number;
}

const b: A = new B();     // Error: Property #foo is missing


//// [privateNamesUnique.js]
// @target es6
var _fooWeakMap_1, _fooWeakMap_2;
"use strict";
var A = /** @class */ (function () {
    function A() {
        _fooWeakMap_1.set(this, void 0);
    }
    return A;
}());
_fooWeakMap_1 = new WeakMap();
var B = /** @class */ (function () {
    function B() {
        _fooWeakMap_2.set(this, void 0);
    }
    return B;
}());
_fooWeakMap_2 = new WeakMap();
var b = new B(); // Error: Property #foo is missing
