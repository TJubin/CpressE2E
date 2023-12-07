const { defineConfig } = require("cypress");

module.exports = defineConfig({
 
  reporter: 'cypress-mochawesome-reporter',// for generating HTML report

  "e2e": {
      "baseUrl": "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
      "setupNodeEvents": (on, config) => {
        // implement node event listeners here
        config.screenshotOnRunFailure = true;
        require('cypress-mochawesome-reporter/plugin')(on); // for html report
      }
    },
  
  
  //includeShadowDom: true,
  

  
  /*env:{
    "URL": "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
  },*/
  
  viewportWidth:760,
  viewportHeight:535,
  
  
});
