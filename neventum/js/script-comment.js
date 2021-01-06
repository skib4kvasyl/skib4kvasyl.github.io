const arrowButton = document.querySelectorAll('.list-button__item');
const contents = document.querySelectorAll('.comments__content');

let activeArrow = document.querySelector('.list-button__item.list-button__item--active');
let activeContent = document.querySelector('.comments__content.content-active');

for (let i = 0; i < arrowButton.length; i++) {
    arrowButton[i].addEventListener('click', () => {
        activeArrow.classList.remove('list-button__item--active');
        arrowButton[i].setAttribute('class', 'list-button__item list-button__item--active');
        activeArrow = arrowButton[i];

        activeContent.classList.remove('content-active');
        contents[i].setAttribute('class', 'comments__content content-active');
        activeContent = contents[i];
    });
}