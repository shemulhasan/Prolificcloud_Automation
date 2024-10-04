import Locators from '../../pageobjects/Locators/Locators.js';
const locator = new Locators();

class Utilities {

    public URL: string = "https://prolific-cloud-9513.prolificcloud.com/admin"; //https://abc-5021.pc-staging.com/admin

    public async Signin() {

        const emailSign = $("//input[@id='field-3']");
        const passSign = $("//input[@id='field-4']");

        //await emailSign.setValue('prolificcloud@yopmail.com');
        await emailSign.setValue('tamim542.prolific@gmail.com'); //abcd1@yopmail.com
        await passSign.setValue('123456789');
        //await emailSign.setValue('tamim@yopmail.com');
        //await passSign.setValue('123456789');

        const firstNumber = await $("//span[@id='securityNumberOne']");
        const twoNumber = $("//span[@id='securityNumberTwo']");

        const captchaCode = $("//input[@id='field-5']");

        let numOne = await firstNumber.getText();
        let numTwo = await twoNumber.getText();
        console.log("numOne===================================================================================" + numOne + ' ' + numTwo);

        let oneInt = parseInt(numOne);
        let twoInt = parseInt(numTwo);

        console.log("num one and two============================================================================" + oneInt + ' ' + twoInt);

        let sum = oneInt + twoInt;
        console.log("sum================================================================" + sum);
        await captchaCode.setValue(sum);

        await $("//button[contains(text(),'Log in')]").click();


    }




    public URLDomain: string = "https://25-09-2023.prolificcloud.com/admin";

    public async SigninForDomain() {

        const emailSign = $("//input[@id='field-3']");
        const passSign = $("//input[@id='field-4']");


        await emailSign.setValue('tamim542.prolific+25-09-2023@gmail.com');
        await passSign.setValue('12345678');

        const firstNumber = await $("//span[@id='securityNumberOne']");
        const twoNumber = $("//span[@id='securityNumberTwo']");

        const captchaCode = $("//input[@id='field-5']");

        let numOne = await firstNumber.getText();
        let numTwo = await twoNumber.getText();

        let oneInt = parseInt(numOne);
        let twoInt = parseInt(numTwo);

        let sum = oneInt + twoInt;

        await captchaCode.setValue(sum);

        await $("//button[contains(text(),'Log in')]").click();


    }




    public async domainChange() {


        const domain = await locator.getDomain.getAttribute('href');


        if (domain == '//sqa3.theprolificcloud.com') {
            await locator.enterDomain.setValue("sqa1.theprolificcloud.com");
        } else {
            await locator.enterDomain.setValue("sqa3.theprolificcloud.com");
        }

    }









}

export default Utilities;