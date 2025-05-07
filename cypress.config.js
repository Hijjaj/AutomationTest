module.exports = {
  projectId: 'i5thmw',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
    video: true,
    screenshotOnRunFailure: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',        
      overwrite: false,                    
      html: true,                          
      json: true                           
    }
  }
};
