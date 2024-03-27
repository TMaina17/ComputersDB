import { expect, Page } from "@playwright/test";
import ComputerActions from "../sections/computerActions.section";
import ComputerDetails from "../sections/computerDetails.section";

export default class addComputerPage
{
    page: Page;
    computerActions: ComputerActions;
    computerDetails: ComputerDetails;


    constructor(page: Page) 
    { 
        this.page = page;
        this.computerActions = new ComputerActions(this.page);
        this.computerDetails = new ComputerDetails(this.page);
    }

    public async goto()
    {
        await this.page.goto("https://computer-database.gatling.io/computers/new");
    }
    //locators
    computerAddedLabel = () => this.page.getByText("Done ! Computer Marsh has been created");

    public async addNewComputer()
    {
        await this.computerDetails.enterComputerDetails();
        await this.computerActions.clickcreateNewComputer();
    }
    public async assertNewComputerAdded()
    {
        await expect(this.computerAddedLabel()).toBeVisible()
    }
}
