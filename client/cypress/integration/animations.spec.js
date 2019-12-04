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

  it.skip("Has an article FadeIn animation", () => {});
});
