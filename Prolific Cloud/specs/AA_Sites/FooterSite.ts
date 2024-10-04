import SitesFooter from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/LoginUtilities.js';
describe(('Sites Automation for Footer'), () => {
    const footer = new SitesFooter();
    const utilities = new Utilities();




    it('TC:1 Open the app with sign-in', async () => {
        await browser.url(utilities.URL); //'https://abc-5021.pc-staging.com/admin'
        await browser.maximizeWindow();
        await utilities.Signin();
        await browser.pause(5000);

    })

    /* -----------------------------------------------------------------
            
                   -------------  Footer Set  ----------------
        
    ------------------------------------------------------------------ */


    it(('TC:2 Sites, Footer Set automation Delete Footer'), async () => {

        await footer.SitesClick.click();
        await footer.footerClick.click();
        await footer.deleteFooterPage.click();
        await browser.pause(2000);
        await browser.takeScreenshot();

        await footer.confirmDeleteFooterPage.click();


        const toastMessHeaderDelete = await footer.deleteHeaderToastMess.getText();
        console.log('Footer Delete Toast Message  ::===', toastMessHeaderDelete);
        await expect(footer.deleteHeaderToastMess).toHaveText("Deleted Successfully");

        await browser.takeScreenshot();
        await browser.pause(2000);

    })

    it(('TC:3 Sites, Footer Set automation Footer Active and Dactive'), async () => {

        await footer.activeHeaderPage.click();

        const toastMessFooterActive = await footer.footerActiveToastMess.getText();
        console.log('Footer Active Toast Message  ::===', toastMessFooterActive);
        await expect(footer.footerActiveToastMess).toHaveText("Footer activated successfully.");
        await browser.takeScreenshot();

        await browser.takeScreenshot();
        await browser.pause(5000);

        await footer.dactiveHeaderPage.click();

        const toastMessFooterDactive = await footer.footerDactiveToastMess.getText();
        console.log('Footer Dactive Toast Message  ::===', toastMessFooterDactive);
        await expect(footer.footerDactiveToastMess).toHaveText("Footer deactivated successfully.");

        await browser.takeScreenshot();
        await browser.pause(5000);


    })

    it(('TC:3 Sites, Footer Set automation Creatae Footer'), async () => {

        await footer.createNewFooterClick.click();
        await footer.pageNameFooter.setValue("Footer");
        await footer.addSection.click();
        await footer.singleSection.click();
        await browser.takeScreenshot();

    })

    it(('TC:4 Sites, Footer Set automation Footer Save and Published'), async () => {
        //await footer.icon.click();
        await footer.footerSave.click();

        const footerSaveToastMess = await footer.toastMessPageSave.getText();
        console.log('Footer Saved Toast Message 2 ::===', footerSaveToastMess);
        await expect(footer.toastMessPageSave).toHaveText("Content saved successfully");
        
        await browser.takeScreenshot();
        await browser.pause(5000);

        await footer.footePublish.click();

        const footerPublishToastMess = await footer.toastMessPagePublish.getText();
        console.log('Footer Published Toast Message 2 ::===', footerPublishToastMess);
        await expect(footer.toastMessPagePublish).toHaveText("Content published successfully");

        await browser.takeScreenshot();
        await browser.pause(4000);
       

    })





})