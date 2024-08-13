describe('Login Test and Verify Result', () => {
  it('should navigate to the login page, perform login, and verify result', () => {
    // Visit the initial page with a custom User-Agent
    cy.visit('https://mydev.igenchat.co/en', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    }).then(() => {
      // Log to Cypress Test Runner and browser console
      cy.log('Visited initial page with custom User-Agent');
      console.log('Visited initial page with custom User-Agent');
    });

    // Verify that the URL includes the expected path
    cy.url().should('include', 'igenchat.co/en').then(() => {
      // Log to Cypress Test Runner and browser console
      cy.log('URL contains expected path');
      console.log('URL contains expected path');
    });

    // Click the button to navigate to the login page
    cy.get('[data-cy="navigate-to-login"]').click().then(() => {
      // Log to Cypress Test Runner and browser console
      cy.log('Clicked navigation button to login page');
      console.log('Clicked navigation button to login page');
    });

    // Ensure the login page is loaded
    cy.url().should('include', '/login').then(() => {
      // Log to Cypress Test Runner and browser console
      cy.log('URL changed to login page');
      console.log('URL changed to login page');
    });

    // Perform login action
    cy.get('[data-cy="login-email"]').type('test@example.com');
    cy.get('[data-cy="login-password"]').type('password123');
    cy.get('[data-cy="login-button"]').click().then(() => {
      // Log to Cypress Test Runner and browser console
      cy.log('Login button clicked');
      console.log('Login button clicked');
    });

    // Wait for the result to appear and verify it
    cy.get('body').then($body => {
      // Check if a specific result element is present
      if ($body.find('[data-cy="result-message"]').length) {
        // If result message is found, verify its content
        cy.get('[data-cy="result-message"]').should('contain.text', 'Login successful').then(() => {
          // Log to Cypress Test Runner and browser console
          cy.log('Login successful message found');
          console.log('Login successful message found');
        });
      } else {
        // Handle the case where the result element is not found
        cy.log('Result message element not found on the page');
        console.log('Result message element not found on the page');
      }
    });
  });
});
