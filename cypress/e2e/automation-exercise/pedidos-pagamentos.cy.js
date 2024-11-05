/// <reference types="cypress" />

let user

describe('Pedidos e Pagamentos', () => {
  beforeEach(() => {
    cy.generateDataUser().then(data => {
      user = data
    })

    cy.visit('/')
  })

  afterEach(() => {
    cy.navigateMenu('Delete Account')
    cy.finalizeDeleteProcess()
    cy.verifyLoadHome()
  })

  it('TC15 - Deve cadastrar usuário antes de realizar compra', () => {
    const products = [
      'Blue Top',
      'Fancy Green Top'
    ]

    cy.verifyLoadHome()

    cy.navigateMenu('Signup / Login')
    cy.signupNewUser(user)
    cy.createNewUser(user)
    cy.finalizeCreateProcess()
    cy.verifySucessLogin(user)

    cy.wrap(products).each(product => {
      cy.addProductToCart(product)
    })

    cy.navigateMenu('Cart')

    cy.wrap(products).each(product => {
      cy.verifyProductInCart(product)
    })

    cy.performCheckout(user)

    cy.wrap(products).each(product => {
      cy.verifyProductInCheckout(product)
    })

    cy.performPayment(user)
  })
})
