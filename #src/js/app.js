@@include('webp.js')


var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    watchSlidesVisibility: true,
    slidesPerView: 1
});