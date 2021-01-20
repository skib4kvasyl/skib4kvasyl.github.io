const icon = document.getElementsByClassName('navbar__icon');
const item = document.getElementsByClassName('navbar__item');
const list = document.querySelector('.navbar__list');

for(i = 0; i < icon.length; i++) {
    icon[i].addEventListener('click', function(event) {
        event.preventDefault();

        if (list.classList.contains('navbar__item--active')) {
            list.classList.remove('navbar__list--mobile');
        } else {
            list.classList.add('navbar__list--mobile');
        }

        for(i = 0; i < item.length; i++) {
            item[i].classList.remove('navbar__item--active');
        }
        this.parentElement.classList.toggle('navbar__item--active');
    });
};

