$('.analyzes-header-tab__btn span').on('click', function () {
    $('.analyzes-header-tab__btn span').removeClass('active')
    $(this).addClass('active')
})

$('.analyses-tags ul li').on('click', function () {
    $(this).toggleClass('selected')
})

