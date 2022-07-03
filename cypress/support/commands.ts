/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// let jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJ1c2VybmFtZSI6InRlc3Rhc2Rmc2Rkc2YiLCJpYXQiOjE2NTY4NDc2MjksImV4cCI6MTY2MjAzMTYyOX0.YcX8LOGRreImhC3G8RQflkRrVmU-WQFOcmveCFJ9Gps"

Cypress.Commands.add('backgroundLogin', () => {
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
  })
})

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJ1c2VybmFtZSI6InRlc3Rhc2Rmc2Rkc2YiLCJpYXQiOjE2NTY4NTEyNjAsImV4cCI6MTY2MjAzNTI2MH0.zboFVubJmjf1hRP6kDap1VRfUfcROwh4_NCw3LarAcA"