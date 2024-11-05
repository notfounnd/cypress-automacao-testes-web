/// <reference types="cypress" />

describe('Produtos da Loja', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('TC08 - Deve acessar detalhes de um produto através da lista de produtos', () => {
    cy.verifyLoadHome()
    cy.navigateMenu('Products')
    cy.selectFirstProductFromList()
    cy.verifyProductInfo()
  })

  it('TC09 - Deve realizar busca de produtos', () => {
    cy.verifyLoadHome()
    cy.navigateMenu('Products')
    cy.searchProduct('Cotton')
    cy.verifyProductSearch('Cotton')
  })
})
