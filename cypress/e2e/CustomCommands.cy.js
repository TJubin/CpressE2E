
///By using custom commands in Cypress, you can write more efficient and maintainable end-to-end tests for your web applications.
describe("custom Commands", function(){

    it("handling links", ()=>{

        cy.visit("https://demo.nopcommerce.com/")
       // cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
        //cy.get("div[class='product-name'] h1").should("contain", "Apple MacBook Pro 13-inch")

        //for creating custom commnads go to commands.js
        //using custom commands

        cy.clickLink("Apple MacBook Pro 13-inch")
        cy.get("div[class='product-name'] h1").should("contains", "Apple MacBook Pro 13-inch")
    })


    it("over write the existing command", ()=>{
        //overwriting existing contains() commands 
        cy.visit("https://demo.nopcommerce.com/")
        //since the function iscase sensitive, it wil not capture the labelled value. it should handle both upper and lower cases 

        cy.clickLink("Apple MacBook Pro 13-inch")
        cy.get("div[class='product-name'] h1").should("contain", "Apple MacBook Pro 13-inch")



    })
    it.only("login command", ()=>{
        cy.visit("https://demo.nopcommerce.com/")
        //can custom the test commands for the tests which is perofrmigng constantly, EG: Login
        cy.clickLink("Log in")
        cy.loginapp("testing@gmail.com", "test123")
        cy.wait(3000)

        cy.get('.ico-account').should('have.text', 'My account');






    })

    
})