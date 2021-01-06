const btnSity = document.querySelectorAll('.sity__btn');
const contentSity = document.querySelectorAll('.sity__content');

let activeBtnSity = document.querySelector('.sity__btn.sity__btn--active');
let activeContentSity = document.querySelector('.sity__content.sity__content--active');

for (let i = 0; i < btnSity.length; i++) {
    btnSity[i].addEventListener('click', (e) => {
        e.preventDefault();
        //перемикачі на кнопки
        activeBtnSity.classList.remove('sity__btn--active');
        btnSity[i].setAttribute('class', 'sity__btn sity__btn--active');
        activeBtnSity = btnSity[i];

        // змінювання коненту по кліку
        activeContentSity.classList.remove('sity__content--active');
        contentSity[i].setAttribute('class', 'sity__content sity__content--active');
        activeContentSity = contentSity[i];
    });
};