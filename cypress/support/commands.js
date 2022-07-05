/// <reference types="cypress" />
import Chance from 'chance'
const chance = new Chance()

Cypress.Commands.add('visitPage', (pathname) => {
  cy.visit(pathname)
  cy.location('pathname').should('equal', pathname)
})

Cypress.Commands.add('checkHomepageElements', () => {
  cy.get('[data-testid="main-header"]').should('be.visible')
  cy.get('[data-testid="author-name"]').eq(0).should('be.visible')
  cy.get('[data-testid="popular-tags"]').should('be.visible')
})

Cypress.Commands.add('articleLoad', () => {
  cy.get('[data-testid="article-header-link"]').eq(0).click()
  cy.get('[data-testid="article-header"]').should('be.be.visible')
})

Cypress.Commands.add('usernameClickPage', () => {
  cy.get('[data-testid="author-name"]').eq(0).click()
  cy.url().should('include', '/#/profile')
})

Cypress.Commands.add('clickPopularTag', () => {
  cy.get('[class*="tag-list"] [data-testid="tag-item"]').eq(0).click()
  cy.get('[class*="nav-item"] [data-testid="tag-nav"]').eq(1).should('be.visible')
})

Cypress.Commands.add('userFrontLogin', () => {
  cy.intercept('https://api.realworld.io/api/users/login').as('login')
  cy.visit('login')
  cy.location().should((loc) => {
    expect(loc.hash).to.eq('#/login')
  })
  cy.get('[data-testid="login-email"]').type('test@example.com')
  cy.get('[data-testid="login-password"]').type('test')
  cy.get('[data-testid="submit-btn"]').click()
})

Cypress.Commands.add('userBackgroundLogin', () => {
  cy.request({
    method: 'POST',
    url: 'https://conduit.productionready.io/api/users/login',
    body: {
      user: {
        email: 'test@example.com',
        password: 'test',
      },
    },
  }).then((loginResponse) => {
    console.log(loginResponse.body)
    cy.log(loginResponse.body.user.token)
    cy.visit('#/editor', {
      onBeforeLoad: (win) => {
        win.localStorage.setItem('jwtToken', loginResponse.body.user.token)
      },
    })
  })
})

Cypress.Commands.add('userRegistration', () => {
  cy.visit('register')
  cy.get('[data-testid="user-name"]').type(chance.name())
  cy.get('[data-testid="user-email"]').type(chance.email())
  cy.get('[data-testid="user-password"]').type('Abc12345678')
  cy.get('[data-testid="signup-btn"]').click()
})

Cypress.Commands.add('createArticle', () => {
  cy.get('[data-testid="article-title"]').type(chance.word())
  cy.get('[data-testid="article-subject"]').type(chance.word())
  cy.get('[data-testid="article-body"]').type(chance.paragraph())
  cy.get('[data-testid="article-tags"]').type('cypress')
  cy.get('[data-testid="publish-article-btn"]').click()
})
