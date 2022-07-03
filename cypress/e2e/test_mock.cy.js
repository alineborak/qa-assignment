/// <reference types="cypress" />

describe('Files', () => {
  beforeEach(() => {
    cy.userFrontLogin()
    cy.intercept('GET', 'https://api.realworld.io/api/tags', { fixture: 'tags.json' })
  })

  it('fixture', () => {
    cy.get('[class*="tag-list"]').should('contain', 'cypress')
      .and('contain', 'automation')
      .and('contain', 'qaassignment')
  })
})
