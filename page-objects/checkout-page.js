const cart = require('./components/shopping-cart');

class CheckoutPage {
  constructor() {
    this.cart = cart;
  }
  get firstName() { return browser.$('input#first-name'); }
  get lastName() { return browser.$('input#last-name'); }
  get zipCode() { return browser.$('input#postal-code'); }
  get cancel() { return browser.$('a.cart_cancel_link'); }
  get continue() { return browser.$('input.btn_primary'); }
  get finish() { return browser.$('a[href="./checkout-complete.html"]'); }
  get itemTotal() { return browser.$('div.summary_subtotal_label'); }
  get tax() { return browser.$('div.summary_tax_label'); }
  get total() { return browser.$('div.summary_total_label'); }
  get completeHeader() { return browser.$('h2.complete-header'); }
}

module.exports = new CheckoutPage();
