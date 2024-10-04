import SitesPage from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/LoginUtilities.js';
describe(('Sites Automation for Page'), () => {
  const page = new SitesPage();
  const utilities = new Utilities();




 it('TC:1 Open the app with sign-in', async () => {
    await browser.url(utilities.URL); //'https://abc-5021.pc-staging.com/admin'
    await browser.maximizeWindow();
    await utilities.Signin();
    await browser.pause(5000);

})


/*------------------------------------------------------------------
 
        -------------  Page  ----------------

 ------------------------------------------------------------------*/



  it(('TC:2 Sites, Page automation page delete'), async () => {
    //await browser.url('https://prolific-cloud.pc-staging.com/');
    // await browser.url('https://prolific1.pc-staging.com/signin');
    // await browser.url(utilities.URL); //'https://abc-5021.pc-staging.com/admin'
    // await browser.maximizeWindow();


    await page.SitesClick.click();


    await browser.takeScreenshot();
    
    await page.pageClick.click();
    await page.deletePage.click();
    await browser.takeScreenshot();
    await page.confirmDeletePage.click();

    const deletePageToast = await page.deletePageToastMessage.getText();
    console.log('Page Delete Toast Message::===', deletePageToast);
    await expect(page.deletePageToastMessage).toHaveText("Deleted Successfully");

    await browser.takeScreenshot();

  })

  it(('TC:3 Sites, Page automation page create template save'), async () => {

    await page.createNew.click();
    await page.pageName.setValue("Tamporary");
    await page.addSection.click();
    await page.singleSection.click();
    await page.eyeIcon.click();
    await page.eyeIcon.click();



    await browser.pause(5000);
    await browser.takeScreenshot();

    await page.useTemplatePage.click();
    await browser.pause(4000);
    await page.paginationFour.click();
    await browser.pause(4000);
    await page.importPage.click();

    const tamplateImportToast1 = await page.importPageTamplateToastMess1.getText();
    console.log('Tamplete Import Toast Message 1 ::===', tamplateImportToast1);
    await expect(page.importPageTamplateToastMess1).toHaveText("Template Imported");
    await browser.takeScreenshot();

    const tamplateImportToast2 = await page.importPageTamplateToastMess2.getText();
    console.log('Tamplete Import Toast Message 2 ::===', tamplateImportToast2);
    await expect(page.importPageTamplateToastMess2).toHaveText("Template successfully imported on your page");

    await browser.takeScreenshot();

  })

    it(('TC:4 Sites, Page automation page save and publish'), async () => {
    await page.pageSave.click();

    const pageSaveToastMess = await page.toastMessPageSave.getText();
    console.log('Page Saved Toast Message 2 ::===', pageSaveToastMess);
    await expect(page.toastMessPageSave).toHaveText("Content saved successfully");

    await browser.takeScreenshot();
    await browser.pause(4000);
    await page.pagePublish.click();

    const pagePublishToastMess = await page.toastMessPagePublish.getText();
    console.log('Page Published Toast Message 2 ::===', pagePublishToastMess);
    await expect(page.toastMessPagePublish).toHaveText("Content published successfully");

    
    await browser.takeScreenshot();
    await browser.pause(4000);
    
  })


  
})