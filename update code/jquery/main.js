$(document).ready(function(){
    $(function() {
        $('.animate-clip').animatedHeadline({
            animationType: 'clip',
            
            
        });
    });

    $("#modalcontactBtn").click(function(){
        $(".modalContact").show();
    });

    $(".modalfrmClose").click(function(){
        $(".modalContact").hide(1000);
    });

    $('.manafic-zoom').magnificPopup({
        
        type:'image',
        gallery:{
            enabled:true
          }
});
    
});

