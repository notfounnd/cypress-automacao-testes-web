/// <reference types="cypress" />

let message

describe('Formulário de Contato', () => {
  beforeEach(() => {
    cy.generateDataMessage().then(data => {
      message = data
    }).then(() => {
      cy.visit('/')
    })
  })

  it('TC06 - Deve enviar mensagem através do formulário de contato', () => {
    cy.verifyLoadHome()
    cy.navigateMenu('Contact us')
    cy.sendContactMessage(message)
    cy.finalizeContactMessageProcess()
    cy.verifyLoadHome()
  })
})
