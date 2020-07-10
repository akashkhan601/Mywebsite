
window.addEventListener("scroll",function(){
  var myHeader = document.querySelector("header");
  myHeader.classList.toggle("sticky", window.scrollY>80);
})


var slideIndex = 0;
autoSlider();

function autoSlider(){
  var slides = document.getElementsByClassName("myslider");
  for(var i = 0; i < slides.length;i++){
    slides[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex>slides.length){
  slideIndex = 1;
  }
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(autoSlider, 2000);
}
/*start the  modal image code  */
var mainImg = document.querySelectorAll('.singelImg');
var modalImg = document.querySelector('.modal-img');
 var close = document.querySelector('.close');


for(var i= 0 ; i< mainImg.length; i++){
  mainImg[i].addEventListener('click', function(){
    document.querySelector('.display-modal').style.display = 'block';
    modalImg.src = this.src;   
  })
   
}

close.addEventListener('click', function(){
  document.querySelector('.display-modal').style.display = 'none';
});




 






