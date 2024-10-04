import SitesMediaLibrary from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/LoginUtilities.js';
describe(('Sites Automation for Header'), () => {
  const mediaLibrary = new SitesMediaLibrary();
  const utilities = new Utilities();




 it('TC:1 Open the app with sign-in', async () => {
    await browser.url(utilities.URL); //'https://abc-5021.pc-staging.com/admin'
    await browser.maximizeWindow();
    await utilities.Signin();
    await browser.pause(5000);

})
 

/* -----------------------------------------------------------------
   
          -------------  Media Library  ----------------

  ----------------------------------------------------------------- */

  it(('TC:2 Sites, Media Library automation'), async () => {

    await mediaLibrary.SitesClick.click();

    await mediaLibrary.mediaLibraryClick.click();
    //await mediaLibrary.leavePageConfirm.click();

    const filePath = 'C:\\Users\\SQA Tamim\\Downloads\\pic\\youtube.jpg'
    const remoteFilePath = await browser.uploadFile(filePath)


    await browser.execute(() => {

      document.getElementById("file").style.display = "block";
    })


    await mediaLibrary.imgAdd.setValue(remoteFilePath); // //input[@id='file-upload']
    await browser.takeScreenshot();
    await mediaLibrary.nameMediaLibrary.setValue("You67tube");
    await mediaLibrary.allTextMediaLibrary.setValue("Ab67c");
    await mediaLibrary.captionMediaLibrary.setValue("I89con");
    await mediaLibrary.textareaMediaLibrary.setValue("Img Uploa78d Successfully");
    await browser.takeScreenshot();
    await mediaLibrary.saveMediaLibrary.click();
    await browser.takeScreenshot();
    await browser.pause(5000);


  })


})