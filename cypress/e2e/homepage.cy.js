describe('Landpage', () => {
  beforeEach(() => {
    cy.visitPage('/')
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

  it('5. Register a new user', () => {
    cy.userRegistration()
  })
})
