import SitesHeader from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/LoginUtilities.js';
describe(('Sites Automation for Header'), () => {
  const headerSite = new SitesHeader();
  const utilities = new Utilities();




 it('TC:1 Open the app with sign-in', async () => {
    await browser.url(utilities.URL); //'https://abc-5021.pc-staging.com/admin'
    await browser.maximizeWindow();
    await utilities.Signin();
    await browser.pause(5000);

})
 
 
 /* -----------------------------------------------------------------
 
        -------------  Header Set  ----------------

 ----------------------------------------------------------------- */

   it(('TC:2 Sites, Header Set automation Header Delete'), async () => {

    await headerSite.SitesClick.click();
    await headerSite.headerSetClick.click();
    await headerSite.deleteHeaderPage.click();
    await browser.pause(2000);
    await browser.takeScreenshot();
    await headerSite.confirmDeleteHeaderPage.click();

    const toastMessHeaderDelete = await headerSite.deleteHeaderToastMess.getText();
    console.log('Header Delete Toast Message  ::===', toastMessHeaderDelete);
    await expect(headerSite.deleteHeaderToastMess).toHaveText("Deleted Successfully");

    await browser.takeScreenshot();
    await browser.pause(5000);

   })

   it(('TC:3 Sites, Header Set automation Header Active and Dactive'), async () => {

    await headerSite.activeHeaderPage.click();

    const toastMessHeaderActive = await headerSite.headerActiveToastMess.getText();
    console.log('Header Active Toast Message  ::===', toastMessHeaderActive);
    await expect(headerSite.headerActiveToastMess).toHaveText("Abc Header activated successfully.");
    
    await browser.takeScreenshot();
    await browser.pause(5000);

    await headerSite.dactiveHeaderPage.click();

    const toastMessHeaderDactive = await headerSite.headerDactiveToastMess.getText();
    console.log('Header Dactive Toast Message  ::===', toastMessHeaderDactive);
    await expect(headerSite.headerDactiveToastMess).toHaveText("Abc Header deactivated successfully.");

    await browser.takeScreenshot();
    await browser.pause(5000);


   })

    

    it(('TC:4 Sites, Header Set Header create'), async () => {

    await headerSite.createNewHeaderSet.click();
    await headerSite.setHeaderName.setValue("Abc Header");
    await headerSite.addSection.click();
    await browser.takeScreenshot();
    await headerSite.singleSection.click();
    await browser.takeScreenshot();


    })

    it(('TC:5 Sites, Header Set automation Header Save and Published'), async () => {

    await headerSite.headerSave.click();

    const headerSaveToastMess = await headerSite.toastMessPageSave.getText();
    console.log('Header Saved Toast Message 2 ::===', headerSaveToastMess);
    await expect(headerSite.toastMessPageSave).toHaveText("Content saved successfully");

    await browser.takeScreenshot();
    await browser.pause(5000);

    await headerSite.headerPublish.click();

    const headerPublishToastMess = await headerSite.toastMessPagePublish.getText();
    console.log('Header Published Toast Message 2 ::===', headerPublishToastMess);
    await expect(headerSite.toastMessPagePublish).toHaveText("Content published successfully");

    await browser.takeScreenshot();
    await browser.pause(2000);

   })




   })

