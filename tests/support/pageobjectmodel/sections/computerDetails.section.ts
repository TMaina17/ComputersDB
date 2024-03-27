import { Page } from "@playwright/test";

export default class ComputerDetails {
    page: Page;

    constructor(page: Page)
    {
        this.page = page;
    }

    //locators
    nameInput = () => this.page.getByLabel("computer name");
    introducedTextbox = () => this.page.getByLabel("introduced");
    discontinuedTextbox = () => this.page.getByLabel("discontinued");
    companySelectTextbox = () => this.page.getByLabel("company");

     //Actions
    public async enterComputerDetails()
    {
        await this.nameInput().fill("Marsh");
        await this.introducedTextbox().fill("1999-11-11");
        await this.discontinuedTextbox().fill("2001-11-11");
        await this.companySelectTextbox().selectOption({label: "Apple Inc." });        
    }    
}