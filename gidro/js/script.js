// константи для закриття та відкриття меню
const wrapper = document.querySelector('.page-header__wrapper');
const toggle = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');

//константи для перемикання списку при кліку
const items = document.querySelectorAll('.cargo-list__item');
const itemCargoListActive = document.querySelector('.cargo-list__item--active');

// константи для слайдера на першому екрані
const next = document.querySelector('.slider__button--right'),
      prev = document.querySelector('.slider__button--left'),
      slides = document.querySelectorAll('.slider-list__item'),
      dots = document.querySelectorAll('.slider__dot');

// константи для відкриття категорій
const searchButton = document.querySelector('.search-butoon'),
      searchList = document.querySelector('.search-form__list');

// константи для відкриття популярних товарів
const popularButton = document.querySelector('.popular-products__button'),
      popularList = document.querySelector('.popular-products__list');

// константи для відкриття товари, які купують разом
const moreButton = document.querySelector('.more-button'),
      moreList = document.querySelector('.more-list');

// константи для меню контактної інформації
const infoList = document.querySelector('.information-list.information-list__item'),
      infoListItem = document.querySelectorAll('.information-list__item'),
      infoListActive = document.querySelector('.information-list__item--active'),
      infoListActiveOpen = document.querySelector('.information-list__item--active-open');

// константи для меню користувача

const userListItem = document.querySelectorAll('.user-footer__item');

// код для відкриття та закриття меню 
toggle.addEventListener('click', (event) => {
    event.preventDefault();

    if ((wrapper.classList.contains('page-header__wrapper--open')) && (mainNav.classList.contains('main-nav__open')) && (toggle.classList.contains('main-nav__toggle--active')) ) {
        toggle.classList.remove('main-nav__toggle--active');
        wrapper.classList.remove('page-header__wrapper--open');
        mainNav.classList.remove('main-nav__open');
    } else {
        toggle.classList.add('main-nav__toggle--active');
        wrapper.classList.add('page-header__wrapper--open');
        mainNav.classList.add('main-nav__open');
    }
});

// код для підкреслення активного
for(let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', (evt) => {
        evt.preventDefault();
        items.forEach(link => {
            link.classList.remove('cargo-list__item--active');
        })
        items[i].classList.add('cargo-list__item--active');
    }) ;
};

// код для сладера на першому екрані

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('slider-list__item--active');
    }
    slides[n].classList.add('slider-list__item--active');
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('slider__dot--active');
    }
    dots[n].classList.add('slider__dot--active');
}

const prevCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prevCurrentSlide(index);
    } else {
        index++;
        prevCurrentSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        prevCurrentSlide(index);
    } else {
        index--;
        prevCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prevCurrentSlide(index);
        clearInterval(interval);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const interval = setInterval(nextSlide, 2500);

// код для відкриття списку катергорій
searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    if (searchList.classList.contains('categories-list')) {
        searchList.classList.remove('categories-list');
    } else {
        searchList.classList.add('categories-list');
    }
})

// код для відкриття та закриття меню
popularButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (popularList.classList.contains('products-list')) {
        popularList.classList.remove('products-list');
    } else {
        popularList.classList.add('products-list');
    }
})

// код для відкриття та закриття, списку меню "купують разом"
moreButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (moreList.classList.contains('more-list')) {
        moreList.classList.remove('more-list');
    } else {
        moreList.classList.add('more-list');
    }
})

// код для відкриття меню контактної інформації
for (let i = 0; i < infoListItem.length; i++) {
    infoListItem[0].addEventListener('click', () => {
        infoListItem[i].style.display = 'block';
    })
};

// код для відкриття меню користувача
for (let i = 0; i < userListItem.length; i++) {
    userListItem[0].addEventListener('click', () => {
        userListItem[i].style.display = 'block';
    })
}