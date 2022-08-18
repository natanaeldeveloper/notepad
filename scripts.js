$(document).ready(function () {

    const tagElements = [...$('.badge-tag')]

    tagElements.forEach(element => {
        $(element).children().click((e) => {
            $(element).toggleClass('badge-tag--active')
            $(element).toggleClass('badge-tag')
        })
    })

    const btnFavoriteElements = [...$('.btn-favorite, .btn-favorite--active')]
    
    btnFavoriteElements.forEach(element => {
        $(element).click((e) => {
            $(element).toggleClass('btn-favorite--active')
            $(element).toggleClass('btn-favorite')
        })
    })

    const btnMenuElements = [...$('.menu-control')]
    
    btnMenuElements.forEach(element => {
        $(element).click((e) => {
            // $('.menu-collapse').removeClass('show')

            let menuId = $(element).attr('data-target')
            $(menuId).toggleClass('show')
            $(element).toggleClass('btn-menu')
            $(element).toggleClass('btn-menu--active')
        })
    })

    const treeControlElements = [...$('.tree-branch')]

    treeControlElements.forEach(element => {
        $(element).click((e) => {
            let collectionId = $(element).attr('data-target')
            $(element).toggleClass('tree-branch--active')
            $(collectionId).toggleClass('show')
        })
    })

});