// when the user scrolls the page, execute headerScroll
window.onscroll = function() { navbarScroll() };

// the header element
var header = document.getElementById("myNavbar");

// offsetTop is the position of the header
var sticky = header.offsetTop;

// add the sticky class to the header when the user scrolls 
function navbarScroll() {
  // if the user scrolls (pageYOffset) past the header's position, add the sticky class
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}