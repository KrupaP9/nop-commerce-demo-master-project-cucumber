package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.cucumber.pages.HomePage;
import com.nopcommerce.demo.cucumber.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginTestSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        String expectedMessage = "Welcome, Please Sign In!";
        String actualMessage = new LoginPage().getWelcomeText();
        Assert.assertEquals("Login page not displayed", expectedMessage, actualMessage);
    }
    @And("^I enter invalid email \"([^\"]*)\"$")
    public void iEnterInvalidEmail(String email){
        new LoginPage().enterEmailId(email);
    }

    @And("^I enter invalid password \"([^\"]*)\"$")
    public void iEnterInvalidPassword(String password) {
        new LoginPage().enterPassword(password);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String errorMessage)  {
        Assert.assertTrue(new LoginPage().getErrorMessage().contains("Login was unsuccessful. Please correct the errors and try again.\n" +
                "No customer account found"));
    }

    @And("^I enter valid email \"([^\"]*)\"$")
    public void iEnterValidEmail(String validEmail){
        new LoginPage().enterEmailId(validEmail);
    }

    @And("^I enter valid password \"([^\"]*)\"$")
    public void iEnterValidPassword(String validPassword) {
        new LoginPage().enterPassword(validPassword);
    }

    @Then("^I should see logout link$")
    public void iShouldSeeLogoutLink() {
        Assert.assertTrue(new HomePage().isLogOutLinkDisplay());
    }

    @And("^I click on logout button$")
    public void iClickOnLogoutButton() {
        new HomePage().clickOnLogOutLink();
    }

    @Then("^I should see login link$")
    public void iShouldSeeLoginLink() {
        Assert.assertTrue(new HomePage().isLogInLinkDisplay());
    }
}
