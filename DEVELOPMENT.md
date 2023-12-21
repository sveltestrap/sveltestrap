## TLDR;
```vim
> npm install -g pnpm

> pnpm i

> pnpm dlx husky install

> chmod +x .husky/post-merge && chmod +x .husky/pre-commit && cp .husky/post-merge .git/hooks

> pnpm start
```

## Getting Started

1. Clone your personal fork and define remote source

   ```vim
   > git clone git@github.com:<username>/sveltestrap.git
   > cd sveltestrap
   > git remote add upstream git@github.com:sveltestrap/sveltestrap.git
   ```

2. Install PNPM
   ```vim
   > npm install -g pnpm
   ```

3. Install `husky` hooks

   ```vim
   > pnpm dlx husky install
   ```

4. Make sure husky scripts are executable and copied to .git/hooks

   ```vim
   > chmod +x .husky/post-merge && chmod +x .husky/pre-commit && cp .husky/post-merge .git/hooks
   ```

5. Install dependencies

   ```vim
   > pnpm i
   ```

6. Start the local development server to launch the docs

    ```vim
    > pnpm start
    ```

7. Happy coding! You're changes will be automatically rebuilt and reflected immediately on the docs.

## Testing

Running either of these commands will execute all unit tests.

| Command                           | Notes                                                |
| --------------------------------- | ---------------------------------------------------- |
| `pnpm test`                       | Single run with no coverage report                   |
| `pnpm test:watch`                 | Watches for changes                                  |
| `pnpm test:coverage`              | Executes tests and launches a coverage report        |
| `pnpm test:integration`           | Executes integration tests                           |
| `pnpm test:integration:report`    | Executes integration tests and launchesreport        |

### Unit Tests
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

### Integration Tests
Run all tests
```vim
> pnpm test:integration
```

Run all tests and generate a report
```vim
> pnpm test:integration:report
```

## License

[MIT](LICENSE)
