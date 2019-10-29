class ProductPage {
  get inventoryList() { return browser.$('div.inventory_list'); }
}

module.exports = new ProductPage();
