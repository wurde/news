/**
 * Define assertions
 */

describe("Readability", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Has accessible color contrast', () => {
    cy.get('body').should('has.css', 'background-color', 'rgb(221, 221, 221)');
  })
})