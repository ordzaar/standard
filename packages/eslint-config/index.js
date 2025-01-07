module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  plugins: ["simple-import-sort", "check-file", "unused-imports", "prettier"],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/no-floating-promises": "error",
    "no-console": "error",
    curly: "error",
    "max-classes-per-file": "off",
    "class-methods-use-this": "off",
    "no-await-in-loop": "off",
    // functions and classes are going to be hoisted in runtime, but don't let var be used before declaration
    "@typescript-eslint/no-use-before-define": ["error", { functions: false, classes: false, variables: true }],

    // Fix airbnb-typescript/base rule to allow leading underscores for unused vars
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
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

    // To be overridden by each project
    "check-file/filename-naming-convention": "off",
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
};
