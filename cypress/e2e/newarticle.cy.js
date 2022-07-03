describe('New article', () => {
  beforeEach(() => {
    cy.userBackgroundLogin()
    cy.get('a[href*=editor]').click()
  })

  it('1. Write an article ', () => {
    cy.createArticle()
  })
})
