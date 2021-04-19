import { useState, useEffect } from 'react';
import { useLang } from './useLang';

/**
 * Obtenemos la palabra o el pedazo de palabra a mostrar mediante la animación 
 */
export const useTextAnimation = () => {
    // Obtenemos la funcion t para traducir el arreglo de palabras
    const [ t ] = useLang();

    // useState de la palabra a retornar
    const [currentWord, setCurrentWord] = useState('');
    
    /**
     * Usamos el useEffect para crear y destruir el setInterval de la animacion
     * Este useEffect se ejecutara cada vez que se vuelva a declarar a t()
     * t() sera redeclarado cuando se cambie el idioma de la app
     */
    useEffect(() => {
        
        // Obtenemos el listado de las palabras a mostrar y quitar
        const words = [ t('words-cursor.web-developer'), t('words-cursor.front-end-dev'), t('words-cursor.back-end-dev')];
        // Variables para hacer el efecto de animacion
        let addingWord = false,
        newWord = '',
        counter = 0;

        // Creamos el intervalo de la animacion
        const intervalAnimation = setInterval( () => {
            /* Delete word */
            if(newWord.length > 0 && !addingWord) {
                // Quitamos una letra a la palabra en curso y hacemos el setCurrentWord
                newWord = newWord.slice(0, -1);
                setCurrentWord(newWord);
            } else
                addingWord = true;
            
            /* Add word */
            if(addingWord) {
                if( newWord.length < words[counter].length ) {
                    // Agregamos una letra a la palabra en curso y hacemos el setCurrentWord
                    newWord = words[counter].slice(0,    newWord.length + 1);
                    setCurrentWord(newWord);
                } else {
                    counter < words.length && counter++;
                    addingWord = false;
                }
            }
        
            /* Reset counter */
            counter === words.length && (counter = 0);
        }, 100);
        
        // Quitamos el Interval cada vez que se desmonte el componente
        return () => clearInterval(intervalAnimation);
    }, [t]);

    // Retornamos la palabra a mostrar
    return currentWord;
}