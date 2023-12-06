/// <reference types='Cypress' />

describe('drop down learning', function(){

    it('drop down with select', function(){
    cy.visit('https://www.zoho.com/commerce/free-demo.html')
    cy.get('#zcf_address_country')
    .select('Italy').should('have.value', Italy)


    })
    it.skip('drop down without select', function(){
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click
        cy.get(".select2-search__field").type("Italy").type("{enter}")
        cy.get('#select2-billing_country-container').should('have.text', 'Italy')
        })

    it.skip('Auto suggest drop down without select', function(){
        cy.visit('https://www.wikipedia.org')
        cy.get('#searchInput').click().type('Delhi')
        cy.get('.suggestions-dropdown').contains('Delhi University').click()
        })
    it('Auto suggest drop down without select:dynamic', function(){
        cy.visit('https://www.google.com')
        cy.get('#APjFqb').type("Cypress automation")
        cy.wait(3000)
        cy.get('div.wM6W7d>span').should('have.length',12)
        //cy.get('.suggestions-dropdown').contains('Delhi University').click()
        cy.get('div.wM6W7d>span').each(($el,index,$list) =>{
            const text = $el.text().trim();
            if($el.text()=='cypress automation jobs')
            {
                cy.wrap($el).click()
            }

        })
        cy.get('#APjFqb').should('have.value',"cypress automation jobs")
        //each iterate through an array
        })

})