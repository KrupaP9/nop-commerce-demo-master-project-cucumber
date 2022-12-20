Feature: Computer Page Test
  As user I want to build my own computer
@Smoke @Regression
  Scenario: I should navigate to computer page successfully
    Given I am on homepage
    When I click on tab "Computers"
    Then I should navigate to computer page successfully
@Sanity @Regression
  Scenario: I should navigate to desktop page successfully
    Given I am on homepage
    When I click on tab "Computers"
    And I click on sub tab "Desktops"
    Then I should navigate to desktop page successfully
@Regression
  Scenario Outline: I should navigate to desktop page successfully
    Given I am on homepage
    When I click on tab "Computers"
    And I click on sub tab "Desktops"
    And I select product "Build your own computer"
    And I Select processor "<processor>"
    And I Select RAM "<ram>"
    And I Select HDD "<hdd>"
    And I Select OS "<os>"
    And I Select Software "<software>"
    And I Click on "ADD TO CART" Button
    Then I should see the message "The product has been added to your shopping cart"
    Examples:
      | processor                                       | ram           | hdd               | os                      | software                   |
      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]    | Microsoft Office [+$50.00] |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | Vista Home [+$50.00]    | Total Commander [+$5.00]   |