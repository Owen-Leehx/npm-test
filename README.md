# npm-test
publish npm package


[在线文档链接](http://121.37.159.50:9009/)

## usage

## 使用

- Commands
  - **`lerna publish`**: Create a new release of the packages that have been updated. Prompts for a new version and updates all the packages on git and npm
  - [`lerna version`](./commands/version#readme)
  - **`lerna bootstrap`**：Bootstrap the packages in the current Lerna repo. Installing all their dependencies and linking any cross-dependencies.
  - **`lerna list`**:List all of the public packages in the current Lerna repo.
  - **`lerna changed`**:Check which packages have changed since the last release.
  - **`lerna diff`**:Diff all packages or a single package since the last release.
  - [`lerna exec`](./commands/exec#readme)
  - **`lerna run`**:Run an npm script in each package that contains that script.
  - **`lerna init`**：Create a new lerna repo or upgrade an existing repo to the current version of Lerna.
  - [`lerna add`](./commands/add#readme)
  - [`lerna clean`](./commands/clean#readme)
  - **`lerna import`**：Import the package in the local path `<pathToRepo>` into `packages/<directory-name>` with commit history.
  - [`lerna link`](./commands/link#readme)
  - [`lerna create`](./commands/create#readme)
  - [`lerna info`](./commands/info#readme)

# documents

- [lerna](https://github.com/lerna/lerna)
- [verdaccio](https://verdaccio.org/docs/en/what-is-verdaccio)
- [nrm](https://www.npmjs.com/package/nrm)
