export const handleToggleEvents = () => {

    const elements = [...$('*[data-toggle="toggle"]')]

    elements.forEach(element => {
        $(element).click(function (event) {
            event.preventDefault()
            try {
                let nodeName = $(this).prop('tagName')
                let targetValue = $(this).data('target')
                let targetElement = $(targetValue === undefined ? this : targetValue)

                if (targetElement.length < 1) {
                    throw `Elemento de referência "${targetValue}" não encontrado na DOM;`
                }

                $(targetElement).toggleClass('--active')

                /* next default */
                if (nodeName === 'LABEL') {
                    let attrForValue = $(this).attr('for')
                    let inputElement = attrForValue === undefined ?
                        $(this).find('input') : $(`#${attrForValue}`)
                    inputElement.prop('checked', (i, val) => {
                        return !val
                    })
                }

            } catch (e) {
                console.error(e, 'Evento disparado pelo elemento: ', $(element))
            }
        })
    })
}

function addEvent(type, el, callback)
{
 if (window.addEventListener) {
     el.addEventListener(type, callback, false);
 } else if (window.attachEvent) {
     el.attachEvent("on" + type, callback);
 } else {
     el["on" + type] = callback;
 }
}

export const resizeTextfield = (el) =>
{
 var timer;

 function trigger() {
     if (!el) { return; }

     el.style.height = "auto";

     var height = el.scrollHeight;

     el.style.height = height + "px";
 }

 function exec() {
     if (timer) {
         clearTimeout(timer);
     }

     timer = setTimeout(trigger, 10);
     console.log('aaa')
 }

 addEvent("keyup", el, exec);
 addEvent("input", el, exec);
}