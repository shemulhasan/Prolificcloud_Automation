import UI_Blog from '../../pageobjects/Locators/UI_Locators.js';
import Utilities from '../../pageobjects/Utilities/LoginUtilities.js';
describe(('Blog Page UI Automation'), () => {
    const uiBlog = new UI_Blog();
    const utilities = new Utilities();

    before("Open App", async () => {
       // await browser.url('https://abc-5021.pc-staging.com/admin');
        await browser.url(utilities.URL) //'https://abc-5021.pc-staging.com/admin'
        await browser.maximizeWindow();
    })

     //-------------------------------------------------Blog UI Testing--------------------------------------------

    it(('Blog, Page UI automation'), async () => {
        //await browser.url('https://prolific-cloud.pc-staging.com/');
        // await browser.url('https://prolific1.pc-staging.com/signin');
        
        // await browser.url('https://abc-5021.pc-staging.com/admin');
        // await browser.maximizeWindow();

        await utilities.Signin();

       

        const blogText = await uiBlog.UI_blogClick.getText();
        console.log('Blog Lebel Text::===', blogText);
        await expect(uiBlog.UI_blogClick).toHaveText("Blog");

        await uiBlog.UI_blogClick.click();


    })    

        /* -----------------------------------------------------------------
     
           -------------  Author  ----------------
    
      ----------------------------------------------------------------- */

      it(('Author UI Testing Of Blog'), async()=>{

        const authorText = await uiBlog.UI_authorClick.getText();
        console.log('Author Lebel Text::===', authorText);
        await expect(uiBlog.UI_authorClick).toHaveText("Author");

        await uiBlog.UI_authorClick.click();

        await expect(uiBlog.UI_searchAuthor).toExist();
      
        const createNewText = await uiBlog.UI_createNew.getText();
        console.log('Create New Lebel Text::===', createNewText);
        await expect(uiBlog.UI_createNew).toHaveText("Create new");
       
        await expect(uiBlog.UI_createNew).toBeClickable();


        const nameText = await uiBlog.UI_nameAuthor.getText();
        console.log('NAme Lebel Text::===', nameText);
        await expect(uiBlog.UI_nameAuthor).toHaveText("NAME");

        const emailText = await uiBlog.UI_emailAuthor.getText();
        console.log('Email Lebel Text::===', emailText);
        await expect(uiBlog.UI_emailAuthor).toHaveText("EMAIL");

        const addedOnText = await uiBlog.UI_addedOnAuthor.getText();
        console.log('Create New Lebel Text::===', addedOnText);
        await expect(uiBlog.UI_addedOnAuthor).toHaveText("ADDED ON");

        const socialLinkText = await uiBlog.UI_socialLinkAuthor.getText();
        console.log('Social Link Lebel Text::===', socialLinkText);
        await expect(uiBlog.UI_socialLinkAuthor).toHaveText("SOCIAL LINKS");

        const detailsText = await uiBlog.UI_detailsAuthor.getText();
        console.log('Details Lebel Text::===', detailsText);
        await expect(uiBlog.UI_detailsAuthor).toHaveText("DETAILS");

        const activeText = await uiBlog.UI_activeAuthor.getText();
        console.log('Active Lebel Text::===', activeText);
        await expect(uiBlog.UI_activeAuthor).toHaveText("ACTIVE");

        await uiBlog.UI_createNewAuthor.click();

        await expect(uiBlog.UI_nameAuthorField).toExist();
        await expect(uiBlog.UI_emailAuthorField).toExist();
        await expect(uiBlog.UI_facebookLinkAuthor).toExist();
        await expect(uiBlog.UI_instagramAuthor).toExist();
        await expect(uiBlog.UI_twitterAuthor).toExist();
        await expect(uiBlog.UI_youtubeAuthor).toExist();

        const authorImageText = await uiBlog.UI_authorImageAuthor.getText();
        console.log('Author Image Lebel Text::===', authorImageText);
        await expect(uiBlog.UI_authorImageAuthor).toHaveText("Author Image");

        const authorDetailsText = await uiBlog.UI_authorDetailsAuthor.getText();
        console.log('Author Details Lebel Text::===', authorDetailsText);
        await expect(uiBlog.UI_authorDetailsAuthor).toHaveText("Author Details");

        const saveAuthorText = await uiBlog.UI_saveAuthor.getText();
        console.log('Save Lebel Text::===', saveAuthorText);
        await expect(uiBlog.UI_saveAuthor).toHaveText("Save");

    })

    /* -----------------------------------------------------------------
            
                  -------------  Tag  ----------------
           
         ----------------------------------------------------------------- */

    it(('Tag UI Testing fo Blog'), async()=>{

        const tagText = await uiBlog.UI_tagClick.getText();
        console.log('Tag Lebel Text::===', tagText);
        await expect(uiBlog.UI_tagClick).toHaveText("Tag");

        await uiBlog.UI_tagClick.click();

        const createNewTextTag = await uiBlog.UI_createNewTag.getText();
        console.log('Create New Text::===', createNewTextTag);
        await expect(uiBlog.UI_createNewTag).toHaveText("Create new");

        await expect(uiBlog.UI_searchTag).toExist();

        const tagNAmeTextTag = await uiBlog.UI_tagNameTag.getText();
        console.log('Tag Name Text::===', tagNAmeTextTag);
        await expect(uiBlog.UI_tagNameTag).toHaveText("TAG NAME");

        const tagTypeTextTag = await uiBlog.UI_tagTypeTag.getText();
        console.log('Tag Type Text::===', tagTypeTextTag);
        await expect(uiBlog.UI_tagTypeTag).toHaveText("TAG TYPE");

        await expect(uiBlog.UI_paginationTag).toExist();

        await uiBlog.UI_createNewTag.click();

        const nameTextTag = await uiBlog.UI_nameTag.getText();
        console.log('Name Text::===', nameTextTag);
        await expect(uiBlog.UI_nameTag).toHaveText("Name");

      
        const selectTagType = await uiBlog.UI_selectTagType.getText();
        console.log('Select a tag type  Text::===', selectTagType);
        await expect(uiBlog.UI_selectTagType).toHaveText("Select a tag type :");

        const blogTypeTagText = await uiBlog.UI_blogTypeTag.getText();
        console.log('Blog Type Text::===', blogTypeTagText);
        await expect(uiBlog.UI_blogTypeTag).toHaveText("Blog Type");

        const productTypeTag = await uiBlog.UI_productTypeTag.getText();
        console.log('Product Type  Text::===', productTypeTag);
        await expect(uiBlog.UI_productTypeTag).toHaveText("Product Type");

        const saveTagText = await uiBlog.UI_saveTag.getText();
        console.log('save Text::===', saveTagText);
        await expect(uiBlog.UI_saveTag).toHaveText("Save");

        await browser.pause(2000);



    })



     /* -----------------------------------------------------------------
             
                   -------------  Post  ----------------
            
     ----------------------------------------------------------------- */


    it(('Post UI Testing of Blog'), async()=>{

        const postText = await uiBlog.UI_post.getText();
        console.log('Post Lebel Text::===', postText);
        await expect(uiBlog.UI_post).toHaveText("Post");

        await uiBlog.UI_post.click();


        const titlePostText = await uiBlog.UI_titlePost.getText();
        console.log('Title Post Text Type  Text::===', titlePostText);
        await expect(uiBlog.UI_titlePost).toHaveText("TITLE");

        const createdPostText = await uiBlog.UI_createdPost.getText();
        console.log('Created Post Type  Text::===', createdPostText);
        await expect(uiBlog.UI_createdPost).toHaveText("CREATED");

        const updatePostText = await uiBlog.UI_updatePost.getText();
        console.log('Update Post Text Type  Text::===', updatePostText);
        await expect(uiBlog.UI_updatePost).toHaveText("UPDATED");

        const excerptPostText = await uiBlog.UI_excerptPost.getText();
        console.log('Excerpt Post Text Type  Text::===', excerptPostText);
        await expect(uiBlog.UI_excerptPost).toHaveText("EXCERPT");

        const publishPostText = await uiBlog.UI_publishPost.getText();
        console.log('Product Type  Text::===', publishPostText);
        await expect(uiBlog.UI_publishPost).toHaveText("PUBLISH");


        await uiBlog.UI_createNewPost.click();

        const titleInsidePOstText = await uiBlog.UI_titleInsidePost.getText();
        console.log('Title Text::===', titleInsidePOstText);
        await expect(uiBlog.UI_titleInsidePost).toHaveText("Title*");
       
        const blogslugPostText = await uiBlog.UI_blogSlugPost.getText();
        console.log('Blog Slug Text::===', blogslugPostText);
        await expect(uiBlog.UI_blogSlugPost).toHaveText("Blog slug");

        const featureImagePostText = await uiBlog.UI_featureImagePost.getText();
        console.log('Feature Image Post Text::===', featureImagePostText);
        await expect(uiBlog.UI_featureImagePost).toHaveText("Feature Image*");

        const excerpInsidetPostText = await uiBlog.UI_excerptInsidePost.getText();
        console.log('Excerpt Post Text::===', excerpInsidetPostText);
        await expect(uiBlog.UI_excerptInsidePost).toHaveText("Excerpt*");

        const tagsPostText = await uiBlog.UI_tagsPost.getText();
        console.log('Tags Post Text::===', tagsPostText);
        await expect(uiBlog.UI_tagsPost).toHaveText("Tags");

        const primaryAuthorPostText = await uiBlog.UI_primaryAuthorPost.getText();
        console.log('Primary Author Post Text::===', primaryAuthorPostText);
        await expect(uiBlog.UI_primaryAuthorPost).toHaveText("Primary Author*");

        const focusKeyPhrasePostText = await uiBlog.UI_focusKeyphrasePost.getText();
        console.log('Focus Keyphrase Post Text::===', focusKeyPhrasePostText);
        await expect(uiBlog.UI_focusKeyphrasePost).toHaveText("Focus Keyphrase");

        const metaDescriptionPostText = await uiBlog.UI_metaDescriptionPost.getText();
        console.log('Meta Description Post Text::===', metaDescriptionPostText);
        await expect(uiBlog.UI_metaDescriptionPost).toHaveText("Meta Description");

        const seoReportPOstText = await uiBlog.UI_seoReportPost.getText();
        console.log('seoReportPost Post Text::===', seoReportPOstText);
        await expect(uiBlog.UI_seoReportPost).toHaveText("SEO Report");

        await expect(uiBlog.UI_seoReportPost).toBeClickable();

        const QuickPreviewPostText = await uiBlog.UI_quickPreviewPost.getText();
        console.log('Quick Preview Post Text::===', QuickPreviewPostText);
        await expect(uiBlog.UI_quickPreviewPost).toHaveText("Quick Preview");

        await expect(uiBlog.UI_quickPreviewPost).toBeClickable();

        const savePostText = await uiBlog.UI_savePost.getText();
        console.log('Save Post Text::===', savePostText);
        await expect(uiBlog.UI_savePost).toHaveText("Save");

        await expect(uiBlog.UI_savePost).toBeClickable();





    })










        


    })
