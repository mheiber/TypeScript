//// [privateNamesNoAccessibilityModifiers.ts]
    public #foo;         // Error
    private #bar;        // Error
    protected #baz;      // Error
    readonly #qux;       // OK
}


//// [privateNamesNoAccessibilityModifiers.js]
"use strict";
; // Error
; // Error
; // Error
; // OK
