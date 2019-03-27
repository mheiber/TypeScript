//// [privateNameFieldAccess.ts]
class A {
    #myField = "hello world";
    static #myStaticField = "hello world";
    constructor() {
        console.log(this.#myField);
        console.log(A.#myStaticField);
    }
}


//// [privateNameFieldAccess.js]
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
var A = /** @class */ (function () {
    function A() {
        _myFieldWeakMap_1.set(this, "hello world");
        console.log(_classPrivateFieldGet(this, _myFieldWeakMap_1));
        console.log(_classPrivateFieldGet(A, _myStaticFieldWeakMap_1));
    }
    var _myFieldWeakMap_1, _myStaticFieldWeakMap_1;
    _myFieldWeakMap_1 = new WeakMap(), _myStaticFieldWeakMap_1 = new WeakMap();
    _myStaticFieldWeakMap_1.set(A, "hello world");
    return A;
}());
