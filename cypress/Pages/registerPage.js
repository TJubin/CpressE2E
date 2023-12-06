//import { config } from "cypress/types/bluebird"

export class registerPage{

    weblocators={
        FirstName:'#input-firstname',
        LastName:'#input-lastname',
        Email:'#input-email',
        Telephone:'#input-telephone',
        Password:'#input-password',
        PasswordConfirm:'#input-confirm',
        checkBox:'.col-sm-10 > :nth-child(2) > input',
        privacy:'[type="checkbox"]',
        continueBtn:'input[type="submit"]'
    }

    openUrl(){

        cy.visit(Cypress.env("URL"))
    }
    enterFirstName(FName){
        cy.get(this.weblocators.FirstName).type(FName)
    }

    enterLastName(LastName){
        cy.get(this.weblocators.LastName).type(LastName)
    }
    enterEmail(Email){
        cy.get(this.weblocators.Email).type(Email)
    }
    entertelephone(Phone){
        cy.get(this.weblocators.Telephone).type(Phone)
    }
    enterPassword(Password){
        cy.get(this.weblocators.Password).type(Password)
        cy.get(this.weblocators.PasswordConfirm).type(Password)
    }
    enableRadio(){
        cy.get(this.weblocators.checkBox).check()
        cy.get(this.weblocators.privacy).check()
    }
    clickContinue(){
        cy.get(this.weblocators.continueBtn).click()
    }
}
