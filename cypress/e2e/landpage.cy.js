/// <reference types="Cypress" />

describe('Landpage', () => {
  beforeEach(() => {
    cy.intercept('https://demo.realworld.io/').as('homepage')
    cy.visit('/')
  })

  it('1. Checking if homepage elements are displayed', () => {
    cy.wait('@homepage')
    cy.get('h1[class*="logo-font ng-binding"]').should('be.visible')
    cy.get('[class*="author ng-binding"]').should('be.visible')
    cy.get('[class*="tag-list"]').should('be.visible')
  })

  it('2. Click article loads in a new page', () => {
    cy.intercept('https://conduit.productionready.io/api/articles/Create-a-new-implementation-1').as('article')
    cy.get('h1[ng-bind*="ctrl.article.title"]').eq(0).click()
    cy.wait('@article')
    cy.get('[data="cmt"]').should('be.be.visible')
  })

  it('3. Clicking on a username loads the user page', () => {
    cy.intercept('https://conduit.productionready.io/api/profiles/*').as('user-article')
    cy.get('[class*="author ng-binding"]').eq(0).click()
    cy.wait('@user-article')
  })

  it('4. Clicking on a popular tag navigates the user to the results page of that tag', () => {
    cy.intercept('https://conduit.productionready.io/api/articles?limit=10&offset=0&tag=*').as('tag')
    cy.get('[class*="tag-default tag-pill ng-binding ng-scope"]').eq(1).click()
    cy.wait('@tag')
    cy.get('[class*="ion-pound"]').should('be.visible')
  })

  it('5. Login', () => {
    cy.visit('/login')
    cy.intercept('https://conduit.productionready.io/api/users/login').as('login')
    cy.location().should((loc) => {
      expect(loc.hash).to.eq('#/login')
    })
    cy.get('input[ng-model="$ctrl.formData.email"]').type('test@example.com')
    cy.get('input[ng-model="$ctrl.formData.password"]').type('test')
    cy.get('button.btn-primary').click()
    cy.wait('@login')
  })

  it.only('Background login', () => {
    cy.backgroundLogin()
  })
})
