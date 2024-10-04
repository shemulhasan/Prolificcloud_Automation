import UI_WebsiteSetting from '../../pageobjects/Locators/UI_Locators.js';
import Utilities from '../../pageobjects/Utilities/LoginUtilities.js';
describe(('Operation UI Automation'), () => {
    const uiwebSetting = new UI_WebsiteSetting();
    const utilities = new Utilities();

    before("Open App", async () => {
        //await browser.url('https://abc-5021.pc-staging.com/admin');
        await browser.url(utilities.URL) //'https://abc-5021.pc-staging.com/admin'
        await browser.maximizeWindow();
    })

    //-------------------------------------------------Website Setting UI Testing--------------------------------------------

    it(('Website Setting, Page automation'), async () => {

        await utilities.Signin();



        const websettingText = await uiwebSetting.UI_websiteSetting.getText();
        console.log('Website Setting Lebel Text::===', websettingText);
        await expect(uiwebSetting.UI_websiteSetting).toHaveText("Website Settings");

        await uiwebSetting.UI_websiteSetting.click();




    })

    /* -----------------------------------------------------------------
 
       -------------  Theme  ----------------
 
  ----------------------------------------------------------------- */

    it(('Theme Of Website Setting'), async () => {

        const themeText = await uiwebSetting.UI_themeWebsiteSetting.getText();
        console.log('Theme Lebel test= Text::===', themeText);
        await expect(uiwebSetting.UI_themeWebsiteSetting).toHaveText("Theme");

        await uiwebSetting.UI_themeWebsiteSetting.click();


        const themeSettingText = await uiwebSetting.UI_themeSettingTheme.getText();
        console.log('Theme Setting Lebel Text::===', themeSettingText);
        await expect(uiwebSetting.UI_themeSettingTheme).toHaveText("Theme Settings");

        const logoText = await uiwebSetting.UI_logoTheme.getText();
        console.log(' Logo Text::===', logoText);
        await expect(uiwebSetting.UI_logoTheme).toHaveText("Logo");

        const favIconText = await uiwebSetting.UI_favIconTheme.getText();
        console.log(' Fav Icon Text::===', favIconText);
        await expect(uiwebSetting.UI_favIconTheme).toHaveText("Fav Icon");

        const websiteColorText = await uiwebSetting.UI_webSiteColorTheme.getText();
        console.log(' Website Color Text::===', websiteColorText);
        await expect(uiwebSetting.UI_webSiteColorTheme).toHaveText("Website Colors");

        const primaryColorText = await uiwebSetting.UI_primaryColorTheme.getText();
        console.log(' Primary Color Text::===', primaryColorText);
        await expect(uiwebSetting.UI_primaryColorTheme).toHaveText("Primary Color");

        const secondaryColorText = await uiwebSetting.UI_secondaryColorTheme.getText();
        console.log(' Secondary Color Text::===', secondaryColorText);
        await expect(uiwebSetting.UI_secondaryColorTheme).toHaveText("Secondary Color");

        const accentColorText = await uiwebSetting.UI_accentColorTheme.getText();
        console.log(' Accent Color Text::===', accentColorText);
        await expect(uiwebSetting.UI_accentColorTheme).toHaveText("Accent Color");

        const siteFontText = await uiwebSetting.UI_siteFontTheme.getText();
        console.log(' Site Font Text::===', siteFontText);
        await expect(uiwebSetting.UI_siteFontTheme).toHaveText("Site Font");

        const showSigninPageText = await uiwebSetting.UI_showSigninPageTheme.getText();
        console.log('Show Signin Page Text::===', showSigninPageText);
        await expect(uiwebSetting.UI_showSigninPageTheme).toHaveText("Show Signin Page");

        await expect(uiwebSetting.UI_saveTheme).toBeClickable();


    })



    /* -----------------------------------------------------------------
 
           -------------  Profile  ----------------
 
    ----------------------------------------------------------------- */



    it(('Profile, Website Setting '), async () => {





        const profileText = await uiwebSetting.UI_profileWebsiteSetting.getText();
        console.log('Profile Lebel Text::===', profileText);
        await expect(uiwebSetting.UI_profileWebsiteSetting).toHaveText("Profile");

        await uiwebSetting.UI_profileWebsiteSetting.click();


        const profileSettingsText = await uiwebSetting.UI_profileSettingsProfile.getText();
        console.log('profile Settings Lebel Text::===', profileSettingsText);
        await expect(uiwebSetting.UI_profileSettingsProfile).toHaveText("Profile Settings");

        const nameText = await uiwebSetting.UI_nameProfile.getText();
        console.log('Name Settings Lebel Text::===', profileSettingsText);
        await expect(uiwebSetting.UI_nameProfile).toHaveText("Name");

        const emailText = await uiwebSetting.UI_emailProfile.getText();
        console.log('Name Settings Lebel Text::===', emailText);
        await expect(uiwebSetting.UI_emailProfile).toHaveText("Email");

        const phoneText = await uiwebSetting.UI_phoneProfile.getText();
        console.log('Name Settings Lebel Text::===', phoneText);
        await expect(uiwebSetting.UI_phoneProfile).toHaveText("Phone");

        const profileImageText = await uiwebSetting.UI_profileImageProfile.getText();
        console.log('Profile Image Lebel Text::===', profileImageText);
        await expect(uiwebSetting.UI_profileImageProfile).toHaveText("Profile Image");

        const industryTypeText = await uiwebSetting.UI_industryTypeProfile.getText();
        console.log('Industry Type Lebel Text::===', industryTypeText);
        await expect(uiwebSetting.UI_industryTypeProfile).toHaveText("Industry Type");

        const websiteNameText = await uiwebSetting.UI_websiteNameProfile.getText();
        console.log('Website Name Lebel Text::===', websiteNameText);
        await expect(uiwebSetting.UI_websiteNameProfile).toHaveText("Website Name");

        const businessAddressText = await uiwebSetting.UI_businessAddressProfile.getText();
        console.log('Business Address Lebel Text::===', businessAddressText);
        await expect(uiwebSetting.UI_businessAddressProfile).toHaveText("Business Address");



        /* -----------------------------------------------------------------
         
                     -------------  Domain  ----------------
        
        --------------------------------------------------------------------*/


        const domainText = await uiwebSetting.UI_domainWebsiteSetting.getText();
        console.log('Domain Lebel Text::===', domainText);
        await expect(uiwebSetting.UI_domainWebsiteSetting).toHaveText("Domain");

        await uiwebSetting.UI_domainWebsiteSetting.click();

        const connectCustomdomainText = await uiwebSetting.UI_connectCustomDomain.getText();
        console.log('Connect Custom Domain Lebel Text::===', connectCustomdomainText);
        await expect(uiwebSetting.UI_connectCustomDomain).toHaveText("Connect your custom domain here.");

        const yourFreeDomainText = await uiwebSetting.UI_yourFreeDomain.getText();
        console.log('Your Free Domain Lebel Text::===', yourFreeDomainText);
        await expect(uiwebSetting.UI_yourFreeDomain).toHaveText("Your Free Domain");

        const customDomainConfigText = await uiwebSetting.UI_customDomainCofigDomain.getText();
        console.log('Custom Domain Config Lebel Text::===', customDomainConfigText);
        await expect(uiwebSetting.UI_customDomainCofigDomain).toHaveText("Custom Domain Config");

        const typeText = await uiwebSetting.UI_typeDomain.getText();
        console.log('Type Lebel Text::===', typeText);
        await expect(uiwebSetting.UI_typeDomain).toHaveText("TYPE");

        const hostText = await uiwebSetting.UI_hostDomain.getText();
        console.log('Host Lebel Text::===', hostText);
        await expect(uiwebSetting.UI_hostDomain).toHaveText("HOST");

        const valueText = await uiwebSetting.UI_valueDomain.getText();
        console.log('Value Lebel Text::===', valueText);
        await expect(uiwebSetting.UI_valueDomain).toHaveText("VALUE");

        const ttlText = await uiwebSetting.UI_ttlDomain.getText();
        console.log('TTL Lebel Text::===', ttlText);
        await expect(uiwebSetting.UI_ttlDomain).toHaveText("TTL");






    })




})