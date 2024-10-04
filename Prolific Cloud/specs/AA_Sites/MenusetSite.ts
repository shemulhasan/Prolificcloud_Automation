import SitesMenuset from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/LoginUtilities.js';
describe(('Sites Automation for Menu Set'), () => {
  const menuSet = new SitesMenuset();
  const utilities = new Utilities();




  it('TC:1 Open the app with sign-in', async () => {
    await browser.url(utilities.URL); //'https://abc-5021.pc-staging.com/admin'
    await browser.maximizeWindow();
    await utilities.Signin();
    await browser.pause(5000);

  })

  /* -----------------------------------------------------------------
     
            -------------  Menu Set  ----------------
 
   ------------------------------------------------------------------- */



  it(('TC:2 Sites, Menu set automation Assign Top Menu'), async () => {
    //await browser.url('https://prolific-cloud.pc-staging.com/');
    // await browser.url('https://prolific1.pc-staging.com/signin');
    // await browser.url(utilities.URL); //'https://abc-5021.pc-staging.com/admin'
    // await browser.maximizeWindow();


    await menuSet.SitesClick.click();


    await menuSet.menuSetClick.click();

    await menuSet.assignClick.click();
    await menuSet.topMenuClick.click();
    await menuSet.assignWithTopMenuClick.click();
    await menuSet.confirmYes.click();


    const toastMessMenuAssign = await menuSet.menuAssignToastMess.getText();
    console.log('Menu Assign Toast Message 1 ::===', toastMessMenuAssign);
    await expect(menuSet.menuAssignToastMess).toHaveText("Menu Assigned Successfully");
    await browser.takeScreenshot();


    await browser.pause(2000);

  })



  it(('TC:3 Sites, Menu set automation Delete Menu set'), async () => {


    await menuSet.deleteMenu.click();
    await menuSet.confirmDeleteMenu.click();

    const toastMessMenuDelete = await menuSet.deleteMenuToastMess.getText();
    console.log('Menu Delete Toast Message  ::===', toastMessMenuDelete);
    await expect(menuSet.deleteMenuToastMess).toHaveText("Deleted Successfully");
    await browser.takeScreenshot();


    await browser.pause(5000);

  })


  it(('TC:4 Sites, Menu set automation Create Menu set and Check no menu item Toast Message'), async () => {


    await menuSet.createNewMenuSet.click();

    await menuSet.addMenuMenuSet.click();

    const toastMessNoMenuItemSelected = await menuSet.noMenuItemSelectedToastMess.getText();
    console.log('No Menu Item Seleted Toast Message  ::===', toastMessNoMenuItemSelected);
    await expect(menuSet.noMenuItemSelectedToastMess).toHaveText("No Menu Item Selected");

    await browser.takeScreenshot();
    await browser.pause(5000);

  })


  it(('TC:5 Sites, Menu set automation Page MenuSet'), async () => {

    await menuSet.pageMenuSet.click();
    await browser.pause(3000);
    await menuSet.customLinkClickMenuSet.click();
    await menuSet.labelClickMenuSet.setValue("four");
    const linkMenuset = "https://www.google.com/"; // https://prolific1.pc-staging.com/admin/menuset/create
    await menuSet.linkClickMenuSet.setValue(linkMenuset);
    await browser.pause(2000);
    await menuSet.nameMenuSet.setValue("Testing2");
    await menuSet.addMenuMenuSet.click();
    await browser.pause(2000);

    await menuSet.saveMenuMenuSet.click();

    const toastMessMenuDCreate = await menuSet.menuCreateToastMess.getText();
    console.log('Menu Creaate Toast Message  ::===', toastMessMenuDCreate);
    await expect(menuSet.menuCreateToastMess).toHaveText("Menu Created Successfully");

    await browser.takeScreenshot();
    await browser.pause(2000);


  })





})