import { expect, Locator, Page } from "@playwright/test";
import ComputerActions from "../sections/computerActions.section";
import ComputerDetails from "../sections/computerDetails.section";

export default class addComputerPage
{
    page: Page;
    computerActions: ComputerActions;
    computerDetails: ComputerDetails;
    computerAddedLabel: Locator


    constructor(page: Page) 
    { 
        this.page = page;
        this.computerActions = new ComputerActions(this.page);
        this.computerDetails = new ComputerDetails(this.page);

        //locators
        this.computerAddedLabel = this.page.locator("//*[@id='add']")
    }

     async goTo()
    {
        await this.page.goto("https://computer-database.gatling.io/computers/new");
    }
    
     async addNewComputer()
    {
        await this.computerDetails.enterComputerDetails();
        await this.computerActions.clickcreateNewComputer();
    }
     
    async assertNewComputerAdded()
    {
        await expect(this.computerAddedLabel).toBeVisible()
    }
}
