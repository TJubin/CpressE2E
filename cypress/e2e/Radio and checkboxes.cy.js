//const cypress = require("cypress");
//const { describe } = require("mocha");

describe("check UI elements in Cypress", function(){

    it("radio button", function(){

        cy.visit("https://flipkart.com")
        cy.get("._30XB9F").click()
        cy.get("[name='q']").type('mobile phones')
        cy.get("[type='submit']").click()
        cy.get("._10Ermr").contains('mobile phones')   

        cy.get("[title='SAMSUNG']").should('be.visible')
        cy.get("[title='vivo']").should('be.visible')
        cy.get("[title='OPPO']").should('be.visible')

        cy.get("[title='SAMSUNG']").click()
        //cy.get("[title='SAMSUNG']").should('be.selected')
        
        cy.get("[title='vivo']").should('not.be.checked')
        cy.get("[title='vivo']").click()
        cy.get("[title='SAMSUNG']").unselect()

        //cy.get("[title='SAMSUNG']").check().should('be.checked')
        //cy.get("[title='vivo']").should('not.be.checked')


    })
})