contBtn = document.querySelector(".contacts__btn");
modal = document.querySelector('.modal');
modalClose = document.querySelector(".modal__close");

contBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal-show");
});

modalClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
    evt.preventDefault();
    if(evt.keyCode === 27) {
        if(modal.classList.contains("modal-show")) {
            modal.classList.remove("modal-show");
        }
    }
});