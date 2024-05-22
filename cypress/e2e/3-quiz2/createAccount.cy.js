import createAccountPage from "../../support/page-objects/createAccountPage"
describe('createAccount', () => {

  function randomFirstName (){
    const randomString = Math.random().toString(36).substring(2,20)
    const firstName = randomString
    return firstName
  }

  function randomLastName(){
    const randomString = Math.random().toString(36).substring(2,20)
    const lastname = randomString
    return lastname
  }

  function randomEmail(){
    const randomString = Math.random().toString(36).substring(2,20)
    //const randomNum = Math.random().toString(10).substring(0,10)
    const email = randomString +"@email.com"
    return email
  }

  let first = randomFirstName()
  let last = randomLastName()
  let email = randomEmail()

  beforeEach(() => {
    cy.visit('')
  })
  /*it('Passed - Create Account', () => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type(first)
    cy.get('#lastname').type(last)
    cy.get('#email_address').type(email)
    cy.get('#password').type('Gelas123!')
    cy.get('#password-confirmation').type('Gelas123!')
    createAccountPage.createAccountBtn()
    cy.url().should('include','account')
  })*/

  it('Create Account using costum command', ()=>{
    cy.createAccount(first, last, email, 'Gelas123!', 'Gelas123!')
  })

  it('Create account using fixtures',()=>{
    cy.fixture('createAccount.json').then((accounts) =>{
      const crAccount = accounts[0]
      cy.createAccount(crAccount.firstNm, crAccount.lastNm, crAccount.email, crAccount.pass, crAccount.confPass)
    })
    cy.get('.message-success > div').should('contain.text','Thank you for registering with Main Website Store.')
  })

  it('Failed - empty firstname', ()=>{
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#lastname').type(last)
    cy.get('#email_address').type(email)
    cy.get('#password').type('Gelas123!')
    cy.get('#password-confirmation').type('Gelas123!')
    createAccountPage.createAccountBtn()
    cy.get('#firstname-error').should('contain.text','This is a required field.')
  })

  it('Failed - password weak', ()=>{
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type(first)
    cy.get('#lastname').type(last)
    cy.get('#email_address').type(email)
    cy.get('#password').type('Gelas')
    cy.get('#password-confirmation').type('Gelas')
    createAccountPage.createAccountBtn()
    cy.get('#password-error').should('contain.text',
    'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
  })

  it('Failed - password not match', ()=>{
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type(first)
    cy.get('#lastname').type(last)
    cy.get('#email_address').type(email)
    cy.get('#password').type('Gelas123!')
    cy.get('#password-confirmation').type('Gelas1!')
    createAccountPage.createAccountBtn()
    cy.get('#password-confirmation-error').should('contain.text','Please enter the same value again.')
  })

})