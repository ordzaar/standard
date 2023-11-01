# Standard

Standard is a collection of tools and services for building scalable JS/TS apps on different platforms.

`@ordzaar/standard-*` aims to provide standard tooling and configurations for different platforms. Most platform
specific library (e.g, Next.js, Electron, Tauri etc.) has its own set of rules to follow. `@ordzaar/standard` aims to
solve this problem so that contributors can just focus on development.

## Packages

All packages follow the same format `@ordzaar/standard-(platform)-*`. All dependencies are published
with the same version tag.

### Web

| Package                      | Type        | Description                                                                        |
| ---------------------------- | ----------- | ---------------------------------------------------------------------------------- |
| @ordzaar/standard-web        | Boilerplate | Boilerplate for easier scaffolding of web projects. (Next.js + React + TypeScript) |
| @ordzaar/standard-web-linter | Linting     | Standardized eslint and prettier config for Web based on Next.js rules.            |

### Prettier

| Package                    | Type   | Description                                              |
| -------------------------- | ------ | -------------------------------------------------------- |
| @ordzaar/standard-prettier | Linter | Standardized eslint and prettier config for TS projects. |

### API

| Package                       | Type        | Description                                                                          |
| ----------------------------- | ----------- | ------------------------------------------------------------------------------------ |
| @ordzaar/standard-api-fastify | Boilerplate | Boilerplate for easier scaffolding of API projects. (Nest.js + Fastify + TypeScript) |

### TypeScript

| Package                      | Type    | Description                    |
| ---------------------------- | ------- | ------------------------------ |
| @ordzaar/standard-typescript | Library | Standard TypeScript versioning |

### Renovate

Renovate configuration files are provided on this package. Select depending on which platform you need.

```json
{
  "extends": ["github>ordzaar/standard//renovate-config/web"]
}
```
