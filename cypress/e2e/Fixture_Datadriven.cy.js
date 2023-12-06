describe("Fixtures and Data Driven", ()=>{
    it.skip("fixture demo Test", function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/")
//to access the file, need to use fixtyure module
        cy.fixture("Testfile.json").then((data) =>{
            cy.get('input[name="username"]').type(data.username)
            cy.get('input[name="password"]').type(data.password)
            cy.get('button[type="submit"]').click()
            cy.get(".oxd-topbar-header-breadcrumb > h6").should('have.text', data.expected)


        })
        //cy.get('input[name="username"]').type("Admin")
        //cy.get('input[name="password"]').type("admin123")
        //cy.get('button[type="submit"]').click()
        //cy.get(".oxd-topbar-header-breadcrumb > h6").should('have.text', "Dashboard")


    })

    //access through the hook function
    let userdata;
    before(()=>{

        
        cy.fixture("Testfile.json").then((data)=>{
            userdata=data;
        })
    })
    it("fixture demo Test using hooks", function()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.get('input[name="username"]').type(userdata.username)
        cy.get('input[name="password"]').type(userdata.password)
        cy.get('button[type="submit"]').click()
        cy.get(".oxd-topbar-header-breadcrumb > h6").should('have.text', userdata.expected)


        
        //cy.get('input[name="username"]').type("Admin")
        //cy.get('input[name="password"]').type("admin123")
        //cy.get('button[type="submit"]').click()
        //cy.get(".oxd-topbar-header-breadcrumb > h6").should('have.text', "Dashboard")


    })





})