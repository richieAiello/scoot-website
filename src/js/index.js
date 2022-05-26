import { insertSvgs } from "./insertSvgs.js";

// Hamburger button variables
const hamburgerBtn = document.querySelector('.btn--hamburger');
const hamburgerTop = document.querySelector('.hamburger--top');
const hamburgerBottom = document.querySelector('.hamburger--bottom');

// Nav variables
const navMenu = document.querySelector('.nav__menu');
const navShadow = document.querySelector('.nav__shadow');

// Inserts svgs into html on page load.
insertSvgs();

/* Disables the hamburger button to prevent button spamming and rotates the hamburger 
icon into an "X". Adds the hidden and animation classes to navMenu and navShadow. Uses 
an asynchronous function to re-enable the hamburger btn and removes animation
classes from navMenu and navShadow upon animation completion. The setTimeout time limit 
and animation time are both 500ms. */
const navShow = () => {

  setTimeout(() => {
    navMenu.classList.remove('slide-in');
    navShadow.classList.remove('fade-in');

    hamburgerBtn.removeAttribute('disabled');
  }, 500);

  hamburgerBtn.setAttribute('disabled', 'true');

  hamburgerTop.classList.add('flip-top');
  hamburgerBottom.classList.add('flip-bottom');

  // navMenu.classList.remove('hidden');
  // navShadow.classList.remove('hidden');

  navMenu.classList.add('slide-in');
  navShadow.classList.add('fade-in');

  navMenu.classList.remove('hidden');
  navShadow.classList.remove('hidden');
}

/* Disables the hamburger button to prevent button spamming and reverts the hamburger
icon back to it's original shape. Adds the hidden and animation classes to navMenu and 
navShadow. Uses an asynchronous function to re-enable the hamburger btn and removes animation
classes from navMenu and navShadow upon animation completion. The setTimeout time limit 
and animation time are both 500ms. */
const navHide = () => {

  setTimeout(() => {
    navMenu.classList.add('hidden');
    navMenu.classList.remove('slide-out');

    navShadow.classList.add('hidden');
    navShadow.classList.remove('fade-out');

    hamburgerBtn.removeAttribute('disabled');
  }, 500);

  hamburgerBtn.setAttribute('disabled', 'true');

  hamburgerTop.classList.remove('flip-top');
  hamburgerBottom.classList.remove('flip-bottom');

  navMenu.classList.add('slide-out');
  navShadow.classList.add('fade-out');
}

/* Uses the ternary operator to determine whether to show or hide the nav overlay,
based on the existence of class hidden in navMenu. */
hamburgerBtn.addEventListener('click', e => {
  navMenu.classList.contains('hidden') ?
  navShow() :
  navHide();
});