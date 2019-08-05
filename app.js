
const navSlide = () => {
  if (screen.width <= 768) {
    // toggle nav
    nav.classList.toggle('nav-active');    
    // animate links
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation =''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.2}s`;
      }
    });   
    // toggle burger icon
    burger.classList.toggle('toggleBurger');
  }
}

const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');
const navLinks = document.querySelectorAll('.navlinks li');

burger.addEventListener('click', navSlide);
nav.addEventListener('click', navSlide);
