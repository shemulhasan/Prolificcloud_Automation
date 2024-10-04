import UI_Operation from '../../pageobjects/Locators/UI_Locators.js';
import Utilities from '../../pageobjects/Utilities/LoginUtilities.js';
describe(('Operation UI Automation'), () => {
    const uiOperation = new UI_Operation();
    const utilities = new Utilities();

    before("Open App", async () => {
        //await browser.url('https://abc-5021.pc-staging.com/admin');
        await browser.url(utilities.URL) //'https://abc-5021.pc-staging.com/admin'
        await browser.maximizeWindow();
    })

     //-------------------------------------------------Operation UI Testing--------------------------------------------

    it(('Operation, Page automation'), async () => {
        
        await utilities.Signin();

       

        const operationText = await uiOperation.UI_operation.getText();
        console.log('Operation Lebel Text::===', operationText);
        await expect(uiOperation.UI_operation).toHaveText("Operation");

        await uiOperation.UI_operation.click();

       


    })    

        /* -----------------------------------------------------------------
     
           -------------  User  ----------------
    
      ----------------------------------------------------------------- */

    it(('User Of Operation'), async()=>{


        const usersOperationText = await uiOperation.UI_usersOperation.getText();
        console.log('User Lebel Text::===', usersOperationText);
        await expect(uiOperation.UI_usersOperation).toHaveText("Users");

        await uiOperation.UI_usersOperation.click();

        const firstNameUsersText = await uiOperation.UI_firstNameUsers.getText();
        console.log('First Name Lebel Text::===', firstNameUsersText);
        await expect(uiOperation.UI_firstNameUsers).toHaveText("FIRST NAME");

        const lastNameUsersText = await uiOperation.UI_lastNameUsers.getText();
        console.log('Last Name Lebel Text::===', lastNameUsersText);
        await expect(uiOperation.UI_lastNameUsers).toHaveText("LAST NAME");

        const emilUsersText = await uiOperation.UI_emailUsers.getText();
        console.log('User Lebel Text::===', emilUsersText);
        await expect(uiOperation.UI_emailUsers).toHaveText("EMAIL");

        const phoneUserText = await uiOperation.UI_phoneUsers.getText();
        console.log('User Lebel Text::===', phoneUserText);
        await expect(uiOperation.UI_phoneUsers).toHaveText("PHONE");

        await uiOperation.UI_createNewUsers.click();

        const firstNameInsideUsersText = await uiOperation.UI_firstNameInsideUsers.getText();
        console.log('First Name Inside Lebel Text::===', firstNameInsideUsersText);
        await expect(uiOperation.UI_firstNameInsideUsers).toHaveText("First Name");

        const lastNameInsideUsersText = await uiOperation.UI_lastNameInsideUsers.getText();
        console.log('Last Name Inside Lebel Text::===', lastNameInsideUsersText);
        await expect(uiOperation.UI_lastNameInsideUsers).toHaveText("Last name");

        const emailInsideUsersText = await uiOperation.UI_emailInsideUsers.getText();
        console.log('Email Inside Lebel Text::===', emailInsideUsersText);
        await expect(uiOperation.UI_emailInsideUsers).toHaveText("Email");


        const phoneInsideUsersText = await uiOperation.UI_phoneInsideUsers.getText();
        console.log('Phone Number Lebel Text::===', phoneInsideUsersText);
        await expect(uiOperation.UI_phoneInsideUsers).toHaveText("Phone Number");

        const passwordUsersText = await uiOperation.UI_passwordUsers.getText();
        console.log('Password Lebel Text::===', passwordUsersText);
        await expect(uiOperation.UI_passwordUsers).toHaveText("Password");

        const confirmPasswordUsersText = await uiOperation.UI_confirmPasswordUsers.getText();
        console.log('Confirm Password Lebel Text::===', confirmPasswordUsersText);
        await expect(uiOperation.UI_confirmPasswordUsers).toHaveText("Confirm Password");

        await expect(uiOperation.UI_saveUsers).toBeClickable();





    })

   


    })