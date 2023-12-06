describe("test the dom commands", ()=>{

    it('first and last command', ()=>{

        cy.visit("https://naveenautomationlabs.com/opencart/")
        //cy.get(".image").first().click()
        cy.get(".image").last().click()
    })

    it('mid elements', ()=>{

        cy.visit("https://naveenautomationlabs.com/opencart/")
        //cy.get(".image").first().click()
        cy.get(".image").eq(2).click()
    })
    it.only('contains', ()=>{

        cy.visit("https://naveenautomationlabs.com/opencart/")
        //cy.get(".image").first().click()
        cy.contains("Macbook").click()
    })
})