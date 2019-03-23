//// [privateNamesNoAccessibilityModifiers.ts]
// @target es6

class A {
    public #foo = 3;         // Error
    private #bar = 3;        // Error
    protected #baz = 3;      // Error
    readonly #qux = 3;       // OK
}


//// [privateNamesNoAccessibilityModifiers.js]
// @target es6
var _fooWeakMap_1, _barWeakMap_1, _bazWeakMap_1, _quxWeakMap_1;
"use strict";
var A = /** @class */ (function () {
    function A() {
        _fooWeakMap_1.set(this, 3); // Error
        _barWeakMap_1.set(this, 3); // Error
        _bazWeakMap_1.set(this, 3); // Error
        _quxWeakMap_1.set(this, 3); // OK
    }
    return A;
}());
_fooWeakMap_1 = new WeakMap(), _barWeakMap_1 = new WeakMap(), _bazWeakMap_1 = new WeakMap(), _quxWeakMap_1 = new WeakMap();
