describe('My First Test', () =>
 {
    //('My First Test', ()- suite name
    it('test_case_1-positive', function() 
    {
      //steps
      cy.visit('https://opensource-demo.orangehrmlive.com')
      cy.title().should('eq','OrangeHRM')
    })
    it('test_case_1-negative', function() 
    {
      //steps
      cy.visit('https://opensource-demo.orangehrmlive.com')
      cy.title().should('eq','OrangeHRM123')
    }
    )
  }
  )