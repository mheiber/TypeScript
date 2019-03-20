//// [privateNameConstructorReserved.ts]
// @target es6

class A {
    #constructor() {}      // Error: `#constructor` is a reserved word.
}


//// [privateNameConstructorReserved.js]
// @target es6
var _constructor_1, _constructorWeakSet_1;
var A = /** @class */ (function () {
    function A() {
        _constructorWeakSet_1.add(this);
    }
    return A;
}());
_constructorWeakSet_1 = new WeakSet(), _constructor_1 = function _constructor_1() { };
