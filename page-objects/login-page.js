class LoginPage {
  get username() { return browser.$('input#user-name'); }
  get password() { return browser.$('input#password'); }
  get login() { return browser.$('input[type="submit"'); }

  open() {
    browser.url('/');
  }
}

module.exports = new LoginPage();
