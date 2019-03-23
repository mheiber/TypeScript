//// [privateNamesAndMethods.ts]
class A {
    #foo(a: number) {}
    async #bar(a: number) {}
    async *#baz(a: number) {
        return 3;
    }
    #_quux: number;
    get #quux (): number {
        return this.#_quux;
    }
    set #quux (val: number) {
        this.#_quux = val; 
    }
    constructor () {
        this.#foo(30);
        this.#bar(30);
        this.#bar(30);
        this.#quux = this.#quux + 1;
        this.#quux++;
 }
}

class B extends A {
    #foo(a: string) {}
    constructor () {
        super();
        this.#foo("str");
    }
}


//// [privateNamesAndMethods.js]
function _classPrivateNamedMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
var _classPrivateFieldSet = function (receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } privateMap.set(receiver, value); return value; };
var _foo_1, _fooWeakSet_1, _bar_1, _barWeakSet_1, _baz_1, _bazWeakSet_1, __quuxWeakMap_1, _foo_2, _fooWeakSet_2;
class A {
    constructor() {
        _fooWeakSet_1.add(this);
        _barWeakSet_1.add(this);
        _bazWeakSet_1.add(this);
        __quuxWeakMap_1.set(this, void 0);
        _classPrivateNamedMethodGet(this, _fooWeakSet_1, _foo_1).call(this, 30);
        _classPrivateNamedMethodGet(this, _barWeakSet_1, _bar_1).call(this, 30);
        _classPrivateNamedMethodGet(this, _barWeakSet_1, _bar_1).call(this, 30);
        this.#quux = this.#quux + 1;
        this.#quux++;
    }
    get #quux() {
        return _classPrivateFieldGet(this, __quuxWeakMap_1);
    }
    set #quux(val) {
        _classPrivateFieldSet(this, __quuxWeakMap_1, val);
    }
}
_fooWeakSet_1 = new WeakSet(), _barWeakSet_1 = new WeakSet(), _bazWeakSet_1 = new WeakSet(), __quuxWeakMap_1 = new WeakMap(), _foo_1 = function _foo_1(a) { }, _bar_1 = function _bar_1(a) { }, _baz_1 = function _baz_1(a) {
    return 3;
};
class B extends A {
    constructor() {
        super();
        _fooWeakSet_2.add(this);
        _classPrivateNamedMethodGet(this, _fooWeakSet_2, _foo_2).call(this, "str");
    }
}
_fooWeakSet_2 = new WeakSet(), _foo_2 = function _foo_2(a) { };
