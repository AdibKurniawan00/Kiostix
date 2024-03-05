const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  waitForAnimations: false,
  animationDistanceThreshold: 50,
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on)
      chromeWebSecurity: false
      // implement node event listeners here
    },
  },
});
