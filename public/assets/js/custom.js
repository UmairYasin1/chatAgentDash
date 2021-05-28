$(document).ready(function(){
    
    // $(".openChatPopup").click(function(){
    //     $(".ChatPopUp").show();
    //     $(".ChatPopUpOverlay").fadeIn();
        
    //        $(".ChatPopUp").removeClass("activateMinimize");
        
        
    // });
    
    
    //  /*  Minimize Chat Toggle   */
    // $(".openChatWidget").click(function(){
    //     $(".ChatPopUp").toggle();
    //     $(".ChatPopUpOverlay").toggle();
    //     $(".ChatPopUp").removeClass("activateMinimize");
        
    // });
    
    // /*  Minimize Chat  */
    
    // $(".btn-minimize").click(function(){
 
        
    //     $(".ChatPopUpOverlay").hide();
    //     $(".ChatPopUp").addClass("activateMinimize");
        
    //     setTimeout(function(){
    //         $(".ChatPopUp").hide();
            
    //     },700)
        
    // });
    
   
    
    
    
    
    
    
    
    
    
    //    $(".btn-close").click(function(){
    //     $(".ChatPopUp").hide();
    //     $(".ChatPopUpOverlay").hide();
        
    // });
    
    
    $(".showUserDetailsSideBar").click(function(){
       $(".historyTable").toggleClass("activated");
        $(".userDetailsSide").toggleClass("activated");
    });
    
    
    $(".tabsUsers ul li a").click(function(){
        $(".tabsUsers ul li").removeClass("active");
        $(this).parent().addClass("active");
    });    
    
    
    
        $(".transcriptBtn").click(function(){
        $(".allUserTabs").hide();
        $(".transcriptTab").show();
    });  
    
    
       $(".userInfoBtn").click(function(){
        $(".allUserTabs").hide();
        $(".userInfoTab").show();
    });    
    
    
    
   setInterval(function(){
    if($(".showWidgetList ul li").length >= 9) {
        $(".showWidgetList ul").addClass("scrollerClass");
    }
    
},1000);
    
});