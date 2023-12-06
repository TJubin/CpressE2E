describe("Test Suits and hooks", function(){

    //before, after, beforEeach and afterEach hooks are available 
    //before: runs only once
    //after runs only once 
    //beforeeach: runs for every test peior to the execution
    //aftereach: runs for every test after completion of all it blocks

    before(()=>{
        cy.log("launch the application")


    })
    after(()=>{

        cy.log("closing the application")
    })

    beforeEach(()=>{
        cy.log("Login the application")


    })
    afterEach(()=>{
        cy.log("clossing the application")


    })
    it("search", function(){

        cy.log("@@@@open particular page@@@@")
    })

    it("advanced search", function(){

        cy.log("@@@@open adavnced particular page@@@@")
    })

    it("advanced search 2 ", function(){

        cy.log("@@@@open advanced 2 particular page@@@@")
    })





})