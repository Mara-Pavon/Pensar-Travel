/*=============== SHOW MENU ===============*/
window.navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*=============== MENU SHOW ===============*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
};

/*=============== MENU HIDDEN ===============*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
};

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('.nav-menu');
    
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                      : header.classList.remove('blur-header')
};
window.addEventListener('scroll', blurHeader);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollup = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')

};
window.addEventListener('scroll', scrollup);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
 
const scrollActive = () =>{
    const scrollY = 

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
};
window.addEventListener('scroll', scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
window.sr = ScrollReveal();

sr.reveal(`.home__data, .explore__data, explore__user, .footer__container`, { origin: 'top',
distance: '60px', duration: 4000, delay: 600,});
sr.reveal(`.scroll-banner`, {duration: 4000, delay: 600, distance: '-100px'});
sr.reveal(`.home__card`, {delay: 600, distance: '100px', interval: 100});
sr.reveal(`.about__container`, {duration: 4000, distance: '400px', origin:'left'});
sr.reveal(`.home__data, .join__image`, {origin: 'right'});
sr.reveal(`.home__image, .join__data`, {origin: 'left'});
sr.reveal(`.popular__card`, {interval: 200});
