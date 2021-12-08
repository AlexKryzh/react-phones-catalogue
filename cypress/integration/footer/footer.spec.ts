/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

describe('Pgae Footer', () => {   
    beforeEach(() => {
        cy.visit('/');
    }); 
    
    it('should have current year', () => {
        const date = new Date;
        cy.get('.footer__year').should('include.text', date.getFullYear());
    })
});