@@include('webp.js')
@@include('bootstrap.bundle.min.js')
@@include('contact-select.js')
@@include('analyses.js')
@@include('doctors-slider.js')
@@include('tech-slider.js')


$(document).ready(function() {
    $('.lang-switcher').select2({
        minimumResultsForSearch: Infinity,
        dropdownAutoWidth: true,
        dropdownCssClass: 'custom-dropdown',
    });
});



const swiper = new Swiper('.main-slider-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});
