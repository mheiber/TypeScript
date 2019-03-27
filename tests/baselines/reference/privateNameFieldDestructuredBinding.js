//// [privateNameFieldDestructuredBinding.ts]
class A {
    #field = 1;
    static #staticField = 1;
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
        ({ x: A.#staticField, y } = this.testObject());
        ([A.#staticField, y] = this.testArray());
    }
}


//// [privateNameFieldDestructuredBinding.js]
var _classPrivateFieldSet = function (receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } privateMap.set(receiver, value); return value; };
var A = /** @class */ (function () {
    function A() {
        var _a, _b, _c, _d;
        _fieldWeakMap_1.set(this, 1);
        var y;
        (_a = this.testObject(), { set value(x) { _classPrivateFieldSet(this, _fieldWeakMap_1, x); } }.value = _a.x, y = _a.y);
        (_b = this.testArray(), { set value(x) { _classPrivateFieldSet(this, _fieldWeakMap_1, x); } }.value = _b[0], y = _b[1]);
        (_c = this.testObject(), { set value(x) { _classPrivateFieldSet(A, _staticFieldWeakMap_1, x); } }.value = _c.x, y = _c.y);
        (_d = this.testArray(), { set value(x) { _classPrivateFieldSet(A, _staticFieldWeakMap_1, x); } }.value = _d[0], y = _d[1]);
    }
    A.prototype.testObject = function () {
        return { x: 10, y: 6 };
    };
    A.prototype.testArray = function () {
        return [10, 11];
    };
    var _fieldWeakMap_1, _staticFieldWeakMap_1;
    _fieldWeakMap_1 = new WeakMap(), _staticFieldWeakMap_1 = new WeakMap();
    _staticFieldWeakMap_1.set(A, 1);
    return A;
}());
