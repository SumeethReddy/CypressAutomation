describe('My first http call tests', function() {

    it('Testing http calls', () => {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', 
        (req) =>{
        req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"

        req.continue((res) => {
           expect(res.statusCode).to.equal(404)
        })
    }).as("dummyurl")
    cy.get("button[class='btn btn-primary']").click()
    cy.wait('@dummyurl')

    })

    //length of the response array = rows of the table

})