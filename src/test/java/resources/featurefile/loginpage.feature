Feature: Login Page Test
  As user I want to login into nop commerce website
  @Smoke @Regression
  Scenario: I should navigate to login page successfully
    Given I am on homepage
    When I click on login link
    Then I should navigate to login page successfully

  @Sanity @Regression
  Scenario: I should see error message when attempting to log in with invalid credentials
    Given I am on homepage
    When I click on login link
    And I enter invalid email "testprime@gmail.com"
    And I enter invalid password "testprime123"
    And I click on login button
    Then I should see the error message "Login was unsuccessful. Please correct the errors and try again. No customer account found"

  @Regression
  Scenario: I should login successfully with valid credentials
    Given I am on homepage
    When I click on register link
    And I enter all register information
    And I click on login link
    And I enter valid email "priyapatel11@gmail.com"
    And I enter valid password "password123"
    And I click on login button
    Then I should see logout link

  @Regression
  Scenario: I should logout successfully
    Given I am on homepage
    When I click on register link
    And I enter all the register information
    And I click on login link
    And I enter valid email "priyapatel22@gmail.com"
    And I enter valid password "password123"
    And I click on login button
    And I click on logout button
    Then I should see login link
