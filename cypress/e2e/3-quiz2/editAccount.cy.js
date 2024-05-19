
/// <reference types="cypress" />

import editAccountParam from "../../support/editAccountParam";

const edit = new editAccountParam()

context('Quiz 2 Edit Account', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com')
      .url();

      
      cy.get('a')
      .contains('Sign In')
      .click()
      .url()
    });

    edit.setEmail("muhibahftika123@gmail.com")
    edit.setNewEmail("admin123@gmail.com")
    edit.setPassword("Greget12345@")

    it('Edit Account Information', () => {

    cy.get('#email').type(edit.getEmail()); 
    cy.get('#pass').type(edit.getPassword());
    cy.get('#send2')
    .click()        
    .url();
    cy.wait(5000);
    cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/');
    cy.contains('label', 'Change Email').click();

    cy.get('#email').clear(); 
    cy.get('#email').type(edit.getNewEmail()); 

    cy.get('#current-password').type(edit.getPassword());
    cy.contains('button', 'Save').click();

    cy.log("Edit Success !")

  });


  it('Test New Credentials',  () => {
    cy.get('#email').type(edit.getNewEmail()); 
    cy.get('#pass').type(edit.getPassword());
    cy.get('#send2')
    .click()        
    .url();
    cy.log("Login Success !")
  })

  // revert state
  it('Revert State', () => {
    cy.get('#email').type(edit.getNewEmail()); 
    cy.get('#pass').type(edit.getPassword());
    cy.get('#send2')
    .click()        
    .url();
    cy.wait(5000);
    cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/');
    cy.contains('label', 'Change Email').click();

    cy.get('#email').clear(); 
    cy.get('#email').type(edit.getEmail()); 

    cy.get('#current-password').type(edit.getPassword());
    cy.contains('button', 'Save').click();

    cy.log("Revert Success !")
  });

})