import { Page } from "@playwright/test";

export default class ComputerActions {
    page: Page;

    constructor(page: Page)
    {
        this.page = page;
    }

    //locators
    createComputerButton = () => this.page.getByText ("Create this computer");
      //Actions
    public async clickcreateNewComputer()
    {
        await this.createComputerButton().click();
    }    
}