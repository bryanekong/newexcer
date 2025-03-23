
describe('Login Flow', () => {
  it('logs in with valid credentials', () => {
    cy.visit('https://www.google.com/');
    cy.get('#email').type('testuser@example.com');
    cy.get('#password').type('password123');
    cy.get('button[type="submit"]').click();
    cy.contains('Welcome, Test User').should('exist');
  });
});
