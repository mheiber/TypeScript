//// [privateNameFieldMutateBinaryOp.ts]
class Test {
    #field: number;
    constructor() {
        this.#field += 1;
        this.#field -= 2;
        this.#field /= 3;
        this.#field *= 4;
        this.#field |= 5;
        this.#field **= 6;
        this.#field %= 7;
        this.#field <<= 8;
        this.#field >>= 9;
        this.#field >>>= 10;
        this.#field &= 11;
        this.#field ^= 12;
    }
}


//// [privateNameFieldMutateBinaryOp.js]
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
var _classPrivateFieldSet = function (receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } privateMap.set(receiver, value); return value; };
var Test = /** @class */ (function () {
    function Test() {
        _field.set(this, void 0);
        _classPrivateFieldSet(this, _field, _classPrivateFieldGet(this, _field) + 1);
        _classPrivateFieldSet(this, _field, _classPrivateFieldGet(this, _field) - 2);
        _classPrivateFieldSet(this, _field, _classPrivateFieldGet(this, _field) / 3);
        _classPrivateFieldSet(this, _field, _classPrivateFieldGet(this, _field) * 4);
        _classPrivateFieldSet(this, _field, _classPrivateFieldGet(this, _field) | 5);
        _classPrivateFieldSet(this, _field, Math.pow(_classPrivateFieldGet(this, _field), 6));
        _classPrivateFieldSet(this, _field, _classPrivateFieldGet(this, _field) % 7);
        _classPrivateFieldSet(this, _field, _classPrivateFieldGet(this, _field) << 8);
        _classPrivateFieldSet(this, _field, _classPrivateFieldGet(this, _field) >> 9);
        _classPrivateFieldSet(this, _field, _classPrivateFieldGet(this, _field) >>> 10);
        _classPrivateFieldSet(this, _field, _classPrivateFieldGet(this, _field) & 11);
        _classPrivateFieldSet(this, _field, _classPrivateFieldGet(this, _field) ^ 12);
    }
    return Test;
}());
var _field = new WeakMap;
