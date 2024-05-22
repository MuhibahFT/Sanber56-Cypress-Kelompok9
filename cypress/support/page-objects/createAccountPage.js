class createAccountPage {
    createAccountBtn(){
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    }
}
export default new createAccountPage()