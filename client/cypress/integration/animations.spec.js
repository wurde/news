/**
 * Dependencies
 */

import pckg from '../../package.json';

/**
 * Define spec config
 */

Cypress.config('waitForAnimations', false);
Cypress.config('video', true);

/**
 * Define assertions
 */

describe("Animations", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("Has a page Loader animation", () => {
    cy.get('#articles-loader');
  });

  it("Has an article FadeIn animation", () => {
    cy.get('.anim-fadein')
      .should('has.css', 'opacity', '1')
      .and('has.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)');
  });
});
