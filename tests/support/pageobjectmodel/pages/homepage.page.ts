import { expect, Page } from "@playwright/test";

export default class HomePage 
{
    page: Page;

    constructor(page: Page) 
    { 
        this.page = page;
    }

    public async goto()
    {
        await this.page.goto("https://computer-database.gatling.io/computers");
    }

    //locators
    addComputerButton = () => this.page.getByText("Add a new computer");
    computerAddedLabel = () => this.page.getByText("Done ! Computer Marsh has been created");

    //Actions
    public async clickAddNewComputer()
    {
        await this.addComputerButton().click();
    }
}