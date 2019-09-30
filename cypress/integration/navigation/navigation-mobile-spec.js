describe('Navigates through pages in mobile viewport', function() {
    context('iphone-6+ resolution', function () {
        beforeEach(function () {
          cy.viewport('iphone-6+')
        })
    
        it('Navigates to home page', function() {
            cy.visit('http://localhost:8000/')
            cy.get('[data-cy=jumbo-component]').should('be.visible');
        })
        it('navigates to about section', function() {
            cy.get('[data-cy=mobile-nav]').click()
            cy.get('[data-cy=about-link]').should('be.visible');
            cy.get('[data-cy=about-link]').click()
            cy.get('[data-cy=about-component]').should('be.visible');
            cy.url().should('include', '/#about')
        })
        it('navigates to contact section', function() {
            cy.get('[data-cy=mobile-nav]').click()
            cy.get('[data-cy=contact-link]').should('be.visible');
            cy.get('[data-cy=contact-link]').click()
            cy.get('[data-cy=contact-component]').should('be.visible');
            cy.url().should('include', '/#contact')
        })
        it('navigates to Resume Page', function() {
            cy.get('[data-cy=mobile-nav]').click()
            cy.get('[data-cy=resume-link]').click()
            cy.get('[data-cy=resume-component]').should('be.visible');
            cy.url().should('include', '/resume')
        })
        it('navigates to PastWorks Page', function() {
            cy.get('[data-cy=mobile-nav]').click()
            cy.get('[data-cy=past-works-link]').should('be.visible');
            cy.get('[data-cy=past-works-link]').click()
            cy.get('[data-cy=past-works-dir]').should('be.visible');
            cy.url().should('include', '/pastWorks')
        })
      })
  })