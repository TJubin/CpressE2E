describe("navigations", ()=>{

    it("navigation test", ()=>{

        cy.visit('https://www.flipkart.com/', { failOnStatusCode: false });
        // use this option in your Cypress test if you want to continue the test execution even if the response status code is not 2xx
        cy.get("._30XB9F").click()
        cy.title().should('eq','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')
        cy.get("img[alt='Mobiles & Tablets']").click()
        cy.get("._3vKRL2").should('have.text', "Mobile Phones Big Diwali Sale '23")
        cy.go('back')
        //cy.go('-1)
        cy.title().should('eq','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')
        //cy.go('forward')
        cy.go(1)
        cy.get("div:nth-child(5) div:nth-child(1) div:nth-child(1) div:nth-child(1) img:nth-child(2)").should('exist')
        cy.reload()

    })
})