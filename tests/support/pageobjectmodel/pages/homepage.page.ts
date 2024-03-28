import { expect, Locator, Page } from "@playwright/test";

export default class HomePage 
{
    page: Page;
    addComputerButton: Locator
    computerAddedLabel: Locator


    constructor(page: Page) 
    { 
        this.page = page;
        //locators
    this.addComputerButton = this.page.locator("//*[@id='add']")
    this.computerAddedLabel = this.page.getByText("Done ! Computer Marsh has been created");
    }
     async goTo()
    {
        await this.page.goto("https://computer-database.gatling.io/computers");
    }

    //Actions
     async clickAddNewComputer()
    {
        await this.addComputerButton.click();
    }
}