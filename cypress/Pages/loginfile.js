class loginopensource
{
    setusername(username)

    {
        cy.get("input[name='username']").type("Admin")
    }

    setpassword(password)

    {
        cy.get("input[type='password']").type("admin123")
    }

    clciklogin()

    {
        cy.get("button[type='submit']").click()
    }
    verifylogin()
    {
        cy.get(".oxd-topbar-header-title").should("exist")
    }

}

export default loginopensource;