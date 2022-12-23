Feature: Register Page Test
  As user I want to register an account for the nop commerce website

@Smoke @Regression
  Scenario: I should navigate to register page successfully
    Given I am on homepage
    When I click on register link
    Then I should navigate to register page successfully

@Sanity @Regression
  Scenario: I should see that first name and last name and email and confirm password fields are mandatory
    Given I am on homepage
    When I click on register link
    And I click on register button
    Then I should see all errors on mandatory fields

 @Regression
  Scenario: I should be able to create account successfully
    Given I am on homepage
    When I click on register link
    And I select gender "female"
    And I enter first name "Janvi"
    And I enter last name "Patel"
    And I enter email "janvipatel6@gmail.com"
    And I select day "10", month "April", year "2000"
    And I enter password "jpassword1"
    And I enter confirm password "jpassword1"
    And I click on register button
    Then I should see message "Your registration completed"