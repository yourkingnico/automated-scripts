describe('My First Test', function() {
    it('Navigates to home page', function() {
        cy.visit('http://localhost:8000/')
        expect(true).to.equal(true)
    })
  })