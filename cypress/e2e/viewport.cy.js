//Cypress allows you to interact with the viewport and control its size and dimensions during your test scenarios.
//checking screen dimenesions, manually: google crome-> inspect-> toggle bar

//viewport width and height can beupdate in config file it would be applicable for all the test. check gthe config file, check the presets in cypress documentation
describe('checking viewport test',
//pass parameters in describe block or pass in it blocks
/*{
viewportWidth:890,
viewportHeight:760},*/ ()=>{

    it('viewport test1', function(){
        
        //using preset-will ge the parameter as width and height as below
        //cy.viewport(990,790)
        cy.visit("www.amazon.co.uk")


    })
    it('viewport test1', function(){
        //using preset-will ge the parameter as device name as below
        //cy.viewport("iphone-x")       
        cy.visit("www.amazon.co.uk")
    })
    it('viewport test2', function(){
        //if we pass landscape parameter, test in landsape mode
        cy.viewport("iphone-x", "landscape")       
        cy.visit("www.amazon.co.uk")
    })
    it('viewport test3', function(){
        //if we pass landscape parameter, test in landsape mode
        cy.viewport("ipad-mini")       
        cy.visit("www.amazon.co.uk")
    })
    it('viewport test4', function(){
        //if we pass landscape parameter, test in landsape mode
        cy.viewport("macbook-16")       
        cy.visit("www.amazon.co.uk")
    })
})