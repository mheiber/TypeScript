//// [privateNamesAndDecorators.ts]
declare function dec<T>(target: T): T;

class A {
    @dec                // Error
    #foo = 1;
    @dec                // Error
    #bar(): void { }
}


//// [privateNamesAndDecorators.js]
var _fooWeakMap_1, _bar_1, _barWeakSet_1;
var A = /** @class */ (function () {
    function A() {
        _barWeakSet_1.add(this);
        _fooWeakMap_1.set(this, 1);
    }
    return A;
}());
_fooWeakMap_1 = new WeakMap(), _barWeakSet_1 = new WeakSet(), _bar_1 = function _bar_1() { };
