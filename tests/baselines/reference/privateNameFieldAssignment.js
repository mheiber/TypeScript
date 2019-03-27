//// [privateNameFieldAssignment.ts]
class A {
    #field = 0;
    static #staticField = 0;
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
        A.#staticField = 1;
        A.#staticField += 2;
        A.#staticField -= 3;
        A.#staticField /= 4;
        A.#staticField *= 5;
        A.#staticField **= 6;
        A.#staticField %= 7;
        A.#staticField <<= 8;
        A.#staticField >>= 9;
        A.#staticField >>>= 10;
        A.#staticField &= 11;
        A.#staticField |= 12;
        A.#staticField ^= 13;
        A.getClass().#staticField = 1;
        A.getClass().#staticField += 2;
        A.getClass().#staticField -= 3;
        A.getClass().#staticField /= 4;
        A.getClass().#staticField *= 5;
        A.getClass().#staticField **= 6;
        A.getClass().#staticField %= 7;
        A.getClass().#staticField <<= 8;
        A.getClass().#staticField >>= 9;
        A.getClass().#staticField >>>= 10;
        A.getClass().#staticField &= 11;
        A.getClass().#staticField |= 12;
        A.getClass().#staticField ^= 13;
    }
    static getInstance() {
        return new A();
    }
    static getClass() {
        return this;
    }
}


//// [privateNameFieldAssignment.js]
var _classPrivateFieldSet = function (receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } privateMap.set(receiver, value); return value; };
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
var A = /** @class */ (function () {
    function A() {
        _fieldWeakMap_1.set(this, 0);
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11;
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
        _classPrivateFieldSet(A, _staticFieldWeakMap_1, 1);
        _classPrivateFieldSet(_o = A, _staticFieldWeakMap_1, _classPrivateFieldGet(_o, _staticFieldWeakMap_1) + 2);
        _classPrivateFieldSet(_p = A, _staticFieldWeakMap_1, _classPrivateFieldGet(_p, _staticFieldWeakMap_1) - 3);
        _classPrivateFieldSet(_q = A, _staticFieldWeakMap_1, _classPrivateFieldGet(_q, _staticFieldWeakMap_1) / 4);
        _classPrivateFieldSet(_r = A, _staticFieldWeakMap_1, _classPrivateFieldGet(_r, _staticFieldWeakMap_1) * 5);
        _classPrivateFieldSet(_s = A, _staticFieldWeakMap_1, Math.pow(_classPrivateFieldGet(_s, _staticFieldWeakMap_1), 6));
        _classPrivateFieldSet(_t = A, _staticFieldWeakMap_1, _classPrivateFieldGet(_t, _staticFieldWeakMap_1) % 7);
        _classPrivateFieldSet(_u = A, _staticFieldWeakMap_1, _classPrivateFieldGet(_u, _staticFieldWeakMap_1) << 8);
        _classPrivateFieldSet(_v = A, _staticFieldWeakMap_1, _classPrivateFieldGet(_v, _staticFieldWeakMap_1) >> 9);
        _classPrivateFieldSet(_w = A, _staticFieldWeakMap_1, _classPrivateFieldGet(_w, _staticFieldWeakMap_1) >>> 10);
        _classPrivateFieldSet(_x = A, _staticFieldWeakMap_1, _classPrivateFieldGet(_x, _staticFieldWeakMap_1) & 11);
        _classPrivateFieldSet(_y = A, _staticFieldWeakMap_1, _classPrivateFieldGet(_y, _staticFieldWeakMap_1) | 12);
        _classPrivateFieldSet(_z = A, _staticFieldWeakMap_1, _classPrivateFieldGet(_z, _staticFieldWeakMap_1) ^ 13);
        _classPrivateFieldSet(A.getClass(), _staticFieldWeakMap_1, 1);
        _classPrivateFieldSet(_0 = A.getClass(), _staticFieldWeakMap_1, _classPrivateFieldGet(_0, _staticFieldWeakMap_1) + 2);
        _classPrivateFieldSet(_1 = A.getClass(), _staticFieldWeakMap_1, _classPrivateFieldGet(_1, _staticFieldWeakMap_1) - 3);
        _classPrivateFieldSet(_2 = A.getClass(), _staticFieldWeakMap_1, _classPrivateFieldGet(_2, _staticFieldWeakMap_1) / 4);
        _classPrivateFieldSet(_3 = A.getClass(), _staticFieldWeakMap_1, _classPrivateFieldGet(_3, _staticFieldWeakMap_1) * 5);
        _classPrivateFieldSet(_4 = A.getClass(), _staticFieldWeakMap_1, Math.pow(_classPrivateFieldGet(_4, _staticFieldWeakMap_1), 6));
        _classPrivateFieldSet(_5 = A.getClass(), _staticFieldWeakMap_1, _classPrivateFieldGet(_5, _staticFieldWeakMap_1) % 7);
        _classPrivateFieldSet(_6 = A.getClass(), _staticFieldWeakMap_1, _classPrivateFieldGet(_6, _staticFieldWeakMap_1) << 8);
        _classPrivateFieldSet(_7 = A.getClass(), _staticFieldWeakMap_1, _classPrivateFieldGet(_7, _staticFieldWeakMap_1) >> 9);
        _classPrivateFieldSet(_8 = A.getClass(), _staticFieldWeakMap_1, _classPrivateFieldGet(_8, _staticFieldWeakMap_1) >>> 10);
        _classPrivateFieldSet(_9 = A.getClass(), _staticFieldWeakMap_1, _classPrivateFieldGet(_9, _staticFieldWeakMap_1) & 11);
        _classPrivateFieldSet(_10 = A.getClass(), _staticFieldWeakMap_1, _classPrivateFieldGet(_10, _staticFieldWeakMap_1) | 12);
        _classPrivateFieldSet(_11 = A.getClass(), _staticFieldWeakMap_1, _classPrivateFieldGet(_11, _staticFieldWeakMap_1) ^ 13);
    }
    A.getInstance = function () {
        return new A();
    };
    A.getClass = function () {
        return this;
    };
    var _fieldWeakMap_1, _staticFieldWeakMap_1;
    _fieldWeakMap_1 = new WeakMap(), _staticFieldWeakMap_1 = new WeakMap();
    _staticFieldWeakMap_1.set(A, 0);
    return A;
}());
