$('.remove__btn').on('click', function () {
    $(this).parent().remove()
})

$('.remove-all').on('click', function () {
    $('.bag-items').remove()
})

$('.bag-checkbox input').on('change', function () {
    $('.bag').toggleClass('empty')
})

$('.bag-order-tabs_btn span').on('click', function () {
    $('.bag-order-tabs_btn span').removeClass('active')
    $(this).addClass('active')

    const bagOrderTabsInner = $('.bag-order-tabs__inner')
    bagOrderTabsInner.each((i, el)=>{
        $(el).removeClass('active')
        if ($(this).data().name === $(el).data().name){
            $(el).addClass('active')
        }
    })
})