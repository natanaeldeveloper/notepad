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

    const btnMenuElements = [...$('.menu-control')]
    
    btnMenuElements.forEach(btn => {
        $(btn).click((e) => {
            let menuId = $(btn).attr('data-target')
            $(menuId).toggleClass('show')
            $(btn).toggleClass('btn-menu')
            $(btn).toggleClass('btn-menu--active')
        })
    })

});