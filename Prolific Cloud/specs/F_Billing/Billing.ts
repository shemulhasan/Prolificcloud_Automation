import Billing from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/LoginUtilities.js';
describe(('Billing Page automaed'), () => {
  const billing = new Billing();
  const utilities = new Utilities();

  it(('card subscription pricing'), async () => {
    //await browser.url('https://prolific-cloud.pc-staging.com/');
    //await browser.url('https://prolific1.pc-staging.com/signin');
    await browser.url(utilities.URL) //'https://abc-5021.pc-staging.com/admin'
    await browser.maximizeWindow();

    await utilities.Signin();
    await browser.takeScreenshot();
    await browser.pause(2000);

    (await billing.billingClick).click();


    /* -----------------------------------------------------------------
 
    -------------  Card ----------------

   ----------------------------------------------------------------- */

    (await billing.cardClick).click();
    (await billing.createNewCard).click();
    await billing.cardHolderName.setValue("Tamim Bhuiyan");
    (await billing.cardEmail).setValue("tamim@yopmail.com");
    await browser.pause(4000);

    ////=================================================
    //iframe handle======================================

    const cardNumberIframe = "//body/div[@id='root']/main[1]/div[1]/div[2]/div[2]/div[1]/form[1]/div[2]/div[1]/div[1]/iframe[1]"; // <iframe id="login-box"...

    //await browser.url(LOGIN_URL);

    const frame = await browser.$(cardNumberIframe);

    await browser.switchToFrame(frame); // OK! Firefox and Chrome
    //await browser.switchToFrame(frame.elementId); // Fail! Firefox and Chrome
    await browser.switchToFrame(null); // OK! Firefox and Chrome
    await browser.switchToFrame(0); // OK! Firefox and Chrome



    await browser.takeScreenshot();
    await billing.cardNumber.setValue("4242 4242 4242 4242");
    (await billing.cardMonthYear).setValue("1123");
    await browser.pause(4000);
    (await billing.cardMonthYear).setValue("1112");
    
    //const cvcinf=$('//*[@id="root"]/form/div/div[2]/span[2]/span[2]/span/span/input');
    const cvcinf=$('//input[@name="cvc"]');
    (await cvcinf).clearValue();
    await cvcinf.setValue("123");
    await browser.pause(4000);
    await browser.switchToParentFrame();
    //await browser.switchToFrame(null);
    await billing.cardSaveButton.click();

    await browser.takeScreenshot();
    /* -----------------------------------------------------------------
    
           -------------  subscription  ----------------

      ----------------------------------------------------------------- */
  //     await billing.billingClick.click();
  //  await billing.subscriptionClick.click();
   //await billing.subscriptionActive.click();
   //await billing.subcriptionCancel.click();







    /* -----------------------------------------------------------------
    
           -------------  pricing  ----------------

      ----------------------------------------------------------------- */

      await billing.pricingClick.click();
      await billing.upgradeMonthly.click();
      await browser.takeScreenshot();
      
      //await (await billing.pricingCardNumber).setValue("4242 4242 4242 4242");


  


      await browser.pause(4000);




  })
})