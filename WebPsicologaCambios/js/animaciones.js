//Animacion about me
const links = document.getElementsByClassName(".nav-linkk");
const navbar = document.getElementById("navbarPrincipal");

links.forEach(element => {
  element.addEventListener("click", function () {
    navbar.classList.toggle("show");
  });
});

function alternarAbout(){
const paginasAbout= document.querySelectorAll(".pagina-about");
paginasAbout.forEach(element=>{
  element.classList.toggle("esconder");
  element.classList.toggle("animacion");
})
}

//Cambios de color navbar
window.addEventListener("scroll", function () {
  var about = document.getElementById("myCarousel").getBoundingClientRect().top;
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);

  var hT = $('#myCarousel').offset().top,
    hH = $('#myCarousel').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > (hT + hH - wH)) {
    nav.classList.toggle("sticky");
  }

  var hT2 = $('#servicio').offset().top,
    hH2 = $('#servicio').outerHeight(),
    wH2 = $(window).height(),
    wS2 = $(this).scrollTop();
  if (wS2 > (hT2 + hH2 - wH2)) {
    nav.classList.toggle("sticky");
  }
});