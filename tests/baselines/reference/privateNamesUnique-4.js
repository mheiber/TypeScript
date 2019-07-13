//// [privateNamesUnique-4.ts]
class A {
    #foo = 1;
    static #foo = true; // error (duplicate)
                        // because static and instance private names
                        // share the same lexical scope
                        // https://tc39.es/proposal-class-fields/#prod-ClassBody
}


//// [privateNamesUnique-4.js]
var A = /** @class */ (function () {
    function A() {
        _foo_1.set(this, 1);
        // because static and instance private names
        // share the same lexical scope
        // https://tc39.es/proposal-class-fields/#prod-ClassBody
    }
    var _foo, _foo_1;
    _foo = new WeakMap(), _foo_1 = new WeakMap();
    _foo_1.set(A, true); // error (duplicate)
    return A;
}());
