class ProductPage {
  get inventoryList() { return browser.$('div.inventory_list'); }
  get items() { return browser.$$('div.inventory_item'); }

  getItems() {
    const text = browser.$$('div.inventory_item')[3].$('inventory_item_name').getText();
    // console.log(text);
  }
}

module.exports = new ProductPage();
