//// [privateNamesUnique.ts]
    #foo: number;
}

class B {
    #foo: number;
}

const b: A = new B()      // Error: Property #foo is missing


//// [privateNamesUnique.js]
var _foo;
"use strict";
number;
var B = /** @class */ (function () {
    function B() {
        _foo.set(this, void 0);
    }
    return B;
}());
_foo = new WeakMap();
var b = new B(); // Error: Property #foo is missing
