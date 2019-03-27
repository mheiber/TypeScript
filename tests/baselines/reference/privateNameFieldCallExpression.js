//// [privateNameFieldCallExpression.ts]
class A {
    #fieldFunc = () => this.x = 10;
    static #staticFieldFunc = () => A.staticX = 10;
    x = 1;
    static staticX = 1;
    test() {
        this.#fieldFunc();
        const func = this.#fieldFunc;
        func();
        A.#staticFieldFunc();
        const func2 = A.#staticFieldFunc;
        func2();
    }
}


//// [privateNameFieldCallExpression.js]
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
var A = /** @class */ (function () {
    function A() {
        var _this = this;
        _fieldFuncWeakMap_1.set(this, function () { return _this.x = 10; });
        this.x = 1;
    }
    A.prototype.test = function () {
        var _a;
        _classPrivateFieldGet(this, _fieldFuncWeakMap_1).call(this);
        var func = _classPrivateFieldGet(this, _fieldFuncWeakMap_1);
        func();
        _classPrivateFieldGet((_a = A), _staticFieldFuncWeakMap_1).call(_a);
        var func2 = _classPrivateFieldGet(A, _staticFieldFuncWeakMap_1);
        func2();
    };
    var _fieldFuncWeakMap_1, _staticFieldFuncWeakMap_1;
    _fieldFuncWeakMap_1 = new WeakMap(), _staticFieldFuncWeakMap_1 = new WeakMap();
    _staticFieldFuncWeakMap_1.set(A, function () { return A.staticX = 10; });
    A.staticX = 1;
    return A;
}());
