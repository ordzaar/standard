module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "airbnb-typescript/base",
    "prettier",
  ],
  plugins: ["simple-import-sort", "check-file", "unused-imports", "prettier"],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/no-floating-promises": "error",
    "no-console": "error",

    /**
     * Separates out the `no-unused-vars` rule depending on it being an import statement in the AST and providing
     * an auto-fix rule to remove the nodes if they are imports.
     * With this, we can now target test files with `'unused-imports/no-unused-vars': 'off'` for testing DX.
     */
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],

    // import sort
    "sort-imports": "off",
    "import/order": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  overrides: [
    {
      files: ["**/*.{test,spec,unit,i9n,e2e}.{js,ts}"],
      rules: {
        "@typescript-eslint/no-floating-promises": 0,
        /**
         * To cater for complex test scenarios, where we need to scope blocks. This allows variables to be reused,
         * so we don't have to create `const getObject` and `const updatedObject` for each scenario.
         * We can just use `const object`.
         */
        "no-lone-blocks": "off",

        /**
         * Separates out the `no-unused-vars` rule depending on it being an import statement in the AST and providing
         * an auto-fix rule to remove the nodes if they are imports.
         * With this, we can now target test files with `'unused-imports/no-unused-vars': 'off'` for testing DX.
         */
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": "off",
      },
    },
  ],
}
