//create a folder under cypress for keeping page objects, its a java script file

//in approach 1: created each methods for every webelecmet in loginfile
//import loginopensource from "../PageObject/loginfile.js"
import loginopensource from "../PageObject/loginfile2.js"
describe('page object model', function(){

    it("page object model check", ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //creating object
        const ln=new loginopensource()
        ln.setusername("Admin")
        ln.setpassword("admin123")
        ln.clciklogin()
        ln.verifylogin()
    })

    it("page object model check with fixtures", ()=>{
        //fixture folder

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('Testfile.json').then((data)=>{
            const ln=new loginopensource()
            ln.setusername(data.username)
            ln.setpassword(data.password)
            ln.clciklogin()
            ln.verifylogin()

        })
       
    })
})
