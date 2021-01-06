linkButton = document.querySelector(".contacts__btn");
popup = document.querySelector(".appointment__show");
overlay = document.querySelector(".overlay__show");
close = document.querySelector(".close");
submitButton = document.querySelector(".appointment__button");

/*З'являється форма*/

linkButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("appointment__show--block");
    overlay.classList.add("overlay__show--block");
});

/*Функція, яка приховує вікно, призначена для setTimeout*/

function clearPopup() {
    popup.classList.remove("appointment__show--block");
    overlay.classList.remove("overlay__show--block");
};

/*При кліку на "відпрвити" запускається анімація - тікає вправо*/

submitButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("appointment__show--right");
    setTimeout(clearPopup, 1000);
});

/*При кліку на "відпрвити" запускається анімація - тікає вниз та закривається*/

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("appointment__show--bottom");
    overlay.classList.remove("overlay__show--block");
    setTimeout(clearPopup, 1000);
});

/*Закривається при натисканні esc*/

window.addEventListener("keydown", function(evt) {
    if(evt.keyCode===27) {
        evt.preventDefault();
            if((popup.classList.contains("appointment__show--block")) && (overlay.classList.contains("overlay__show--block"))) {
                popup.classList.remove("appointment__show--block");
                overlay.classList.remove("overlay__show--block");
            }
    }
});