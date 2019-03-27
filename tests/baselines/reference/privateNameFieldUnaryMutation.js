//// [privateNameFieldUnaryMutation.ts]
class C {
    #test: number = 24;
    static #staticTest: number = 24;
    constructor() {
        this.#test++;
        this.#test--;
        ++this.#test;
        --this.#test;
        C.#staticTest++;
        C.#staticTest--;
        ++C.#staticTest;
        --C.#staticTest;
    }
    test() {
        this.getInstance().#test++;
        this.getInstance().#test--;
        ++this.getInstance().#test;
        --this.getInstance().#test;
        this.getClass().#staticTest++;
        this.getClass().#staticTest--;
        ++this.getClass().#staticTest;
        --this.getClass().#staticTest;
    }
    getInstance() { return new C(); }
    getClass() { return C; }
}


//// [privateNameFieldUnaryMutation.js]
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
var _classPrivateFieldSet = function (receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } privateMap.set(receiver, value); return value; };
var C = /** @class */ (function () {
    function C() {
        _testWeakMap_1.set(this, 24);
        var _a, _b, C_1, _c, C_2, _d, _e, _f;
        _a = _classPrivateFieldGet(this, _testWeakMap_1), _classPrivateFieldSet(this, _testWeakMap_1, _a + 1), _a;
        _b = _classPrivateFieldGet(this, _testWeakMap_1), _classPrivateFieldSet(this, _testWeakMap_1, _b - 1), _b;
        _classPrivateFieldSet(this, _testWeakMap_1, _classPrivateFieldGet(this, _testWeakMap_1) + 1);
        _classPrivateFieldSet(this, _testWeakMap_1, _classPrivateFieldGet(this, _testWeakMap_1) - 1);
        C_1 = C, _c = _classPrivateFieldGet(C_1, _staticTestWeakMap_1), _classPrivateFieldSet(C_1, _staticTestWeakMap_1, _c + 1), _c;
        C_2 = C, _d = _classPrivateFieldGet(C_2, _staticTestWeakMap_1), _classPrivateFieldSet(C_2, _staticTestWeakMap_1, _d - 1), _d;
        _classPrivateFieldSet(_e = C, _staticTestWeakMap_1, _classPrivateFieldGet(_e, _staticTestWeakMap_1) + 1);
        _classPrivateFieldSet(_f = C, _staticTestWeakMap_1, _classPrivateFieldGet(_f, _staticTestWeakMap_1) - 1);
    }
    C.prototype.test = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        _a = this.getInstance(), _b = _classPrivateFieldGet(_a, _testWeakMap_1), _classPrivateFieldSet(_a, _testWeakMap_1, _b + 1), _b;
        _c = this.getInstance(), _d = _classPrivateFieldGet(_c, _testWeakMap_1), _classPrivateFieldSet(_c, _testWeakMap_1, _d - 1), _d;
        _classPrivateFieldSet(_e = this.getInstance(), _testWeakMap_1, _classPrivateFieldGet(_e, _testWeakMap_1) + 1);
        _classPrivateFieldSet(_f = this.getInstance(), _testWeakMap_1, _classPrivateFieldGet(_f, _testWeakMap_1) - 1);
        _g = this.getClass(), _h = _classPrivateFieldGet(_g, _staticTestWeakMap_1), _classPrivateFieldSet(_g, _staticTestWeakMap_1, _h + 1), _h;
        _j = this.getClass(), _k = _classPrivateFieldGet(_j, _staticTestWeakMap_1), _classPrivateFieldSet(_j, _staticTestWeakMap_1, _k - 1), _k;
        _classPrivateFieldSet(_l = this.getClass(), _staticTestWeakMap_1, _classPrivateFieldGet(_l, _staticTestWeakMap_1) + 1);
        _classPrivateFieldSet(_m = this.getClass(), _staticTestWeakMap_1, _classPrivateFieldGet(_m, _staticTestWeakMap_1) - 1);
    };
    C.prototype.getInstance = function () { return new C(); };
    C.prototype.getClass = function () { return C; };
    var _testWeakMap_1, _staticTestWeakMap_1;
    _testWeakMap_1 = new WeakMap(), _staticTestWeakMap_1 = new WeakMap();
    _staticTestWeakMap_1.set(C, 24);
    return C;
}());
