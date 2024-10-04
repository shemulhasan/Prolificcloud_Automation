describe('Find Elements::', () => {
    it('Should Generate Link Text from a website:', async () => {
        await browser.url('https://pc-staging.com/');
        await browser.maximizeWindow();
        await browser.pause(3000);
        const findLinks = $$('//a');
        for (let i = 0; i < await findLinks.length; i++) {
            const linkText = await findLinks[i].getText();
            if (linkText !== "") {
                console.log('This Is Linkable Text::::', linkText);
            }
        }
        
        await browser.pause(2000);
    });
});