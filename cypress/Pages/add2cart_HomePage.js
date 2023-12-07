export class add2cart_HomePage{

    webLocators={
        search_input: "#search", 
        click_search:".input-group-btn > .btn",
        product:":nth-child(2) > .product-thumb > .image > a > .img-responsive",
        add_cart:'#button-cart',
        success_msg:".alert.alert-success.alert-dismissible" 

    }
    searchproduct(productName){

        cy.get(this.webLocators.search_input).type(productName)
        cy.get(this.webLocators.click_search).click()

    }
    addToCart(){

        cy.get(this.webLocators.product).click()
        cy.get(this.webLocators.add_cart).click()
        
    }
    verifyMsg(){
        cy.wait(3000)
        return cy.get(this.webLocators.success_msg)
        // assertuion will perof=rm in testb code
    }
}