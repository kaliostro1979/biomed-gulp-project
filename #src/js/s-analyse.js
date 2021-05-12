$('.s-body-switcher span').on('click', function () {
    $('.s-body-switcher span').removeClass('active')
    $(this).addClass('active')

    const singleAnalyseTab = $('.s-body-tabs')

    singleAnalyseTab.each((i, el)=>{
        $(el).removeClass('active')
        if($(el).data().name === $(this).data().name){
            $(el).addClass('active')
        }
    })
})