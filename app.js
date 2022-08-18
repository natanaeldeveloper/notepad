$(document).ready(function () {
    [...$('.badge-tag')].forEach(element => {
        $(element).children().click((e) => {
            $(element).toggleClass('badge-tag--active')
            $(element).toggleClass('badge-tag')
        })
    })
});