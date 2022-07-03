> ## Thalex QA Assignment.

Welcome to the QA Assignment for Thalex. This assignment is based on the [RealWordApp](https://github.com/gothinkster/realworld) project. It is a project that specifies a set of criteria for a blogging app that can then be built using various technologies. It acts as a reference of how to develop a certain baseline of functionalities and features of said blogging app across various technologies in order to get a better overview of their use.

It also provides us with a preconfigured API service to use when developing a frontend application based on their requirements. This is such a frontend. Your task is to add automated testing to this app. 

In `OVERVIEW.md` you will find an overview of the app, the various pages and their functionality. When running the Frontend app, you can log in with credentials `test@example.com` and password `test`. At the bottom of this page you will find instructions on how to run the app.

At Thalex we use Cypress for our automated integration testing. When doing this test, you can use whatever tool you want, provided it works offline, and we can install and run it locally.

### Main Task:

We would like you to provide integration tests for the following scenarios:

- Viewing the landing page works, and checking that a list of articles loads
- Clicking on an article loads it in a new page
- Clicking on a username loads the user's page
- From the landing page, clicking on a popular tag navigates the user to the results page of that tag
- Test the login page with the credentials provided

This will be sufficient for you to complete and submit the test. Care will be given to how you have done the setup of your testing tool and how you have written your tests. Please provide instructions on how to install the testing tools you've used and how to run the test. 
You may also submit comments and observations you may have about the application and how it works (or doesn't).

### Bonus Tasks:

Of course, there are always more ways with which you can improve your testing plan. It is not required, but it would be beneficial to expand your testing in one, or all of the following ways:

- Mock some or all of the api calls made to `https://api.realworld.io`. You will fill find an API specification in `api_spec/api_spec.html` that will give you information on what you can expect to be sent to and returned from the API.
- With mocking in place, create a test for the registration page
- Create a reusable login command so that we can easily test pages that require user authentication. For more information on this concept, see the [Cypress Documentation](https://docs.cypress.io/api/cypress-api/custom-commands#Syntax) on custom commands. 

### Running the app

```
# Install dependencies
yarn install
# Run the app
yarn dev
```
