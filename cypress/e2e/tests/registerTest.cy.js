import {registerPage} from "../../Pages/registerPage"
import registerData from "../../fixtures/registerData.json"
const registerObj = new registerPage()
describe("Testing Tegister sheet", function(){

    it("register flow", ()=>{
        registerObj.openUrl()
        registerObj.enterFirstName(registerData.FirstName)
        registerObj.enterLastName(registerData.LastName)
        registerObj.enterEmail(registerData.Email)
        registerObj.entertelephone(registerData.Phone)
        registerObj.enterPassword(registerData.Password)
        registerObj.enableRadio()
        registerObj.clickContinue()
        cy.get('.alert').should('be.visible')
        //cy.get('.alert').as('myAlert');
// ... other commands ...
       // cy.get('@myAlert').should('contain', 'Warning');

        


    })


})