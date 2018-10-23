//// [privateNameFieldDeclaration.ts]
class A {
    #name: string;
}


//// [privateNameFieldDeclaration.js]
var _name;
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
_name = new WeakMap();
