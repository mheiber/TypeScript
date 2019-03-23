//// [classConstructorParametersCommentPlacement.ts]
// some comment
class A {
    #a = "private hello";
    #b = "another private name";
    a = "public property";
    constructor(private b = "something") { }
}


//// [classConstructorParametersCommentPlacement.js]
var _classPrivateFieldSet = function (receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } privateMap.set(receiver, value); return value; };
var _aWeakMap_1, _bWeakMap_1;
// some comment
var A = /** @class */ (function () {
    function A(b) {
        if (b === void 0) { b = "something"; }
        // some comment
        _aWeakMap_1.set(this, void 0);
        // some comment
        _bWeakMap_1.set(this, void 0);
        this.b = b;
        _classPrivateFieldSet(this, _aWeakMap_1, "private hello");
        _classPrivateFieldSet(this, _bWeakMap_1, "another private name");
        this.a = "public property";
    }
    return A;
}());
_aWeakMap_1 = new WeakMap(), _bWeakMap_1 = new WeakMap();
