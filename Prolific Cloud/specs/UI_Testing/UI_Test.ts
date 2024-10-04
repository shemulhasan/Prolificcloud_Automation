import UI_Test from '../../pageobjects/Locators/UI_Locators.js';
import Utilities from '../../pageobjects/Utilities/LoginUtilities.js';
describe(('Blog automation'), () => {
    const uiTest = new UI_Test();
    const utilities = new Utilities();



    it('Blog Tag Create and UI Check', async() => {


        await browser.url('https://abc-5021.pc-staging.com/admin');
        await browser.maximizeWindow();

        await utilities.Signin();

        //-------------------------------------------------Blog UI Testing--------------------------------------------


        const clickBlog = $('//*[@id="root"]/main/div/div[1]/ul/div/div[1]/li[3]/div');
        const clickTag = $('//*[@id="root"]/main/div/div[1]/ul/div/div[1]/li[3]/a[2]');
        const clickCreateButton = $('//*[@id="root"]/main/div/div[2]/div[2]/div/div/div[1]/button');
        await clickBlog.click();
        await clickTag.click();
        await clickCreateButton.click();
        await browser.pause(2000);
       const chkLebel = $('//form//p[contains(text(), "Select a tag type :")]');
      
        const inputLebel = await chkLebel.getText();
        console.log("This is Name Lebel:::", inputLebel);
        const radioButton1 = $('body.chakra-ui-light:nth-child(2) div.css-1vsours div.css-1cg3t4o div.chakra-container.css-11zanjd div.css-123774r div.chakra-form-control.css-fp136g:nth-child(2) div.css-cinlo3 div.chakra-radio-group.css-0 div.chakra-stack.css-x9juev label.chakra-radio.css-1ttb8zx:nth-child(1) > span.chakra-radio__label.css-1i66d7g');
        const radioButton2 = $('body.chakra-ui-light:nth-child(2) div.css-1vsours div.css-1cg3t4o div.chakra-container.css-11zanjd div.css-123774r div.chakra-form-control.css-fp136g:nth-child(2) div.css-cinlo3 div.chakra-radio-group.css-0 div.chakra-stack.css-x9juev label.chakra-radio.css-1ttb8zx:nth-child(2) > span.chakra-radio__label.css-1i66d7g');
        await radioButton1.click();
        // const radioLebel1 = $('.chakra-radio__label')
        const chkRadio1 = await radioButton1.getText();
        console.log("This is radio one:::", chkRadio1);
        const chkRadio2 = await radioButton2.getText();
        console.log("This is radio Two:::", chkRadio2);
        await radioButton2.click();
        await browser.pause(5000);
    }); 
    
    
    
    
    
    
    
    
    
    
    
    
    
    









})