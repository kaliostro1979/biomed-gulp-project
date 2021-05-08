@@include('webp.js')
@@include('bootstrap.bundle.min.js')


$(document).ready(function() {
    $('.lang-switcher').select2({
        minimumResultsForSearch: Infinity,
        dropdownAutoWidth: true,
        dropdownCssClass: 'custom-dropdown'
    });
});

/*
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    watchSlidesVisibility: true,
    slidesPerView: 1
});*/
