## TLDR;
```vim
> npm install -g pnpm

> pnpm i

> pnpm dlx husky install

> chmod +x .husky/post-merge && chmod +x .husky/pre-commit && cp .husky/post-merge .git/hooks

> pnpm start
```

## Getting Started

1. Install PNPM
   ```vim
   > npm install -g pnpm
   ```

2. Install `husky` hooks

   ```vim
   > pnpm dlx husky install
   ```

3. Make sure husky scripts are executable and copied to .git/hooks

   ```vim
   > chmod +x .husky/post-merge && chmod +x .husky/pre-commit && cp .husky/post-merge .git/hooks
   ```

4. Install dependencies

   ```vim
   > pnpm i
   ```

5. Start the local development server to launch the docs

    ```vim
    > pnpm start
    ```

5. Happy coding! You're changes will be automatically rebuilt and reflected immediately on the docs.

## Testing

Running either of these commands will execute all unit tests.

| Command                           | Notes                                                |
| --------------------------------- | ---------------------------------------------------- |
| `pnpm test`                       | Single run with no coverage report                   |
| `pnpm test:watch`                 | Watches for changes                                  |
| `pnpm test:coverage`              | Executes tests and launches a coverage report        |

Run all tests
```vim
> pnpm test
```

Run a specific test
```vim
> pnpm test [path-to-test-file]
```

Run all tests and generate a code coverage report
```vim
> pnpm test:coverage
```

## Deploying Documentation

Run the deploy command to automaically build the docs source and push it to `gh-pages`.

```vim
> pnpm run deploy
```

## License

[MIT](LICENSE)
