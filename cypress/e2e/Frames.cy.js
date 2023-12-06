import 'cypress-iframe'
describe('handling frames', function(){

    it('handling frame approach 1', function(){

        cy.visit("https://the-internet.herokuapp.com/iframe")

        const iframe=cy.get("#mce_0_ifr")
        ///its is mentioning the document
                .its('0.contentDocument.body')
                .should('be.visible')
                .then(cy.wrap)

                iframe.clear().type("hi Jubin {ctrl+a}")
                cy.get("[aria-label='Bold']").click()

    })
    it('customising commmand approach 2', function(){

        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.getIframe("#mce_0_ifr").clear().type("hi Jubin {ctrl+a}")
        cy.get("[aria-label='Bold']").click()

    })
    it('using cypress plugins, approach 3', function(){

        cy.visit("https://the-internet.herokuapp.com/iframe")
        //loading gthe frame
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').clear().type("Hi Jubin... {ctrl+a}")
        cy.get("[aria-label='Bold']").click()



    })
})
