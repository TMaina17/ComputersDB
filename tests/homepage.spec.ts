import { test, expect } from '@playwright/test';
import HomePage from './support/pageobjectmodel/pages/homepage.page';
import addComputerPage from './support/pageobjectmodel/pages/addComputer.page ';

test('test POM', async ({ page }) => {
    const homePage = new HomePage(page);
    const addComputerPageInstance = new addComputerPage(page);
    
    await homePage.goTo();
    await homePage.clickAddNewComputer();
    
    
    await addComputerPageInstance.goTo();
    await addComputerPageInstance.addNewComputer();
    
    await addComputerPageInstance.assertNewComputerAdded();
    });

