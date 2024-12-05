module.exports = {
  extends: ["next/core-web-vitals", "airbnb", "airbnb-typescript", "prettier"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["simple-import-sort", "prettier", "unused-imports"],
  rules: {
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
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "unused-imports/no-unused-imports": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx"],
      },
    ],
    "react/prop-types": "off",
    "import/extensions": "off",
    "no-undef": "warn",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "import/no-extraneous-dependencies": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    curly: ["error", "all"],
    "object-curly-spacing": ["error", "always"],
    "nonblock-statement-body-position": ["error", "below"],
    "sort-imports": "off",
    "import/order": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/prefer-default-export": "off",
  },
  overrides: [
    {
      files: ["*.tsx", "*.jsx", "*.ts", "*.js"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // External: react, without @ prefix (nextjs), with @ prefix (@ordzaar, @radix-ui, @very-long-package)
              // Ensures that these are really external packages by excluding:
              // content, api, contexts, components, hooks, providers, store, utils, public, types
              // e.g. content/foo and @content/foo is excluded from the group, but not contents/foo and @contents/foo
              [
                "^react",
                "^(?!content\b|api\b|contexts\b|components\b|hooks\b|providers\b|store\b|utils\b|public\b|types\b|app\b)\\w+",
                "^@(?!(content|api|contexts|components|hooks|providers|store|utils|public|types|app)\\b)(\\w+|((?:\\w+-)+\\w+))\\b(/.*|$)",
              ],
              // Internal packages: @/file, contexts/file, @contexts/file
              ["^(@|content|api|contexts|components|hooks|providers|store|utils|public|types|app|@\\w+)(/.*|$)"],
              // Side effect imports.
              ["^\\u0000"],
              // Parent imports. Put `..` last.
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              // Other relative imports. Put same-folder imports and `.` last.
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              // Style imports.
              ["^.+\\.?(css)$"],
            ],
          },
        ],
      },
    },
  ],
};
