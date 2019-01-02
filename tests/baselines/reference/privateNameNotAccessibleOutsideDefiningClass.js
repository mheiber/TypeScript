//// [privateNameNotAccessibleOutsideDefiningClass.ts]
    #foo: number = 3;
}

new A().#foo = 4;               // Error


//// [privateNameNotAccessibleOutsideDefiningClass.js]
"use strict";
number = 3;
new A().#foo = 4; // Error
