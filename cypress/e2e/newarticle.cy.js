/// <reference types="Cypress" />
const faker = require('faker')

describe('New article', () => {
  beforeEach(() => {
    cy.userBackgroundLogin()
    cy.get('a[href*=editor]').click()
  })

  it('1. Checking ', () => {
    cy.get('input[ng-model*="title"]').type('Thalex')
    cy.get('input[ng-model*="description"]').type('QA Assignment')
    cy.get('textarea[ng-model*="body"]').type(faker.lorem.paragraph)
  })
})
