describe('checkout', () => {
    it('Positif.Proceed to Checkout 1', () => {
      cy.visit('https://magento.softwaretestingboard.com/');
      cy.contains("Sign In")
        .click()
      cy.get('#email')
        .type('arif@gmail.com'); 
      cy.get('#pass')
        .type('Gwhaha636@');
      cy.get('button.action.login.primary#send2[type="submit"]')
        .click();
      cy.get('#ui-id-5')
        .click();
      cy.get('#maincontent > div.columns > div.sidebar.sidebar-main > div.widget.block.block-static-block > div > ul:nth-child(2) > li:nth-child(2) > a')
        .click();
        cy.wait(1000);
      cy.get('#maincontent > div.columns > div.column.main > div.products.wrapper.grid.products-grid > ol > li:nth-child(4) > div')
        .click();
        cy.wait(1000);
      cy.get('#option-label-color-93-item-53')
        .click();
        cy.wait(1000);
      cy.get('#qty')
        .type('{backspace}4');
        cy.wait(1000);
        cy.get("#option-label-size-143-item-169")
        .click();
         cy.wait(1000);
      cy.get('#product-addtocart-button')
        .click();
        cy.wait(10000)
        cy.get('body > div.page-wrapper > header > div.header.content > div.minicart-wrapper').click();
        cy.wait(10000)
        
 
    })



    it('Positif.Showcart select to payment', () => {
      //  cy.visit('https://magento.softwaretestingboard.com/');
      cy.visit('https://magento.softwaretestingboard.com/');
      cy.contains("Sign In")
        .click()
      cy.get('#email')
        .type('arif@gmail.com'); 
      cy.get('#pass')
        .type('Gwhaha636@');
      cy.get('button.action.login.primary#send2[type="submit"]')
        .click();
        cy.wait(10000)
        cy.get('body > div.page-wrapper > header > div.header.content > div.minicart-wrapper > a').click();
       // cy.get('body > div.page-wrapper > header > div.header.content > div.minicart-wrapper > a > span.counter.qty > span.counter-number').click();
        cy.wait(1000)
        cy.get('#top-cart-btn-checkout').click();
        cy.wait(3000)
        cy.get('#shipping-method-buttons-container > div > button').click();
        cy.get('#checkout-payment-method-load > div > div > div.payment-method._active > div.payment-method-content > div.actions-toolbar > div > button').click()
        cy.contains("Thank you for your purchase!").should('have.text', "Thank you for your purchase!");
        
     /*   cy.get('#shipping-new-address-form > div:nth-child(3)').type('asal aja');
        cy.get('#shipping-new-address-form > fieldset > div > div.field._required').type('alamatnya aja');
        cy.get('#shipping-new-address-form > div:nth-child(5)').type('Jakarta');
       // cy.get('#shipping-new-address-form > div:nth-child(6)').click();
        cy.get('#shipping-new-address-form > div:nth-child(8)').type('10203');
        cy.get('#shipping-new-address-form > div:nth-child(10)').type('083899482919');
        cy.get('#checkout-shipping-method-load > table > tbody > tr:nth-child(1) > td:nth-child(1) > input').click()
        cy.wait(1000);
        cy.get('#shipping-new-address-form > div:nth-child(6) > div').click();  
        cy.wait(1000);
        cy.get('#shipping-method-buttons-container > div > button').type('10203'); */
      })

      

      it('Negatif.Data Alamat Tidak Lengkap', () => {
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.contains("Sign In")
          .click()
        cy.get('#email')
          .type('arifke2@gmail.com'); 
        cy.get('#pass')
          .type('Gwhaha636@');
        cy.get('button.action.login.primary#send2[type="submit"]')
          .click();
        cy.get('#ui-id-5')
          .click();
        cy.get('#maincontent > div.columns > div.sidebar.sidebar-main > div.widget.block.block-static-block > div > ul:nth-child(2) > li:nth-child(2) > a')
          .click();
          cy.wait(1000);
        cy.get('#maincontent > div.columns > div.column.main > div.products.wrapper.grid.products-grid > ol > li:nth-child(4) > div')
          .click();
          cy.wait(1000);
        cy.get('#option-label-color-93-item-53')
          .click();
          cy.wait(1000);
        cy.get('#qty')
          .type('{backspace}4');
          cy.wait(1000);
          cy.get("#option-label-size-143-item-169")
          .click();
           cy.wait(1000);
        cy.get('#product-addtocart-button')
          .click();
          cy.wait(5000);
          cy.get('body > div.page-wrapper > header > div.header.content > div.minicart-wrapper').click();
          cy.wait(5000);
        cy.get('#top-cart-btn-checkout').click();
        cy.wait(5000);
        cy.get('#shipping-new-address-form > div:nth-child(3)').type('asal aja');
        cy.get('#shipping-new-address-form > fieldset > div > div.field._required').type('alamatnya aja');
        cy.get('#shipping-new-address-form > div:nth-child(5)').type('Jakarta');
        cy.get('#shipping-method-buttons-container > div > button').click();
        cy.get('#co-shipping-method-form > div.message.notice').should('contain.text', 'The shipping method is missing. Select the shipping method and try again.');

        
        

          
   
      })

  
  })