$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computerpage.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Page Test",
  "description": "As user I want to build my own computer",
  "id": "computer-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7128508000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "I should navigate to computer page successfully",
  "description": "",
  "id": "computer-page-test;i-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    },
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on tab \"Computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to computer page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 181315700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 16
    }
  ],
  "location": "ComputerSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 2383467700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldNavigateToComputerPageSuccessfully()"
});
formatter.result({
  "duration": 54692600,
  "status": "passed"
});
formatter.after({
  "duration": 745770300,
  "status": "passed"
});
formatter.before({
  "duration": 3895387100,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "I should navigate to desktop page successfully",
  "description": "",
  "id": "computer-page-test;i-should-navigate-to-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Sanity"
    },
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on tab \"Computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on sub tab \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should navigate to desktop page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 37200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 16
    }
  ],
  "location": "ComputerSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 2465653800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iClickOnSubTab(String)"
});
formatter.result({
  "duration": 590923300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldNavigateToDesktopPageSuccessfully()"
});
formatter.result({
  "duration": 48737000,
  "status": "passed"
});
formatter.after({
  "duration": 688152000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "I should navigate to desktop page successfully",
  "description": "",
  "id": "computer-page-test;i-should-navigate-to-desktop-page-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on tab \"Computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on sub tab \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Select RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Click on \"ADD TO CART\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see the message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "computer-page-test;i-should-navigate-to-desktop-page-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 28,
      "id": "computer-page-test;i-should-navigate-to-desktop-page-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 29,
      "id": "computer-page-test;i-should-navigate-to-desktop-page-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 30,
      "id": "computer-page-test;i-should-navigate-to-desktop-page-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 31,
      "id": "computer-page-test;i-should-navigate-to-desktop-page-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2964062400,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "I should navigate to desktop page successfully",
  "description": "",
  "id": "computer-page-test;i-should-navigate-to-desktop-page-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on tab \"Computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on sub tab \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Select RAM \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Click on \"ADD TO CART\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see the message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 56600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 16
    }
  ],
  "location": "ComputerSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 2410584800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iClickOnSubTab(String)"
});
formatter.result({
  "duration": 1258790300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1208761800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 132809800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 106669500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 73226300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 69773300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 71650200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADD TO CART",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOnButton(String)"
});
formatter.result({
  "duration": 59671300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 26
    }
  ],
  "location": "ComputerSteps.iShouldSeeTheMessage(String)"
});
formatter.result({
  "duration": 361364000,
  "status": "passed"
});
formatter.after({
  "duration": 696993600,
  "status": "passed"
});
formatter.before({
  "duration": 2407719200,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "I should navigate to desktop page successfully",
  "description": "",
  "id": "computer-page-test;i-should-navigate-to-desktop-page-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on tab \"Computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on sub tab \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Select RAM \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Click on \"ADD TO CART\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see the message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 150800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 16
    }
  ],
  "location": "ComputerSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 1702744300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iClickOnSubTab(String)"
});
formatter.result({
  "duration": 556820100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1042372800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 98409600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 107533600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 104364700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 91640100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 113491400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADD TO CART",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOnButton(String)"
});
formatter.result({
  "duration": 85524800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 26
    }
  ],
  "location": "ComputerSteps.iShouldSeeTheMessage(String)"
});
formatter.result({
  "duration": 412040900,
  "status": "passed"
});
formatter.after({
  "duration": 734064000,
  "status": "passed"
});
formatter.before({
  "duration": 3276951600,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "I should navigate to desktop page successfully",
  "description": "",
  "id": "computer-page-test;i-should-navigate-to-desktop-page-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on tab \"Computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on sub tab \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Select RAM \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Click on \"ADD TO CART\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see the message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 38700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 16
    }
  ],
  "location": "ComputerSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 1653985300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iClickOnSubTab(String)"
});
formatter.result({
  "duration": 569704100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1107860500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 145401300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 130493200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 95455600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 85645900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 125308000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADD TO CART",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOnButton(String)"
});
formatter.result({
  "duration": 76299700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 26
    }
  ],
  "location": "ComputerSteps.iShouldSeeTheMessage(String)"
});
formatter.result({
  "duration": 400454200,
  "status": "passed"
});
formatter.after({
  "duration": 745763300,
  "status": "passed"
});
formatter.uri("loginpage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5740674000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "I should navigate to login page successfully",
  "description": "",
  "id": "login-page-test;i-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    },
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 16100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 571100500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 47595400,
  "status": "passed"
});
formatter.after({
  "duration": 681597400,
  "status": "passed"
});
formatter.before({
  "duration": 2806060800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "I should see error message when attempting to log in with invalid credentials",
  "description": "",
  "id": "login-page-test;i-should-see-error-message-when-attempting-to-log-in-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Sanity"
    },
    {
      "line": 9,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter invalid email \"testprime@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid password \"testprime123\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again. No customer account found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 35100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 621925300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testprime@gmail.com",
      "offset": 23
    }
  ],
  "location": "LoginTestSteps.iEnterInvalidEmail(String)"
});
formatter.result({
  "duration": 114224300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testprime123",
      "offset": 26
    }
  ],
  "location": "LoginTestSteps.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 121793400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 473976000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again. No customer account found",
      "offset": 32
    }
  ],
  "location": "LoginTestSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 51049800,
  "status": "passed"
});
formatter.after({
  "duration": 699946400,
  "status": "passed"
});
formatter.before({
  "duration": 2604426400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "I should login successfully with valid credentials",
  "description": "",
  "id": "login-page-test;i-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter all register information",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on login link",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter valid email \"priyapatel1@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter valid password \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see logout link",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 35700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 612257400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iEnterAllRegisterInformation()"
});
formatter.result({
  "duration": 2414544400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 479655500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priyapatel1@gmail.com",
      "offset": 21
    }
  ],
  "location": "LoginTestSteps.iEnterValidEmail(String)"
});
formatter.result({
  "duration": 98965100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 24
    }
  ],
  "location": "LoginTestSteps.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 86878100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 892037100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iShouldSeeLogoutLink()"
});
formatter.result({
  "duration": 70784200,
  "status": "passed"
});
formatter.after({
  "duration": 673221400,
  "status": "passed"
});
formatter.before({
  "duration": 2146714900,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "I should logout successfully",
  "description": "",
  "id": "login-page-test;i-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I enter all the register information",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on login link",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter valid email \"priyapatel2@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter valid password \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should see login link",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 652384500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iEnterAllTheRegisterInformation()"
});
formatter.result({
  "duration": 2166786600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 502640700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priyapatel2@gmail.com",
      "offset": 21
    }
  ],
  "location": "LoginTestSteps.iEnterValidEmail(String)"
});
formatter.result({
  "duration": 101322300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 24
    }
  ],
  "location": "LoginTestSteps.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 100303500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 798027400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 849928800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iShouldSeeLoginLink()"
});
formatter.result({
  "duration": 46932200,
  "status": "passed"
});
formatter.after({
  "duration": 652719700,
  "status": "passed"
});
formatter.uri("registerpage.feature");
formatter.feature({
  "line": 1,
  "name": "Register Page Test",
  "description": "As user I want to register an account for the nop commerce website",
  "id": "register-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2226761300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "I should navigate to register page successfully",
  "description": "",
  "id": "register-page-test;i-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 50500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 621238500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 39800,
  "status": "passed"
});
formatter.after({
  "duration": 695597400,
  "status": "passed"
});
formatter.before({
  "duration": 2691579300,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "I should see that first name and last name and email and confirm password fields are mandatory",
  "description": "",
  "id": "register-page-test;i-should-see-that-first-name-and-last-name-and-email-and-confirm-password-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Sanity"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see all errors on mandatory fields",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 37000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 641759400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 100958500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iShouldSeeAllErrorsOnMandatoryFields()"
});
formatter.result({
  "duration": 435493500,
  "status": "passed"
});
formatter.after({
  "duration": 709043800,
  "status": "passed"
});
formatter.before({
  "duration": 2290405700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "I should be able to create account successfully",
  "description": "",
  "id": "register-page-test;i-should-be-able-to-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I select gender \"female\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter first name \"Janvi\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter last name \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter email \"janvipatel5@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select day \"10\", month \"April\", year \"2000\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter password \"jpassword1\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter confirm password \"jpassword1\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see message \"Your registration completed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 40300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 625967800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "female",
      "offset": 17
    }
  ],
  "location": "RegisterPageTest.iSelectGender(String)"
});
formatter.result({
  "duration": 69428900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Janvi",
      "offset": 20
    }
  ],
  "location": "RegisterPageTest.iEnterFirstName(String)"
});
formatter.result({
  "duration": 96008100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 19
    }
  ],
  "location": "RegisterPageTest.iEnterLastName(String)"
});
formatter.result({
  "duration": 102422100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "janvipatel5@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterPageTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 113202000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 14
    },
    {
      "val": "April",
      "offset": 26
    },
    {
      "val": "2000",
      "offset": 40
    }
  ],
  "location": "RegisterPageTest.iSelectDayMonthYear(String,String,String)"
});
formatter.result({
  "duration": 330368300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jpassword1",
      "offset": 18
    }
  ],
  "location": "RegisterPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 110094100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jpassword1",
      "offset": 26
    }
  ],
  "location": "RegisterPageTest.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 103771800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 809578600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 22
    }
  ],
  "location": "RegisterPageTest.iShouldSeeMessage(String)"
});
formatter.result({
  "duration": 41257800,
  "status": "passed"
});
formatter.after({
  "duration": 684951900,
  "status": "passed"
});
});