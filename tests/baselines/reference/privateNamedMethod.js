//// [privateNamedMethod.ts]
class A {
    #foo = "hello";
    #log(name: string) {
        console.log(this.#foo);
        console.log(name);
    }
    #logIfTallEnough(height: number, name: string) {
        if (height >= 50) {
            this.#log(name);
        }
    }
    #logAll(height: number, ...names: string[]) {
        for (const name of names) {
            this.#logIfTallEnough(height, name);
        }
    }
    constructor() {
        this.#logIfTallEnough(100, "world");
        this.#logAll(100, ...["a", "b", "c"]);
    }
}


//// [privateNamedMethod.js]
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
function _classPrivateNamedMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _fooWeakMap_1, _log_1, _logWeakSet_1, _logIfTallEnough_1, _logIfTallEnoughWeakSet_1, _logAll_1, _logAllWeakSet_1;
"use strict";
class A {
    constructor() {
        _logWeakSet_1.add(this);
        _logIfTallEnoughWeakSet_1.add(this);
        _logAllWeakSet_1.add(this);
        _fooWeakMap_1.set(this, "hello");
        _classPrivateNamedMethodGet(this, _logIfTallEnoughWeakSet_1, _logIfTallEnough_1).call(this, 100, "world");
        _classPrivateNamedMethodGet(this, _logAllWeakSet_1, _logAll_1).call(this, 100, ...["a", "b", "c"]);
    }
}
_fooWeakMap_1 = new WeakMap(), _logWeakSet_1 = new WeakSet(), _logIfTallEnoughWeakSet_1 = new WeakSet(), _logAllWeakSet_1 = new WeakSet(), _log_1 = function _log_1(name) {
    console.log(_classPrivateFieldGet(this, _fooWeakMap_1));
    console.log(name);
}, _logIfTallEnough_1 = function _logIfTallEnough_1(height, name) {
    if (height >= 50) {
        _classPrivateNamedMethodGet(this, _logWeakSet_1, _log_1).call(this, name);
    }
}, _logAll_1 = function _logAll_1(height, ...names) {
    for (const name of names) {
        _classPrivateNamedMethodGet(this, _logIfTallEnoughWeakSet_1, _logIfTallEnough_1).call(this, height, name);
    }
};
