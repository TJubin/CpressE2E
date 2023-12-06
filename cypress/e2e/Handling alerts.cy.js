describe('handling alerts', function(){
//javascript alert: It will have some Ok button

    it('javascript alert', function()
    {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click()
        cy.on('window:alert', (t)=>{
            expect(t).to.contains('I am a JS Alert')
        })
        cy.get('#result').should('have.text', "You successfully clicked an alert")
        //no xcript for closing the alert as cypress will do by itself

    })
//Javascript confirm alerts; is has ok and cancel button
    
it('Javascript confirm alerts - OK', function()

//if we need to only one file, then it.skip or it.only
{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get('button[onclick="jsConfirm()"]').click()
    cy.on('window:confirm', (t)=>{
        //since we have two buttons to confirm using windows: confirm
        expect(t).to.contains('I am a JS Confirm')
    })
    cy.get('#result').should('have.text', "You clicked: Ok")
    //no xcript for closing the alert as cypress will do by itself

})

it('Javascript confirm alerts-cancel', function()

//if we need to only one file, then it.skip or it.only
{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get('button[onclick="jsConfirm()"]').click()
    cy.on('window:confirm', (t)=>{
        //since we have two buttons to confirm using windows: confirm
        expect(t).to.contains('I am a JS Confirm')
    })
    cy.on('window:confirm', ()=> false)
    cy.get('#result').should('have.text', "You clicked: Cancel")
    //no xcript for closing the alert as cypress will do by itself

})

    
//javascript prompt alert: it will have some text with a text box for user input along with 'OK'

it('prompt alert-Ok', function(){
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//getting the control of alert box before clicking the option
    cy.window().then((win) =>{
        cy.stub(win,'prompt').returns('welcome jubin')
    })
    cy.get('button[onclick="jsPrompt()"]').click()

   
    //clicking OK button
    cy.get('#result').should('have.text', "You entered: welcome jubin")
    


})

it('prompt alert-Cancel', function(){
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//getting the control of alert box before clicking the option
    cy.window().then((win) =>{
        cy.stub(win,'prompt').returns('welcome jubin')
    })
    cy.get('button[onclick="jsPrompt()"]').click()

    //clciking cancel option
    cy.on('window:confirm', ()=>false)
    cy.get('#result').should('have.text', "You entered: null")

    //clicking OK button
    //cy.get('#result').should('have.text', "You entered: welcome jubin")
    


})
//authenticated alert

it.only('Authenticated alert', function(){

    //approach 1
    //cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{username:"admin", password:"admin"}})
    //cy.get("div[class='example'] p").should('have.contain',"Congratulations")

    //approach 2: passing username and password in url itself, after https passing username:password@
//getting the control of alert box before clicking the option
cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
cy.get("div[class='example'] p").should('have.contain',"Congratulations")
    


})
//check for cypress catalog events

})