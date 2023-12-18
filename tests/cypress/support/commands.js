import '@testing-library/cypress/add-commands';

Cypress.Commands.add('initializeApp', () => {
  cy.visit('http://localhost:3000');
});

Cypress.Commands.add('getByTestId', (selector, ...args) => {
  return cy.get(`[data-testid=${selector}]`, ...args)
});
