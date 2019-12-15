/**
 * Define assertions
 */

describe("Accessibility", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Has accessible color contrast', () => {
    cy.get('body').should('has.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get('main').should('has.css', 'background-color', 'rgba(0, 0, 0, 0)');
  });

  it('De-emphasize heading', () => {
    cy.get('h1').should('has.css', 'text-align', 'right');
  });
});
