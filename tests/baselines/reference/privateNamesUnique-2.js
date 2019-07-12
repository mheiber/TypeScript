//// [tests/cases/conformance/classes/members/privateNames/privateNamesUnique-2.ts] ////

//// [a.ts]
export class Foo {
    #x;
    copy(other: import("./b").Foo) {
        other.#x; // error
    }
}
    
//// [b.ts]
export class Foo {
    #x;
}

//// [main.ts]
import { Foo as A } from "./a";
import { Foo as B } from "./b";

const a = new A();
const b = new B();
a.copy(b); // error


//// [b.js]
"use strict";
var _x;
exports.__esModule = true;
var Foo = /** @class */ (function () {
    function Foo() {
        _x.set(this, void 0);
    }
    return Foo;
}());
exports.Foo = Foo;
_x = new WeakMap();
//// [a.js]
"use strict";
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
var _x;
exports.__esModule = true;
var Foo = /** @class */ (function () {
    function Foo() {
        _x.set(this, void 0);
    }
    Foo.prototype.copy = function (other) {
        _classPrivateFieldGet(other, _x); // error
    };
    return Foo;
}());
exports.Foo = Foo;
_x = new WeakMap();
//// [main.js]
"use strict";
exports.__esModule = true;
var a_1 = require("./a");
var b_1 = require("./b");
var a = new a_1.Foo();
var b = new b_1.Foo();
a.copy(b); // error
