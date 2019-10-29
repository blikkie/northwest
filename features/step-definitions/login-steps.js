const { Given, When } = require('cucumber');
const loginPage = require('../page-objects/login-page');

Given('I visit the login page', () => {
  loginPage.open();
});

When(/^on the login page I enter the (username|password) "([^"]*)"$/, (field, value) => {
  loginPage[field].waitForDisplayed();
  loginPage[field].setValue(value);
});

When('on the login page I click {string}', (element) => {
  loginPage[element].click();
});
