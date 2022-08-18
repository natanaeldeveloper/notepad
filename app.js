$(document).ready(function () {

    const tagElements = [...$('.badge-tag')]

    tagElements.forEach(checkbox => {
        $(checkbox).children().click((e) => {
            $(checkbox).toggleClass('badge-tag--active')
            $(checkbox).toggleClass('badge-tag')
        })
    })

    const btnFavoriteElements = [...$('.btn-favorite, .btn-favorite--active')]
    
    btnFavoriteElements.forEach(btn => {
        $(btn).click((e) => {
            $(btn).toggleClass('btn-favorite--active')
            $(btn).toggleClass('btn-favorite')
        })
    })
});