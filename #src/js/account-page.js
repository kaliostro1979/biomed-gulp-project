$('.orders__item').on('click', function () {
    $(this).toggleClass('open')
})

$('.analyzes-header-tab__btn span').on('click', function () {
    $('.analyzes-header-tab__btn span').removeClass('active')
    $(this).addClass('active')

    const accountPageTabs = $('.account-page-tabs')

    accountPageTabs.each((i, el)=>{
        $(el).removeClass('active')
        if ($(el).data().name === $(this).data().name){
            $(el).addClass('active')
        }
    })
})