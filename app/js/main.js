'use strict';

const anchors = document.querySelectorAll('.anchor');
for (let anchor of anchors) {
  anchor.addEventListener('click', event => {
    event.preventDefault();
    
    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth'
    });
  });
}

const headerBg = () => {
  const header = document.querySelector('.header');


  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    if (scrolled >= 150 ) {
      header.style.backgroundColor = 'rgba(196, 196, 196, 1)';
      header.style.color = '#fff';
    } else {
      header.style.backgroundColor = 'rgba(196, 196, 196, .1)';
      header.style.color = '#717784';
    }
  });
};

const toggleMenu = () => {
  const menu = document.querySelector('.header__mobile'),
      mobileBtn = document.querySelector('.header__mobile-btn');

  const handlerMenu = event => {
    const target = event.target;
    
    const activeMenu = () => {
      mobileBtn.classList.toggle('active');
      menu.classList.toggle('active');
      if(menu.classList.contains('active')) {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'overlay';
      }
    };

  if (target.closest('.header__mobile-btn') || (!target.closest('.header__mobile') && menu.classList.contains('active'))) {
    activeMenu();
  } else if (target.closest('.header__mobile') && target.closest('[href^="#"]')) {
    activeMenu();
  }
};

  document.body.addEventListener('click', handlerMenu);
};

headerBg();
toggleMenu();