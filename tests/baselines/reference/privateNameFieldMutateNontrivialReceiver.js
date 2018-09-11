//// [privateNameFieldMutateNontrivialReceiver.ts]
class Test {
    #field: number;
    static mutate(getReceiver: () => Test) {
        getReceiver().#field = 100;
        getReceiver().#field += 1;
        getReceiver().#field -= 2;
        getReceiver().#field /= 3;
        getReceiver().#field *= 4;
        getReceiver().#field |= 5;
        getReceiver().#field **= 6;
        getReceiver().#field %= 7;
        getReceiver().#field <<= 8;
        getReceiver().#field >>= 9;
        getReceiver().#field >>>= 10;
        getReceiver().#field &= 11;
        getReceiver().#field ^= 12;
    }
}


//// [privateNameFieldMutateNontrivialReceiver.js]
var _classPrivateFieldSet = function (receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } privateMap.set(receiver, value); return value; };
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
var Test = /** @class */ (function () {
    function Test() {
        _field.set(this, void 0);
    }
    Test.mutate = function (getReceiver) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        _classPrivateFieldSet(getReceiver(), _field, 100);
        _classPrivateFieldSet(_a = getReceiver(), _field, _classPrivateFieldGet(_a, _field) + 1);
        _classPrivateFieldSet(_b = getReceiver(), _field, _classPrivateFieldGet(_b, _field) - 2);
        _classPrivateFieldSet(_c = getReceiver(), _field, _classPrivateFieldGet(_c, _field) / 3);
        _classPrivateFieldSet(_d = getReceiver(), _field, _classPrivateFieldGet(_d, _field) * 4);
        _classPrivateFieldSet(_e = getReceiver(), _field, _classPrivateFieldGet(_e, _field) | 5);
        _classPrivateFieldSet(_f = getReceiver(), _field, Math.pow(_classPrivateFieldGet(_f, _field), 6));
        _classPrivateFieldSet(_g = getReceiver(), _field, _classPrivateFieldGet(_g, _field) % 7);
        _classPrivateFieldSet(_h = getReceiver(), _field, _classPrivateFieldGet(_h, _field) << 8);
        _classPrivateFieldSet(_j = getReceiver(), _field, _classPrivateFieldGet(_j, _field) >> 9);
        _classPrivateFieldSet(_k = getReceiver(), _field, _classPrivateFieldGet(_k, _field) >>> 10);
        _classPrivateFieldSet(_l = getReceiver(), _field, _classPrivateFieldGet(_l, _field) & 11);
        _classPrivateFieldSet(_m = getReceiver(), _field, _classPrivateFieldGet(_m, _field) ^ 12);
    };
    return Test;
}());
var _field = new WeakMap;
