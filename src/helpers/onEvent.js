import select from './select';

/**
 * Easy event listener function
 * 
 * @param  {String} type Event of the element
 * @param  {String} el The element
 * @param  {Function} listener The listener event
 * @param  {Boolean} all=false
 */
const on = (type, el, listener, all = false) => {
    const selectEl = select(el, all);
    if (selectEl) {
        if (all)
            selectEl.forEach( e => e.addEventListener(type, listener) );
        else
            selectEl.addEventListener(type, listener);
    }
}