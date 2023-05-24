describe('Space X main tests', () => {
  it('Verifies pagination and favorites', () => {
    //visit te site
    cy.visit('https://csb-x6dpt1.netlify.app/')
    //Search “crs”
    cy.get('#root > div > div > div.search-input > input[type=text]').click()
    cy.get('#root > div > div > div.search-input > input[type=text]').type('crs')
    //Check that 3 pages are being found
    cy.get('#root > div > div > div.pagination > div:nth-child(4)').should('be.visible')
    //Go to page 2 and mark CRS-13 as a favorite
    cy.get('#root > div > div > div.pagination > div:nth-child(3)').click()
    cy.get('#root > div > div > div.launches-list > div:nth-child(3) > div.content > svg').click()
    //Go to the Favorite tab and check that CRS-13 is there.
    cy.get('#root > div > header > div > div > div:nth-child(2)').click()
    cy.get('#root > div > div > div.launches-list > div > div.content').should('contain.text', 'Will reuse the Dragon capsule previously')
    //Refresh browser and check favorite mark remains there.
    cy.reload(true)
    cy.get('#root > div > header > div > div > div:nth-child(2)').click()
    cy.get('#root > div > div > div.launches-list > div > div.content').should('contain.text', 'Will reuse the Dragon capsule previously')
  })
})