class LocatorHome {




  /* -----------------------------------------------------------------------------------
  
                        --------- Free Registration -----------
  
   ----------------------------------------------------------------------------------- */

  get getStartedreg() {
    return $('//*[@id="__next"]/header/div/div/div/div[3]/div/a');
  }
  get nameInputBox() {
    return $("//input[@name='name']");
  }

  get emailField() {
    return $("//input[@id='field-5']");
  }
  get webSiteField() {
    return $("//input[@id='field-6']");
  }

  get phnField() {
    return $("//body/div[3]/div[4]/div[1]/section[1]/div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/input[1]");
  }
  get passField() {
    return $("//input[@id='field-8']");
  }
  get confirmPassField() {
    return $("//input[@id='field-9']");
  }
  get svaeButton() {
    return $("//button[contains(text(),'Save')]");
  }
  get registrationSuccessfulToastMessage() {
    return $("(//div[contains(text(),'Registration Successful.')])[1]");
  } 
  get skipButton() {
    return $("//button[contains(text(),'Skip')]");
  }


  //---------------------------------------------------------------------------


  get crismasDealCrossButtonClose() {
    return $("//button[@class='chakra-modal__close-btn css-1gpfovp']");
  }



  get clickGetStarted() {
    return $("//header/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]");
  }

  get crossButton() {
    return $("//body/div[3]/div[4]/div[1]/section[1]/button[1]/*[1]");
  }


  get arrowRightSignClick() {
    return $("//body/div[@id='__next']/main[1]/section[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]");
  }

  get arrowLeftSignClick() {
    return $("//body/div[@id='__next']/main[1]/section[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]");
  }

  /* -----------------------------------------------------------------
      
         ------------- Explore Cloud sction ----------------

   ----------------------------------------------------------------- */

  get pageBuilder() {
    return $("//span[contains(text(),'Page Builder')]");
  }

  get preBuiltTemplate() {
    return $("//span[contains(text(),'Prebuilt Template')]");
  }

  get customDomain() {
    return $("//span[contains(text(),'Custom Domain')]");
  }

  get bloggingPlatform() {
    return $("//span[contains(text(),'Blogging Platform')]");
  }

  get advancedSEO() {
    return $("//span[contains(text(),'Advanced SEO')]");
  }


  /* -----------------------------------------------------------------
      
       ------------- Forget worries About coding ----------------

  ----------------------------------------------------------------- */

  get takeATourFor1year() {
    return $('//*[@id="__next"]/main/section[4]/div/div/div[1]/div[1]/div/a');
  }

  /* -----------------------------------------------------------------
      
       ------------- Leave Your Footprint Everywhere ----------------

  ----------------------------------------------------------------- */

  get videoPlay() {
    return $('//button[@class="btn btn-play font-sm-bold popup-youtube hover-up"]');
  }

  get crossSignClick() {
    return $('//button[@class="modal-video-close-btn"]');
  }

  /* -----------------------------------------------------------------
      
       ------------- Frequently asked questions ----------------

  ----------------------------------------------------------------- */

  get elementOne() {
    return $("//button[contains(text(),'Which is the quickest and easiest website builder?')]");
  }
  // get elementTwo(){
  //     return $("//button[contains(text(),'Is Prolific Cloud right for me?')]");
  // }
  // get elementThree(){
  //     return $("//button[contains(text(),'How can I create a website with a custom domain?')]");
  // }
  // get elementFour(){
  //     return $("//button[contains(text(),'How do I start building a website?')]");
  // }
  // get elementFive(){
  //     return $("//button[contains(text(),'Will it offer to build a website without coding?')]");
  // }
  // get elementSix(){
  //     return $("//button[contains(text(),'What is the Prolific Cloud Page Builder?')]");
  // }


  /* -----------------------------------------------------------------
 
    ------------- Social icon hover effect check ----------------

   ----------------------------------------------------------------- */

  get twette() {
    return $("//a[@href='https://twitter.com/ProlificCloud']");
  }
  get facebook() {
    return $("//body/div[@id='__next']/footer[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[2]");
  }
  get linkedIn() {
    return $("//body/div[@id='__next']/footer[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[3]");
  }
  get youtube() {
    return $("//body/div[@id='__next']/footer[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[4]");
  }



  /* -----------------------------------------------------------------
 
    ------------- Offers Page ----------------

   ----------------------------------------------------------------- */

  get offersClick() {
    return $("(//a[contains(text(),'Offers')])[1]");
  }

  get learnMoreClickForOffers() {
    return $("//button[@class='chakra-button css-f458ov']");
  }


  //--------------------------------- Page [AT0004] registration with subscription --------------------------------

  get pricingPlan() {
    return $("//header/div[1]/div[1]/div[1]/div[2]/nav[1]/ul[1]/li[3]/a[1]");
  }
  



  /* -----------------------------------------------------------------
  
         ------------- registration new tab ----------------

  ----------------------------------------------------------------- */
  
  get monthlyPlan() {
      return $("//a[contains(text(),'Monthly')]");
  }

  get standardMonthlyPlan() {
    return $('//a[@href="https://admin.pc-staging.com/signin?registration=true&subscription=64e5d4a9bbae8ad73b814461"]');
  }
  get ententerpriseYearlyer() {
    return $("//body/div[@id='__next']/main[1]/section[2]/div[1]/div[2]/div[2]/div[1]/div[2]/a[1]");
  }

  get name() {
    return $("//input[@id='field-5']");
  }
  get email() {
    return $("//input[@id='field-6']");
  }


  get website() {
    return $("//input[@id='field-7']");
  }
  get phoneNo() {
    return $("//body/div[3]/div[4]/div[1]/section[1]/div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/input[1]");
  }
  get password() {
    return $("//input[@id='field-9']");
  }
  get confirmPassword() {
    return $("//input[@id='field-10']");
  }

  get saveButtonReg() {
    return $("//button[contains(text(),'Save')]");
  }



  //---------------------------- signin website theme -----------------------------------------

  get favIcon() {
    return $('//button[@class="chakra-button css-bg02im"]');
  }
  get savefavIcon() {
    return $("//body/div[4]/div[4]/div[1]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/form[1]/div[5]/button[1]");
  }

  get siteFontSelect() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/form[1]/div[4]/div[1]/div[1]/div[1]/input[1]");
  }

  get siteFontSelectName() {
    return $("//div[contains(text(),'Abril Fatface')]");
  }
  get saveAllData() {
    return $("//button[contains(text(),'Save')]");
  }


  //--------------------------------- Page [AT0022] configuration  --------------------------------




  get configurationClick() {
    return $("//span[contains(text(),'Configuration')]");
  }

  /* -----------------------------------------------------------------
 
    ------------- chat config ----------------

   ----------------------------------------------------------------- */

  get chatConfig() {
    return $("//span[contains(text(),'Chat Config')]");
  }
  get selectTawakTO() {
    return $('//select[@class="chakra-select css-k7r2wc"]');
  }

  get whatsUpLink() {
    return $("//input[@id='field-217']");
  }

  get activeWhatsupClick() {
    return $('//span[@class="chakra-checkbox__control css-xxkadm"]');
  }
  get chatConfigSaveClick() {
    return $('//button[@class="chakra-button css-11b472s"]');
  }


  /* -----------------------------------------------------------------
 
    ------------- Google Analytics ----------------

   ----------------------------------------------------------------- */

  get googleAnalyticsClick() {
    return $("//span[contains(text(),'Google Analytics')]");
  }
  get googleAnalytics4MeasurementID() {
    return $('//input[@class="chakra-input css-jg9nx" and @name="ga4Code"]');
  }
  get googleTagManagerCode() {
    return $('//input[@class="chakra-input css-jg9nx" and @name="gtmCode"]');
  }

  get googleAnalytics4Active() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[2]/div[2]/div[1]/form[1]/div[1]/div[3]/div[1]/label[1]/span[1]");
  }

  get googleTagManagerActive() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[2]/div[2]/div[1]/form[1]/div[1]/div[4]/div[1]/label[1]/span[1]");
  }

  get googleAnalyticsSave() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[2]/div[2]/div[1]/form[1]/div[1]/div[4]/div[1]/label[1]/span[1]");
  }

  /* -----------------------------------------------------------------
  
     ------------- Mail Config ----------------

    ----------------------------------------------------------------- */
  get iframeSwitch() {
    return $('//div[@class="css-k008qs"]');
  }
  get mailConfigClick() {
    return $("//span[contains(text(),'Mail Config')]");
  }
  get mailConfigName() {
    return $('//input[@name="name" ]');
  }
  get sMTPServer() {
    return $('//input[@name="smtpHost" ]');
  }
  get sMTPPort() {
    return $('//input[@name="smtpPort" ]');
  }

  get selectConnectionSecurity() {
    return $('//select[@class="chakra-select css-k7r2wc"]');
  }

  get emailAddress() {
    return $('//input[@name="smtpUser" ]');
  }

  get passwordSet() {
    return $('//input[@name="smtpPass" ]');
  }

  get mailCOnfigSave() {
    return $("//button[contains(text(),'Save')]");
  }

  /* -----------------------------------------------------------------
  
     ------------- Google Search console  ----------------

    ----------------------------------------------------------------- */

  get googleSearchConsoleClick() {
    return $("//span[contains(text(),'Google search Console')]");
  }

  get contentField() {
    return $('//textarea[@name="content"]');
  }
  get gooogleSearchActive() {
    return $('//span[@class="chakra-checkbox__control css-xxkadm"]');
  }
  get googleSearchSave() {
    return $('//button[@class="chakra-button css-11b472s"]');
  }

  /* -----------------------------------------------------------------
 
  ------------- Google AdSense  ----------------

 ----------------------------------------------------------------- */

  get googleAdSenseClick() {
    return $("//span[contains(text(),'Google AdSense')]");
  }

  get googleAdSenseclientCode() {
    return $('//textarea[@class="chakra-textarea css-mlw6ie"]');
  }
  get googleAdSenseActive() {
    return $('//span[@class="chakra-checkbox__control css-xxkadm"]');
  }
  get googleAdSenseSAve() {
    return $('//button[@class="chakra-button css-11b472s"]');
  }

  /* -----------------------------------------------------------------
 
   -------------  pinterest verification ----------------

  ----------------------------------------------------------------- */

  get pinterestVerificationClick() {
    return $('//span[@class="title title2 css-0"]');
  }

  get pinterestVerificationContent() {
    return $('//textarea[@class="chakra-textarea css-mlw6ie"]');
  }
  get pinterestVerificationActive() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[2]/div[2]/div[1]/form[1]/div[1]/div[2]/div[1]/label[2]/span[1]/div[1]");
  }
  get pinterestVerificationSave() {
    return $('//button[@class="chakra-button css-11b472s"]');
  }

  /* -----------------------------------------------------------------
 
  -------------  Integration ----------------

 ----------------------------------------------------------------- */

  get integrationClick() {
    return $('//span[@class="title title2 css-1xt4lt6"]');
  }

  get integrationInstall() {
    return $('//button[@class="chakra-button css-177z76w"]');
  }
  get integrationStoreUID() {
    return $('//input[@class="chakra-input css-13gwzxu" and @name="storeKey"]');
  }
  get integrationApiKey() {
    return $('//input[@name="apiKey"]');
  }
  get integrationSecretKey() {
    return $('//input[@name="secretKey"]');
  }
  get integrationSave() {
    return $('//button[@class="chakra-button css-jjyjf1"]');
  }

  //--------------------------------------- Page [AT0022] configuration  ------------------------------------------------------------

  get billingClick() {
    return $("//span[contains(text(),'Billing')]");
  }


  /* -----------------------------------------------------------------
 
       -------------  Card  ----------------

  ----------------------------------------------------------------- */

  get cardClick() {
    return $('//a[@href="/admin/card"]');
  }

  get createNewCard() {
    return $('//a[@class="chakra-link css-1krilld"]');
  }
  get cardHolderName() {
    return $("//input[@name='name']");
  }
  get cardEmail() {
    return $('//input[@name="email"]');
  }


  get cardNumber() {
    return $('//input[@class="InputElement is-empty Input Input--empty" and @name="cardnumber"]');
  }

  get promoCode() {
    return $('//input[@name="promoCode"]');
  }

  get planPurchaseCardNumber() {
    return $('//input[@name="cardnumber"]');
  }

  get cardMonthYear() {
    return $('//input[@class="InputElement is-empty Input Input--empty" and @name="exp-date"]');
  }
  // get cardCVC(){
  //   return $('//input[@name="cvc"]');
  // }
  get cardSaveButton() {
    return $('//button[@class="chakra-button css-wgslge"]');
  }

  get confirmPayment() {
    return $("//button[contains(text(),'Confirm Payment')]");
  }

  /* -----------------------------------------------------------------
 
       -------------  subscription  ----------------

  ----------------------------------------------------------------- */



  get subscriptionClick() {
    return $('//span[@class="title title2 css-1xt4lt6"]');
  }

  // get subscriptionEnterpriceYearly(){
  //   return $("//td[contains(text(),'Enterprise Yearly')]");
  // }
  // get subscriptionActive(){
  //   return $("//span[contains(text(),'active')]");
  // }
  // get subcriptionCancel(){
  //   return $("//td[contains(text(),'Enterprise Yearly')]");
  // }



  /* -----------------------------------------------------------------
 
       -------------  pricing  ----------------

  ----------------------------------------------------------------- */


  get billingClickForPricing() {
    return $("//span[contains(text(),'Billing')]");
  }

  get pricingClick() {
    return $("//span[contains(text(),'Pricing')]");
  }
  get upgradeMonthly() {
    return $("//button[contains(text(),'UPGRADE')]");
  }


  // ---------------------------------------------- Page [AT0007] Sites -----------------------------------------------

  get SitesClick() {
    return $("//span[contains(text(),'Sites')]");
  }

  /* -----------------------------------------------------------------
 
       -------------  Page  ----------------

  ----------------------------------------------------------------- */

  get pageClick() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[1]/ul[1]/div[1]/div[1]/li[2]/a[1]/div[1]/div[1]/span[1]");
  }
  get deletePage() {
    return $("(//div[@aria-label='page-delete'])[3]");
  }
  get confirmDeletePage() {
    return $("// button[contains(text(),'Confirm')]");
  }
  get deletePageToastMessage() {
    return $("(//div[contains(text(),'Deleted Successfully')])[1]");
  }
  get createNew() {
    return $("//a[@class='chakra-link css-1krilld']");
  }
  get pageName() {
    return $("//input[@placeholder='Enter name']");
  }
  get addSection() {
    return $("(//button[@class='chakra-button css-lv8nr9'])[1]");
  }
  get singleSection() {
    return $("(//div[@class='chakra-stack css-rzdf1i'])[3]");
  }
  get eyeIcon() {
    return $("//button[@class='chakra-button css-vocj4y']");
  }


  get useTemplatePage() {
    return $("(//button[@class='chakra-button css-lv8nr9'])[2]");
  }
  get paginationFour() {
    return $('//a[@aria-label="Page 4"]');
  }
  get preview() {
    return $("//body/div[7]/div[4]/div[1]/section[1]/div[1]/div[2]/div[2]/div[2]/div[1]/a[1]");
  }




  get importPage() {
    return $("(//button[contains(text(),'Import')])[1]");
  }


  get importPageTamplateToastMess1() {
    return $("(//div[contains(text(),'Template Imported')])[1]");
  }
  get importPageTamplateToastMess2() {
    return $("(//div[contains(text(),'Template successfully imported on your page')])[1]");
  }



  get pageSave() {
    return $("(//button[contains(text(),'Save')])[1]");
  }
  get toastMessPageSave() {
    return $("(//div[contains(text(),'Content saved successfully')])[1]");
  }
  get pagePublish() {
    return $("//button[contains(text(),'Publish')]");
  }
  get toastMessPagePublish() {
    return $("(//div[contains(text(),'Content published successfully')])[1]");
  }




  //----------------------------------drag and drop-------------------------------------
  get dragAble() {
    return $('//div[@data-rbd-drag-handle-draggable-id="paragraph"]');
  }
  get dropAble() {
    return $("//p[contains(text(),'Column')]");
  }




  /* -----------------------------------------------------------------
 
       -------------  Menu Set  ----------------

  ----------------------------------------------------------------- */

  get menuSetClick() {
    return $("//span[contains(text(),'Menu Set')]");
  }

  get leavePageConfirm() {
    return $("//button[contains(text(),'Confirm')]");
  }

  get assignClick() {
    return $("(//button[contains(text(),'Assign')])[1]");
  }

  get topMenuClick() {
    return $("//span[contains(text(),'Top Menu')]");
  }
  get assignWithTopMenuClick() {
    return $("//button[@class='chakra-button css-1mci4gx' and contains(text(),'Assign')]");
  }
  get confirmYes() {
    return $("//button[contains(text(),'Yes')]");
  }
  get menuAssignToastMess() {
    return $("//div[contains(text(),'Menu Assigned Successfully')]");
  }

  get deleteMenu() {
    return $("(//button[contains(text(),'Delete')])[1]");
  }
  get confirmDeleteMenu() {
    return $("//button[contains(text(),'Confirm')]");
  }
  get deleteMenuToastMess() {
    return $("(//div[contains(text(),'Deleted Successfully')])[1]");
  }

  get createNewMenuSet() {
    return $("//a[@href='/admin/menuset/create']"); // //a[@href='/admin/menuset/create']
  }
  get nameMenuSet() {
    return $("//input[@name='name']");
  }
  get pageMenuSet() {
    return $("//div[contains(text(),'Pages')]");
  }
  get pageSelectMenuSet() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]");
  }
  get customLinkClickMenuSet() {
    return $("//div[contains(text(),'Custom Link')]");
  }
  get labelClickMenuSet() {
    return $("//input[@class='chakra-input css-jg9nx' and @placeholder='Label']");
  }
  get linkClickMenuSet() {
    return $("//input[@class='chakra-input css-jg9nx' and @placeholder='Link']");
  }
  get addMenuMenuSet() {
    return $("//button[contains(text(),'Add to menu')]");
  }
  get noMenuItemSelectedToastMess() {
    return $("(//div[contains(text(),'No Menu Item Selected')])[1]");
  }


  get menuCreateToastMess() {
    return $("(//div[contains(text(),'Menu Created Successfully')])[1]");
  }

  get saveMenuMenuSet() {
    return $("//button[contains(text(),'Save')]");
  }

  /* -----------------------------------------------------------------
     
            -------------  Header Set  ----------------
 
       ----------------------------------------------------------------- */

  get headerSetClick() {
    return $("//span[contains(text(),'Header Set')]");
  }
  get deleteHeaderPage() {
    return $("(// button[contains(text(),'Delete')])[3]");
  }
  get confirmDeleteHeaderPage() {
    return $("// button[contains(text(),'Confirm')]");
  }
  get deleteHeaderToastMess() {
    return $("(//div[contains(text(),'Deleted Successfully')])[1]");
  }
  get activeHeaderPage() {
    return $("(//span[@class='chakra-switch__track css-ddil6j'])[1]");
  }
  get dactiveHeaderPage() {
    return $("(//span[@class='chakra-switch__thumb css-7roig'])[1]");
  }
  get headerActiveToastMess() {
    return $("(//div[contains(text(),'Abc Header activated successfully.')])[1]");
  }
  get headerDactiveToastMess() {
    return $("(//div[contains(text(),'Abc Header deactivated successfully.')])[1]");
  }
  get createNewHeaderSet() {
    return $("//a[@href='/admin/builder/header/create']");
  }

  get setHeaderName() {
    return $('//input[@placeholder="Enter name"]');
  }
  get headerSave() {
    return $("//button[contains(text(),'Save')]");
  }
  get headerPublish() {
    return $('//*[@id="root"]/main/div/div[2]/div[2]/div/div[2]/div[2]/div[2]/button');
  }


  /* -----------------------------------------------------------------
 
      -------------  Footer Set  ----------------

 ----------------------------------------------------------------- */


  get footerActiveToastMess() {
    return $("(//div[contains(text(),'Footer activated successfully.')])[1]");
  }
  get footerDactiveToastMess() {
    return $("(//div[contains(text(),'Footer deactivated successfully.')])[1]");
  }

  get footerClick() {
    return $("//span[contains(text(),'Footer Set')]");
  }
  get deleteFooterPage() {
    return $("(// button[contains(text(),'Delete')])[3]");
  }
  get confirmDeleteFooterPage() {
    return $("// button[contains(text(),'Confirm')]");
  }

  get createNewFooterClick() {
    return $('//a[@href="/admin/builder/footer/create"]');
  }
  get pageNameFooter() {
    return $('//input[@placeholder="Enter name"]');
  }

  get footerSave() {
    return $("//button[contains(text(),'Save')]");
  }
  get footePublish() {
    return $("//button[contains(text(),'Publish')]");
  }
  /* -----------------------------------------------------------------
 
       -------------  Media Library  ----------------

  ----------------------------------------------------------------- */


  get mediaLibraryClick() {
    return $("//span[contains(text(),'Media Library')]");
  }
  get imageUploadMediaLibraryClick() {
    return $("//label[contains(text(),'Click to Upload File')]");
  }
  get imgAdd() {
    return $('//input[@id="file"]');
  }
  get nameMediaLibrary() {
    return $('//input[@name="fileName"]');
  }
  get allTextMediaLibrary() {
    return $('//input[@name="altText"]');
  }
  get captionMediaLibrary() {
    return $('//input[@name="caption"]');
  }
  get textareaMediaLibrary() {
    return $('//textarea[@name="description"]');
  }
  get saveMediaLibrary() {
    return $("//button[contains(text(),'Save')]"); // //button[@class="chakra-button css-qgd8zj"]
  }
  // ---------------------------------------------- Page [AT0007] Blog -----------------------------------------------


  get blogClick() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[1]/ul[1]/div[1]/div[1]/li[3]/div[1]");
  }

  /* -----------------------------------------------------------------
 
       -------------  Author  ----------------

  ----------------------------------------------------------------- */

  get authorClick() {
    return $("//span[contains(text(),'Author')]");
  }
  get createNewAuthor() {
    return $('//a[@href="/admin/author/create"]');
  }
  get nameAuthor() {
    return $('//input[@name="name"]');
  }
  get emailAuthor() {
    return $('//input[@name="authorEmail"]');
  }
  get facebookLinkAuthor() {
    return $('//input[@name="facebookLink"]');
  }
  get instagramAuthor() {
    return $('//input[@name="instagramLink"]');
  }
  get twitterAuthor() {
    return $('//input[@name="twitterLink"]');
  }
  get youtubeAuthor() {
    return $('//input[@name="youtubeLink"]');
  }
  get linkedinAuthor() {
    return $('//input[@name="linkedInLink"]');
  }
  get uploadAuthor() {
    return $('//button[@name="authorImage"]');
  }
  get saveUploadAuthor() {
    return $('//button[@class="chakra-button css-1mci4gx"]');
  }
  get authorDetailsAuthor() {
    return $('//textarea[@name="authorDetails"]');
  }
  get saveAuthor() {
    return $('//button[@class="chakra-button css-wgslge"]');
  }

  /* -----------------------------------------------------------------
 
-------------  Tag  ----------------

----------------------------------------------------------------- */
  get tagClick() {
    return $('//*[@id="root"]/main/div/div[1]/ul/div/div[1]/li[3]/a[2]/div/div');
  }
  get createNewTag() {
    return $('//a[@href="/admin/tag/create"]');
  }
  get nameTag() {
    return $('//input[@name="name"]');
  }
  get productTypeTag() {
    return $("//span[contains(text(),'Product Type')]");
  }
  get saveTag() {
    return $("//button[contains(text(),'Save')]");
  }


  /* -----------------------------------------------------------------
 
  -------------  Post  ----------------

----------------------------------------------------------------- */

  get postClick() {
    return $("//span[contains(text(),'Post')]");
  }
  get createNewPost() {
    return $('//a[@href="/admin/blog/create"]');
  }
  get namePost() {
    return $('//input[@name="title"]');
  }
  get slugPost() {
    return $('//input[@name="slug"]');
  }
  get uploadPost() {
    return $('//button[@name="featuredImage"]');
  }
  get imgUploadPost() {
    return $('//input[@id="fileUpload"]');
  }
  get imgSavePost() {
    return $('//button[@class="chakra-button css-1mci4gx"]');
  }



  // ---------------------------------------------- Page [AT0007] Operation -----------------------------------------------


  get operationClick() {
    return $("//span[contains(text(),'Operation')]");
  }


  /* -----------------------------------------------------------------
 
  -------------  User  ----------------

----------------------------------------------------------------- */

  get userClick() {
    return $("//span[contains(text(),'Users')]");
  }
  get createNewOperation() {
    return $('//a[@href="/admin/users/create"]');
  }
  get firstNameOperation() {
    return $('//input[@name="firstName"]');
  }
  get lastNameOperation() {
    return $('//input[@name="lastName"]');
  }
  get emailOperation() {
    return $('//input[@name="email"]');
  }
  get phoneOperation() {
    return $('//input[@type="tel"]');
  }

  get passworOperation() {
    return $('//input[@name="password"]');
  }
  get confirmPassordOperation() {
    return $('//input[@name="confirmPassword"]');
  }
  get saveDataOperation() {
    return $("//button[contains(text(),'Save')]");
  }



  /* -----------------------------------------------------------------
       
      -------------  Click Opeation menu and Click User sub menu check User List Page with Pagination  ----------------
   
  ----------------------------------------------------------------- */
  get userBackClick() {
    return $('//span[@class="chakra-text css-xvnhps"]');
  }

  get showPage() {
    return $('//select[@class="chakra-select css-15d4dk2"]');
  }
  get gaterSignClick() {
    return $('//span[@class="chakra-text css-xvnhps"]');
  }
  get upButton() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/*[1]");
  }


  // ---------------------------------------------- Page [AT0007] Website Settings -----------------------------------------------


  get websiteSettingsClick() {
    return $("//span[contains(text(),'Website Settings')]");
  }

  /* -----------------------------------------------------------------
       
      -------------  Theme  ----------------
   
  ----------------------------------------------------------------- */

  get themeClick() {
    return $("//span[contains(text(),'Theme')]");
  }

  get logoUploadClickTheme() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/form[1]/div[2]/div[1]/div[1]/button[1]");
  }

  get clickUploadLogo() {
    return $('//input[@id="fileUpload"]');
  }

  get saveLogo() {
    return $('//button[@class="chakra-button css-1mci4gx"]');
  }

  get favIconUploadClick() {
    return $('//button[@class="chakra-button css-bg02im"]');
  }
  get clickUploadFavIcon() {
    return $('//input[@id="fileUpload"]');
  }
  get saveFavIcon() {
    return $('//button[@class="chakra-button css-1mci4gx"]');
  }

  get primaryColor() {
    return $('//div[@id="primaryColor"]');
  }
  get yellowColor() {
    return $('//div[@title="#F8E71C"]');
  }
  get applyPrimaryColor() {
    return $('//button[@class="chakra-button css-iab41d"]');
  }

  get secondaryColor() {
    return $('//div[@id="secondaryColor"]');
  }
  get redColor() {
    return $('//div[@title="#D0021B"]');
  }
  get applySecondaryColor() {
    return $('//button[@class="chakra-button css-iab41d"]');
  }
  get accentColor() {
    return $('//div[@id="accentColor"]');
  }
  get black() {
    return $('//div[@title="#000000"]');
  }
  get applyanccentColor() {
    return $('//button[@class="chakra-button css-iab41d"]');
  }
  get siteFont() {
    return $('//input[@class="chakra-input css-1c6j008"]');
  }
  get abrilSelect() {
    return $('//input[@class="chakra-input css-1c6j008"]');
  }
  get showInSignPage() {
    return $('//input[@class="chakra-input css-1c6j008"]');
  }
  get saveThemeUpdate() {
    return $('//button[@class="chakra-button css-36o3yi"]');
  }

  /* -----------------------------------------------------------------
               
              -------------  Profile  ----------------
           
   ----------------------------------------------------------------- */

  get profileClick() {
    return $("//span[contains(text(),'Profile')]");
  }
  get nameProfile() {
    return $("//input[@name='name']");
  }
  get phoneProfile() {
    return $('//input[@class="customWidth form-control"]');
  }
  get industryType() {
    return $('//div[@class=" css-1hwfws3"]');
  }
  get airlineSelect() {
    return $("//div[contains(text(),'Airline')]");
  }
  get businessAddresss() {
    return $('//textarea[@name="address"]');
  }
  get saveProfile() {
    return $('//textarea[@name="address"]');
  }

  /* -----------------------------------------------------------------
               
              -------------  Domain  ----------------
           
   ----------------------------------------------------------------- */

  get domainClick() {
    return $("//span[contains(text(),'Domain')]");
  }
  get customeDomain() {
    return $("//span[contains(text(),'Domain')]");
  }
  get connectDomain() {
    return $("//button[contains(text(),'Connect Domain')]");
  }
  get upgradeDomain() {
    return $("//button[contains(text(),'UPGRADE ')]");
  }
  get selectCard() {
    return $("//td[contains(text(),'visa')]");
  }




  /* -----------------------------------------------------------------
       
      -------------  Domain Update form production  ----------------
   
  ----------------------------------------------------------------- */

  get getDomain() {
    return $("//a[contains(text(),'Visit')]");
  }
  get enterDomain() {
    return $("//input[@placeholder='Enter your domain']");
  }
  get saveCustomDomain() {
    return $("//button[contains(text(),'Save')]");
  }









}

export default LocatorHome;
//module.exports = new LocatorHome();