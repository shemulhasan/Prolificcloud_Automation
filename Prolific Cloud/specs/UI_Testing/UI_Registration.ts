import UI_Registration from '../../pageobjects/Locators/UI_Locators.js'; 

describe(('UI testing with registration'), () => {
    const uiRegistration = new UI_Registration();
    it(('UI testing with registration'), async () => {

        await browser.url('https://pc-staging.com/');
        await browser.maximizeWindow();
        await browser.pause(3000);

        const getStartedreg = $('//*[@id="__next"]/header/div/div/div/div[3]/div/a');
        await getStartedreg.click();
        await browser.pause(3000);
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[0])
        // await browser.closeWindow()
        await browser.switchToWindow(handles[1])

        /*------------------------------------------------------------
                    Show registration from
        --------------------------------------------------------------*/
        await expect(uiRegistration.registrationFrom).toBeDisplayed();

        const businessSignupText = await uiRegistration.businessSignup.getText();
        
        console.log('Business Signup Lebel Text::===',businessSignupText);
        await expect(uiRegistration.businessSignup).toHaveText("Business Signup");

        const yourNameText = await uiRegistration.yourName.getText();
        console.log('Your Name Lebel Text::===',yourNameText);
        await expect(uiRegistration.yourName).toHaveText("Your Name");

        const emailText = await uiRegistration.Email.getText();
        console.log('Email Lebel Text::===',emailText);
        await expect(uiRegistration.Email).toHaveText("Email");

        const webSiteName = await uiRegistration.websiteName.getText();
        console.log('WebSite Name Lebel Text::===',webSiteName);
        await expect(uiRegistration.websiteName).toHaveText("Website Name");

        const phoneNumber = await uiRegistration.phoneNumber.getText();
        console.log('Phone Number Lebel Text::===',phoneNumber);
        await expect(uiRegistration.phoneNumber).toHaveText("Phone Number");

        const passWord = await uiRegistration.password.getText();
        console.log('PassWord Lebel Text::===',passWord);
        await expect(uiRegistration.password).toHaveText("Password");

        const confirmPassWord = await uiRegistration.confirmPassword.getText();
        console.log('PassWord Lebel Text::===',confirmPassWord);
        await expect(uiRegistration.confirmPassword).toHaveText("Confirm Password");

        const saveTextReg = await uiRegistration.saveRegistration.getText();
        console.log('Save Lebel Text::===',saveTextReg);
        await expect(uiRegistration.saveRegistration).toHaveText("Save");
        await expect(uiRegistration.saveRegistration).toBeClickable();





    })
})