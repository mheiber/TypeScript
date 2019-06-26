//// [classExpressionInLoop.ts]
let arr = [];
for (let i = 0; i < 5; ++i) 
    arr.push(class C {
        static hello = () => i;
        [i] = i;
    });


//// [classExpressionInLoop.js]
var _a, _b;
var arr = [];
var _loop_1 = function (i) {
    arr.push((_b = /** @class */ (function () {
            function C() {
                this[_a] = i;
            }
            return C;
        }()),
        _a = i,
        _b.hello = function () { return i; },
        _b));
};
for (var i = 0; i < 5; ++i) {
    _loop_1(i);
}
