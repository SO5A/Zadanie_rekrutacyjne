var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("intro-slides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
        x[slideIndex - 1].style.display = "block";
}

carousel();

function carousel() {

  setTimeout(function() {
    plusDivs(1) 
    setTimeout(carousel, 5000);
  },500);
}



$(document).ready(function(){
    $(".fancybox").fancybox({
          openEffect: "none",
          closeEffect: "none"
      });
      
      $(".zoom").hover(function(){
          
          $(this).addClass('transition');
      }, function(){
          
          $(this).removeClass('transition');
      });
  });
 
  function Collapsible() {
    let elem = document.getElementById("gallery-gradient");
    let gallery = document.getElementById("gallery");
    let button = document.getElementById("collbtn");
    var scroll = document.querySelector("#gallery");


    button.setAttribute("hidden", "hidden");
    elem.style.width = 0;
    gallery.style.overflow = "auto";
    gallery.style.height = "auto";
    scroll.scrollIntoView();  
}
