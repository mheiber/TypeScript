//// [privateNameField.ts]
class A {
    #name: string;
    constructor(name: string) {
        this.#name = name;
    }
}

//// [privateNameField.js]
var _classPrivateFieldSet = function (receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } privateMap.set(receiver, value); return value; };
var A = /** @class */ (function () {
    function A(name) {
        _name.set(this, void 0);
        _classPrivateFieldSet(this, _name, name);
    }
    return A;
}());
var _name = new WeakMap;
