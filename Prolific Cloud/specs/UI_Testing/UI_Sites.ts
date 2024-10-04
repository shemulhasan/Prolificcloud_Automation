import UI_Sites from '../../pageobjects/Locators/UI_Locators.js';
import Utilities from '../../pageobjects/Utilities/LoginUtilities.js';
describe(('Sites automation'), () => {
    const uiSite = new UI_Sites();
    const utilities = new Utilities();


    it(('Sites, Page automation'), async () => {
        //await browser.url('https://prolific-cloud.pc-staging.com/');
        // await browser.url('https://prolific1.pc-staging.com/signin');

        //await browser.url('https://abc-5021.pc-staging.com/admin');
        await browser.url(utilities.URL) //'https://abc-5021.pc-staging.com/admin'
        await browser.maximizeWindow();

        await utilities.Signin();

        //-------------------------------------------------Sites UI Testing--------------------------------------------

        (await uiSite.UI_SitesClick).click();

        /* -----------------------------------------------------------------
     
           -------------  Page  ----------------
    
      ----------------------------------------------------------------- */

        (await uiSite.UI_pageClick).click();

        await expect(uiSite.UI_search).toExist();

        const pageName = await uiSite.UI_pageName.getText();
        console.log('Page Name Lebel Text::===', pageName);
        await expect(uiSite.UI_pageName).toHaveText("PAGE NAME");

        const created = await uiSite.UI_created.getText();
        console.log('Created Lebel Text::===', created);
        await expect(uiSite.UI_created).toHaveText("CREATED");

        const update = await uiSite.UI_update.getText();
        console.log('update Lebel Text::===', update);
        await expect(uiSite.UI_update).toHaveText("UPDATED");

        const setHomePage = await uiSite.UI_setHomePage.getText();
        console.log('Page Builder Lebel Text::===', setHomePage);
        await expect(uiSite.UI_setHomePage).toHaveText("SET HOME PAGE");

        const setPageStatus = await uiSite.UI_setPageStatus.getText();
        console.log('Page Builder Lebel Text::===', setPageStatus);
        await expect(uiSite.UI_setPageStatus).toHaveText("SET PAGE STATUS");

        const action = await uiSite.UI_action.getText();
        console.log('Page Builder Lebel Text::===', action);
        await expect(uiSite.UI_action).toHaveText("ACTION");

        const pagebuilder = await uiSite.UI_pageBuilder.getText();
        console.log('Page Builder Lebel Text::===', pagebuilder);
        await expect(uiSite.UI_pageBuilder).toHaveText("Page Details");

        await expect(uiSite.UI_pageBuilder).toBeClickable();

        const deleteText = await uiSite.UI_delete.getText();
        console.log('Page Builder Lebel Text::===', deleteText);
        await expect(uiSite.UI_delete).toHaveText("Delete");

        await expect(uiSite.UI_delete).toBeClickable();

        (await uiSite.UI_createNew).click();

        (await uiSite.UI_settingPage).click();
        await browser.pause(2000);

        const pageSlug = await uiSite.UI_pageSlug.getText();
        console.log('Page Slug Lebel Text::===', pageSlug);
        await expect(uiSite.UI_pageSlug).toHaveText("Page Slug:");


        const metaDescription = await uiSite.UI_metaDescription.getText();
        console.log('Meta Description Lebel Text::===', metaDescription);
        await expect(uiSite.UI_metaDescription).toHaveText("Meta Description:");

        const metaKeyword = await uiSite.UI_metaKeyword.getText();
        console.log('Meta Keyword Lebel Text::===', metaKeyword);
        await expect(uiSite.UI_metaKeyword).toHaveText("Meta Keywords:");

        const openGraph = await uiSite.UI_openGraph.getText();
        console.log('Meta Keyword Lebel Text::===', openGraph);
        await expect(uiSite.UI_openGraph).toHaveText("Open Graph Protocol Image:");


        /* -----------------------------------------------------------------
            
                  -------------  media library  ----------------
           
         ----------------------------------------------------------------- */

        (await uiSite.UI_mediaLibraryClick).click();

        const nameML = await uiSite.UI_nameML.getText();
        console.log('Name Lebel Text::===', nameML);
        await expect(uiSite.UI_nameML).toHaveText("Name");

        const allTextML = await uiSite.UI_allText.getText();
        console.log('All Text Lebel Text::===', allTextML);
        await expect(uiSite.UI_allText).toHaveText("Alt Text");

        const captionML = await uiSite.UI_captionML.getText();
        console.log('Caption Lebel Text::===', captionML);
        await expect(uiSite.UI_captionML).toHaveText("Caption");

        const descriptionML = await uiSite.UI_descriptionML.getText();
        console.log('Description Lebel Text::===', descriptionML);
        await expect(uiSite.UI_descriptionML).toHaveText("Description");


        await expect(uiSite.UI_AllTabML).toBeClickable();
        const allTabML = await uiSite.UI_AllTabML.getText();
        console.log('All Lebel Text::===', allTabML);
        await expect(uiSite.UI_AllTabML).toHaveText("All");


        await expect(uiSite.UI_imagML).toBeClickable();
        const imgML = await uiSite.UI_imagML.getText();
        console.log('Image Lebel Text::===', imgML);
        await expect(uiSite.UI_imagML).toHaveText("Image");


        await expect(uiSite.UI_VideosML).toBeClickable();
        const videosML = await uiSite.UI_VideosML.getText();
        console.log('Videos Lebel Text::===', videosML);
        await expect(uiSite.UI_VideosML).toHaveText("Videos");


        await expect(uiSite.UI_DocsML).toBeClickable();
        const docsML = await uiSite.UI_DocsML.getText();
        console.log('Docs Lebel Text::===', docsML);
        await expect(uiSite.UI_DocsML).toHaveText("Docs");


        await expect(uiSite.UI_miceML).toBeClickable();
        const miscML = await uiSite.UI_miceML.getText();
        console.log('Misc Lebel Text::===', miscML);
        await expect(uiSite.UI_miceML).toHaveText("Misc");

        await expect(uiSite.UI_editIcon).toBeClickable();
        await expect(uiSite.UI_deleteIcon).toBeClickable();

        await expect(uiSite.UI_paginationML).toExist();
        await expect(uiSite.UI_paginationML).toBeClickable();




    })
})