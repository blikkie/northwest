const { When, Then } = require('cucumber');
const shoppingCart = require('../page-objects/shopping-cart-page');

Then(/^in the shopping cart I should see the following items:$/, (table) => {
  shoppingCart.continueShopping.waitForDisplayed();
  const expectedResults = table.rows().flat();
  const actualResults = shoppingCart.getItems();
  actualResults.should.eql(expectedResults);
});
