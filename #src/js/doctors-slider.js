const doctorsSliderChevronLeft = $('.doctors-slider ._icon-chevrone_left')
const doctorsSliderChevronRight = $('.doctors-slider ._icon-chevrone_right')


doctorsSliderChevronRight.on('click', function () {
    $('.doctors-slider__container__inner').animate( { scrollLeft: '+=250' }, 500);
})

doctorsSliderChevronLeft.on('click', function () {
    $('.doctors-slider__container__inner').animate( { scrollLeft: '-=250' }, 500);
})

$.fn.hScroll = function (amount) {
    amount = amount || 120;
    $(this).bind("DOMMouseScroll mousewheel", function (event) {
        var oEvent = event.originalEvent,
            direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
            position = $(this).scrollLeft();
        position += direction > 0 ? -amount : amount;
        $(this).scrollLeft(position);
        event.preventDefault();
    })
};

$('.analyzes-products').hScroll(100);
$('.about-us-slider-items__container__inner').hScroll(100);

