class Item {
  constructor(selector) {
    this.baseSelector = selector;
  }

  get quantity() { return browser.$(this.baseSelector).$('div.cart_quantity'); }
  get name() { return browser.$(this.baseSelector).$('div.inventory_item_name'); }
  get price() { return browser.$(this.baseSelector).$('div.inventory_item_price'); }
  get remove() { return browser.$(this.baseSelector).$('button.cart_button'); }
}

module.exports = Item;
