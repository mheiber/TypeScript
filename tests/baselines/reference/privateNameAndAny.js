//// [privateNameAndAny.ts]
// @target es6

class A {
    #foo = true; 
    method(thing: any) {
        thing.#foo; // OK
        thing.#bar; // OK: we do not (yet) check that #foo is in an ancestor class (but we could)
    }
};


//// [privateNameAndAny.js]
// @target es6
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
var _foo;
"use strict";
var A = /** @class */ (function () {
    function A() {
        _foo.set(this, true);
    }
    A.prototype.method = function (thing) {
        _classPrivateFieldGet(thing, _foo); // OK
        thing.bar; // OK: we do not (yet) check that #foo is in an ancestor class (but we could)
    };
    return A;
}());
_foo = new WeakMap();
;
