import 'cypress-xpath'
import 'cypress-iframe'

require ('@4tw/cypress-drag-drop')
describe("mouse operations", function(){

    it("mouse over", ()=>{
        cy.visit("https://demo.opencart.com")
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get("div[class='dropdown-menu show'] li:nth-child(2) a:nth-child(1)").should('be.visible')
        cy.get("div[class='dropdown-menu show'] li:nth-child(2) a:nth-child(1)").click()
        cy.get('.image > a > .img-fluid').should("be.visible")
    })
    it("right click", ()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        //approach 1
        //cy.get('.context-menu-one').trigger("contextmenu")
        //cy.get('.context-menu-one').should("be.visible")

        //approach2

        cy.get('.context-menu-one').rightclick()
        cy.get('.context-menu-one').should("be.visible")     
    })
    it("double click", ()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded("#iframeResult")//load the frame

        //approach 1
        cy.iframe("#iframeResult").find('button[ondblclick="myFunction()"]').trigger('dblclick')
        cy.iframe("#iframeResult").find("#field2").should("have.value",'Hello World!')
        //approach2
        cy.iframe("#iframeResult").find('button[ondblclick="myFunction()"]').dblclick()
        cy.iframe("#iframeResult").find("#field2").should("have.value",'Hello World!')      
    })

    it("drag and drop", ()=>{

        //drag and drop plug in  npm install --save-dev @4tw/cypress-drag-drop
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get('#box7').drag('#box107',{force:true})
        cy.get
            
    })

    it.only("Scroll down", ()=>{

        //drag and drop plug in  npm install --save-dev @4tw/cypress-drag-drop
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")

        //india flag
        cy.get("img[alt='Flag of India']").scrollIntoView({duration:2000})
        cy.get("img[alt='Flag of India']").should('be.visible')
        //Algeria

        cy.get("img[alt='Flag of Algeria']").scrollIntoView({duration:3000})
        cy.get("img[alt='Flag of Algeria']").should('be.visible')

        cy.get("img[alt='Flag of Pakistan']").scrollIntoView({duration:3000})
        cy.get("img[alt='Flag of Pakistan']").should('be.visible')

        cy.get("#footer").scrollIntoView({duration:2000})
            
    })




})