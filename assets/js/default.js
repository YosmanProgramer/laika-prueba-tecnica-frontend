'use strict';

// ELEMENTS
const menuBtn = document.querySelector('#btn-menu');
const menuIcon = document.querySelector('#icon-menu');
const menuNav = document.querySelector('#nav-menu');

// functions
const toggleMenu = () => {
  // change menu icon
  if (menuIcon.classList.contains('fa-bars')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
  // toggle menu content
  if (menuNav.classList.contains('-left-full')) {
    menuNav.classList.remove('-left-full');
    menuNav.classList.add('left-0');
  } else {
    menuNav.classList.remove('left-0');
    menuNav.classList.add('-left-full');
  }
};

// EVENTS HANDLER
menuBtn.addEventListener('click', toggleMenu);
