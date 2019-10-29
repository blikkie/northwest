Feature: logging into site

  Logging into the saucedemo site

  Scenario: successful login
    Given I visit the login page
    When on the login page I enter the username "standard_user"
    And on the login page I enter the password "secret_sauce"
    And on the login page I click "login"
    Then I should see the products page
