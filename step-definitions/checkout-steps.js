const { When, Then } = require('cucumber');
const camelCase = require('camel-case');
const checkoutPage = require('../page-objects/checkout-page');

When('on the checkout page I set the {string} field to {string}', (field, value) => {
  checkoutPage[camelCase(field)].waitForDisplayed();
  checkoutPage[camelCase(field)].setValue(value);
});

When('on the checkout page I {string}', (action) => {
  checkoutPage[camelCase(action)].waitForDisplayed();
  checkoutPage[camelCase(action)].click();
});

Then(/^on the checkout page I should see the following items:$/, (table) => {
  checkoutPage.cancel.waitForDisplayed();
  const expectedResults = table.rows().flat();
  const actualResults = checkoutPage.cart.getItems();
  actualResults.should.eql(expectedResults);
});

Then(/^on the checkout page I should see my total is "\$(\d+[.]?[\d+]*)"$/, (amount) => {
  checkoutPage.total.waitForDisplayed();
  checkoutPage.total.getText().should.include(amount);
});

Then(/^I should see a checkout complete message:$/, (message) => {
  checkoutPage.completeHeader.waitForDisplayed();
  checkoutPage.completeHeader.getText().should.equal(message);
});
