// ignore 'filter_ai'
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes("Identifier 'filter_ai' has already been declared")) {
    return false; 
  }
});

describe('template spec', () => {
  it('should log in and perform form input actions', () => {
    cy.visit('https://dsh-poc.assistxvision.ai/login')

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

    cy.get('#filter_ai').select('intrusion');
    cy.get('#start_date').click();
    cy.get('#select2-regional-container').click();
    cy.get('#select2-work_unit-container').click();
    cy.get('#end_date').click();
    cy.get('#end_date').click();
    cy.get('#select2-branch-container > .select2-selection__placeholder').click();
    cy.get('#btnFilter').click();
    cy.get('#chartTabs > :nth-child(2) > .nav-link').click();
  })
})