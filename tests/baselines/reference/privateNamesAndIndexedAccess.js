//// [privateNamesAndIndexedAccess.ts]
class C {
    foo = 3;
    #bar = 3;
    constructor () {
        const ok: C["foo"] = 3;
        // not supported yet, could support in future:
        const badForNow: C[#bar] = 3;   // Error
        // will never use this syntax, already taken:
        const badAlways: C["#bar"] = 3; // Error
    }
}


//// [privateNamesAndIndexedAccess.js]
var _barWeakMap_1, _barWeakMap_2;
"use strict";
class C {
    constructor() {
        this.foo = 3;
        _barWeakMap_2.set(this, 3);
        _barWeakMap_2.set(this, void 0);
        // will never use this syntax, already taken:
        this.badAlways = 3; // Error
        const ok = 3;
        // not supported yet, could support in future:
        const badForNow;
    }
}
_barWeakMap_1 = new WeakMap(), _barWeakMap_2 = new WeakMap();
