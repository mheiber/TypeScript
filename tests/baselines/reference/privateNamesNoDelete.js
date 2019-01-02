//// [privateNamesNoDelete.ts]
    #v = 1;
    constructor() {
        delete this.#v; // Error: The operand of a delete operator cannot be a private name.
    }
}


//// [privateNamesNoDelete.js]
"use strict";
1;
constructor();
{
    delete this.#v; // Error: The operand of a delete operator cannot be a private name.
}
