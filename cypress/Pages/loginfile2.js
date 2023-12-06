class loginopensource
{

    userName="input[name='username']"
    passWord= "input[type='password']"
    submitButton= "button[type='submit']"
    LabelCheck= ".oxd-topbar-header-title"

    setusername(username)
    {
        cy.get(this.userName).type("Admin")
    }

    setpassword(password)

    {
        cy.get(this.passWord).type("admin123")
    }

    clciklogin()

    {
        cy.get(this.submitButton).click()
    }
    verifylogin()
    {
        cy.get(this.LabelCheck).should("exist")
    }

}



export default loginopensource;