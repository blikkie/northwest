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

  /**
   * @function
   * @param {string} name - name of item
   * @returns {Object} - Item instance for this name
   */
  itemByName(name) {
    return new Item(`div.cart_item*=${name}`);
  }

  /**
   * @function
   * @param {number} i - index of item needed
   * @returns {Object} - Item instance for this index
   */
  itemByIndex(i) {
    return new Item(`div.cart_item:nth-of-type(${i + 3})`);
  }

  /**
   * @function
   * @description find all items in shopping cart. For the purpose of this exercise this returns
   * just an array of names. We could easily extend this to be an array of objects if we also
   * wanted to assert on other properties.
   * @returns {Array} - array of items in cart
   */
  getItems() {
    const elements = this.items;
    const results = [];
    for (let i = 0; i < elements.length; i++) {
      const name = this.itemByIndex(i).name.getText();
      results.push(name);
    }

    return results;
  }
}

module.exports = new ShoppingCart();
