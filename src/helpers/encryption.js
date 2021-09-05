const Blowfish = require('javascript-blowfish');

// Declaramos la llave de encriptado y la instancia de encriptacion
const encryptionKey = 'Bienaventurados los pobres de espíritu, porque de ellos es el Reino de los Cielos.';
const blowfishInstance = new Blowfish(encryptionKey);

/**
 * Encripta un texto
 * @param  {String} textToEncrypt Texto a encriptar
 * @returns  {String}
 */
export const encryptText = (textToEncrypt) => {
    const encrypted = blowfishInstance.encrypt(textToEncrypt);
    return blowfishInstance.base64Encode(encrypted);
}

/**
 * Desencripta un texto
 * @param  {String} textToEncrypt Texto a desencriptar
 * @returns  {String}
 */
export const decryptString = (textToDecrypt) => {
    const decrypted = blowfishInstance.decrypt( blowfishInstance.base64Decode(textToDecrypt) );
    return blowfishInstance.trimZeros(decrypted);
}