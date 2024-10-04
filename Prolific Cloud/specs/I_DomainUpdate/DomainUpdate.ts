import DomainUpdate from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/LoginUtilities.js';


describe('Domain Update for checking', () => {

    const dU = new DomainUpdate();
    const utilities = new Utilities();

    
    before('Open App', async () => {


        await browser.url(utilities.URLDomain)
        await browser.maximizeWindow();
        await browser.pause(1000);

    })



    it('Domain update', async () => {

        await utilities.SigninForDomain();

        await dU.websiteSettingsClick.click();
        await dU.domainClick.click();
        await browser.pause(4000);
        await utilities.domainChange();
        await browser.pause(4000);
        await dU.saveCustomDomain.click();
        await browser.pause(3000);
        await dU.getDomain.click();
        await browser.pause(6000);




    })




})