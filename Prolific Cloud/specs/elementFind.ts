describe('Find Element and Check Data', () => {

    // beforeEach("Open App", async () => {
    //     await browser.url('https://demo3.pc-staging.com/signin/');
    //     await browser.maximizeWindow();
    // })

    it('Check Sign in Page Lebel Text', async () => {
        await browser.url('https://demo3.pc-staging.com/signin/');
        await browser.maximizeWindow();

        const signIn = $('/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/p[1]');
        const emailLebel =$('/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/label[1]');
        const PasswordLebel =$('/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[2]/label[1]');

        const forgotPassword = $('//*[@id="root"]/main/div/div[1]/div/form/div/div[3]/h6');

        const signlbl= await signIn.getText();
        console.log('THis is Sign In Text::', signlbl)

        const emailLbl= await emailLebel.getText();
        console.log('This is Email Lebel::',emailLbl);

       const pLbl= await PasswordLebel.getText();
        console.log('Password Lebel Text::', pLbl);
        const fgPsd= await forgotPassword.getText();
        console.log('Forgot Password Text::', fgPsd);

        await expect(signIn).toHaveText('Sign in');
        await expect(emailLebel).toHaveText('Email address');
        await expect(PasswordLebel).toHaveText('Password');
        // await expect(forgotPassword).toHaveLink('https://demo3.pc-staging.com/forget-password');
        await expect(forgotPassword).toBeClickable();
        await forgotPassword.click();
        await browser.pause(5000)

    });
    
});