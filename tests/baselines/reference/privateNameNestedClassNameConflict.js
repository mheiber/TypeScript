//// [privateNameNestedClassNameConflict.ts]
class A {
    #foo: string;
    constructor() {
        class A {
            #foo: string;
        }
    }
}


//// [privateNameNestedClassNameConflict.js]
var _fooWeakMap_1;
var A = /** @class */ (function () {
    function A() {
        _fooWeakMap_1.set(this, void 0);
        var _fooWeakMap_2;
        var A = /** @class */ (function () {
            function A() {
                _fooWeakMap_2.set(this, void 0);
            }
            return A;
        }());
        _fooWeakMap_2 = new WeakMap();
    }
    return A;
}());
_fooWeakMap_1 = new WeakMap();
