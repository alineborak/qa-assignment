/// <reference types="Cypress" />

describe('Landpage', () => {
  beforeEach(() => {
    cy.intercept('https://demo.realworld.io/').as('homepage')
    cy.visit('/')
  })

  it('1. Checking if homepage elements are displayed', () => {
    cy.checkHomepageElements()
  })

  it('2. Check whether click on article loads in a new page', () => {
    cy.articleLoad()
  })

  it('3. Clicking on a username loads the user page', () => {
    cy.usernameClickPage()
  })

  it('4. Clicking on a popular tag navigates the user to the results page of that tag', () => {
    cy.clickPopularTag()
  })

  it('5. User front login', () => {
    cy.userFrontLogin()
  })

  it('6. User background login', () => {
    cy.userBackgroundLogin()
  })
})
