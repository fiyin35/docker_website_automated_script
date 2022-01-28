Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe('Automate docker website', () => {
    it('Automate docker website', () => {
        
        //docker website url
        cy.visit('https://www.docker.com/get-started');
        //cy.contains('Blog').click();
        //cy.contains('Docker Blog').should('be.visible');
        cy.get('li.products').click();
        cy.get('li.developers').click();
        cy.get('li.pricing').click();
        //Assert the page is Pricing Page
        cy.contains('Pricing & Subscriptions').should('be.visible');
        
        //cy.get('li.blog').click(); 
        cy.get('li.partners').click();
        //assert that you are on partners page
        cy.contains('Become a Docker Verified Publisher').should('be.visible');
        
        // cy.contains('About Us').click();
        // cy.request('/resources/what-container');
        cy.get('div.footer-nav-column ul.submenu li').contains('What is a Container').click();
        cy.get('div.footer-nav-column ul.submenu li').contains('Why Docker').click();
        cy.get('div.footer-nav-column ul.submenu li').contains('Virtual Events').click();
        //Assert the page is Virtual Events
        cy.contains('Learn from experts and get to know Docker.').should('be.visible');
        cy.get('div.footer-nav-column ul.submenu li').contains('Swag Store').click();
        cy.get('div.footer-nav-column ul.submenu li').contains('Newsroom').click();
        cy.get('div.footer-nav-column ul.submenu li').contains('Careers').click();
        cy.get('div.footer-nav-column ul.submenu li').contains('Contact Us').click();
        cy.get('div.footer-nav-column ul.submenu li').contains('Customers').click();
        cy.get('div.footer-nav-column ul.submenu li').contains('Newsletter').click();

        //Product Offerings
        cy.get('div.footer-nav-column ul.submenu li ul.subtree').contains('Docker Personal').click();
        cy.contains('Build, share, and run applications with the Docker essentials').should('be.visible');
        cy.get('div.footer-nav-column ul.submenu li ul.subtree').contains('Docker Pro').click();
        cy.get('div.footer-nav-column ul.submenu li ul.subtree').contains('Docker Team').click();
        cy.get('div.footer-nav-column ul.submenu li ul.subtree').contains('Docker Business').click();

        //Features
        cy.get('div.footer-nav-column ul.submenu li.subnav-parent ul.subtree li').contains('Docker Desktop').click();
        //assert the page
        cy.contains('The Docker Subscription Service Agreement has been updated.').should('be.visible');

        cy.get('div.footer-nav-column ul.submenu li.subnav-parent ul.subtree li').contains('Docker Hub').click();
        cy.get('div.footer-nav-column ul.submenu li.subnav-parent ul.subtree li').contains('Secure Software Supply').click();   
        cy.get('div.footer-nav-column ul.submenu li.subnav-parent ul.subtree li').contains('Chain').click();
        cy.get('div.footer-nav-column ul.submenu li.subnav-parent ul.subtree li').contains('Container Runtime').click();
        cy.get('div.footer-nav-column ul.submenu li.subnav-parent ul.subtree li').contains('Developer Tools').click();
        cy.contains('Integrated Developer Tools').click();
      
        

        //Developers  
        cy.get('div.footer-nav-column ul.submenu li').contains('Preview Program').click();  
        cy.get('div.footer-nav-column ul.submenu li').contains('Open Source').click();
        cy.get('div.footer-nav-column ul.submenu li').contains('Community').click();
        cy.get('div.footer-nav-column ul.submenu li').contains('Getting Started').click();
        cy.get('div.footer-nav-column ul.submenu li').contains('Docs').click(); 

        //Terms of Service
        cy.get('div.row div.col-md-8 div.legal-wrap').contains('Terms of Service').click();
        cy.contains('Docker Terms of Service').should('be.visible');
        cy.get('div.row div.col-md-8 div.legal-wrap').contains('Privacy').click();
        cy.get('div.row div.col-md-8 div.legal-wrap').contains('Legal').click();
        cy.contains('Docker Legal Terms').should('be.visible');

        //Docker roadmap a link to a github repository
        cy.get('div.footer-nav-column ul.submenu li.subnav-parent ul.subtree li').contains('Docker Product Roadmap').click();
    });
});