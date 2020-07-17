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

$(".owl-carousel").owlCarousel({
    items :1,
    loop :true,
     nav  : true,
    dots  :true,
    autoplay: true,
    autoplayTimeout:5000,
    autoplaySpeed :2000,
    navSpeed      : 1000,
     dotsSpeed     : 2000,
     navText       : ['<i class="fas   fa-arrow-left"></i> ' , '   <i class="fas  fa-arrow-right"></i> ']
    
});
    
});

