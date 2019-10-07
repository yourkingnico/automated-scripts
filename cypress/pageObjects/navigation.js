class Navigation {

    openMobileMenu(){
        const menu = cy.get('[data-cy=mobile-nav]')
        menu.click()
    }

    goToAbout(){
        const link = cy.get('[data-cy=about-link]')
        link.click()
    }

    goToAboutMobile(){
        this.openMobileMenu();
        this.goToAbout()
    }

    goToContact(){
        const link = cy.get('[data-cy=contact-link]')
        link.click()
    }

    goToContactMobile(){
        this.openMobileMenu()
        this.goToContact()
    }

    goToResume(){
        const link = cy.get('[data-cy=resume-link]')
        link.click()
    }

    goToResumeMobile(){
        this.openMobileMenu()
        this.goToResume()
    }

    goToPastWorks(){
        const link = cy.get('[data-cy=past-works-link]')
        link.click();
    }

    goToPastWorksMobile(){
        this.openMobileMenu()
        this.goToPastWorks()
    }

}
export default Navigation;