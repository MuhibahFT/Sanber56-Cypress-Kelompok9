class LoginPage {

    fillEmail(Email) {
        cy.get('#email').type(Email)
    }

    fillPassword(password) {
        cy.get('#pass').type(password)
    }
}

export default new LoginPage()