//// [privateNameFieldMutate.ts]
class Test {
    #field: number;
    constructor() {
        this.#field = 100;
    }
}


//// [privateNameFieldMutate.js]
var _classPrivateFieldSet = function (receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } privateMap.set(receiver, value); return value; };
var Test = /** @class */ (function () {
    function Test() {
        _field.set(this, void 0);
        _classPrivateFieldSet(this, _field, 100);
    }
    return Test;
}());
var _field = new WeakMap;
