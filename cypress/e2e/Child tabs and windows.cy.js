describe("handle tabs", function(){
    it("Approach 1", ()=>{
        //opening child tyab within the same page
        cy.visit("https://the-internet.herokuapp.com/windows")
        //if need to open the target url in the same page, need to remove the target value from the dev tools, then only clcik action works
        cy.get("a[href='/windows/new']").invoke("removeAttr", 'target').click()
        //cy.get("div[class='example'] >a").click()
        cy.url().should("equal", "https://the-internet.herokuapp.com/windows/new")
        cy.wait(3000)
        cy.go('back')
    })
    it.only('approach 2', ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        //instead of removing target value, capturing href value 
        cy.get("div[class='example'] >a").then((e)=>{
            let url=e.prop("href")
            cy.visit(url)
            cy.wait(3000)
            
        })
        cy.url().should("equal", "https://the-internet.herokuapp.com/windows/new")
        cy.wait(4000)
        cy.go('back')

    })


})