$('.results form').on('submit', function (e) {
    e.preventDefault()
    $('.results-info').hide()
    $('.loaded').show()
})