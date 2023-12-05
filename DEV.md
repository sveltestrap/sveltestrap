## TLDR;

```vim
> npm i

> npx husky install

> chmod +x .husky/post-merge && chmod +x .husky/pre-commit && cp .husky/post-merge .git/hooks

> npm start
```

## Setting up development environment

1. Install dependencies

   ```vim
   > npm i
   ```

2. Install `husky` hooks

   ```vim
   > npx husky install
   ```

3. Make sure husky scripts are executable and copied to .git/hooks

   ```vim
   > chmod +x .husky/post-merge && chmod +x .husky/pre-commit && cp .husky/post-merge .git/hooks
   ```

4. Start the component dev server and the document server

    ```vim
    > npm start
    ```

5. Happy coding! You're changes will be automatically rebuilt and reflected immediately on the docs.

## Testing

Running either of these commands will execute all unit tests.

| Command                          | Notes                                                |
| -------------------------------- | ---------------------------------------------------- |
| `npm test`                       | Single run with no coverage report                   |
| `npm test:watch`                 | Watches for changes                                  |
| `npm test:coverage`              | Executes tests and launches a coverage report        |

Run all tests
```vim
> npm test
```

Run a specific test
```vim
> npm test [path-to-test-file]
```

Run all tests and generate a code coverage report
```vim
> npm test:coverage
```

## Deploying Documentation

Run the deploy command to automaically build the docs source and push it to `gh-pages`.

```vim
> npm run deploy
```

## License

[MIT](LICENSE)
