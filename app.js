const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelectorAll('.navlinks li');
    const mainBody = document.querySelector('.mainBody');

    burger.addEventListener('click', ()=> {
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
// temporary move main body down
        // if (imgMoved == false) {
        //   mainBody.style.animation = `imageMoveDown 1s ease forwards`;
        //   imgMoved=true;
        // } else {
        //   mainBody.style.animation = `imageMoveUp 1s ease forwards`;
        //   imgMoved = false;
        // }

    })



}

let imgMoved = false;
navSlide();

