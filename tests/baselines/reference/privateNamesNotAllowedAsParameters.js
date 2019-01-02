//// [privateNamesNotAllowedAsParameters.ts]
    setFoo(#foo: string) {}
}


//// [privateNamesNotAllowedAsParameters.js]
"use strict";
setFoo(string);
{ }
