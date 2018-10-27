describe("computed scope is correct for a computed field defined in a loop", () => {
    it("return (es5)", async () => {
        const result = evaluator.evaluateTypeScript(`
        const classes = [];
        for (let i = 0; i <= 10; ++i) {
            classes.push(
                class A {
                    [i] = "my property";
                }
            );
        }
        export const output = classes.map(Object.keys)
        `);

        result.main();
        assert.deepEqual(result.output, [
            ['1'],
            ['2'],
            ['3'],
            ['4'],
            ['5'],
            ['6'],
            ['7'],
            ['8'],
            ['9'],
            ['10'],
            ['bananananananan']
        ]);
    });
});