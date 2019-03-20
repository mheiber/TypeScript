//// [privateNameNotAccessibleOutsideDefiningClass.ts]
// @target es6

class A {
    #foo: number = 3;
}

new A().#foo = 4;               // Error


//// [privateNameNotAccessibleOutsideDefiningClass.js]
// @target es6
var _fooWeakMap_1;
"use strict";
var A = /** @class */ (function () {
    function A() {
        _fooWeakMap_1.set(this, 3);
    }
    return A;
}());
_fooWeakMap_1 = new WeakMap();
new A().#foo = 4; // Error
