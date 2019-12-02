describe('Display articles', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Has a list of articles', () => {
    cy.get('h1').contains('News');
  });
});
