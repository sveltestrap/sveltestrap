import path from 'path';

import './commands';

const fileName = path.basename(Cypress.spec.name, path.extname(Cypress.spec.name));
const videosFolder = Cypress.config('videosFolder').replace(/\\/g, '/');
const artifacts = path.join(videosFolder, '../cdplogs');

beforeEach(() => {
  cy.log('Loading application...');
  cy.viewport(1680, 1050);
  cy.initializeApp();
});

afterEach(() => {
  cy.task('storeConsoleLogs', path.join(artifacts, `${fileName}.log`));
  cy.task('storeNetworkLogs', path.join(artifacts, `${fileName}.log`));
});

Cypress.on('uncaught:exception', () => {
  return false
});
