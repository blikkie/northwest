const config = require('../../config/config');

class LoginPage {
  get username() { return browser.$('input#user-name'); }
  get password() { return browser.$('input#password'); }
  get login() { return browser.$('input[type="submit"'); }

  open() {
    browser.url('/');
  }

  signin(user) {
    this.open();
    this.username.waitForDisplayed();
    this.username.setValue(user);
    this.password.setValue(config.testPassword);
    this.login.click();
  }
}

module.exports = new LoginPage();
