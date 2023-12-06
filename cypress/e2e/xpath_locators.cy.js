//const { describe } = require("mocha");

//const cypress = require("cypress")
require('cypress-xpath')
describe('xpath locators', function()
{
it('testcase3', function()
{

    cy.visit('https://www.flipkart.com/')
    cy.get("._30XB9F").click()
    cy.get("[name='q']").type('mobile phones')
    cy.get("[type='submit']").click()
    //cy.xpath("//div[@class='_1YokD2 _3Mn1Gg']").should('have.length',24)
    cy.xpath("//div[@class='_1YokD2 _3Mn1Gg']/div[2]").click()
})
})