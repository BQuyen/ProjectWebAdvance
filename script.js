let slideSet = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  };
 slideSet++;
  if (slideSet > slides.length) {slideSet = 1}    
  slides[slideSet-1].style.display = "block";  

  setTimeout(showSlides, 3000); 
}
