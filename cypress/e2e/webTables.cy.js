describe('Handling web Tables', function()
{

 //hook blocks   
    beforeEach('login', function(){

        cy.visit("https://demo.opencart.com/admin/index.php ")
        cy.get("#input-username").type('demo')
        cy.get("#input-password").type('demo')
        cy.get("button[type='submit']").click()
        cy.get(".btn-close").click()
        //cy.get("#button-menu").click()
        cy.get("#menu-customer").click() //customers main menu
        cy.get("#menu-customer>ul>li:first-child").click()  //customers sub/ child menu
    })

    it.skip("check the number of rows and columns", function(){
        //validating row length
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')
        //validating column length
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7')
    })

    it("check the data in specific row and coilumn", function(){
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").contains("hfgjhgjgjggj@gmail.com")
        cy.wait(3000)
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(6)>td:nth-child(3)").should('not.contain',"hfhgjgjggj@gmail.com")
    })

    it("read all the records in the table of first page- pagination", function(){
        //use each function in the javascript
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row, index, $rows) =>{
                cy.wrap($row).within(()=>{

                    cy.get('td').each(($col, index, $cols)=>{
                        cy.log($col.text())
                    })
                })
            })
            //row=particular row, index- index of the table, rows- all the rows


    })

    it.only('multiple pages , pagination', function() {
        // Find total number of pages
        let total_pages;
        cy.get("div[class='col-sm-6 text-end']").then((e) => {
            let my_text = e.text();  // Showing 1 to 10 of 16049 (1605 Pages)
            total_pages = my_text.substring(my_text.indexOf("(") + 1, my_text.indexOf("Pages") - 1);
            cy.log("total number of pages is :   " + total_pages);
        });
        let total_page=5;
        for (let p = 1; p <= total_page; p++) {
            if (total_page > 1) {
                cy.log("active page is : " + p);
                cy.get(`ul.pagination li:nth-child(${p})`).click();
                cy.wait(5000);
    
                cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($row, index, $rows) => {
                    cy.wrap($row).within(() => {
                        cy.get("td:nth-child(3)").then((e) => {
                            cy.log(e.text());
                        });
                    });
                });
            }
        }
    });
    
        ///reading the data in pages
})