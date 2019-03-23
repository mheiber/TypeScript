//// [privateNamedMethodOrder.ts]
class A {
    static bar: A | undefined = new A("max");
    #foo() {
        A.bar = undefined
    }
    constructor (public name: string) {
        this.#foo()
        console.log(this)
    }
}


//// [privateNamedMethodOrder.js]
function _classPrivateNamedMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _foo_1, _fooWeakSet_1;
"use strict";
class A {
    constructor(name) {
        _fooWeakSet_1.add(this);
        this.name = name;
        _classPrivateNamedMethodGet(this, _fooWeakSet_1, _foo_1).call(this);
        console.log(this);
    }
}
_fooWeakSet_1 = new WeakSet(), _foo_1 = function _foo_1() {
    A.bar = undefined;
};
A.bar = new A("max");
