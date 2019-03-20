//// [privateNameSneakyRuntimeException.ts]
// @target es6

function createClass () {
    return class {
        #foo = 3;
        equals(other: any) {
            return this.#foo = other.#foo;
        }
    };
}

const a = new (createClass())();
const b = new (createClass())();

console.log(a.equals(b));     // OK at compile time but will be a runtime error


//// [privateNameSneakyRuntimeException.js]
"use strict";
// @target es6
function createClass() {
    var _fooWeakMap_1, _a;
    return _a = /** @class */ (function () {
            function class_1() {
                _fooWeakMap_1.set(this, 3);
            }
            class_1.prototype.equals = function (other) {
                return this.#foo = other.#foo;
            };
            return class_1;
        }()),
        _fooWeakMap_1 = new WeakMap(),
        _a;
}
var a = new (createClass())();
var b = new (createClass())();
console.log(a.equals(b)); // OK at compile time but will be a runtime error
