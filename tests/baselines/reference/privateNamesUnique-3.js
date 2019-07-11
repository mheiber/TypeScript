//// [privateNamesUnique-3.ts]
class Parent {
    #x;
    copy(child: Child) {
        this.#x = child.#x; // OK (Sub has Super's #x)
    }
}

class Child extends Parent {
    #x; // OK (Child #x lexically shadows Super's #x)
}

const parent = new Parent();
const child = new Child();
parent.copy(child); // OK


export default 3;


//// [privateNamesUnique-3.js]
"use strict";
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
var _classPrivateFieldGet = function (receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); };
var _classPrivateFieldSet = function (receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } privateMap.set(receiver, value); return value; };
var _x, _x_1;
exports.__esModule = true;
var Parent = /** @class */ (function () {
    function Parent() {
        _x.set(this, void 0);
    }
    Parent.prototype.copy = function (child) {
        _classPrivateFieldSet(this, _x, _classPrivateFieldGet(child, _x)); // OK (Sub has Super's #x)
    };
    return Parent;
}());
_x = new WeakMap();
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _x_1.set(_this, void 0); // OK (Child #x lexically shadows Super's #x)
        return _this;
    }
    return Child;
}(Parent));
_x_1 = new WeakMap();
var parent = new Parent();
var child = new Child();
parent.copy(child); // OK
exports["default"] = 3;
