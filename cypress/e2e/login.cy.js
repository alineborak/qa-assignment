describe('User login flow', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('User front login', () => {
    cy.userFrontLogin()
  })

  it('User background login', () => {
    cy.userBackgroundLogin()
  })
})
