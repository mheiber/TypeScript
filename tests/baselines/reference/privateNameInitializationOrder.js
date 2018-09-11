//// [privateNameInitializationOrder.ts]
let a = 0;
class Test {
    #one = ++a;
    normalProp = ++a;
    #two = this.#one + 1;
}


//// [privateNameInitializationOrder.js]
var _classPrivateFieldSet = function (receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } privateMap.set(receiver, value); return value; };
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
var a = 0;
var Test = /** @class */ (function () {
    function Test() {
        _one.set(this, void 0);
        _two.set(this, void 0);
        _classPrivateFieldSet(this, _one, ++a);
        this.normalProp = ++a;
        _classPrivateFieldSet(this, _two, _classPrivateFieldGet(this, _one) + 1);
    }
    return Test;
}());
var _one = new WeakMap;
var _two = new WeakMap;
