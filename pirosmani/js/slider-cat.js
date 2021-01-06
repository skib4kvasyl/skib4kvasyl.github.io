$('.categories__list').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    responsive: [{
        breakpoint: 375,
        settings: {
            slidesToShow: 4,
            arrows: false
        }
    }]
});

$('.slider-reviews').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 375,
        settings: {
            slidesToShow: 1
        }
    }]
});
