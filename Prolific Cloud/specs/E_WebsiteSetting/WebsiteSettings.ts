import WebsiteSettings from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/LoginUtilities.js';

describe('website setting load', () => {
    const website = new WebsiteSettings();
    const utilities = new Utilities();


    
    before('Open App', async () => {

        //await browser.url('https://prolific-cloud.pc-staging.com/');
        // await browser.url('https://prolific1.pc-staging.com/signin');
        await browser.url(utilities.URL)  //'https://abc-5021.pc-staging.com/admin'
        await browser.maximizeWindow();
    })

    /* -----------------------------------------------------------------
             
            -------------  Theme  ----------------
         
        ----------------------------------------------------------------- */


    it('Theme settings', async () => {
        await utilities.Signin();
      

        
        await browser.takeScreenshot();
        
        await website.websiteSettingsClick.click();
     
        await website.themeClick.click();
        await website.logoUploadClickTheme.click();

//====================== test img upload start ==================================
      
        // const abc="fileUpload";
        // await utilities.imgUpload(abc);
        const filePath = 'C:\\Users\\SQA Tamim\\Downloads\\pic\\youtube.jpg'
        await browser.execute(() => {
            // console.log("=============",fileUpload);
             document.getElementById("fileUpload").style.display = "block";
         })

        
        const remoteFilePath = await browser.uploadFile(filePath)
        await website.clickUploadLogo.setValue(remoteFilePath); 
        await browser.pause(5000);

//====================== test img upload end ==================================

        await (await website.saveLogo).click();

        
        (await website.favIconUploadClick).click();

        const filePath1 = 'C:\\Users\\SQA Tamim\\Downloads\\pic\\twitter.jpg'
        const remoteFilePath1 = await browser.uploadFile(filePath1);
        await browser.execute(() => {

            document.getElementById("fileUpload").style.display = "block";
        })

         await website.clickUploadFavIcon.setValue(remoteFilePath1);
        (await website.saveFavIcon).click();
        (await website.primaryColor).click();
        (await website.yellowColor).click();
        (await website.applyPrimaryColor).click();
        (await website.secondaryColor).click();
        (await website.redColor).click();
        (await website.applySecondaryColor).click();
        (await website.accentColor).click();
        (await website.black).click();
        (await website.applyanccentColor).click();
        (await website.siteFont).click();
        (await website.abrilSelect).click();
        (await website.showInSignPage).click();
        (await website.saveThemeUpdate).click();
        await browser.pause(3000);
        await browser.takeScreenshot();

     })

        /* -----------------------------------------------------------------
             
            -------------  Profile  ----------------
         
        ----------------------------------------------------------------- */

    it('Profile settings', async () => {

        (await website.profileClick).click();
        await browser.pause(3000);
        await browser.takeScreenshot();
        (await website.nameProfile).setValue("Tamim Testing");
        (await website.phoneProfile).setValue("01929283884");
        (await website.industryType).click();
        (await website.airlineSelect).click();
        (await website.businessAddresss).setValue("abc slash");
        await browser.takeScreenshot();

    })   

 /* -----------------------------------------------------------------
             
            -------------  Domain  ----------------
         
 ----------------------------------------------------------------- */
        
 it('Domain settings connect button click', async () => {
 
        await website.domainClick.click();
        // await website.customDomain.setValue("pcStaging");
         await website.connectDomain.click();
         await website.upgradeDomain.click();
         //await website.selectCard.click();
         await browser.pause(3000);
         await browser.takeScreenshot();


    })


 




})