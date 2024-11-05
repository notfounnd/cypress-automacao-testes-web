/// <reference types="cypress" />

let user

describe('Login de Usuários', () => {
  beforeEach(() => {
    cy.generateDataUser().then(data => {
      user = data
    }).then(() => {
      cy.visit('/')
      cy.navigateMenu('Signup / Login')
      cy.signupNewUser(user)
      cy.createNewUser(user)
      cy.finalizeCreateProcess()
      cy.navigateMenu('Logout')
      cy.verifyLoadHome()
    })
  })

  it('TC02 - Deve realizar login com sucesso', () => {
    cy.visit('/')
    cy.verifyLoadHome()

    cy.navigateMenu('Signup / Login')
    cy.loginUser(user)
    cy.verifySucessLogin(user)

    cy.navigateMenu('Delete Account')
    cy.finalizeDeleteProcess()
    cy.verifyLoadHome()
  })

  it('TC03 - Deve impedir login com credenciais inválidas', () => {
    user.email = `${user.first_name}.${user.last_name}@pgats.juliodelima.com.br`
    user.password = 'wrong_pass'

    cy.visit('/')
    cy.verifyLoadHome()

    cy.navigateMenu('Signup / Login')
    cy.loginUser(user)
    cy.verifyLoginFail()
  })

  it('TC04 - Deve realizar logout com sucesso', () => {
    cy.visit('/')
    cy.verifyLoadHome()

    cy.navigateMenu('Signup / Login')
    cy.loginUser(user)
    cy.verifySucessLogin(user)

    cy.navigateMenu('Logout')
    cy.verifyLoadHome()
  })
})
