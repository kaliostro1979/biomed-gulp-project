const contactInfo = [
    {
        name: 'Գրիգոր Նարեկացի 120 (Ք. Աշտարակ)-1',
        tel: '(010) 48 38 79',
        email: 'test-1@test.com'
    },
    {
        name: 'Գրիգոր Նարեկացի 120 (Ք. Աշտարակ)-2',
        tel: '(010) 11 22 33',
        email: 'test-2@test.com'
    },
    {
        name: 'Գրիգոր Նարեկացի 120 (Ք. Աշտարակ)-3',
        tel: '(010) 33 44 55',
        email: 'test-3@test.com'
    },
    {
        name: 'Գրիգոր Նարեկացի 120 (Ք. Աշտարակ)-4',
        tel: '(010) 12 34 56',
        email: 'test-4@test.com'
    }
]

const contactInfoUl = $('.contact-us__item-select ul')
const activeValue = $('.active-value')
const contactInfoTelNumber = $('.info-tel')
const contactInfoEmail = $('.info-email')
const dropDownChevrone = $('._icon-chevrone-down')


const createSelectList = () => {
    $(activeValue).val(contactInfo[0].name)
    $(contactInfoTelNumber).text(contactInfo[0].tel)
    $(contactInfoEmail).text(contactInfo[0].email)
    contactInfo.map((info) => {
        contactInfoUl.append(`
            <li><span>${info.name}</span></li>
        `)
    })
}

createSelectList()

const selectListItem = $(contactInfoUl).find('li')

$(document).on('click', function (e) {
    e.stopPropagation()
    if ($('.contact-us__item-select-label').has(e.target).length === 0){
        $(contactInfoUl).removeClass('open-list')
        $(dropDownChevrone).removeClass('icon-open')
    }
})

$(selectListItem).on('click', function () {
    const selectedLi = this.innerText
    $(activeValue).val(selectedLi)
    $(contactInfoUl).removeClass('open-list')
    contactInfo.map((info) => {
        if (info.name === selectedLi) {
            $(contactInfoTelNumber).text(info.tel)
            $(contactInfoEmail).text(info.email)
        }
    })
})


$('.contact-us__item-select-label').on('click', function (e) {
    $(contactInfoUl).toggleClass('open-list')
    $(dropDownChevrone).toggleClass('icon-open')
})