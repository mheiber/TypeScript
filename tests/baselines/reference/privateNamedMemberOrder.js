//// [privateNamedMemberOrder.ts]
class A {
    #foo: () => 1;
    #bar() {
        return this.#foo;
    }
    baz = this.#bar();
}

//// [privateNamedMemberOrder.js]
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
function _classPrivateNamedMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _fooWeakMap_1, _bar_1, _barWeakSet_1;
var A = /** @class */ (function () {
    function A() {
        _barWeakSet_1.add(this);
        _fooWeakMap_1.set(this, void 0);
        this.baz = _classPrivateNamedMethodGet(this, _barWeakSet_1, _bar_1).call(this);
    }
    return A;
}());
_fooWeakMap_1 = new WeakMap(), _barWeakSet_1 = new WeakSet(), _bar_1 = function _bar_1() {
    return _classPrivateFieldGet(this, _fooWeakMap_1);
};
