import LoginPage from '../../support/login'
describe('Verify Login Functionality', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com')

    })

    // describe('Verify Login Functionality', () => {
    it('passes - Success Login', () => {
        // cy.visit('https://magento.softwaretestingboard.com');
        cy.fixture('login').then((data) => {
            cy.contains("Sign In").click()
            LoginPage.fillEmail(data.email)
            LoginPage.fillPassword(data.email)
            cy.get('button.action.login.primary#send2[type="submit"]').click();
            cy.get('.panel.wrapper > .panel').should('be.visible')
        })

    })

    it('Verify Failed login - Wrong Credentials', () => {
        //  cy.visit ('https://magento.softwaretestingboard.com')
        cy.contains("Sign In").click()
        cy.get('#email').type('jefyan@gmail.com');
        cy.get('#pass').type('Jefyan12');
        cy.get('button.action.login.primary#send2[type="submit"]').click();
        cy.get('.message-error > div').should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
        //cy.get('.message-error > div').should('have.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    })
})   