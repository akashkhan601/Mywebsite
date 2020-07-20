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

/*  

	<div class="modalContact">
			<div class="modalformInput">
				<div class="modalfrmClose">+</div>
<img src="image/frmPic.png" alt="">

<form action="" id="modalForm">
	<input type="text" id="modalfrmInp1" class="modalfrmInp" placeholder="Name" required>
	<input type="email" id="modalfrmInp23" class="modalfrmInp" placeholder="E-Mail" required>
	<textarea id="modalfrmInp3" class="modalfrmInp"  placeholder="Massage" required></textarea>
	<input type="submit" value="Submit" class="modalfrmSubmit">
	
</form>
			</div>
		</div>


*/

