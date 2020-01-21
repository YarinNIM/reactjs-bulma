import Modal from './component/component/modal';
const toggleClass = function (e, css)
{
    if (e.classList) {
        e.classList.toggle(css);
    } else {
        // For IE9
        var classes = e.className.split(" ");
        var i = classes.indexOf(css);
        if (i >= 0) classes.splice(i, 1);
        else classes.push(css);
        e.className = classes.join(" ");
    }
}

const removeClass = function(e, css)
{
    if (e.classList) {
        e.classList.remove(css);
    } else {
        const reg = new RegExp(`\\b${css}\\b`, '');
        e.className = e.className.replace(reg, "");
    }
}

const addClass = function(e, css)
{
    if (e.classList) {
        e.classList.add(css);
    } else {
        const arr = e.className.split(" ");
        if (arr.indexOf(css) == -1) {
            e.className += " " + css;
        }
    }
}



window.DomClass = {
    toggle: toggleClass,
    remove: removeClass,
    add: addClass
};

window.Modal = Modal;
window.i18n = window.i18n || {};

/* is to escape locale data */
window.localeEscape = function(str, obj = {})
{
    for (var placeholder in obj)
    {
        str = str.replace(`:${placeholder}`, obj[placeholder]);
    }
    return str;
}

/* generate the locae */
window.locale = function(key, replace = {})
{
    const keys = key.split('.');
    let translation = key.split('.').reduce((t, i) => t[i] || key, window.i18n);
    return localeEscape(translation || key, replace);
}
