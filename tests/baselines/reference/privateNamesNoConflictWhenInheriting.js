//// [privateNamesNoConflictWhenInheriting.ts]
    #foo: number;
}

class B extends A {
    #foo: string;    // OK: private names are unique to each class
}

const b: A = new B() // OK


//// [privateNamesNoConflictWhenInheriting.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _foo;
"use strict";
number;
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _foo.set(_this, void 0); // OK: private names are unique to each class
        return _this;
    }
    return B;
}(A));
_foo = new WeakMap();
var b = new B(); // OK
