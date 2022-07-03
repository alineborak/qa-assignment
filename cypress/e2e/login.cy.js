describe('User login flow', () => {
  beforeEach(() => {
    cy.intercept('https://demo.realworld.io/').as('homepage')
    cy.visit('/')
  })

  it('User front login', () => {
    cy.userFrontLogin()
  })

  it('User background login', () => {
    cy.userBackgroundLogin()
  })
})
