---
Linter
---

`@ordzaar/standard-linter`

Standard linter for TS projects that do not run with web frameworks. This module also installs `prettier`, `eslint`, `husky` and `lint-staged`.

Lint rules are extended from these packages

| Package                          | Description                                          |
| -------------------------------- | ---------------------------------------------------- |
| @typescript-eslint/parser        | Rules parser for TypeScript.                         |
| eslint-plugin-simple-import-sort | Rules defined for simple import sorting.             |
| prettier                         | Rules defined by prettier to have same code styles   |
| eslint-plugin-unused-imports     | Rules to auto remove unused import                   |
| eslint-plugin-check-file         | Rules to enforce file name checking (off by default) |
