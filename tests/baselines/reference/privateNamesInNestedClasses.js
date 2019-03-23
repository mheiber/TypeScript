//// [privateNamesInNestedClasses.ts]
// @target es6

class A {
   #foo = "A's #foo";
   #bar = "A's #bar";
   method () {
       class B {
           #foo = "B's #foo";
           bar (a: any) {
               a.#foo; // OK, no compile-time error, don't know what `a` is
           }
           baz (a: A) {
               a.#foo; // compile-time error, shadowed
           }
           quux (b: B) {
               b.#foo; // OK
           }
       }
       const a = new A();
       new B().bar(a);
       new B().baz(a);
       const b = new B();
       new B().quux(b);
   }
}

new A().method();

//// [privateNamesInNestedClasses.js]
// @target es6
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
var _fooWeakMap_1, _barWeakMap_1;
"use strict";
var A = /** @class */ (function () {
    function A() {
        _fooWeakMap_1.set(this, "A's #foo");
        _barWeakMap_1.set(this, "A's #bar");
    }
    A.prototype.method = function () {
        var _fooWeakMap_2;
        var B = /** @class */ (function () {
            function B() {
                _fooWeakMap_2.set(this, "B's #foo");
            }
            B.prototype.bar = function (a) {
                _classPrivateFieldGet(a, _fooWeakMap_2); // OK, no compile-time error, don't know what `a` is
            };
            B.prototype.baz = function (a) {
                _classPrivateFieldGet(a, _fooWeakMap_2); // compile-time error, shadowed
            };
            B.prototype.quux = function (b) {
                _classPrivateFieldGet(b, _fooWeakMap_2); // OK
            };
            return B;
        }());
        _fooWeakMap_2 = new WeakMap();
        var a = new A();
        new B().bar(a);
        new B().baz(a);
        var b = new B();
        new B().quux(b);
    };
    return A;
}());
_fooWeakMap_1 = new WeakMap(), _barWeakMap_1 = new WeakMap();
new A().method();
