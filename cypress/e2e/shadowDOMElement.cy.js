describe("shadow DOM element", ()=>{

    /*Shadow DOM, on the other hand, is a web standard that encapsulates 
    the styling and functionality of a web component, preventing styles and scripts 
    from bleeding into or out of the component. It helps in creating 
    modular and reusable components on the web. So use shadow method, start from first child element then go to the shadow element
    Also, make the shadow element in universal way: project -> config file-> 
    */

    it("shadow dom Handling", function(){
        cy.visit("https://selectorshub.com/xpath-practice-page/")
        //cy.get("#userName").shadow().find('#app2').shadow().find("#pizza").type('jinjanga');
        //once shadow dom has maintained in the config file

        //cy,get("#pizza").type("check")
        cy.wait(3000)
        cy.get("#pizza",{includeShadowDom:true}).type('hello')

    })
})