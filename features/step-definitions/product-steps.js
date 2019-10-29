const { Then } = require('cucumber');
const productPage = require('../page-objects/product-page');

Then('I should see the products page', () => {
  productPage.inventoryList.waitForDisplayed();
});
