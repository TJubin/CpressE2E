describe("Test suit with multiple data", ()=>{

    it("Test suit", function(){

        cy.fixture("Testfile.json").then((data)=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/")
            data.forEach((userdata) => {

                cy.get('input[name="username"]').type(userdata.username)
                cy.get('input[name="password"]').type(userdata.password)
                cy.get('button[type="submit"]').click()

                if(userdata.username=="Admin" && userdata.password=="admin123")
                {
                    cy.get(".oxd-topbar-header-breadcrumb > h6").should('have.text', userdata.expected)

                    cy.wait(2000)

                    cy.get(".oxd-topbar-header-userarea' > li").click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

                }
                else
                {
                    cy.get(".oxd-alert-content > .oxd-text").should('have.text', userdata.expected)
                }
                
                
            });


        })
    })
})