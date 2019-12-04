/**
 * Define assertions
 */

describe("Accessibility", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Has accessible color contrast', () => {
    cy.get('body').should('has.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get('main').should('has.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get('#articles a').should('has.css', 'color', 'rgb(0, 0, 0)')
    .and('has.css', 'font-weight', '700');
  });

  it('De-emphasize heading', () => {
    cy.get('h1').should('has.css', 'text-align', 'right');
  });
});
