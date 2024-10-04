class UILocator {



  get registrationFrom() {
    return $("//section[@class='chakra-modal__content css-1kpz94o']");
  }
  get businessSignup() {
    return $("//h2[contains(text(),'Business Signup')]");
  }
  get yourName() {
    return $("//label[contains(text(),'Your Name')]");
  }
  get Email() {
    return $("//label[contains(text(),'Email')]");
  }
  get websiteName() {
    return $("//label[contains(text(),'Website Name')]");
  }
  get phoneNumber() {
    return $("//label[contains(text(),'Phone Number')]");
  }
  get password() {
    return $("//label[contains(text(),'Password')]");
  }
  get confirmPassword() {
    return $("//label[contains(text(),'Confirm Password')]");
  }
  get saveRegistration() {
    return $("//button[contains(text(),'Save')]");
  }


  //-----------------------------------------------------------Sites UI Testing-----------------------------------------------


  get UI_SitesClick() {
    return $("//span[contains(text(),'Sites')]");
  }


  /* -----------------------------------------------------------------
 
   -------------  Page  ----------------

----------------------------------------------------------------- */

  get UI_pageClick() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[1]/ul[1]/div[1]/div[1]/li[2]/a[1]/div[1]/div[1]/span[1]");
  }

  get UI_search() {
    return $("//input[@class='chakra-input css-1x13kex']");
  }

  get UI_pageName() {
    return $("//th[contains(text(),'Page Name')]");
  }

  get UI_created() {
    return $("//th[contains(text(),'Created')]");
  }

  get UI_update() {
    return $("//th[contains(text(),'Updated')]");
  }

  get UI_setHomePage() {
    return $("//th[contains(text(),'Set Home Page')]");
  }

  get UI_setPageStatus() {
    return $("//th[contains(text(),'Set Page Status')]");
  }

  get UI_action() {
    return $("//th[contains(text(),'Action')]");
  }



  get UI_pageBuilder() {
    return $("//button[contains(text(),'Page Details')]");
  }
  get UI_delete() {
    return $("//button[contains(text(),'Delete')]");
  }

  get UI_createNew() {
    return $("//a[contains(text(),'Create new')]");
  }
  get UI_settingPage() {
    return $("//button[@class='chakra-button css-1mghlvv']");
  }
  get UI_pageSlug() {
    return $("//p[contains(text(),'Page Slug:')]");
  }
  get UI_metaDescription() {
    return $("//p[contains(text(),'Meta Description:')]");
  }
  get UI_metaKeyword() {
    return $("//p[contains(text(),'Meta Keywords:')]");
  }
  get UI_openGraph() {
    return $("//p[contains(text(),'Open Graph Protocol Image:')]");
  }


  /* -----------------------------------------------------------------
     
           -------------  media library  ----------------
    
   ----------------------------------------------------------------- */

  get UI_mediaLibraryClick() {
    return $("//span[contains(text(),'Media Library')]");
  }

  get UI_nameML() {
    return $("//label[contains(text(),'Name')]");
  }

  get UI_allText() {
    return $("//label[contains(text(),'Alt Text')]");
  }

  get UI_captionML() {
    return $("//label[contains(text(),'Caption')]");
  }

  get UI_descriptionML() {
    return $("//label[contains(text(),'Description')]");
  }

  get UI_AllTabML() {
    return $("(//button[@class='chakra-tabs__tab css-1vrgtg3'])[1]");
  }

  get UI_imagML() {
    return $("(//button[@class='chakra-tabs__tab css-1vrgtg3'])[2]");
  }

  get UI_VideosML() {
    return $("(//button[@class='chakra-tabs__tab css-1vrgtg3'])[3]");
  }

  get UI_DocsML() {
    return $("(//button[@class='chakra-tabs__tab css-1vrgtg3'])[4]");
  }

  get UI_miceML() {
    return $("(//button[@class='chakra-tabs__tab css-1vrgtg3'])[5]");
  }

  get UI_editIcon() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[3]/*[2]");
  }
  get UI_deleteIcon() {
    return $("//button[contains(text(),'Delete All Unused')]");
  }

  get UI_paginationML() {
    return $("(//button[@class='chakra-tabs__tab css-1vrgtg3'])[5]");
  }



  //-----------------------------------------------------------Blog UI Testing-----------------------------------------------


  get UI_blogClick() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[1]/ul[1]/div[1]/div[1]/li[3]/div[1]");
  }


  /* -----------------------------------------------------------------
 
   -------------  Author  ----------------

----------------------------------------------------------------- */

  get UI_authorClick() {
    return $("//span[contains(text(),'Author')]");
  }

  get UI_searchAuthor() {
    return $('//input[@class="chakra-input css-1x13kex"]');
  }
  get UI_createNewAuthor() {
    return $('//a[@href="/admin/author/create"]');
  }

  get UI_nameAuthor() {
    return $("//th[contains(text(),'NAME')]");
  }

  get UI_emailAuthor() {
    return $("//th[contains(text(),'EMAIL')]");
  }

  get UI_addedOnAuthor() {
    return $("//th[contains(text(),'ADDED ON')]");
  }

  get UI_socialLinkAuthor() {
    return $("//th[contains(text(),'SOCIAL LINKS')]");
  }

  get UI_detailsAuthor() {
    return $("//th[contains(text(),'DETAILS')]");
  }

  get UI_activeAuthor() {
    return $("//th[contains(text(),'ACTIVE')]");
  }


  get UI_nameAuthorField() {
    return $("//label[contains(text(),' Name ')]");
  }
  get UI_emailAuthorField() {
    return $("//label[contains(text(),' Email ')]");
  }
  get UI_facebookLinkAuthor() {
    return $('//input[@name="facebookLink"]');
  }
  get UI_instagramAuthor() {
    return $('//input[@name="instagramLink"]');
  }
  get UI_twitterAuthor() {
    return $('//input[@name="twitterLink"]');
  }
  get UI_youtubeAuthor() {
    return $('//input[@name="youtubeLink"]');
  }
  get UI_linkedinAuthor() {
    return $('//input[@name="linkedInLink"]');
  }
  get UI_uploadAuthor() {
    return $('//button[@name="authorImage"]');
  }
  get UI_saveUploadAuthor() {
    return $('//button[@class="chakra-button css-1mci4gx"]');
  }

  get UI_authorImageAuthor() {
    return $("//p[contains(text(),'Author Image')]");
  }
  get UI_authorDetailsAuthor() {
    return $("//label[contains(text(),'Author Details')]");
  }
  get UI_saveAuthor() {
    return $('//button[@class="chakra-button css-wgslge"]');
  }

  /* -----------------------------------------------------------------
             
                   -------------  Tag  ----------------
            
     ----------------------------------------------------------------- */


  get UI_tagClick() {
    return $('//*[@id="root"]/main/div/div[1]/ul/div/div[1]/li[3]/a[2]/div/div');
  }

  get UI_createNewTag(){
    return $('//a[@href="/admin/tag/create"]');
  }
  get UI_searchTag() {
    return $('//input[@class="chakra-input css-1x13kex"]');
  }
  get UI_tagNameTag() {
    return $("//th[contains(text(),'Tag Name')]");
  }
  get UI_tagTypeTag() {
    return $("//th[contains(text(),'Tag Type')]");
  }
  get UI_paginationTag() {
    return $('//div[@class="css-2imjyh"]');
  }

  get UI_nameTag() {
    return $("//label[contains(text(),' Name ')]");
  }

  get UI_selectTagType(){
    return $('//form//p[contains(text(), "Select a tag type :")]');
  }
        
  get UI_blogTypeTag(){
    return $("//span[contains(text(),'Blog Type')]");
    
  }    
   
  get UI_productTypeTag(){
    return $("//span[contains(text(),'Product Type')]");
  }
  get UI_saveTag(){
    return $("//button[contains(text(),'Save')]");
  }

   /* -----------------------------------------------------------------
             
                   -------------  Post  ----------------
            
     ----------------------------------------------------------------- */

  get UI_post(){
    return $("//span[contains(text(),'Post')]");
  }
  get UI_searchPost(){
    return $('//input[@class="chakra-input css-1sd02p2"]');
  }
  get UI_titlePost(){
    return $("//th[contains(text(),'Title')]");
  }
  get UI_createdPost(){
    return $("//th[contains(text(),'Created')]");
  }
  get UI_updatePost(){
    return $("//th[contains(text(),'Updated')]");
  }
  get UI_excerptPost(){
    return $("//th[contains(text(),'Excerpt')]");
  }
  get UI_publishPost(){
    return $("//th[contains(text(),'Publish')]");
  }


  get UI_createNewPost(){
    return $('//a[@href="/admin/blog/create"]');
  }

  get UI_titleInsidePost(){
    return $("//label[contains(text(),'Title')]");
  }
  get UI_blogSlugPost(){
    return $("//p[contains(text(),'Blog slug')]");
  }
  get UI_featureImagePost(){
    return $("//p[contains(text(),'Feature Image')]");
  }
  get UI_excerptInsidePost(){
    return $("//label[contains(text(),'Excerpt')]");
  }
  get UI_tagsPost(){
    return $("//label[contains(text(),'Tags')]");
  }
  get UI_primaryAuthorPost(){
    return $("//label[contains(text(),'Primary Author')]");
  }
  get UI_focusKeyphrasePost(){
    return $("//p[contains(text(),'Focus Keyphrase')]");
  }
  get UI_metaDescriptionPost(){
    return $("//label[contains(text(),'Meta Description')]");
  }
  get UI_seoReportPost(){
    return $("//button[contains(text(),'SEO Report')]");
  }
  get UI_quickPreviewPost(){
    return $("//button[contains(text(),'Quick Preview')]");
  }
  get UI_savePost(){
    return $("//button[contains(text(),'Save')]");
  }



  //-----------------------------------------------------------OPeration UI Testing-----------------------------------------------




  get UI_operation(){
    return $("//span[contains(text(),'Operation')]");
  }


  /* -----------------------------------------------------------------
             
                   -------------  Users  ----------------
            
  ----------------------------------------------------------------- */

  get UI_usersOperation(){
    return $("//span[contains(text(),'Users')]");
  }

  get UI_firstNameUsers(){
    return $("//th[contains(text(),'First Name')]");
  }
  get UI_lastNameUsers(){
    return $("//th[contains(text(),'Last Name')]");
  }
  get UI_emailUsers(){
    return $("//th[contains(text(),'Email')]");
  }
  get UI_phoneUsers(){
    return $("//th[contains(text(),'Phone')]");
  }
  get UI_createNewUsers(){
    return $("//a[contains(text(),'Create new')]");
  }
  get UI_firstNameInsideUsers(){
    return $("//label[contains(text(),'First Name')]");
  }
  get UI_lastNameInsideUsers(){
    return $("//label[contains(text(),'Last name')]");
  }
  get UI_emailInsideUsers(){
    return $("//label[contains(text(),'Email')]");
  }
  get UI_phoneInsideUsers(){
    return $("//label[contains(text(),'Phone Number')]");
  }
  get UI_passwordUsers(){
    return $("//label[contains(text(),'Password')]");
  }
  get UI_confirmPasswordUsers(){
    return $("//label[contains(text(),'Confirm Password')]");
  }
  get UI_saveUsers(){
    return $("//button[contains(text(),'Save')]");
  }



  //-----------------------------------------------------------Website Setting UI Testing-----------------------------------------------


  get UI_websiteSetting(){
    return $("//span[contains(text(),'Website Settings')]");
  }


  

  /* -----------------------------------------------------------------
             
                   -------------  Theme  ----------------
            
  ----------------------------------------------------------------- */




  get UI_themeWebsiteSetting(){
    return $("//span[contains(text(),'Theme')]");
  }

  get UI_themeSettingTheme(){
    return $("//p[contains(text(),'Theme Settings')]");
  }
  get UI_logoTheme(){
    return $("//p[contains(text(),'Logo')]");
  }
  get UI_favIconTheme(){
    return $("//p[contains(text(),'Fav Icon')]");
  }
  get UI_webSiteColorTheme(){
    return $("//p[contains(text(),'Website Colors')]");
  }
  get UI_primaryColorTheme(){
    return $("//label[contains(text(),'Primary Color')]");
  }
  get UI_secondaryColorTheme(){
    return $("//label[contains(text(),'Secondary Color')]");
  }
  get UI_accentColorTheme(){
    return $("//label[contains(text(),'Accent Color')]");
  }
  get UI_siteFontTheme(){
    return $("//label[contains(text(),'Site Font')]");
  }
  get UI_showSigninPageTheme(){
    return $("//span[contains(text(),'Show Signin Page')]");
  }
  get UI_saveTheme(){
    return $("//button[contains(text(),'Save')]");
  }



  /* -----------------------------------------------------------------
             
                   -------------  Profile  ----------------
            
  ----------------------------------------------------------------- */



  get UI_profileWebsiteSetting(){
    return $("//span[contains(text(),'Profile')]");
  }

  get UI_profileSettingsProfile(){
    return $("//p[contains(text(),'Profile Settings')]");
  }
  get UI_nameProfile(){
    return $("//label[contains(text(),'Name')]");
  }
  get UI_emailProfile(){
    return $("//label[contains(text(),'Email')]");
  }
  get UI_phoneProfile(){
    return $("//label[contains(text(),'Phone')]");
  }
  get UI_profileImageProfile(){
    return $("//p[contains(text(),'Profile Image')]");
  }
  get UI_industryTypeProfile(){
    return $("//label[contains(text(),'Industry Type')]");
  }
  get UI_websiteNameProfile(){
    return $("//label[contains(text(),'Website Name')]");
  }
  get UI_businessAddressProfile(){
    return $("//label[contains(text(),'Business Address')]");
  }
  get UI_saveProfile(){
    return $("//button[contains(text(),'Save')]");
  }


  /* -----------------------------------------------------------------
             
                   -------------  Domain  ----------------
            
  ----------------------------------------------------------------- */

  get UI_domainWebsiteSetting(){
    return $("//span[contains(text(),'Domain')]");
  }
  get UI_connectCustomDomain(){
    return $("//h2[contains(text(),'Connect your custom domain here.')]");
  }
  get UI_yourFreeDomain(){
    return $("//label[contains(text(),'Your Free Domain')]");
  }
  get UI_customDomainCofigDomain(){
    return $("//label[contains(text(),'Custom Domain Config ')]");
  }
  get UI_typeDomain(){
    return $("//th[contains(text(),'Type')]");
  }
  get UI_hostDomain(){
    return $("//th[contains(text(),'Host')]");
  }
  get UI_valueDomain(){
    return $("//th[contains(text(),'Value')]");
  }
  get UI_ttlDomain(){
    return $("//th[contains(text(),'TTL')]");
  }
  
  get UI_saveDomain(){
    return $("//button[contains(text(),'Save')]");
  }
  


  //-----------------------------------------------------------Billing Setting UI Testing-----------------------------------------------


  
  get UI_billing(){
    return $("//span[contains(text(),'Billing')]");
  }
  

  

  /* -----------------------------------------------------------------
             
                   -------------  Card  ----------------
            
  ----------------------------------------------------------------- */


  get UI_cardBilling(){
    return $("//span[contains(text(),'Card')]");
  }

  get UI_cardHolderCard(){
    return $("//th[contains(text(),'Card Holder')]");
  }
  get UI_emailCard(){
    return $("//th[contains(text(),'Email')]");
  }
  get UI_last4DigitCard(){
    return $("//th[contains(text(),'Last 4 digit')]");
  }
  get UI_expiresOnCard(){
    return $("//th[contains(text(),'Expires On')]");
  }
  get UI_createNewCard(){
    return $("//a[contains(text(),'Create new')]");
  }



  //-----------------------------------------------------------Configuration UI Testing-----------------------------------------------



  get UI_configuration(){
    return $("//span[contains(text(),'Configuration')]");
  }

  
  

  /* -----------------------------------------------------------------
             
                   -------------  Chat Config  ----------------
            
  ----------------------------------------------------------------- */


  get UI_chatConfigConfiguration(){
    return $("(//span[contains(text(),'Chat Config')])[1]");
  }
  
  get UI_chatConfigInsideConfiguration(){
    return $("(//span[contains(text(),'Chat Config')])[2]");
  }
  get UI_dropdownChatConfig(){
    return $('//select[@name="option"]');
  }
  
  get UI_twaktoChatConfig(){
    return $("//p[contains(text(),'TWAKTO')]");
  }
  get UI_propertyIdChatConfig(){
    return $("//label[contains(text(),'Property ID')]");
  }
  get UI_chatIdChatConfig(){
    return $("//label[contains(text(),'Chat ID')]");
  }
  get UI_saveChatConfig(){
    return $("//button[contains(text(),'Save')]");
  }
  



   /* -----------------------------------------------------------------
             
                   -------------  Google Analytics  ----------------
            
  ----------------------------------------------------------------- */

  
  get UI_googleAnalyticsConfiguration(){
    return $("//span[contains(text(),'Google Analytics')]");
  }
  
  get UI_googleAnalyticsInsideConfiguration(){
    return $("//p[contains(text(),'Google Analytics')]");
  }
  
  get UI_googleAnalytics4MeasurementIDgoogleAnalytics(){
    return $("//p[contains(text(),'Google Analytics 4 Measurement ID')]");
  }
  get UI_googleTagManagerCodeGAnalytics(){
    return $("//p[contains(text(),'Google Tag Manager Code')]");
  }
  get UI_googleAnalytics4ActiveGAnalytics(){
    return $("//p[contains(text(),'Google Analytics 4 Active')]");
  }
  get UI_googleTagManagerActiveGAnalytics(){
    return $("//p[contains(text(),'Google Tag Manager Active')]");
  }
  


  /* -----------------------------------------------------------------
             
                   ------------- Mail Config  ----------------
            
  ----------------------------------------------------------------- */



  get UI_mailConfigConfiguration(){
    return $("//span[contains(text(),'Mail Config')]");
  }
  
  get UI_connectionInformationMailConfig(){
    return $("//span[contains(text(),'Mail Config')]");
  }
  get UI_smtpServerMailConfig(){
    return $("//label[contains(text(),'SMTP Server')]");
  }
  get UI_smtpPortMailConfig(){
    return $("//label[contains(text(),'SMTP Port')]");
  }
  
  get UI_emailAddressMailConfig(){
    return $("//label[contains(text(),'Email address')]");
  }
  get UI_passwordMailConfig(){
    return $("//label[contains(text(),'Password')]");
  }
  


  
    /* -----------------------------------------------------------------
 
       ------------- Google Search Console  ----------------
 
     ----------------------------------------------------------------- */

    
     get UI_GSCConfiguration(){
      return $("//span[contains(text(),'Google search Console')]");
    }
     get UI_contentGSC(){
      return $("//label[contains(text(),'Content')]");
    }
     get UI_activeGSC(){
      return $("//label[contains(text(),'Active')]");
    }
     get UI_saveGSC(){
      return $("//button[contains(text(),'Save')]");
    }
    
   

    /* -----------------------------------------------------------------
 
       ------------- Google AdSense  ----------------
 
     ----------------------------------------------------------------- */


     get UI_googleAdSenseConfiguration(){
      return $("//span[contains(text(),'Google AdSense')]");
    }
     get UI_clientCodeGoogleAdSense(){
      return $("//p[contains(text(),'Client Code')]");
    }
     get UI_activeGoogleAdSense(){
      return $("//p[contains(text(),'Active')]");
    }
     get UI_saveGoogleAdSense(){
      return $("//button[contains(text(),'Save')]");
    }
    



    /* -----------------------------------------------------------------
 
       ------------- Pinterest Verification  ----------------
 
     ----------------------------------------------------------------- */


     get UI_PVConfiguration(){
      return $("//span[contains(text(),'Pinterest Verification')]");
    }
     get UI_contentPV(){
      return $("//label[contains(text(),'Content')]");
    }
     get UI_activePV(){
      return $("//label[contains(text(),'Active')]");
    }
    
     get UI_savePV(){
      return $("//button[contains(text(),'Save')]");
    }
    







}
export default UILocator;