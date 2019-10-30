class ProductPage {
  get shoppingCart() { return browser.$('a.shopping_cart_link'); }
  get inventoryList() { return browser.$('div.inventory_list'); }
  get sortOrder() { return browser.$('select.product_sort_container'); }
  get items() { return browser.$$('div.inventory_item'); }

  addItemToCart(itemName) {
    browser.$(`div.inventory_item*=${itemName}`).$('button.btn_primary').click();
  }
}

module.exports = new ProductPage();
