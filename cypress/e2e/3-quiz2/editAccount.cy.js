/// Created by Muhibah Fata Tika
/// Kelompok 9
/// <reference types="cypress" />

import editAccountParam from "../../support/editAccountParam";

const edit = new editAccountParam("testquiztika@gmail.com","quizyukkkkk@gmail.com","Test12345@")

const edit2 = new editAccountParam(null,"testingquiz123@gmail.com","test12345@")

context('Quiz 2 Edit Account With POM', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com')
      .url();

      
      cy.get('a')
      .contains('Sign In')
      .click()
      .url()
    });
    

    it('Edit Account Information', () => {

    cy.get('#email').type(edit.getEmail()); 
    cy.get('#pass').type(edit.getPassword());
    cy.wait(3000);
    cy.get('#send2').click().url();
    cy.wait(2000);
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
  });

  // revert state
  it('Revert State', () => {
    cy.get('#email').type(edit.getNewEmail()); 
    cy.get('#pass').type(edit.getPassword());
    cy.wait(5000);
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

context('Quiz 2 Edit Address With Fixture and Command', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com')
    .url();

    
    cy.get('a')
    .contains('Sign In')
    .click()
    .url()
  });
  
  it('Add New Address',  () => {
    cy.tryLogin(edit2.getNewEmail(),edit2.getPassword());
    cy.wait(5000);
    cy.visit('https://magento.softwaretestingboard.com/customer/address/edit/');

    cy.fixture('editAddress').then((data)=>{
      cy.get('#company').type(data.company);
      cy.get('#telephone').type(data.telephone);
      cy.get('#country') .select('Indonesia');
      cy.get('#street_1').type('Merdeka Street No 1').should('have.value', 'Merdeka Street No 1');
      cy.get('#city') .type('Yogyakarta');
      cy.get('#zip') .type('12345').should('have.value', '12345');
      cy.get('button[data-action="save-address"]').click();
    });
  })

    it('[Negative] Edit Address Required',  () => {
    cy.get('#email').type(edit2.getNewEmail()); 
    cy.get('#pass').type(edit2.getPassword());
    cy.wait(3000);
    cy.get('#send2')
    .click()        
    .url();
    cy.wait(5000);
    cy.visit('https://magento.softwaretestingboard.com/customer/address/edit/');

    cy.fixture('editAddress').then((data)=>{
      cy.get('#company').clear(); 
      cy.get('#company').type(data.company);
      cy.get('button[data-action="save-address"]').click();
    });
  })

  it('[Positive] Edit Address ',  () => {
    cy.get('#email').type(edit2.getNewEmail()); 
    cy.get('#pass').type(edit2.getPassword());
    cy.wait(3000);
    cy.get('#send2')
    .click()        
    .url();
    cy.wait(5000);
    cy.visit('https://magento.softwaretestingboard.com/customer/address/edit/');

    cy.fixture('editAddress').then((data)=>{
      cy.get('#company').type(data.company);
      cy.get('#telephone').type(data.telephone);
      cy.get('#country') .select('Indonesia');
      cy.get('#street_1').clear();
      cy.get('#street_1').type('Cinere Street No 19').should('have.value', 'Cinere Street No 19');
      cy.get('#city') .type('Yogyakarta');
      cy.get('#zip') .type('12345').should('have.value', '12345');
      cy.get('button[data-action="save-address"]').click();
    });
  })

  
  
})
