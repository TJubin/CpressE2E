//validations, implicit or builtin and explicit assertions
//implicit- should. and
//explicit =- expect and assert


describe('Assertions', function(){

    it('implicit', function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //implicit: should
        //cy.url().should('include', 'orangehrmlive.com')
        //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should('contains', 'orange')
        //cy.url().should('include', 'orangehrmlive.com')
        //.should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //.should('contains', 'orange')

        cy.url().should('include', 'orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contains', 'orange')
        .and('not.contain','junijuni')

        cy.title().should('contain', 'Orange')
        .and('eq',"OrangeHRM")

        cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist')
        cy.get("input[placeholder=Username").type("admin")
        cy.get("input[placeholder=Username").should("have.value","admin")
        //.and("have.value", "Admin")


    })
    it("explicit", function(){
        //explicit using for BDD 
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder=Username").type("admin")
        cy.get("input[name=password").type("admin123")
        cy.get("button[type='submit']").click()
        //explicit functions to be used wityh the help of javascript
        let expname='xyz';
        //let expname2="";
        cy.get(".oxd-userdropdown-name").then( (x)=>{

            let actualres=x.text()
            expect(actualres).to.not.equal(expname)
        //TDD style

            assert.equal(actualres,'Paul Collings')
            assert.notEqual(actualres,expname)


        })



    })
})
