import Operation from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/LoginUtilities.js';

describe(('Operation automation'), () => {
    const operation = new Operation();
    const utilities = new Utilities();

    it(('operation, Page automation'), async () => {
       
        await browser.url(utilities.URL) //'https://abc-5021.pc-staging.com/admin'
        await browser.maximizeWindow();

        await utilities.Signin();
        


        await operation.operationClick.click();
        await browser.takeScreenshot();
        /* -----------------------------------------------------------------
     
            -------------  user  ----------------
 
       ----------------------------------------------------------------- */

     (await operation.userClick).click();
     await operation.createNewOperation.click();
     await browser.takeScreenshot();
     (await operation.firstNameOperation).setValue("Tamim");
     (await operation.lastNameOperation).setValue("Bhuiyan");
     (await operation.emailOperation).setValue("abc@yopmail.com");
     (await operation.phoneOperation).setValue("0198999");
     (await operation.passworOperation).setValue("123456789");
     (await operation.confirmPassordOperation).setValue("123456789");
     await browser.pause(2000);
     await operation.saveDataOperation.click();
     await browser.takeScreenshot();
     await browser.pause(4000);

      /* -----------------------------------------------------------------
     
            -------------  Click Opeation menu and Click User sub menu check User List Page with Pagination  ----------------
 
       ----------------------------------------------------------------- */

        (await operation.userBackClick).click();

        (await operation.showPage).selectByIndex(1);
        await browser.pause(2000);
        (await operation.gaterSignClick).click();
        await browser.pause(2000);
        (await operation.upButton).click();
        await browser.pause(4000);

        await browser.takeScreenshot();




    })
})