//// [privateNameFieldDestructuredBinding.ts]
class A {
    #field = 1;
    testObject() {
        return { x: 10, y: 6 };
    }
    testArray() {
        return [10, 11];
    }
    constructor() {
        let y: number;
        ({ x: this.#field, y } = this.testObject());
        ([this.#field, y] = this.testArray());
    }
}


//// [privateNameFieldDestructuredBinding.js]
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
var _field;
var A = /** @class */ (function () {
    function A() {
        _field.set(this, 1);
        var _a, _b;
        var y;
        (_a = this.testObject(), { set value(x) { _classPrivateFieldGet(this, _field) = x; } }.value = _a.x, y = _a.y);
        (_b = this.testArray(), { set value(x) { _classPrivateFieldGet(this, _field) = x; } }.value = _b[0], y = _b[1]);
    }
    A.prototype.testObject = function () {
        return { x: 10, y: 6 };
    };
    A.prototype.testArray = function () {
        return [10, 11];
    };
    return A;
}());
_field = new WeakMap();
