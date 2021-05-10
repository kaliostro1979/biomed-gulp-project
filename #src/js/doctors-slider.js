const doctorsSliderChevronLeft = $('.doctors-slider ._icon-chevrone_left')
const doctorsSliderChevronRight = $('.doctors-slider ._icon-chevrone_right')


doctorsSliderChevronRight.on('click', function () {
    $('.doctors-slider__container__inner').animate( { scrollLeft: '+=250' }, 500);
})

doctorsSliderChevronLeft.on('click', function () {
    $('.doctors-slider__container__inner').animate( { scrollLeft: '-=250' }, 500);
})


