const cart = require('./components/shopping-cart');

class ShoppingCartPage {
  constructor() {
    this.cart = cart;
  }
  get continueShopping() { return browser.$('div.cart_footer a.btn_secondary'); }
  get checkout() { return browser.$('a.checkout_button'); }
}

module.exports = new ShoppingCartPage();
