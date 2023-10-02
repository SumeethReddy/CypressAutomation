const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "t5k5ng",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
    browser: "chrome"
  },
});
