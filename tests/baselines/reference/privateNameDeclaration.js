//// [privateNameDeclaration.ts]
class A {
    #name: string;
}


//// [privateNameDeclaration.js]
var _nameWeakMap_1;
var A = /** @class */ (function () {
    function A() {
        _nameWeakMap_1.set(this, void 0);
    }
    return A;
}());
_nameWeakMap_1 = new WeakMap();
