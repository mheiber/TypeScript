class C {
    foo = 10;
    static bar = 20;
}
(function (C) {
    C.x = 10;
})(C || (C = {}));
