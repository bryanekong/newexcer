
describe('Login Flow', () => {
  it('logs in with valid credentials', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('#email').type('testuser@example.com');
    cy.get('#password').type('password123');
    cy.get('button[type="submit"]').click();
    cy.contains('Welcome, Test User').should('exist');
  });
});
