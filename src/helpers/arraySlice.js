/**
 * Divide el array original en partes más pequeñas
 * 
 * @param  {Array<any>} arrayToSlice El arreglo a separar
 * @param  {Number} sizeOfArray Las partes iguales a dividir los elementos del array
 * @returns  {Array<any>} El array original separado dentro de otro array
 */
const arraySlice = (arrayToSlice, sizeOfArray) => {
    let arrayOfArrays = [];

    for (let i = 0; i < arrayToSlice.length; i+= sizeOfArray) {
        const newArray = arrayToSlice.slice(i, i + sizeOfArray);
        arrayOfArrays = [...arrayOfArrays, newArray];
    }
    return arrayOfArrays;
}

export default arraySlice;