$('.user-login-switcher span').on('click', function () {
    $('.user-login-switcher span').removeClass('active')
    $(this).addClass('active')

    const userSwitcherInner = $('.user-switcher__inner')

    userSwitcherInner.each((i, el)=>{
        $(el).removeClass('active')
        if ($(el).data().name === $(this).data().name){
            $(el).addClass('active')
        }
    })
})

$('.full-name span').on('click', function () {
    $('.full-name span').removeClass('active')
    $(this).addClass('active')
})