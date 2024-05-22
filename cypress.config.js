const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 600,

  e2e: {
    baseUrl:'https://magento.softwaretestingboard.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
