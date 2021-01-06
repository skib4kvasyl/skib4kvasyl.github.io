const activeLink = document.querySelector('.site-list__text'),
      subMenu = document.querySelector('.site-list__submenu'),
      overlay = document.querySelector('.modal-overlay'),
      userLogin = document.querySelector('.user-list__login'),
      userRegist = document.querySelector('.modal-login__registering--link'),
      userModalLogin = document.querySelector('.modal-login'),
      userModalRegist = document.querySelector('.modal-registering'),
      modalMailing = document.querySelector('.modal-mailing'),
      modalCloseButtonLogin = document.querySelector('.modal__close--login'),
      modalCloseButtonRegist = document.querySelector('.modal__close--regist'),
      formUserRegist = document.querySelector('.form__button--registering'),
      modalCloseMailing = document.querySelector('.modal__close--mailing'),
      modalResponse = document.querySelector('.modal-response'),
      modalResponseClose = document.querySelector('.modal__close--response'),
      infoButton = document.querySelector('.info-contnet__btn');

const actineOpenSubMenu = () => {
    subMenu.classList.toggle('submenu');
}

const openOverlay = () => {
    overlay.classList.add('modal-overlay__show');
}

const closeOverlay = () => {
    overlay.classList.remove('modal-overlay__show');
}

const openModalLogin = () => {
    userModalLogin.classList.add('modal-login__show');
}

const closeModalLogin = () => {
    userModalLogin.classList.remove('modal-login__show');
}

const openModalRegist = () => {
    userModalRegist.classList.add('modal-registering__show');
}

const closeModalRegist = () => {
    userModalRegist.classList.remove('modal-registering__show');
}

const openModalMailing = () => {
    modalMailing.classList.add('modal-mailing__show');
}

const closeModalMailing = () => {
    modalMailing.classList.remove('modal-mailing__show');
}

const openModalResponse = () => {
    modalResponse.classList.add('modal-response__show');
}

const closeModalResponse = () => {
    modalResponse.classList.remove('modal-response__show');
}

const userCloseModal = () => {
    closeModalLogin();
    closeModalRegist();
    closeModalMailing();
    closeOverlay();
}

activeLink.addEventListener('click', (event) => {
    event.preventDefault();

    actineOpenSubMenu();
});

userLogin.addEventListener('click', (event) => {
    event.preventDefault();

    if (userModalLogin.classList.contains('modal-login__show')) {
        closeOverlay();
        closeModalLogin();
    }else {
        openOverlay();
        openModalLogin();
    }
});

userRegist.addEventListener('click', (event) => {
    event.preventDefault(); 

    if (userModalRegist.classList.contains('modal-registering__show')) {
        closeOverlay();
        closeModalRegist();
    } else {
        openOverlay();
        openModalRegist();
    }
});

modalCloseButtonLogin.addEventListener('click', (event) => {
    event.preventDefault(); 

    userCloseModal();
});

modalCloseButtonRegist.addEventListener('click', (event) => {
    event.preventDefault();

    userCloseModal();
});

formUserRegist.addEventListener('click', (event) => {
    event.preventDefault();

    userCloseModal();
});

formUserRegist.addEventListener('click', (event) => {
    event.preventDefault();

    if (modalMailing.classList.contains('modal-mailing__show')) {
        closeOverlay();
        closeModalMailing();
    } else {
        openOverlay();
        openModalMailing();
    }
});

modalCloseMailing.addEventListener('click', (event) => {
    event.preventDefault();

    userCloseModal();
});

// меню в мобільній версії

const navToggle = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');

navToggle.addEventListener('click', () => {
    if (mainNav.classList.contains('main-nav__active')) {
        mainNav.classList.remove('main-nav__active');
        closeOverlay();
    } else {
        mainNav.classList.add('main-nav__active');
        openOverlay();
        document.querySelector('.site-list__submenu').style.display = 'none';
        document.querySelector('.site-list__arrow').style.transform = 'rotate(0)';
    }
});

document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        mainNav.classList.remove('main-nav__active');
        document.querySelector('.site-list__submenu').style.display = 'none';

        closeOverlay();
        closeModalLogin();
        closeModalRegist();
        closeModalMailing();
        closeModalResponse();
    };
});

// відкриття карточки товару 

const cargoTitle = document.querySelectorAll('.cargo__title');

for(let i = 0; i < cargoTitle.length; i++) {
    cargoTitle[i].addEventListener('click', () => {
        document.location.href = 'card-page.html';
    });
};

// відкриття сторінки корзини

const pageBasket = document.querySelector('.user-list__basket');

pageBasket.addEventListener('click', () => {
    document.location.href = 'basket-page.html';
});

// відкриття сторінки корзини в каталозі товару

const cargoBtnBasket = document.querySelectorAll('.btn-basket');

for(let i = 0; i < cargoBtnBasket.length; i++) {
    cargoBtnBasket[i].addEventListener('click', () => {
        document.location.href = 'basket-page.html';
    });
};

// відкриття сторінки каталогу в доставці

const catalogButton = document.querySelectorAll('.page-button');

for (let i = 0; i < catalogButton.length; i++) {
    catalogButton[i].addEventListener('click', () => {
        document.location.href = 'all-cargo.html';
    });
};

// поворот стрілки та відкриття підменю

const subToggle = document.querySelector('.site-list__text');
const mainNavList = document.querySelector('.site-list__item');

subToggle.addEventListener('click', () => {
    document.querySelector('.site-list__submenu').style.display = 'flex';
    document.querySelector('.site-list__arrow').style.transform = 'rotate(90deg)';
});

// слайдер на гооловному меню

const dots = document.querySelectorAll('.slider__dot'),
      slides = document.querySelectorAll('.slider__item'),
      next = document.querySelector('.categories__btn-next'),
      categoriesItem = document.querySelectorAll('.categories__item');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('slider__item--active');
    }
    slides[n].classList.add('slider__item--active');
};

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('slider__dot--active');
    }
    dots[n].classList.add('slider__dot--active');
}

const categoriesActive = n => {
    for (item of categoriesItem) {
        item.classList.remove('categories__item--active');
    }
    categoriesItem[n].classList.add('categories__item--active');
}

dots.forEach((item, indexDots) => {
    item.addEventListener('click', () => {
        index = indexDots;
        activeSlide(index);
        activeDot(index);
    })
})

categoriesItem.forEach((rank, indexRank) => {
    rank.addEventListener('click', () => {
        index = indexRank;
        categoriesActive(index);
    })
})

// клік по кнопці "в корзину"

const cargoBtn = document.querySelectorAll('.cargo__btn');
const contentWrapperCargo = document.querySelectorAll('.cargo__counter-wrapper');

for(let i = 0; i < cargoBtn.length; i++) {
    cargoBtn[i].addEventListener('click', () => {
        contentWrapperCargo[i].style.display = 'flex';
        cargoBtn[i].style.display = 'none';
    });
}

// збільшення кількості товару у корзині

function increaseCount(e, el) {
    const input = el.previousElementSibling;
    let value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(e, el) {
    const input = el.nextElementSibling;
    let value = parseInt(input.value, 10);
    if(value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}

// скріпт для перключання активного класу в меню
// характеристик та переключання блоків 

const cargTab = document.querySelectorAll('.main-info__tab');
const tabsData = document.querySelectorAll('[data-tab-target]');
const tabContent = document.querySelectorAll('[data-tab-content]');

cargTab.forEach(tab => {
    tab.addEventListener('click', function() {
        cargTab.forEach(tabs => tabs.classList.remove('main-info__tab--active'));
        this.classList.add('main-info__tab--active');
    });
});

tabsData.forEach((tabItem) => {
    tabItem.addEventListener('click', () => {
        const target = document.querySelector(tabItem.dataset.tabTarget);
        tabContent.forEach((tabContentAll) => {
            tabContentAll.classList.remove('info-content__active');
        });
        target.classList.add('info-content__active');
    });
});

// для каталога товаров

infoButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (modalResponse.classList.contains('modal-response__show')) {
        closeOverlay();
        closeModalResponse();
    } else {
        openOverlay();
        openModalResponse();
    }
});


modalResponseClose.addEventListener('click', (event) => {
    event.preventDefault();

    if (modalResponse.classList.contains('modal-response__show')) {
        closeOverlay();
        closeModalResponse();
    } else {
        openOverlay();
        openModalResponse();
    }
});