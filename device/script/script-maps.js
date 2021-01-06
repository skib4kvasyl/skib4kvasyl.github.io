mapLinks = document.querySelector(".contacts__maps--image");
mapPopup = document.querySelector(".maps");
mapClose = document.querySelector(".maps__close");

mapLinks.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("maps__show");
});

mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("maps__show");
});

window.addEventListener("keydown", function(evt) {
    evt.preventDefault();
    if(evt.keyCode === 27) {
        if(mapPopup.classList.contains("maps__show")) {
            mapPopup.classList.remove("maps__show");
        }
    }
});