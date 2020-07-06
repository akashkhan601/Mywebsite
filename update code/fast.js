
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

/*


*/







