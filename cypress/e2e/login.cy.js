import * as objects from "./objects/pageLogin.js"


describe("Login Test", () => {
    beforeEach(() => {
      cy.visit('https://newstaging.kiostix.com')
      cy.get(objects.button_loginPage).click()
      
    })
  
    it("successfull login", () => {
      cy.get(objects.input_username).type(objects.username)
      cy.get(objects.input_password).type(objects.password)
      cy.get(objects.button_loginSubmit).click()
    })
  
    it("login with wrong pass",() => {
      cy.get(objects.input_username).type(objects.username)
      cy.get(objects.input_password).type(objects.passwordWrong)
      cy.get(objects.button_loginSubmit).click()
      cy.get(objects.errorMessage_login).should('have.a.text', 'Invalid password')
    })
  })