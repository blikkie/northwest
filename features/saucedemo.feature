Feature: Demoing the saucedemo site

  Demoing the saucedemo site

  While this meets the letter of the requirements for this exercise, normally this should never
  be a run-on test like this.

  Scenario: successful login
    Given I visit the login page
    When on the login page I enter the username "standard_user"
    And on the login page I enter the password "secret_sauce"
    And on the login page I click "login"
    Then I should see the products page
    When on the product page I sort by "Price (low to high)"
    And on the product page I add a "Sauce Labs Backpack" to my cart
    And on the product page I add a "Sauce Labs Fleece Jacket" to my cart
    And I visit the shopping cart
    Then in the shopping cart I should see the following items:
      | Name                     |
      | Sauce Labs Backpack      |
      | Sauce Labs Fleece Jacket |
