@@include('webp.js')
@@include('bootstrap.bundle.min.js')
@@include('contact-select.js')
@@include('analyses.js')
@@include('doctors-slider.js')
@@include('tech-slider.js')
@@include('news.js')
@@include('login-register-page.js')
@@include('account-page.js')
@@include('s-analyse.js')
@@include('bag.js')
@@include('results.js')
@@include('mobile-menu.js')
@@include('map.js')


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

