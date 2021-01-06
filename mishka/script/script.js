var mainNav = document.querySelector(".main-nav__list");
var headerWrapper = document.querySelector(".page-header__wrapper");
var button = document.querySelector(".page-header__btn");

button.addEventListener("click", function(){
    if(headerWrapper.classList.contains("page-header__wrapper--close")) {
        headerWrapper.classList.remove("page-header__wrapper--close");
        headerWrapper.classList.add("page-header__wrapper--open");
    } else {
        headerWrapper.classList.add("page-header__wrapper--close");
        headerWrapper.classList.remove("page-header__wrapper--open");
    }
});