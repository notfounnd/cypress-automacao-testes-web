/// <reference types="cypress" />

let user

describe('Assinatura de Newsletter', () => {
  beforeEach(() => {
    cy.generateDataUser().then(data => {
      user = data
    })

    cy.visit('/')
  })

  it('TC10 - Deve efetuar assinatura na funcionalidade de newsletter', () => {
    cy.verifyLoadHome()
    cy.subscribeNewsletter(user)
  })
})
