const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",  // Directory where the reports will be saved
      overwrite: false,              // Prevent overwriting of reports
      html: true,                    // Generate HTML report
      json: true,                    // Generate JSON report
      timestamp: "mmddyyyy_HHMMss",  // Add a timestamp to the report name
      reportTitle: "Cypress Test Report", // Title of the report
      embeddedScreenshots: true,     // Embed screenshots in the report
      inlineAssets: true             // Inline assets for a self-contained report
    },
    chromeWebSecurity: false          // Disable Chrome's web security features
  }
});

