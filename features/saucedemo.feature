Feature: Demoing the saucedemo site

  Demoing the saucedemo site

  While this meets the letter of the requirements for this exercise, normally this should never
  be a run-on test like this.

  Scenario: perform a checkout on the saucelabs site
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
    When I remove "Sauce Labs Backpack" from my shopping cart
    And in the shopping cart I "continue shopping"
    And on the product page I add a "Sauce Labs Onesie" to my cart
    And I visit the shopping cart
    And in the shopping cart I "checkout"
    And on the checkout page I set the "First Name" field to "King"
    And on the checkout page I set the "Last Name" field to "Kong"
    And on the checkout page I set the "Zip Code" field to "10118"
    And on the checkout page I "continue"
    Then on the checkout page I should see the following items:
      | Name                     |
      | Sauce Labs Fleece Jacket |
      | Sauce Labs Onesie        |
    And on the checkout page I should see my total is "$62.62"
    When on the checkout page I "finish"
    Then I should see a checkout complete message:
    """
    THANK YOU FOR YOUR ORDER
    """
