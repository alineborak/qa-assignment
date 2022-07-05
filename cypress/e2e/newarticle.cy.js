describe('New article', () => {
  it('1. Write an article ', () => {
    cy.userFrontLogin()
    cy.wait('@login')
    cy.get('[data-testid="menu-options"]').eq(1).click()
    cy.createArticle()
  })
})
