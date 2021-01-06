var search = document.querySelector(".user-navigation__search");
var modalSearch = document.querySelector(".search__show");
login = document.querySelector(".user-navigation__login");
modalLogin = document.querySelector(".modal__show");

/*Пошук*/

search.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalSearch.classList.toggle("search__show--block");
});

/*Вхід*/

login.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalLogin.classList.toggle("modal__show--block");
});

/*Пошук esc*/

window.addEventListener("keydown", function(evt) {
    if(evt.keyCode===27) {
        evt.preventDefault();
            if(modalSearch.classList.contains("search__show--block")) {
                modalSearch.classList.remove("search__show--block");
            }
    }
});

/*Вхід esc*/

window.addEventListener("keydown", function(evt) {
    if(evt.keyCode===27) {
        evt.preventDefault();
            if(modalLogin.classList.contains("modal__show--block")) {
                modalLogin.classList.remove("modal__show--block");
            }
    }
});
