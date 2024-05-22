// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('tryLogin', (email, password) => {
    cy.visit('https://magento.softwaretestingboard.com')
    cy.get('a')
    .contains('Sign In')
    .click()
    .url()

    cy.get('#email').type(email)
    cy.get('#pass').type(password)
    cy.wait(5000);
    cy.get('#send2')
    .click()        
    .url();
  })

Cypress.Commands.add('createAccount', (firstNm, lastNm, email, pass, confPass)=>{
  cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
  cy.get('#firstname').clear().type(firstNm)
  cy.get('#lastname').clear().type(lastNm)
  cy.get('#email_address').clear().type(email)
  cy.get('#password').clear().type(pass)
  cy.get('#password-confirmation').clear().type(confPass)
  cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
  cy.get('.message-success > div').should('contain.text','Thank you for registering with Main Website Store.')
})
