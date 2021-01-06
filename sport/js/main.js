const switches = document.querySelectorAll('.reviews__item');
const contents = document.querySelectorAll('.content');

let activeSwitches = document.querySelector('.reviews__item.reviews__item--active');
let activeContent = document.querySelector('.content.content__active');

for (let i = 0; i < switches.length; i++) {
    switches[i].addEventListener('click', () => {
        activeSwitches.classList.remove('reviews__item--active');
        switches[i].setAttribute('class', 'reviews__item reviews__item--active');
        activeSwitches = switches[i];

        activeContent.classList.remove('content__active');
        contents[i].setAttribute('class', 'content content__active');
        activeContent = contents[i];
    });
}

// slider gallery 

var multiItemSlider = (function () {
    return function (selector, config) {
        var
            _mainElement = document.querySelector(selector), // основный элемент блока
            _sliderWrapper = _mainElement.querySelector('.gallery__list'), // обертка для .slider-item
            _sliderItems = _mainElement.querySelectorAll('.gallery__item'), // элементы (.slider-item)
            _sliderControls = _mainElement.querySelectorAll('.gallery__controll'), // элементы управления
            _sliderControlLeft = _mainElement.querySelector('.gallery__controll--left'), // кнопка "LEFT"
            _sliderControlRight = _mainElement.querySelector('.gallery__controll--right'), // кнопка "RIGHT"
            _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
            _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
            _positionLeftItem = 0, // позиция левого активного элемента
            _transform = 0, // значение транфсофрмации .slider_wrapper
            _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
            _items = []; // массив элементов
        // наполнение массива _items
        _sliderItems.forEach(function (item, index) {
            _items.push({ item: item, position: index, transform: 0 });
        });

        var position = {
            getMin: 0,
            getMax: _items.length - 1,
        }

        var _transformItem = function (direction) {
            if (direction === 'right') {
                if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
                    return;
                }
                if (!_sliderControlLeft.classList.contains('gallery__controll--show')) {
                    _sliderControlLeft.classList.add('gallery__controll--show');
                }
                if (_sliderControlRight.classList.contains('gallery__controll--show') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
                    _sliderControlRight.classList.remove('gallery__controll--show');
                }
                _positionLeftItem++;
                _transform -= _step;
            }
            if (direction === 'left') {
                if (_positionLeftItem <= position.getMin) {
                    return;
                }
                if (!_sliderControlRight.classList.contains('gallery__controll--show')) {
                    _sliderControlRight.classList.add('gallery__controll--show');
                }
                if (_sliderControlLeft.classList.contains('gallery__controll--show') && _positionLeftItem - 1 <= position.getMin) {
                    _sliderControlLeft.classList.remove('gallery__controll--show');
                }
                _positionLeftItem--;
                _transform += _step;
            }
            _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }

        // обработчик события click для кнопок "назад" и "вперед"
        var _controlClick = function (e) {
            if (e.target.classList.contains('gallery__controll')) {
                e.preventDefault();
                var direction = e.target.classList.contains('gallery__controll--right') ? 'right' : 'left';
                _transformItem(direction);
            }
        };

        var _setUpListeners = function () {
            // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
            _sliderControls.forEach(function (item) {
                item.addEventListener('click', _controlClick);
            });
        }

        // инициализация
        _setUpListeners();

        return {
            right: function () { // метод right
                _transformItem('right');
            },
            left: function () { // метод left
                _transformItem('left');
            }
        }

    }
}());

var slider = multiItemSlider('.gallery__slider');

// slider blog 

var multiItemSlider = (function () {
    return function (selector, config) {
        var
            _mainElement = document.querySelector(selector), // основный элемент блока
            _sliderWrapper = _mainElement.querySelector('.blog__list'), // обертка для .slider-item
            _sliderItems = _mainElement.querySelectorAll('.blog__item'), // элементы (.slider-item)
            _sliderControls = _mainElement.querySelectorAll('.blog__controll'), // элементы управления
            _sliderControlLeft = _mainElement.querySelector('.blog__controll--left'), // кнопка "LEFT"
            _sliderControlRight = _mainElement.querySelector('.blog__controll--right'), // кнопка "RIGHT"
            _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
            _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
            _positionLeftItem = 0, // позиция левого активного элемента
            _transform = 0, // значение транфсофрмации .slider_wrapper
            _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
            _items = []; // массив элементов
        // наполнение массива _items
        _sliderItems.forEach(function (item, index) {
            _items.push({ item: item, position: index, transform: 0 });
        });

        var position = {
            getMin: 0,
            getMax: _items.length - 1,
        }

        var _transformItem = function (direction) {
            if (direction === 'right') {
                if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
                    return;
                }
                if (!_sliderControlLeft.classList.contains('blog__controll--show')) {
                    _sliderControlLeft.classList.add('blog__controll--show');
                }
                if (_sliderControlRight.classList.contains('blog__controll--show') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
                    _sliderControlRight.classList.remove('blog__controll--show');
                }
                _positionLeftItem++;
                _transform -= _step;
            }
            if (direction === 'left') {
                if (_positionLeftItem <= position.getMin) {
                    return;
                }
                if (!_sliderControlRight.classList.contains('blog__controll--show')) {
                    _sliderControlRight.classList.add('blog__controll--show');
                }
                if (_sliderControlLeft.classList.contains('blog__controll--show') && _positionLeftItem - 1 <= position.getMin) {
                    _sliderControlLeft.classList.remove('blog__controll--show');
                }
                _positionLeftItem--;
                _transform += _step;
            }
            _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }

        // обработчик события click для кнопок "назад" и "вперед"
        var _controlClick = function (e) {
            if (e.target.classList.contains('blog__controll')) {
                e.preventDefault();
                var direction = e.target.classList.contains('blog__controll--right') ? 'right' : 'left';
                _transformItem(direction);
            }
        };

        var _setUpListeners = function () {
            // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
            _sliderControls.forEach(function (item) {
                item.addEventListener('click', _controlClick);
            });
        }

        // инициализация
        _setUpListeners();

        return {
            right: function () { // метод right
                _transformItem('right');
            },
            left: function () { // метод left
                _transformItem('left');
            }
        }

    }
}());

var slider = multiItemSlider('.blog__wrapper');

//slider trainers

var multiItemSlider = (function () {
    return function (selector, config) {
        var
            _mainElement = document.querySelector(selector), // основный элемент блока
            _sliderWrapper = _mainElement.querySelector('.trainers__list'), // обертка для .slider-item
            _sliderItems = _mainElement.querySelectorAll('.trainers__item'), // элементы (.slider-item)
            _sliderControls = _mainElement.querySelectorAll('.trainers__controll'), // элементы управления
            _sliderControlLeft = _mainElement.querySelector('.trainers__controll--left'), // кнопка "LEFT"
            _sliderControlRight = _mainElement.querySelector('.trainers__controll--right'), // кнопка "RIGHT"
            _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
            _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
            _positionLeftItem = 0, // позиция левого активного элемента
            _transform = 0, // значение транфсофрмации .slider_wrapper
            _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
            _items = []; // массив элементов
        // наполнение массива _items
        _sliderItems.forEach(function (item, index) {
            _items.push({ item: item, position: index, transform: 0 });
        });

        var position = {
            getMin: 0,
            getMax: _items.length - 1,
        }

        var _transformItem = function (direction) {
            if (direction === 'right') {
                if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
                    return;
                }
                if (!_sliderControlLeft.classList.contains('trainers__controll--show')) {
                    _sliderControlLeft.classList.add('trainers__controll--show');
                }
                if (_sliderControlRight.classList.contains('trainers__controll--show') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
                    _sliderControlRight.classList.remove('trainers__controll--show');
                }
                _positionLeftItem++;
                _transform -= _step;
            }
            if (direction === 'left') {
                if (_positionLeftItem <= position.getMin) {
                    return;
                }
                if (!_sliderControlRight.classList.contains('trainers__controll--show')) {
                    _sliderControlRight.classList.add('trainers__controll--show');
                }
                if (_sliderControlLeft.classList.contains('trainers__controll--show') && _positionLeftItem - 1 <= position.getMin) {
                    _sliderControlLeft.classList.remove('trainers__controll--show');
                }
                _positionLeftItem--;
                _transform += _step;
            }
            _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }

        // обработчик события click для кнопок "назад" и "вперед"
        var _controlClick = function (e) {
            if (e.target.classList.contains('trainers__controll')) {
                e.preventDefault();
                var direction = e.target.classList.contains('trainers__controll--right') ? 'right' : 'left';
                _transformItem(direction);
            }
        };

        var _setUpListeners = function () {
            // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
            _sliderControls.forEach(function (item) {
                item.addEventListener('click', _controlClick);
            });
        }

        // инициализация
        _setUpListeners();

        return {
            right: function () { // метод right
                _transformItem('right');
            },
            left: function () { // метод left
                _transformItem('left');
            }
        }

    }
}());

var slider = multiItemSlider('.trainers__wrapper');

// opem image

const openImage = document.querySelectorAll('.information__open-images');
const openImageShow = document.querySelector('.content__open-image--show');
const contentImage = document.querySelectorAll('.content__open-image');

for (let i = 0; i < openImage.length; i++) {
    openImage[i].addEventListener('click', function (e) {
        e.preventDefault();
        contentImage[i].classList.add('content__open-image--show');
    })

    document.addEventListener('keydown', function (e) {
        if (e.keyCode == 27) {
            contentImage[i].classList.remove('content__open-image--show');
        }
    })
}

// open footer menu to click logo

const footerLogo = document.querySelector('.main-footer__logo');
const footerList = document.querySelector('.main-footer__list');

footerLogo.addEventListener('click', function (evt) {
    evt.preventDefault();
    footerList.classList.toggle('main-footer__list--show');
    
});