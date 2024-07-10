describe('Index Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('displays the correct title', () => {
      cy.title().should('eq', 'Desafio Lacrei Saúde');
    });
  
    it('contains expected elements', () => {
      cy.get('h1').should('contain.text', 'Bem-vindo ao Lacrei Saúde');
    });
  
    it('navigates to About page correctly', () => {
      cy.get('a[href="/about"]').click();
      cy.url().should('include', '/about');
      cy.get('h1').should('contain.text', 'Sobre Lacrei Saúde');
    });
});