
/*---- Set Single News Image ----*/

$('.news-item__link').on('click', function () {
    const style = $(this).parent().prev().attr('style')
    window.localStorage.setItem('bgr', style)
})

function setBgr() {
    const bgrImg = window.localStorage.getItem('bgr')
    if (bgrImg){
        $('.single-news_wrapper__img').attr('style', bgrImg)
    }
}

setBgr()
