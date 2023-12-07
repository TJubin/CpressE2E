import {add2cart_HomePage} from "../../Pages/add2cart_HomePage"
const homepageObj = new add2cart_HomePage()
import testData from '../../fixtures/testData.json'

describe("test automation login_add to cart", function(){

    before(()=>{
        cy.login(testData.loginp.username, testData.loginp.password)

    })
    it("add prodt to cart", ()=>{
        homepageObj.searchproduct(testData.product.productName)
        homepageObj.addToCart()
        homepageObj.verifyMsg().should("contain", testData.message.successmsg)

    })
    
})