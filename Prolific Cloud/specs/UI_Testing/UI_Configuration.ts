import UI_Configuration from '../../pageobjects/Locators/UI_Locators.js';
import Utilities from '../../pageobjects/Utilities/LoginUtilities.js';
describe(('Operation UI Automation'), () => {
    const uiConfiguration = new UI_Configuration();
    const utilities = new Utilities();

    before("Open App", async () => {
        //await browser.url('https://abc-5021.pc-staging.com/admin');
        await browser.url(utilities.URL) //'https://abc-5021.pc-staging.com/admin'
        await browser.maximizeWindow();
    })

    //-------------------------------------------------Configuration UI Testing--------------------------------------------

    it(('Configuration, Page automation'), async () => {

        await utilities.Signin();



        const configurationText = await uiConfiguration.UI_configuration.getText();
        console.log('Configuration Lebel Text::===', configurationText);
        await expect(uiConfiguration.UI_configuration).toHaveText("Configuration");

        await uiConfiguration.UI_configuration.click();




    })

    /* -----------------------------------------------------------------
 
       -------------  Chat Config  ----------------
 
     ----------------------------------------------------------------- */

    it(('Chat Config Of Configuration'), async () => {

        
        
        const chatConfigText = await uiConfiguration.UI_chatConfigConfiguration.getText();
        console.log('Chat Config Lebel Text::===', chatConfigText);
        await expect(uiConfiguration.UI_chatConfigConfiguration).toHaveText("Chat Config");

        await uiConfiguration.UI_chatConfigConfiguration.click();


        const chatConfigInsideText = await uiConfiguration.UI_chatConfigInsideConfiguration.getText();
        console.log('Chat Config Lebel Text::===', chatConfigInsideText);
        await expect(uiConfiguration.UI_chatConfigInsideConfiguration).toHaveText("Chat Config");

       
        await expect(uiConfiguration.UI_dropdownChatConfig).toExist();

        const twaktoText = await uiConfiguration.UI_twaktoChatConfig.getText();
        console.log('Twakto Config Lebel Text::===', twaktoText);
        await expect(uiConfiguration.UI_twaktoChatConfig).toHaveText("TWAKTO Config");

        const propertyIdText = await uiConfiguration.UI_propertyIdChatConfig.getText();
        console.log('Property Id Lebel Text::===', propertyIdText);
        await expect(uiConfiguration.UI_propertyIdChatConfig).toHaveText("Property ID");

        const chatIdText = await uiConfiguration.UI_chatIdChatConfig.getText();
        console.log('Chat Id Lebel Text::===', chatIdText);
        await expect(uiConfiguration.UI_chatIdChatConfig).toHaveText("Chat ID");

        await expect(uiConfiguration.UI_saveChatConfig).toBeClickable();


    })


    /* -----------------------------------------------------------------
 
       -------------  Google Analytics  ----------------
 
     ----------------------------------------------------------------- */

    it(('Google Analytics UI Of Configuration'), async () => {

        
        
        const googleAnalyticsText = await uiConfiguration.UI_googleAnalyticsConfiguration.getText();
        console.log('Google Analytics Lebel Text::===', googleAnalyticsText);
        await expect(uiConfiguration.UI_googleAnalyticsConfiguration).toHaveText("Google Analytics");

        await uiConfiguration.UI_googleAnalyticsConfiguration.click();

        const googleAnalyticsInsideText = await uiConfiguration.UI_googleAnalyticsInsideConfiguration.getText();
        console.log('Google Analytics Lebel Text::===', googleAnalyticsInsideText);
        await expect(uiConfiguration.UI_googleAnalyticsInsideConfiguration).toHaveText("Google Analytics");

        const googleAnalytics4MeasurementIDText = await uiConfiguration.UI_googleAnalytics4MeasurementIDgoogleAnalytics.getText();
        console.log('Google Analytics Lebel Text::===', googleAnalytics4MeasurementIDText);
        await expect(uiConfiguration.UI_googleAnalytics4MeasurementIDgoogleAnalytics).toHaveText("Google Analytics 4 Measurement ID");

        const googleTagManagerCodeText = await uiConfiguration.UI_googleTagManagerCodeGAnalytics.getText();
        console.log('Google Tag Manager Code Lebel Text::===', googleTagManagerCodeText);
        await expect(uiConfiguration.UI_googleTagManagerCodeGAnalytics).toHaveText("Google Tag Manager Code");

        const googleAnalytics4ActiveText = await uiConfiguration.UI_googleAnalytics4ActiveGAnalytics.getText();
        console.log('Google Analytics 4 Active Lebel Text::===', googleAnalytics4ActiveText);
        await expect(uiConfiguration.UI_googleAnalytics4ActiveGAnalytics).toHaveText("Google Analytics 4 Active");

        const googleTagManagerActiveText = await uiConfiguration.UI_googleTagManagerActiveGAnalytics.getText();
        console.log('Google Tag Manager Active Lebel Text::===', googleTagManagerActiveText);
        await expect(uiConfiguration.UI_googleTagManagerActiveGAnalytics).toHaveText("Google Tag Manager Active");




    })





    /* -----------------------------------------------------------------
 
       -------------  Mail Config  ----------------
 
     ----------------------------------------------------------------- */

    it(('Mail Config UI Of Configuration'), async () => {

        
        
        const gmailConfigText = await uiConfiguration.UI_mailConfigConfiguration.getText();
        console.log('Mail Config Lebel Text::===', gmailConfigText);
        await expect(uiConfiguration.UI_mailConfigConfiguration).toHaveText("Mail Config");

        await uiConfiguration.UI_mailConfigConfiguration.click();

        const smtpServerText = await uiConfiguration.UI_smtpServerMailConfig.getText();
        console.log('SMTP Server Lebel Text::===', smtpServerText);
        await expect(uiConfiguration.UI_smtpServerMailConfig).toHaveText("SMTP Server");

        const smtpPortText = await uiConfiguration.UI_smtpPortMailConfig.getText();
        console.log('SMTP Port Lebel Text::===', smtpPortText);
        await expect(uiConfiguration.UI_smtpPortMailConfig).toHaveText("SMTP Port");

        const emailAddressText = await uiConfiguration.UI_emailAddressMailConfig.getText();
        console.log('Email Address Lebel Text::===', emailAddressText);
        await expect(uiConfiguration.UI_emailAddressMailConfig).toHaveText("Email address");

        const passwordMailConfigText = await uiConfiguration.UI_passwordMailConfig.getText();
        console.log('Email Address Lebel Text::===', passwordMailConfigText);
        await expect(uiConfiguration.UI_passwordMailConfig).toHaveText("Password");



    })




    /* -----------------------------------------------------------------
 
       ------------- Google Search Console  ----------------
 
     ----------------------------------------------------------------- */

    it(('Google Search Console UI Of Configuration'), async () => {

        
        
        const GSCText = await uiConfiguration.UI_GSCConfiguration.getText();
        console.log('Google Search Console Lebel Text::===', GSCText);
        await expect(uiConfiguration.UI_GSCConfiguration).toHaveText("Google search Console");

        await uiConfiguration.UI_GSCConfiguration.click();

        const contentText = await uiConfiguration.UI_contentGSC.getText();
        console.log('Content Lebel Text::===', contentText);
        await expect(uiConfiguration.UI_contentGSC).toHaveText("Content");

        const activeText = await uiConfiguration.UI_activeGSC.getText();
        console.log('Active Lebel Text::===', activeText);
        await expect(uiConfiguration.UI_activeGSC).toHaveText("Active");

        await expect(uiConfiguration.UI_saveGSC).toBeClickable();

       

    })

    /* -----------------------------------------------------------------
 
       ------------- Google AdSense  ----------------
 
     ----------------------------------------------------------------- */

    it(('Google AdSense UI Of Configuration'), async () => {

        
        
        const googleAdSenseText = await uiConfiguration.UI_googleAdSenseConfiguration.getText();
        console.log('Google AdSense Lebel Text::===', googleAdSenseText);
        await expect(uiConfiguration.UI_googleAdSenseConfiguration).toHaveText("Google AdSense");

        await uiConfiguration.UI_googleAdSenseConfiguration.click();

        const clientCodeText = await uiConfiguration.UI_clientCodeGoogleAdSense.getText();
        console.log('Client Code Lebel Text::===', clientCodeText);
        await expect(uiConfiguration.UI_clientCodeGoogleAdSense).toHaveText("Client Code");

        const aitiveGoogleAdSenseText = await uiConfiguration.UI_activeGoogleAdSense.getText();
        console.log('Active Lebel Text::===', aitiveGoogleAdSenseText);
        await expect(uiConfiguration.UI_activeGoogleAdSense).toHaveText("Active");

        await expect(uiConfiguration.UI_saveGoogleAdSense).toBeClickable(); 

       

    })



    /* -----------------------------------------------------------------
 
       ------------- Pinterest Verification  ----------------
 
     ----------------------------------------------------------------- */

    it(('Pinterest Verificationse UI Of Configuration'), async () => {

        
        
        const PVText = await uiConfiguration.UI_PVConfiguration.getText();
        console.log('Pinterest Verification Lebel Text::===', PVText);
        await expect(uiConfiguration.UI_PVConfiguration).toHaveText("Pinterest Verification");

        await uiConfiguration.UI_PVConfiguration.click();

        const contentText = await uiConfiguration.UI_contentPV.getText();
        console.log('Content Lebel Text::===', contentText);
        await expect(uiConfiguration.UI_contentPV).toHaveText("Content");

        const activeText = await uiConfiguration.UI_activePV.getText();
        console.log('Active Lebel Text::===', activeText);
        await expect(uiConfiguration.UI_activePV).toHaveText("Active");

        await expect(uiConfiguration.UI_savePV).toBeClickable(); 

       

    })







})




