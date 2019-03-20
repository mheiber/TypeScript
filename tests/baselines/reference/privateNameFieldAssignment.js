//// [privateNameFieldAssignment.ts]
class A {
    #field = 0;
    constructor() {
        this.#field = 1;
        this.#field += 2;
        this.#field -= 3;
        this.#field /= 4;
        this.#field *= 5;
        this.#field **= 6;
        this.#field %= 7;
        this.#field <<= 8;
        this.#field >>= 9;
        this.#field >>>= 10;
        this.#field &= 11;
        this.#field |= 12;
        this.#field ^= 13;
        A.getInstance().#field = 1;
        A.getInstance().#field += 2;
        A.getInstance().#field -= 3;
        A.getInstance().#field /= 4;
        A.getInstance().#field *= 5;
        A.getInstance().#field **= 6;
        A.getInstance().#field %= 7;
        A.getInstance().#field <<= 8;
        A.getInstance().#field >>= 9;
        A.getInstance().#field >>>= 10;
        A.getInstance().#field &= 11;
        A.getInstance().#field |= 12;
        A.getInstance().#field ^= 13;
    }
    static getInstance() {
        return new A();
    }
}


//// [privateNameFieldAssignment.js]
var _classPrivateFieldSet = function (receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } privateMap.set(receiver, value); return value; };
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
var _fieldWeakMap_1;
var A = /** @class */ (function () {
    function A() {
        _fieldWeakMap_1.set(this, 0);
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        _classPrivateFieldSet(this, _fieldWeakMap_1, 1);
        _classPrivateFieldSet(this, _fieldWeakMap_1, _classPrivateFieldGet(this, _fieldWeakMap_1) + 2);
        _classPrivateFieldSet(this, _fieldWeakMap_1, _classPrivateFieldGet(this, _fieldWeakMap_1) - 3);
        _classPrivateFieldSet(this, _fieldWeakMap_1, _classPrivateFieldGet(this, _fieldWeakMap_1) / 4);
        _classPrivateFieldSet(this, _fieldWeakMap_1, _classPrivateFieldGet(this, _fieldWeakMap_1) * 5);
        _classPrivateFieldSet(this, _fieldWeakMap_1, Math.pow(_classPrivateFieldGet(this, _fieldWeakMap_1), 6));
        _classPrivateFieldSet(this, _fieldWeakMap_1, _classPrivateFieldGet(this, _fieldWeakMap_1) % 7);
        _classPrivateFieldSet(this, _fieldWeakMap_1, _classPrivateFieldGet(this, _fieldWeakMap_1) << 8);
        _classPrivateFieldSet(this, _fieldWeakMap_1, _classPrivateFieldGet(this, _fieldWeakMap_1) >> 9);
        _classPrivateFieldSet(this, _fieldWeakMap_1, _classPrivateFieldGet(this, _fieldWeakMap_1) >>> 10);
        _classPrivateFieldSet(this, _fieldWeakMap_1, _classPrivateFieldGet(this, _fieldWeakMap_1) & 11);
        _classPrivateFieldSet(this, _fieldWeakMap_1, _classPrivateFieldGet(this, _fieldWeakMap_1) | 12);
        _classPrivateFieldSet(this, _fieldWeakMap_1, _classPrivateFieldGet(this, _fieldWeakMap_1) ^ 13);
        _classPrivateFieldSet(A.getInstance(), _fieldWeakMap_1, 1);
        _classPrivateFieldSet(_a = A.getInstance(), _fieldWeakMap_1, _classPrivateFieldGet(_a, _fieldWeakMap_1) + 2);
        _classPrivateFieldSet(_b = A.getInstance(), _fieldWeakMap_1, _classPrivateFieldGet(_b, _fieldWeakMap_1) - 3);
        _classPrivateFieldSet(_c = A.getInstance(), _fieldWeakMap_1, _classPrivateFieldGet(_c, _fieldWeakMap_1) / 4);
        _classPrivateFieldSet(_d = A.getInstance(), _fieldWeakMap_1, _classPrivateFieldGet(_d, _fieldWeakMap_1) * 5);
        _classPrivateFieldSet(_e = A.getInstance(), _fieldWeakMap_1, Math.pow(_classPrivateFieldGet(_e, _fieldWeakMap_1), 6));
        _classPrivateFieldSet(_f = A.getInstance(), _fieldWeakMap_1, _classPrivateFieldGet(_f, _fieldWeakMap_1) % 7);
        _classPrivateFieldSet(_g = A.getInstance(), _fieldWeakMap_1, _classPrivateFieldGet(_g, _fieldWeakMap_1) << 8);
        _classPrivateFieldSet(_h = A.getInstance(), _fieldWeakMap_1, _classPrivateFieldGet(_h, _fieldWeakMap_1) >> 9);
        _classPrivateFieldSet(_j = A.getInstance(), _fieldWeakMap_1, _classPrivateFieldGet(_j, _fieldWeakMap_1) >>> 10);
        _classPrivateFieldSet(_k = A.getInstance(), _fieldWeakMap_1, _classPrivateFieldGet(_k, _fieldWeakMap_1) & 11);
        _classPrivateFieldSet(_l = A.getInstance(), _fieldWeakMap_1, _classPrivateFieldGet(_l, _fieldWeakMap_1) | 12);
        _classPrivateFieldSet(_m = A.getInstance(), _fieldWeakMap_1, _classPrivateFieldGet(_m, _fieldWeakMap_1) ^ 13);
    }
    A.getInstance = function () {
        return new A();
    };
    return A;
}());
_fieldWeakMap_1 = new WeakMap();
