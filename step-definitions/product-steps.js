const { When, Then } = require('cucumber');
const productPage = require('../page-objects/product-page');

When('on the product page I sort by {string}', (order) => {
  productPage.sortOrder.waitForDisplayed();
  productPage.sortOrder.selectByVisibleText(order);
});

When(/^on the product page I add an? "([^"]*)" to my cart$/, (item) => {
  productPage.items[0].waitForDisplayed();
  productPage.addItemToCart(item);
});

When('I visit the shopping cart', () => {
  productPage.shoppingCart.waitForDisplayed();
  productPage.shoppingCart.click();
});

Then('I should see the products page', () => {
  productPage.inventoryList.waitForDisplayed();
});
