import FreeRegistration from "../../pageobjects/Locators/Locators.js";

describe('Free Registration field fill up', () => {

    const FreeReg = new FreeRegistration();

    it('Free registration field input', async () => {
        await browser.url("https://www.prolificcloud.com/"); //https://pc-staging.com/
        await browser.maximizeWindow();
        await browser.pause(3000);

        const getStartedreg = $('//*[@id="__next"]/header/div/div/div/div[3]/div/a');
        await getStartedreg.click();

        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[0])
        // await browser.closeWindow()
        await browser.switchToWindow(handles[1])


        await FreeReg.nameInputBox.setValue('Textinput');
        await FreeReg.emailField.setValue('abcd1@gmail.com'); //abcd1@yopmail.com
        await FreeReg.webSiteField.setValue('ABC');
        await FreeReg.phnField.setValue('019898');
        await FreeReg.passField.setValue('123456789');
        await FreeReg.confirmPassField.setValue('123456789');
        await FreeReg.svaeButton.click();
        await browser.takeScreenshot();
        await browser.pause(5000);
        await browser.takeScreenshot();
        



    });

   

});