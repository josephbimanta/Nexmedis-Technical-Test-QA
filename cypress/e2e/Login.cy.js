import loginPage from "../pageObjects/loginPage"

describe('template spec', () => {
  it('TC1 | Verify Login Successfully - Input Valid Credentials', () => {
    cy.clearCookies()
    cy.visit('https://stg-app.nexmedis.com')
    loginPage.enterEmail('joseph.testing@gmail.com')
    loginPage.enterPassword('passwordtesting')
    loginPage.clickLoginButton()
    loginPage.verifyLoginSuccessfully()
  })

  it('TC2 | Verify Login Successfully - Input Valid Phone Number as the Username', () => {
    cy.clearCookies()
    cy.visit('https://stg-app.nexmedis.com')
    loginPage.enterEmail('0895336108362')
    loginPage.enterPassword('passwordtesting')
    loginPage.clickLoginButton()
    loginPage.verifyLoginSuccessfully()
  })

  it('TC3 | Verify Login Failed - Input Invalid Email', () => {
    cy.clearCookies()
    cy.visit('https://stg-app.nexmedis.com')
    loginPage.enterEmail('joseph.testingqa@gmail.com')
    loginPage.enterPassword('passwordtesting')
    loginPage.clickLoginButton()
    loginPage.checkContainsErrorMessage("Please enter a valid email address/phone number")
  })

  it('TC4 | Verify Login Failed - Not Fill Email Field', () => {
    cy.clearCookies()
    cy.visit('https://stg-app.nexmedis.com')
    loginPage.enterPassword('passwordtesting')
    loginPage.clickLoginButton()
    loginPage.checkContainsErrorMessage("This field cannot be empty")
  })

  it('TC5 | Verify Login Failed - Input Invalid Phone Number as the Username', () => {
    cy.clearCookies()
    cy.visit('https://stg-app.nexmedis.com')
    loginPage.enterEmail('0832336108362')
    loginPage.enterPassword('passwordtesting')
    loginPage.clickLoginButton()
    loginPage.checkContainsErrorMessage("Please enter a valid email address/phone number")
  })

  it('TC6 | Verify Login Failed - Not Fill Password Field', () => {
    cy.clearCookies()
    cy.visit('https://stg-app.nexmedis.com')
    loginPage.enterEmail('joseph.testing@gmail.com')
    loginPage.clickLoginButton()
    loginPage.checkContainsErrorMessage("This field cannot be empty")
  })

  it('TC7 | Verify Login Failed - Input Invalid Password', () => {
    cy.clearCookies()
    cy.visit('https://stg-app.nexmedis.com')
    loginPage.enterEmail('joseph.testingqa@gmail.com')
    loginPage.enterPassword('testingqabyjoseph')
    loginPage.clickLoginButton()
    loginPage.checkContainsErrorMessage("Please enter a valid password")
  })

  it('TC8 | Verify Login Failed - Input Incorrect Case In The Email', () => {
    cy.clearCookies()
    cy.visit('https://stg-app.nexmedis.com')
    loginPage.enterEmail('Joseph.Testingqa@gmail.com')
    loginPage.enterPassword('passwordtesting')
    loginPage.clickLoginButton()
    loginPage.checkContainsErrorMessage("Please enter a valid email address/phone number")
  })

  it('TC9 | Verify Login Failed - Input Incorrect Case In The Password', () => {
    cy.clearCookies()
    cy.visit('https://stg-app.nexmedis.com')
    loginPage.enterEmail('Joseph.Testingqa@gmail.com')
    loginPage.enterPassword('PasswordTesting')
    loginPage.clickLoginButton()
    loginPage.checkContainsErrorMessage("Please enter a valid password")
  })

})