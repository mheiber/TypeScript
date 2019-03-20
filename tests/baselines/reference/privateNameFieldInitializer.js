//// [privateNameFieldInitializer.ts]
class A {
    #field = 10;
    #uninitialized;
}


//// [privateNameFieldInitializer.js]
var _fieldWeakMap_1, _uninitializedWeakMap_1;
var A = /** @class */ (function () {
    function A() {
        _fieldWeakMap_1.set(this, 10);
        _uninitializedWeakMap_1.set(this, void 0);
    }
    return A;
}());
_fieldWeakMap_1 = new WeakMap(), _uninitializedWeakMap_1 = new WeakMap();
