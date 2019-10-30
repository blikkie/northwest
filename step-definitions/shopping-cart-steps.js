const { When, Then } = require('cucumber');
const camelCase = require('camel-case');
const shoppingCart = require('../page-objects/shopping-cart-page');

When('I remove {string} from my shopping cart', (item) => {
  shoppingCart.cart.itemByName(item).remove.waitForDisplayed();
  shoppingCart.cart.itemByName(item).remove.click();
});

When('in the shopping cart I {string}', (action) => {
  shoppingCart[camelCase(action)].waitForDisplayed();
  shoppingCart[camelCase(action)].click();
});

Then(/^in the shopping cart I should see the following items:$/, (table) => {
  shoppingCart.continueShopping.waitForDisplayed();
  const expectedResults = table.rows().flat();
  const actualResults = shoppingCart.cart.getItems();
  actualResults.should.eql(expectedResults);
});
