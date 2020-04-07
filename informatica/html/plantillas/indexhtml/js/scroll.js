


//Get the button to top
var initBtn = document.getElementById("initBtn");
//Hide c2mismo
var c2m = document.getElementById("c2m");
//Hide menuBtn
var openNavBtn = document.getElementById("openNavBtn");

var mQ600 = window.matchMedia("(max-width: 600px)");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
  if (mQ600.matches){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      initBtn.style.display = "block";
      c2m.style.display = "none";
      openNavBtn.style.display = "none";
    } else {
      initBtn.style.display = "none";
      c2m.style.display = "inline-block";
      openNavBtn.style.display = "inline-block";
    }

  } else {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      initBtn.style.display = "block";
      c2m.style.display = "none";
    } else {
      initBtn.style.display = "none";
      c2m.style.display = "block";
    }
  }
}



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


