describe('Navigation', () => {
  it('should open the home page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h1').contains('Welcome to Code and Coffee');
  });
});