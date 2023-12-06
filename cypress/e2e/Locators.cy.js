describe('Testcase2',function(){

    it('csslocators',function()
    
    {
        cy.visit('https://www.flipkart.com/')
        cy.get("._30XB9F").click()
        cy.get("[name='q']").type('mobile phones')
        cy.get("[type='submit']").click()
        cy.get("._10Ermr").contains('mobile phones')   
        
    }
    )
}


)