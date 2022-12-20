package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.cucumber.pages.HomePage;
import com.nopcommerce.demo.cucumber.pages.RegisterPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class RegisterPageTest {
    @And("^I click on register link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }
    @Then("^I should navigate to register page successfully$")
    public void iShouldNavigateToRegisterPageSuccessfully() {
    }
    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().clickOnRegisterButton();
    }

    @Then("^I should see all errors on mandatory fields$")
    public void iShouldSeeAllErrorsOnMandatoryFields() {
        Assert.assertEquals("First name is required.", new RegisterPage().getValidationErrorMessageForField("FirstName"));
        Assert.assertEquals("Last name is required.", new RegisterPage().getValidationErrorMessageForField("LastName"));
        Assert.assertEquals("Email is required.", new RegisterPage().getValidationErrorMessageForField("Email"));
        Assert.assertEquals("Password is required.", new RegisterPage().getValidationErrorMessageForField("Password"));
        Assert.assertEquals("Password is required.", new RegisterPage().getValidationErrorMessageForField("ConfirmPassword"));
    }

    @And("^I select gender \"([^\"]*)\"$")
    public void iSelectGender(String gender) {
        new RegisterPage().selectGender(gender);
    }

    @And("^I enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String firstName) {
        new RegisterPage().enterFirstName(firstName);
    }
    @And("^I enter last name \"([^\"]*)\"$")
    public void iEnterLastName(String lastName) {
        new RegisterPage().enterLastName(lastName);
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email) {
        new RegisterPage().enterEmail(email);
    }
    @And("^I select day \"([^\"]*)\", month \"([^\"]*)\", year \"([^\"]*)\"$")
    public void iSelectDayMonthYear(String day, String month, String year){
       new RegisterPage().selectDateOfBirth(day,month,year);
    }
    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new RegisterPage().enterPassword(password);
    }

    @And("^I enter confirm password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String confirmPassword) {
        new RegisterPage().enterConfirmPassword(confirmPassword);
    }

    @Then("^I should see message \"([^\"]*)\"$")
    public void iShouldSeeMessage(String message) {
      Assert.assertEquals(message,new RegisterPage().getYourRegCompletedText());
    }

    @And("^I enter all register information$")
    public void iEnterAllRegisterInformation() {
        new RegisterPage().selectGender("female");
        new RegisterPage().enterFirstName("Priya");
        new RegisterPage().enterLastName("Patel");
        new RegisterPage().enterEmail("priyapatel11@gmail.com");
        new RegisterPage().selectDateOfBirth("10","April","2000");
        new RegisterPage().enterPassword("password123");
        new RegisterPage().enterConfirmPassword("password123");
        new RegisterPage().clickOnRegisterButton();
        new RegisterPage().clickOnContinueButton();
    }

    @And("^I enter all the register information$")
    public void iEnterAllTheRegisterInformation() {
        new RegisterPage().selectGender("female");
        new RegisterPage().enterFirstName("Priya");
        new RegisterPage().enterLastName("Patel");
        new RegisterPage().enterEmail("priyapatel22@gmail.com");
        new RegisterPage().selectDateOfBirth("10","April","2000");
        new RegisterPage().enterPassword("password123");
        new RegisterPage().enterConfirmPassword("password123");
        new RegisterPage().clickOnRegisterButton();
        new RegisterPage().clickOnContinueButton();
    }
}
