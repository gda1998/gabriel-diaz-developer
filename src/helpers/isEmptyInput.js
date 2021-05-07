/**
 * Metodo para encontrar a los campos de textos que estén vacios y que tenga la propiedad required
 * 
 * @param  {} {required
 * @param  {} value}
 */
 const isEmptyInput = ({required, value}, index, array) => {
    if(required === false)
        return false;
    return value === null || value.length === 0 || /^\s+$/.test(value);
}

export default isEmptyInput;