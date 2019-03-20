//// [privateNamesNotAllowedAsParameters.ts]
// @target es6

class A {
    setFoo(#foo: string) {}
}


//// [privateNamesNotAllowedAsParameters.js]
// @target es6
var _fooWeakMap_1;
var A = /** @class */ (function () {
    function A() {
        _fooWeakMap_1.set(this, void 0);
    }
    A.prototype.setFoo = function () { };
    return A;
}());
_fooWeakMap_1 = new WeakMap();
{ }
