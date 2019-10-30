class ProductPage {
  get shoppingCart() { return browser.$('a.shopping_cart_link'); }
  get inventoryList() { return browser.$('div.inventory_list'); }
  get sortOrder() { return browser.$('select.product_sort_container'); }
  get items() { return browser.$$('div.inventory_item'); }

  /**
   * @function
   * @description click the add to cart button for an item in the shopping cart
   * Note that if we wanted to do anything more sophisticated on this page, I would
   * follow the paradigm in the shopping cart page object, in which case the step would
   * do an action: 'productPage.getItemByName(name).addToCart.click()'
   * @param {string} itemName - Name of item to add to cart
   */
  addItemToCart(itemName) {
    browser.$(`div.inventory_item*=${itemName}`).$('button.btn_primary').click();
  }
}

module.exports = new ProductPage();
