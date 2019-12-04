/**
 * Dependencies
 */

import pckg from '../../package.json';

/**
 * Define assertions
 */

describe("Header Info", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("Has version information", () => {
    cy.get('header #version').contains(pckg.version);
  });
});
