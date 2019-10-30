const Item = require('./cart-item');

class ShoppingCart {
  get items() { return browser.$$('div.cart_item'); }

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
