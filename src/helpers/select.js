/**
 * Easy selector helper function
 * 
 * @param  {String} el The querySelector
 * @param  {Boolean} all=false
 */
const select = (el, all = false) => {
    el = el.trim()
    if (all)
        return [...document.querySelectorAll(el)];
    else
        return document.querySelector(el);
}

export default select;