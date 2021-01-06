var toggle = document.querySelector(".page-header__toggle");
var mainNav = document.querySelector(".main-nav");
var pageHeader = document.querySelector(".page-header__wrapper");

toggle.addEventListener("click", function() {
    if(pageHeader.classList.contains("page-header__wrapper--close")) {
        pageHeader.classList.remove("page-header__wrapper--close");
        pageHeader.classList.add("page-header__wrapper--open");
    } else {
        pageHeader.classList.add("page-header__wrapper--close");
        pageHeader.classList.remove("page-header__wrapper--open");
    }
});