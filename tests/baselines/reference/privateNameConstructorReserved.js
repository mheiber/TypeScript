//// [privateNameConstructorReserved.ts]
    #constructor() {}      // Error: `#constructor` is a reserved word.
}


//// [privateNameConstructorReserved.js]
"use strict";
(function () { }); // Error: `#constructor` is a reserved word.
