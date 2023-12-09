# CONTRIBUTING

Contributions are always welcome, no matter how big or small the contribution. Before contributing, please read the [Code of Conduct](COC.md).

## Development

Please follow the instructions in the [Development Guide](DEVELOPMENT.md) to get your local environment up and running.

## Pull Requests

1. Always work off of your own fork.
2. If you've added code that should be tested, add tests.
3. If you've changed the interface, update any/all documentation with the modified usage.
4. Adhere to the instructions inside of the pull request template

## Commit Messages

Please make sure your commits follow semantic commit messaging.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional, but preferred.

### Example

```
feat(tooltip): add hat wobble
^--^^-------^  ^------------^
|   |          |
|   |          +-> Summary in present tense.
|   |
|   +------> Scope of the change (page, component, util, etc.)
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

### Types

- `chore`: Updating packages, scripts, tooling, etc; no production code change.
- `docs`: Changes to the documentation.
- `feat`: New feature for the user, not a new feature for build script.
- `fix`: Bug fix for the user, not a fix to a build script.
- `refactor`: Refactoring production code, eg. renaming a variable.
- `style`: Formatting, missing semi colons, etc; no production code change.
- `test`: Adding missing tests, refactoring tests; no production code change.

### Usage

- chore(package): add Oyster build script
- docs(tooltip): explain hat wobble
- feat(button): add beta sequence
- fix(modal): remove broken confirmation message
- refactor(cards): share logic between 4d3d3d3 and flarhgunnstow
- style(tabs): convert tabs to spaces
- test(table): add column sorting tests

## License

By contributing to this repository, you agree that your contributions will be licensed
under its [MIT](LICENSE) license.
