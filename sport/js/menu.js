const menuBtn = document.querySelector('.page-header__menu');
const menuBtnActive = document.querySelector('.page-header__menu--active');
const mainList = document.querySelector('.main-nav');

menuBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    menuBtn.classList.toggle('page-header__menu--active');
    mainList.classList.toggle('main-nav__active');
});

menuBtnActive.addEventListener('click', function(evt) {
    evt.preventDefault();
    menuBtn.classList.remove('page-header__menu--active');
    mainList.classList.remove('main-nav__active')
});
