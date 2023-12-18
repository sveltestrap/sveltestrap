import { defineConfig } from 'cypress';
import { setupNodeEvents } from './tests/cypress/plugins';

export default defineConfig({
  fixturesFolder: 'tests/cypress/fixtures',
  screenshotsFolder: 'tests/cypress/artifacts/screenshots',
  videosFolder: 'tests/cypress/artifacts/videos',
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 50000,
  requestTimeout: 50000,
  responseTimeout: 50000,
  chromeWebSecurity: false,
  viewportHeight: 768,
  viewportWidth: 1024,
  retries: {
    runMode: 10,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      return setupNodeEvents(on, config);
    },
    specPattern: 'tests/cypress/integration/**/*.cy.{js,ts}',
    supportFile: 'tests/cypress/support/index.js',
  }
});
