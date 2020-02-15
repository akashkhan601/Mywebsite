
var webNav = document.getElementById("myNav");

window.onscroll = function scrollFunction() {
  if(document.body.scrollTop>100 || document.documentElement.scrollTop>100){
    this.webNav.style.background = "black";
    this.webNav.style.boxShadow = "#ab7f7f 0px 0px 5px 2px";
   
  }else{
    this.webNav.style.background ="transparent";
    this.webNav.style.boxShadow = "none";
    
  }
}

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
  setTimeout(autoSlider, 3000);
}

window.onload= function(){
  const aboutEfact = document.querySelectorAll("#inspraivaiSec, aboutSectn");
  
  
window.addEventListener('scroll',scrollEfact);

function scrollEfact(){
  if(window.scrollY>=3100){
    aboutEfact.style.opacity = '1';
    aboutEfact.style.transform = 'translateX(0px)';
    aboutEfact.style.transition = '1s ease-in-out';
  }else{
    aboutEfact.style.opacity = '0';
    aboutEfact.style.transform = 'translateX(-50px)';
  }
}
}
scrollEfact();


