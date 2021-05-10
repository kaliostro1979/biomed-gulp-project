const techSliderChevronLeft = $('.tech-slider ._icon-chevrone_left')
const techSliderChevronRight = $('.tech-slider ._icon-chevrone_right')


techSliderChevronRight.on('click', function () {
    $('.tech-slider__container__inner').animate( { scrollLeft: '+=250' }, 500);
})

techSliderChevronLeft.on('click', function () {
    $('.tech-slider__container__inner').animate( { scrollLeft: '-=250' }, 500);
})


/*Read more button*/


$('.read-more__btn').on('click', function () {
    $(this).parent().toggleClass('item-open')
    if ($(this).parent().hasClass('item-open')){
        $(this).text('փակել')
    }else{
        $(this).text('տեսնել ավելին')
    }
})