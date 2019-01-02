//// [privateNamesInNestedClasses.ts]
   #foo = "A's #foo";
   #bar = "A's #bar";
   method () {
       class B {
           #foo = "B's #foo";
           bar (a) {
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
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
var _foo;
"use strict";
"A's #foo";
"A's #bar";
method();
{
    var B = /** @class */ (function () {
        function B() {
            _foo.set(this, "B's #foo");
        }
        B.prototype.bar = function (a) {
            _classPrivateFieldGet(a, _foo); // OK, no compile-time error, don't know what `a` is
        };
        B.prototype.baz = function (a) {
            _classPrivateFieldGet(a, _foo); // compile-time error, shadowed
        };
        B.prototype.quux = function (b) {
            _classPrivateFieldGet(b, _foo); // OK
        };
        return B;
    }());
    _foo = new WeakMap();
    var a = new A();
    new B().bar(a);
    new B().baz(a);
    var b = new B();
    new B().quux(b);
}
new A().method();
