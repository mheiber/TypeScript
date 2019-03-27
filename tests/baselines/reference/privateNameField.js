//// [privateNameField.ts]
class A {
    #name: string;
    static #staticName: string;
    constructor(name: string) {
        this.#name = name;
        A.#staticName = name;
    }
}

//// [privateNameField.js]
var _classPrivateFieldSet = function (receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } privateMap.set(receiver, value); return value; };
var _nameWeakMap_1, _staticNameWeakMap_1;
var A = /** @class */ (function () {
    function A(name) {
        _nameWeakMap_1.set(this, void 0);
        _classPrivateFieldSet(this, _nameWeakMap_1, name);
        _classPrivateFieldSet(A, _staticNameWeakMap_1, name);
    }
    return A;
}());
_nameWeakMap_1 = new WeakMap(), _staticNameWeakMap_1 = new WeakMap();
