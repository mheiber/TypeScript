//// [privateNamesNoDelete.ts]
// @target es6

class A {
    #v = 1;
    constructor() {
        delete this.#v; // Error: The operand of a delete operator cannot be a private name.
    }
}


//// [privateNamesNoDelete.js]
// @target es6
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
var _vWeakMap_1;
"use strict";
var A = /** @class */ (function () {
    function A() {
        _vWeakMap_1.set(this, 1);
        delete _classPrivateFieldGet(this, _vWeakMap_1); // Error: The operand of a delete operator cannot be a private name.
    }
    return A;
}());
_vWeakMap_1 = new WeakMap();
