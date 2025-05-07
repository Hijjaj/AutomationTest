// ignore 'filter_ai'
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes("Identifier 'filter_ai' has already been declared")) {
    return false; 
  }
});

describe('Login Test and Form Interaction', () => {
  it('should log in and perform form input actions', () => {
    cy.visit('https://dsh-poc.assistxvision.ai/login');

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

    //add and delete cctv
    cy.get(':nth-child(1) > .text-decoration-none > .card > .card-body > .row > .col-4 > .icon > .bg-svg-white').click();
    cy.get('#regional').select('test1');
    cy.get('#branch').select('test1');
    cy.get(':nth-child(3) > .card-header').click();
    cy.get('#work_unit').select('test1');
    cy.get('#filter_status').select('Online');
    cy.get(':nth-child(2) > .btn').click();
    cy.get('#select2-work_unit-container').click();
    cy.get('.select2-results__option').contains('test1').click();
    cy.get('.select2-results__option').should('not.exist');
    cy.get('#name').clear().type('test1');
    cy.get('#cctv_id').clear().type('00001');
    cy.get('#ip_address').clear().type('111.111.111.111');
    cy.get('.btn').click();
    cy.get('.btn-danger > .fas').click();
    cy.get('#btnDeleteConfirm').click();
  });
});
