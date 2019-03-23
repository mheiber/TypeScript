//// [privateNameFieldAccess.ts]
class A {
    #myField = "hello world";
    constructor() {
        console.log(this.#myField);
    }
}


//// [privateNameFieldAccess.js]
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
var _myFieldWeakMap_1;
var A = /** @class */ (function () {
    function A() {
        _myFieldWeakMap_1.set(this, "hello world");
        console.log(_classPrivateFieldGet(this, _myFieldWeakMap_1));
    }
    return A;
}());
_myFieldWeakMap_1 = new WeakMap();
