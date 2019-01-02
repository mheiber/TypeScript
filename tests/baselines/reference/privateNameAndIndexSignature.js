//// [privateNameAndIndexSignature.ts]
    [k: string]: any;
    constructor(message: string) {
        this.#f = 3                 // Error Property '#f' does not exist on type 'A'.
    }
}


//// [privateNameAndIndexSignature.js]
"use strict";
[k, string];
any;
constructor(message, string);
{
    this.#f = 3; // Error Property '#f' does not exist on type 'A'.
}
