const { Then } = require('cucumber');
const productPage = require('../page-objects/product-page');

Then('I should see the products page', () => {
  productPage.inventoryList.waitForDisplayed();
});

Then('I should see the videos are sorted {string}', (order) => {
  productPage.inventoryList.waitForDisplayed();
  productPage.getItems();
});
