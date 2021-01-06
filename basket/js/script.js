const menuLink = document.querySelector('.user-menu__link');
const menuLinkActive = document.querySelector('.user-menu__link--acticve');
const userText = document.querySelector('.user-menu__text');
const userTextActive = document.querySelector('.user-menu__text--active');
const userList = document.querySelector('.user-menu__list');
const userListShow = document.querySelector('.user-menu__list--show');

menuLink.addEventListener('click', function(event){
    event.preventDefault();
    if (!userText.classList.contains('user-menu__text--active')) {
        menuLink.classList.add('user-menu__link--acticve');
        userText.classList.add('user-menu__text--active');
        userList.classList.add('user-menu__list--show');
    } else {
        menuLink.classList.remove('user-menu__link--acticve');
        userText.classList.remove('user-menu__text--active');
        userList.classList.remove('user-menu__list--show');
    }
})

// calendart

const calendar = document.querySelector('.bottom-panel__btn--calendar');
const panelTabel = document.querySelector('.panel-tabel');

calendar.addEventListener('click', function(event) {
    event.preventDefault();
    if (!panelTabel.classList.contains('bottom-panel__tabel--show')) {
        panelTabel.classList.add('bottom-panel__tabel--show');
    } else {
        panelTabel.classList.remove('bottom-panel__tabel--show');
    }
})

