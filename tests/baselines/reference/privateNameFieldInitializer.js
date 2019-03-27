//// [privateNameFieldInitializer.ts]
class A {
    #field = 10;
    static #staticField = 10;
    #uninitialized;
    static #staticUninitialized;
}


//// [privateNameFieldInitializer.js]
var A = /** @class */ (function () {
    function A() {
        _fieldWeakMap_1.set(this, 10);
        _uninitializedWeakMap_1.set(this, void 0);
    }
    var _fieldWeakMap_1, _staticFieldWeakMap_1, _uninitializedWeakMap_1, _staticUninitializedWeakMap_1;
    _fieldWeakMap_1 = new WeakMap(), _staticFieldWeakMap_1 = new WeakMap(), _uninitializedWeakMap_1 = new WeakMap(), _staticUninitializedWeakMap_1 = new WeakMap();
    _staticFieldWeakMap_1.set(A, 10);
    return A;
}());
