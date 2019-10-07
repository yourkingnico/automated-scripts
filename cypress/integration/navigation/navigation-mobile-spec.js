import Navigation from '../../pageObjects/navigation'

describe('Navigates through pages in mobile viewport', function() {

    const navigator = new Navigation();

    context('iphone-6+ resolution', function () {
        beforeEach(function () {
          cy.viewport('iphone-6+')
        })
    
        it('Navigates to home page', function() {
            cy.visit('http://localhost:8000/')
            cy.get('[data-cy=jumbo-component]').should('be.visible')
        })
        it('navigates to about section', function() {
            navigator.goToAboutMobile()
            cy.get('[data-cy=about-component]').should('be.visible')
            cy.url().should('include', '/#about')
        })
        it('navigates to contact section', function() {
            navigator.goToContactMobile()
            cy.get('[data-cy=contact-component]').should('be.visible')
            cy.url().should('include', '/#contact')
        })
        it('navigates to Resume Page', function() {
            navigator.goToResumeMobile()
            cy.get('[data-cy=resume-component]').should('be.visible')
            cy.url().should('include', '/resume')
        })
        it('navigates to PastWorks Page', function() {
            navigator.goToPastWorksMobile()
            cy.get('[data-cy=past-works-dir]').should('be.visible')
            cy.url().should('include', '/pastWorks')
        })
      })
  })