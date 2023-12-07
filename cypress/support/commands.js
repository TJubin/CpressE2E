// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types='Cypress' />
/// <reference types='Cypress-xpath' />

///custom command for accessing iframes
Cypress.Commands.add('getIframe',(iframe)=>{

    return cy.get(iframe)
    .its('0.contentDocument.body')
    .should("be.visible")
    .then(cy.wrap)
})

//creating custom commmands for clicking links
Cypress.Commands.add("clickLink", (label)=>{
    cy.get("a").contains(label).click()

})

//overwriting contains commands


Cypress.Commands.overwriteQuery("contains", function (contains, filter, text, userOptions = {}) {

    // This is parameter resolution from Cypress v12.7.0 source
    if (Cypress._.isRegExp(text)) {
      // .contains(filter, text)
      // Do nothing
    } else if (Cypress._.isObject(text)) {
      // .contains(text, userOptions)
      userOptions = text
      text = filter
      filter = ''
    } else if (Cypress._.isUndefined(text)) {
      // .contains(text)
      text = filter
      filter = ''
    }

    userOptions.matchCase = false;

    let contains0 = contains.bind(this)    // this line fixes the error

    return contains0(filter, text, userOptions)
  }
)

//custom command for login: since the login is a pre requisite for all the action, the url will fetch from config base url value

/*Cypress.Commands.add("loginapp", (email, password)=>{
  cy.visit("")
  cy.get("#Email").type(email)
  cy.get("#Password").type(password)
  cy.get('.button-1.login-button').click()

})*/

Cypress.Commands.add("login", (email, password)=>{
  cy.visit("")
  cy.get("#input-email").type(email)
  cy.get("#input-password").type(password)
  cy.get('form > .btn').click()

})