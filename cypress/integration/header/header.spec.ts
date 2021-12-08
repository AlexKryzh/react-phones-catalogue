/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

describe('Page Header', () => {
    beforeEach(() => {
        cy.visit('/');
    });  
    it('shoud have title', () => {
        cy.get('.header__title').should('have.text', 'Phones Catalogue');
    })
});