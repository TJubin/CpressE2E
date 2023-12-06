describe('test suite', ()=>{

    it("take screenshot and videos manually", function(){
        //the screenshots will be saved in screenshots folder and cypress by default takes screenshots when the test is failed
        cy.visit("https://demo.opencart.com/")
        // screenshot will be clipped 20px from the top and left
        // to the dimensions 400px x 300px
        //cy.screenshot({ clip: { x: 20, y: 20, width: 400, height: 300 } })
        cy.screenshot("homepage")
        cy.get(':nth-child(2) > .dropdown-toggle').screenshot('drop down')


    })

    it.only("take screenshot and videos automatically on failures", function(){
        //take screenshot and videos automatically on failures only from terminal or CI tools
        cy.visit("https://demo.opencart.com/")
        
        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should('not.exist')
    })
})