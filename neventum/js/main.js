const items = document.querySelectorAll('.site-list__item');
const active = document.querySelector('.site-list__item--active');

for (let i=0; i < items.length; i++) {
    const li = items[i];

    li.addEventListener('click', function(evt) {
        evt.preventDefault();

        document.querySelector('.site-list__item--active').classList.remove('site-list__item--active');
        li.classList.add('site-list__item--active');
    });
}

// стилізація закриття і відкриття меню

const link = document.querySelector('.page-header__menu');
const linkActive = document.querySelector('.page-header__menu--active');
const mainNav = document.querySelector('.main-nav');

link.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (mainNav.classList.contains('main-nav__show')) {
        mainNav.classList.remove('main-nav__show');
    } else {
        mainNav.classList.add('main-nav__show');
    }
    
    link.classList.toggle('page-header__menu--active');
});


// соціальні мережі

const title = document.querySelector('.promo__title');
const socialShow = document.querySelector('.social');

title.addEventListener('click', function() {
    if (socialShow.classList.contains('social-show')) {
        socialShow.classList.remove('social-show');
    } else {
        socialShow.classList.add('social-show');
    }
});

// відриття меню в футері

const linkFooter = document.querySelector('.main-footer__logo');
const footerMenu = document.querySelector('.main-footer__list');

linkFooter.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (footerMenu.classList.contains('main-footer__list--show')) {
        footerMenu.classList.remove('main-footer__list--show');
    } else {
        footerMenu.classList.add('main-footer__list--show');
    }
});