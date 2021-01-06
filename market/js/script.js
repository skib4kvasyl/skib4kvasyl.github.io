//скріпт для відкриття проблем і рішення

const feedbackItems = document.querySelectorAll('.feedback__item');

feedbackItems.forEach(active => {
    active.addEventListener('click', function() {
        feedbackItems.forEach(actives => actives.classList.remove('feedback__item-open'));
        this.classList.add('feedback__item-open');
    });
});

// скріп для запитань та відповідей

const queryItems = document.querySelectorAll('[data-tab-target]');
const queryAnswers = document.querySelectorAll('[data-tab-content]');
const queryIcon = document.querySelectorAll('.query__icon');

queryIcon.forEach((icon) => {
    icon.addEventListener('click', function () {
        queryIcon.forEach(icons => {
            icons.classList.remove('query__icon--active');
        });
        this.classList.add('query__icon--active');
    });
});

queryItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        const target = document.querySelector(item.dataset.tabTarget);
        queryAnswers.forEach((item_all) => {
            item_all.classList.remove('answers__item--active');
        });

        target.classList.add('answers__item--active');
    });
});

// скріпт для слайдера для партнерів

const prev = document.querySelector('.partners__button--prev'),
      next = document.querySelector('.partners__button--next'),
      slides = document.querySelectorAll('.partners__slide');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('partners__slide--active');
    }
    slides[n].classList.add('partners__slide--active');
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

