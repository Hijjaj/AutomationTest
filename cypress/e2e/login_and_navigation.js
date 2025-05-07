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


    /* ==== Generated with Cypress Studio ==== */
    cy.get('.sidenav-toggler-inner > :nth-child(3)').click();
    cy.get('#submenu-dashboard > :nth-child(2) > .nav-link').click();
    cy.get('.sidenav-toggler-inner > :nth-child(1)').click();
    cy.get('#submenu-dashboard > :nth-child(3) > .nav-link').click();
    cy.get('.sidenav-toggler-inner').click();
    cy.get('#submenu-dashboard > :nth-child(4) > .nav-link').click();
    cy.get('.sidenav-toggler-inner').click();
    cy.get(':nth-child(2) > .nav-link-header').click();
    cy.get('#dashboardsExamples > :nth-child(1) > .nav-link').click();
    cy.get('.sidenav-toggler-inner').click();
    cy.get('#dashboardsExamples > :nth-child(2) > .nav-link').click();
    cy.get('.sidenav-toggler-inner').click();
    cy.get('#dashboardsExamples > :nth-child(3) > .nav-link').click();
    cy.get('.sidenav-toggler-inner > :nth-child(1)').click();
    cy.get('#dashboardsExamples > :nth-child(4) > .nav-link').click();
    cy.get('.sidenav-toggler-inner').click();
    cy.get('#dashboardsExamples > :nth-child(5) > .nav-link').click();
    cy.get('.sidenav-toggler-inner').click();
    cy.get('#dashboardsExamples > :nth-child(6) > .nav-link').click();
    cy.get('.sidenav-toggler-inner').click();
    cy.get('#dashboardsExamples > :nth-child(7) > .nav-link').click();
    cy.get('.sidenav-toggler-inner > :nth-child(2)').click();
    cy.get('.navbar-nav > :nth-child(4) > .nav-link').click();
    cy.get('.sidenav-toggler-inner').click();
    cy.get('.navbar-nav > :nth-child(5) > .nav-link').click();
    cy.get('.sidenav-toggler-inner').click();
    cy.get('.navbar-nav > :nth-child(6) > .nav-link').click();
    cy.get('.sidenav-toggler-inner').click();
    cy.get('.navbar-nav > :nth-child(7) > .nav-link').click();
    cy.get('.sidenav-toggler-inner').click();
    cy.get(':nth-child(8) > .nav-link').click();
    cy.get('.sidenav-toggler-inner').click();
    cy.get(':nth-child(9) > .nav-link').click();
    /* ==== End Cypress Studio ==== */
  })
})