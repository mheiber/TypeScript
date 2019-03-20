//// [privateNameFieldUnaryMutation.ts]
class C {
    #test: number = 24;
    constructor() {
        this.#test++;
        this.#test--;
        ++this.#test;
        --this.#test;
    }
    test() {
        this.getInstance().#test++;
        this.getInstance().#test--;
        ++this.getInstance().#test;
        --this.getInstance().#test;
    }
    getInstance() { return new C(); }
}


//// [privateNameFieldUnaryMutation.js]
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
var _classPrivateFieldSet = function (receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } privateMap.set(receiver, value); return value; };
var _testWeakMap_1;
var C = /** @class */ (function () {
    function C() {
        _testWeakMap_1.set(this, 24);
        var _a, _b;
        _a = _classPrivateFieldGet(this, _testWeakMap_1), _classPrivateFieldSet(this, _testWeakMap_1, _a + 1), _a;
        _b = _classPrivateFieldGet(this, _testWeakMap_1), _classPrivateFieldSet(this, _testWeakMap_1, _b - 1), _b;
        _classPrivateFieldSet(this, _testWeakMap_1, _classPrivateFieldGet(this, _testWeakMap_1) + 1);
        _classPrivateFieldSet(this, _testWeakMap_1, _classPrivateFieldGet(this, _testWeakMap_1) - 1);
    }
    C.prototype.test = function () {
        this.getInstance().#test++;
        this.getInstance().#test--;
        ++this.getInstance().#test;
        --this.getInstance().#test;
    };
    C.prototype.getInstance = function () { return new C(); };
    return C;
}());
_testWeakMap_1 = new WeakMap();
