//// [privateNameFieldDeclaration.ts]
class A {
    #name: string;
}


//// [privateNameFieldDeclaration.js]
var _name;
"use strict";
var A = /** @class */ (function () {
    function A() {
        _name.set(this, void 0);
    }
    return A;
}());
_name = new WeakMap();
