describe('Open URL Test and Click on Element', () => {
    it('should open the specified URL with a custom User-Agent and click on the element', () => {
      // Modify the User-Agent header and visit the URL
      cy.visit('https://mydev.igenchat.co/en', {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
  
      // Verify that the URL includes the expected path
      cy.url().should('include', 'igenchat.co/en');
  
      // Optionally, wait for a specific element to ensure the page is fully loaded
      cy.get('body').should('be.visible');
  
      // Click on the element with the specified selector
      cy.get('.gap-[28px] > .text-blue-600', { timeout: 10000 }) // Increase timeout if needed
        .should('be.visible') // Ensure the element is visible
        .click(); // Perform the click action
    });
  });
  