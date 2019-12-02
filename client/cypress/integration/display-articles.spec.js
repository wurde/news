/**
 * Define assertions
 */

describe('Display articles', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Has a list of articles', () => {
    cy.get('h1').contains('News')

    const articles = cy.get('li.article')
    articles.should('have.length.of.at.least', 2)
    .and('have.css', 'list-style-type', 'none');

    const link = articles.first().get('a');
  });
});
