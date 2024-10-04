import Blog from '../../pageobjects/Locators/Locators.js';
import Utilities from '../../pageobjects/Utilities/LoginUtilities.js';

describe(('Blog automation'), () => {
    const blog = new Blog();
    const utilities = new Utilities();



    before(('Open App'), async () => {
        //await browser.url('https://prolific-cloud.pc-staging.com/');
        // await browser.url('https://prolific1.pc-staging.com/signin');
        await browser.url(utilities.URL); //'https://abc-5021.pc-staging.com/admin'
        await browser.maximizeWindow();
    })


    /* -----------------------------------------------------------------
     
            -------------  Author  ----------------
 
       ----------------------------------------------------------------- */



    it(('Blog, Author automation'), async () => {
        await utilities.Signin();
       

        await blog.blogClick.click();
        await browser.takeScreenshot();
        

        await blog.authorClick.click();
        await blog.createNewAuthor.click();
        await blog.nameAuthor.setValue("Tamim");
        await blog.emailAuthor.setValue("tamim542.prolific@gmail.com");
        await blog.facebookLinkAuthor.setValue("https://faceook.com");
        await blog.instagramAuthor.setValue("https://intagram.com");
        await blog.twitterAuthor.setValue("https://twitter.com");
        await blog.youtubeAuthor.setValue("https://youtube.com");
        await blog.linkedinAuthor.setValue("https://linkedin.com");
        await blog.uploadAuthor.click();

        const filePath = 'C:\\Users\\SQA Tamim\\Downloads\\pic\\youtube.jpg'
        const remoteFilePath = await browser.uploadFile(filePath)




        // const Div = $('//label[@class="chakra-form__label css-4sassp"]');
        const UploadAuthor = $('//input[@id="fileUpload"]');

        await browser.execute(() => {

            document.getElementById("fileUpload").style.display = "block";
        })

        //await UploadAuthor.waitForDisplayed();
        await UploadAuthor.setValue(remoteFilePath); // //input[@id='file-upload']
        // const saveClickToUpload = $("//body/div[4]/div[4]/div[1]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/form[1]/div[5]/button[1]");
        await blog.saveUploadAuthor.click();
        await browser.pause(3000);


        await blog.authorDetailsAuthor.setValue("I am an employee of Prolific Cloud");
        await blog.saveAuthor.click();
        await browser.takeScreenshot();
        await browser.pause(5000);

    })


        /* -----------------------------------------------------------------
    
           -------------  Tag  ----------------

      ----------------------------------------------------------------- */

      it(('Blog, Tag automation'), async () => {
        await blog.tagClick.click();
        await blog.createNewTag.click();
        await blog.nameTag.setValue("Tamim Bhuiyan");
        await blog.productTypeTag.click();
        await blog.saveTag.click();

        await browser.pause(5000);


      })

        /* -----------------------------------------------------------------
       
      -------------  Post  ----------------
      
      ----------------------------------------------------------------- */

  it(('Blog, Post automation'), async () => {  
  
        await blog.postClick.click();
        await browser.takeScreenshot();
        await blog.createNewPost.click();
        await blog.namePost.setValue("Tamim");
        await blog.slugPost.setValue("mcasm");
        await blog.uploadPost.click();

       
        const filePath1 = 'C:\\Users\\SQA Tamim\\Downloads\\pic\\youtube.jpg'
        const remoteFilePath1 = await browser.uploadFile(filePath1)
     
     
      await browser.execute(()=>{
      
       document.getElementById("fileUpload").style.display="block";
      })
    
    
     await blog.imgUploadPost.setValue(remoteFilePath1);
     await browser.takeScreenshot();


    })
})