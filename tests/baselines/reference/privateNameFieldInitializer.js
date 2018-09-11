//// [privateNameFieldInitializer.ts]
class Test {
    #property: number = 100;
}


//// [privateNameFieldInitializer.js]
var _classPrivateFieldSet = function (receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } privateMap.set(receiver, value); return value; };
var Test = /** @class */ (function () {
    function Test() {
        _property.set(this, void 0);
        _classPrivateFieldSet(this, _property, 100);
    }
    return Test;
}());
var _property = new WeakMap;
