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
    cy.get('.article .card')
      .should(
        'has.css',
        'box-shadow',
        'rgba(77, 99, 119, 0.47) 0px 16px 24px -8px'
      )
      .and('has.css', 'border', '1px solid rgba(0, 0, 0, 0.125)')
      .and('has.css', 'border-radius', '4px')
      .and('has.css', 'padding', '5px')
      .and('has.css', 'margin', '10px 0px');
  });

  it('De-emphasize heading', () => {
    cy.get('h1').should('has.css', 'text-align', 'right');
  });
});
