class Item {
  constructor(selector) {
    this.baseSelector = selector;
  }

  get quantity() { return browser.$(this.baseSelector).$('div.cart_quantity'); }
  get name() { return browser.$(this.baseSelector).$('div.inventory_item_name'); }
  get price() { return browser.$(this.baseSelector).$('div.inventory_item_price'); }
  get remove() { return browser.$(this.baseSelector).$('button.cart_button'); }
}

class ShoppingCart {
  get items() { return browser.$$('div.cart_item'); }
  get continueShopping() { return browser.$('div.cart_footer a.btn_secondary'); }
  get checkout() { return browser.$('div.cart_footer checkout_button'); }

  getItemByName(name) {
    return new Item(`div.cart_item*=${name}`);
  }

  getItemByIndex(i) {
    return new Item(`div.cart_item:nth-of-type(${i + 3})`);
  }

  getItems() {
    const elements = this.items;
    const results = [];
    for (let i = 0; i < elements.length; i++) {
      const name = this.getItemByIndex(i).name.getText();
      results.push(name);
    }

    return results;
  }
}

module.exports = new ShoppingCart();
