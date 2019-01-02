//// [privateNamesInGenericClasses.ts]
  #foo: T;
  bar(x: C<T>) { return x.#foo; }          // OK
  baz(x: C<number>) { return x.#foo; }     // OK
  quux(x: C<string>) { return x.#foo; }    // OK
}

declare let a: C<number>;
declare let b: C<string>;
a.#foo;                                   // OK
a = b;                                    // Error
b = a;                                    // Error


//// [privateNamesInGenericClasses.js]
"use strict";
T;
bar(x, C(), { "return": x.#foo } // OK
, // OK
baz(x, C(), { "return": x.#foo } // OK
, // OK
quux(x, C(), { "return": x.#foo } // OK
, declare, let, a, C())));
a.#foo; // OK
a = b; // Error
b = a; // Error
