//// [privateNameFieldAccess.ts]
class Test {
    #field: number;
    method() {
        console.log(this.#field);
    }
}


//// [privateNameFieldAccess.js]
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
var Test = /** @class */ (function () {
    function Test() {
        _field.set(this, void 0);
    }
    Test.prototype.method = function () {
        console.log(_classPrivateFieldGet(this, _field));
    };
    return Test;
}());
var _field = new WeakMap;
