/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

describe('Home', () => {  
    beforeEach(() => {
        cy.visit('/');
    });

    it('displays phones in the list', () => {
        cy.get('.phones-list__list li').should('have.length', 6)
    });

    it('should open first phone page with correct link', () => {
        cy.get('[data-cy=phone-link]')
        .first()
        .then(link => {
                cy.get('[data-cy=phone-link]').first().click();
                cy.url().should('include', link.prop('href'));
            }
        );
    });

    it('should open first phone page with correct title', () => {
        cy.get('.phones-list-item__title')
            .first()
            .invoke('text')
            .then((text => {
                cy.get('[data-cy=phone-link]').first().click();
                cy.get('.phone__title').should('have.text', text.trim());
            }));
    });

    it('should open last phone page with correct link', () => {
        cy.get('[data-cy=phone-link]')
        .last()
        .then(link => {
                cy.get('[data-cy=phone-link]').last().click();
                cy.url().should('include', link.prop('href'));
            }
        );
    });

    it('should open last phone page with correct title', () => {
        cy.get('.phones-list-item__title')
            .last()
            .invoke('text')
            .then((text => {
                cy.get('[data-cy=phone-link]').last().click();
                cy.get('.phone__title').should('have.text', text.trim());
            }));
    });
});