describe('landpage', () => {
  beforeEach(() => {
    cy.intercept('https://demo.realworld.io/').as('homepage')
    cy.visit('https://demo.realworld.io/#/')
  })

  // - Viewing the landing page works, and checking that a list of articles loads
  // - Clicking on an article loads it in a new page
  // - Clicking on a username loads the user's page
  // - From the landing page, clicking on a popular tag navigates the user to the results page of that tag
  // - Test the login page with the credentials provided

  it('displays two todo items by default', () => {
    cy.wait('@homepage')
    cy.visit('https://demo.realworld.io/#/')

    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    // cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    // cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  })
})
