describe('example.spec.js', () => {
  it('should load the application', () => {
    cy.get('#app').then((element) => expect(element).to.exist);
  });
});
