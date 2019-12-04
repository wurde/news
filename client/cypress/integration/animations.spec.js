/**
 * Dependencies
 */

import pckg from '../../package.json';

/**
 * Define assertions
 */

describe("Animations", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it.skip("Has a page Loader animation", () => {});
  it.skip("Has an article FadeIn animation", () => {});
});
