//// [privateNameFieldCallExpression.ts]
class A {
    #fieldFunc = () => this.x = 10;
    x = 1;
    test() {
        this.#fieldFunc();
        const func = this.#fieldFunc;
        func();
    }
}


//// [privateNameFieldCallExpression.js]
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
var _fieldFuncWeakMap_1;
var A = /** @class */ (function () {
    function A() {
        var _this = this;
        _fieldFuncWeakMap_1.set(this, function () { return _this.x = 10; });
        this.x = 1;
    }
    A.prototype.test = function () {
        _classPrivateFieldGet(this, _fieldFuncWeakMap_1).call(this);
        var func = _classPrivateFieldGet(this, _fieldFuncWeakMap_1);
        func();
    };
    return A;
}());
_fieldFuncWeakMap_1 = new WeakMap();
