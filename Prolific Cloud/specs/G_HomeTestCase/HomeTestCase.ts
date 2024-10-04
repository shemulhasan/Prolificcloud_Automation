//const Home = require('../pageobjects/Locators/Home');

import LocatorHome from "../../pageobjects/Locators/Locators.js";
//const home = new LocatorHome();
describe('Check Business site Home Page All Component and Button Functionality', () => {

  const home = new LocatorHome();

  before('Open App', async () => {

    //await browser.url('https://prolific-cloud.pc-staging.com/');
    // await browser.url('https://prolific1.pc-staging.com/signin');
    await browser.url("https://www.prolificcloud.com/")  //'https://abc-5021.pc-staging.com/admin'
    await browser.maximizeWindow();
    await browser.pause(1000);

})



  it('Home page GetStarted', async () => {


    await home.clickGetStarted.click();
    //await home.clickGetStarted.click();

    const handles = await browser.getWindowHandles()
    await browser.switchToWindow(handles[0])

    await browser.switchToWindow(handles[1])

    await home.crossButton.click();
    
    await browser.switchToWindow(handles[0])
  })



  it('Home page arrow sign', async () => {
    await browser.navigateTo('https://www.prolificcloud.com/website'); //https://pc-staging.com/website
    await browser.pause(1000);
    await browser.back();

    //arrowRightSignClick
    await home.arrowRightSignClick.click();

    //arrowLightSignClick
    await home.arrowLeftSignClick.click();
  })

    /* -----------------------------------------------------------------
   
      ------------- Explore Cloud section ----------------

    ----------------------------------------------------------------- */

    it('Home page Explore Cloud section', async () => {

    const box = $("//body/div[@id='__next']/main[1]/section[3]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]");
    // scroll to specific element.
    await box.scrollIntoView();
    await browser.pause(3000);


    (await home.pageBuilder).click();
    (await home.preBuiltTemplate).click();
    (await home.customDomain).click();
    (await home.bloggingPlatform).click();
    (await home.advancedSEO).click();
    
  
  })

    
    /* -----------------------------------------------------------------
    
     ------------- Forget worries About coding ----------------

     ----------------------------------------------------------------- */

 it('Home page Forget worries About coding', async () => {

    (await home.takeATourFor1year).click();

    const handles1 = await browser.getWindowHandles()
    await browser.switchToWindow(handles1[0])
    // await browser.closeWindow()
    await browser.switchToWindow(handles1[1])


    await browser.switchToWindow(handles1[0])

    await browser.pause(2000);

 })

      /* -----------------------------------------------------------------
    
       ------------- Leave Your Footprint Everywhere ----------------

      ----------------------------------------------------------------- */


    it('Home page Leave Your Footprint Everywhere', async () => {

      await home.videoPlay.click();
      await browser.pause(2000);
      await home.crossSignClick.click();
    })



       /* -----------------------------------------------------------------
    
       ------------- Social icon hover effect check and click----------------

      ----------------------------------------------------------------- */

  it('Home page Social icon hover effect check and click', async () => {

    await  home.twette.scrollIntoView();
    await browser.pause(2000);
    await home.twette.moveTo();
    await browser.pause(2000);

    await home.facebook.moveTo();
    await browser.pause(2000);
    await home.linkedIn.moveTo();
    await browser.pause(2000);
    await home.youtube.moveTo();
    await browser.pause(2000);

    await  home.twette.click();
    await browser.pause(4000);
    await home.facebook.click();
    await browser.pause(4000);
    await home.linkedIn.click();
    await browser.pause(4000);
    await home.youtube.click();
    await browser.pause(4000);
    await browser.takeScreenshot();
   

  })


})