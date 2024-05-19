describe('template spec', () => {
  it('Login akun', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel>.header>.authorization-link>a').click()
    cy.get('#email').type('zikuzi@gmail.com')
    cy.get('#pass').type('123-abcd')
    cy.get('button.action.login.primary#send2[type="submit"]').click();
  })

  it('should not allow adding product to cart without selecting options', () => {
        // Visit the product page
    cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html');
    // Try to add the product to the cart without selecting required options
    cy.get('#product-addtocart-button').click();
    // Verify that the error message is displayed
    cy.get('.mage-error')
        .should('be.visible')
        .and('contain', 'This is a required field.');
    // Verify that the cart is still empty
    cy.get('.minicart-wrapper').within(() => {
        cy.get('.counter-number').should('contain', '0');
    });
   })

  it('should choose a product', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    // Select the first product on the homepage
    cy.get('.product-item-info').first().within(() => {
      cy.get('.product-item-link').click();   })
    // Add the product to the cart
    cy.get('#option-label-size-143-item-167').click()
    cy.get('#option-label-color-93-item-57').click()
    cy.get('#product-addtocart-button').click();
    // Verify the product was added to the cart
    cy.get('.message-success > div').should('contain', 'You added')
  
    // Go to the shopping cart page
    cy.get('.showcart').click();
    cy.get('a.viewcart').click();

    // Update the quantity of the first item in the cart
    cy.get('input.input-text.qty').first().clear().type('2');
    cy.get('.update').click();

    // Verify the quantity was updated
    cy.get('input.input-text.qty').first().should('have.value', '2');
  })
  it('Negative Test Case for Updating Cart', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    // Select the first product on the homepage
    cy.get('.product-item-info').first().within(() => {
      cy.get('.product-item-link').click();   })
    // Add the product to the cart
    cy.get('#option-label-size-143-item-167').click()
    cy.get('#option-label-color-93-item-57').click()
    cy.get('#product-addtocart-button').click();
    // Verify the product was added to the cart
    cy.get('.message-success > div').should('contain', 'You added')
  
    // Go to the shopping cart page
    cy.get('.showcart').click();
    cy.get('a.viewcart').click();
    // Enter zero quantity least 1.');
    cy.get('input.input-text.qty').first().clear().type('0');
    cy.get('[data-role="update-cart-item"]').first().click();
    cy.get('.message-error').should('be.visible').and('contain', 'Quantity must be at least 1.');
    
  });

})