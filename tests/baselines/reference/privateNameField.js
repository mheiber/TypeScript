//// [privateNameField.ts]
class A {
    #name: string;
    constructor(name: string) {
        this.#name = name;
    }
}

//// [privateNameField.js]
var _name;
var A = /** @class */ (function () {
    function A(name) {
        _name.set(this, void 0);
        this.#name = name;
    }
    return A;
}());
_name = new WeakMap();
