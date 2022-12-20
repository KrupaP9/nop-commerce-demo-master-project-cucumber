package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.cucumber.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.cucumber.pages.ComputerPage;
import com.nopcommerce.demo.cucumber.pages.DesktopsPage;
import com.nopcommerce.demo.cucumber.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ComputerSteps {
    @When("^I click on tab \"([^\"]*)\"$")
    public void iClickOnTab(String tab) throws InterruptedException {
        Thread.sleep(1000);
        new HomePage().clickOnMenuTab(tab);
    }

    @Then("^I should navigate to computer page successfully$")
    public void iShouldNavigateToComputerPageSuccessfully() {
        Assert.assertEquals("Computers", new ComputerPage().getPageTitleText());
    }

    @And("^I click on sub tab \"([^\"]*)\"$")
    public void iClickOnSubTab(String subTab) throws Throwable {
        new ComputerPage().clickOnSubMenu(subTab);
    }

    @Then("^I should navigate to desktop page successfully$")
    public void iShouldNavigateToDesktopPageSuccessfully() {
        Assert.assertEquals("Desktops", new ComputerPage().getPageTitleText());
    }

    @And("^I select product \"([^\"]*)\"$")
    public void iSelectProduct(String product) {
        new DesktopsPage().selectProduct(product);
    }

    @And("^I Select processor \"([^\"]*)\"$")
    public void iSelectProcessor(String processor) {
        new BuildYourOwnComputerPage().selectProcessor(processor);
    }

    @And("^I Select RAM \"([^\"]*)\"$")
    public void iSelectRAM(String ram) {
        new BuildYourOwnComputerPage().selectRam(ram);
    }

    @And("^I Select HDD \"([^\"]*)\"$")
    public void iSelectHDD(String hDD) {
        new BuildYourOwnComputerPage().selectHDD(hDD);
    }

    @And("^I Select OS \"([^\"]*)\"$")
    public void iSelectOS(String oS) throws Throwable {
        new BuildYourOwnComputerPage().selectOS(oS);
    }

    @And("^I Select Software \"([^\"]*)\"$")
    public void iSelectSoftware(String software){
        new BuildYourOwnComputerPage().selectSoftware(software);
    }

    @And("^I Click on \"([^\"]*)\" Button$")
    public void iClickOnButton(String addToCart) {
        new BuildYourOwnComputerPage().clickOnAddToCartButton();
    }

    @Then("^I should see the message \"([^\"]*)\"$")
    public void iShouldSeeTheMessage(String arg0) {
        Assert.assertEquals("The product has been added to your shopping cart", new BuildYourOwnComputerPage().getProductAddedMessage());
    }
}
