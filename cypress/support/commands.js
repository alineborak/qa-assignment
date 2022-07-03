/// <reference types="cypress" />

Cypress.Commands.add('checkHomepageElements', () => {
  cy.get('h1[class*="logo-font ng-binding"]').should('be.visible')
  cy.get('[class*="author ng-binding"]').should('be.visible')
  cy.get('[class*="tag-list"]').should('be.visible')
  cy.wait('@homepage')
})

Cypress.Commands.add('articleLoad', () => {
  cy.intercept('https://conduit.productionready.io/api/articles/Create-a-new-implementation-1').as('article')
  cy.get('h1[ng-bind*="ctrl.article.title"]').eq(0).click()
  cy.wait('@article')
  cy.get('[data="cmt"]').should('be.be.visible')
})

Cypress.Commands.add('usernameClickPage', () => {
  cy.intercept('https://conduit.productionready.io/api/profiles/*').as('user-article')
  cy.get('[class*="author ng-binding"]').eq(0).click()
  cy.wait('@user-article')
})

Cypress.Commands.add('clickPopularTag', () => {
  cy.intercept('https://conduit.productionready.io/api/articles?limit=10&offset=0&tag=*').as('tag')
  cy.get('[class*="tag-default tag-pill ng-binding ng-scope"]').eq(1).click()
  cy.wait('@tag')
  cy.get('[class*="ion-pound"]').should('be.visible')
})

Cypress.Commands.add('userFrontLogin', () => {
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
