describe('Login Test', () => {
  it('log in', () => {
    cy.visit(' https://dsh-poc.assistxvision.ai/login');

    cy.get('input#email')
      .should('have.attr', 'type', 'email')
      .type('waniadmin@yopmail.com');

    cy.get('input#password')
      .should('have.attr', 'type', 'password')
      .type('Password123@');

    cy.get('input#remember_me')
      .check()
      .should('be.checked');

    cy.contains('button', 'Log in').click();

    cy.url().should('not.include', '/login');

    cy.contains('Dashboard').should('exist');

  });
});
