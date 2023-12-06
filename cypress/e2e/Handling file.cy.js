
import 'cypress-file-upload'
describe("file handling", ()=>{
//file upload package: npm install --save-dev cypress-file-upload
    it("single file upload", ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('sample.pdf')
        //need to file inside the fixture folder
        cy.get("#file-submit").click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!' )

    })

    it("single file upload- Rename", ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath:'sample.pdf', fileName:'sample2.pdf'})
        //need to file inside the fixture folder
        cy.get("#file-submit").click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!' )

    }) 
    it.only("single file upload- Drag and drop", ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#drag-drop-upload').attachFile({filePath:'sample.pdf', fileName:'sample2.pdf'})
        //need to file inside the fixture folder
        cy.get("#file-submit").click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!' )

    })   


})