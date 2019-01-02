//// [privateNameDuplicateField.ts]
class A {
    #foo;
    #foo;
}


//// [privateNameDuplicateField.js]
var _foo, _foo_1;
"use strict";
var A = /** @class */ (function () {
    function A() {
        _foo_1.set(this, void 0);
        _foo_1.set(this, void 0);
    }
    return A;
}());
_foo = new WeakMap(), _foo_1 = new WeakMap();
