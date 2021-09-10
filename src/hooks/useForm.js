// * React Hooks
import { useState } from 'react';

// * Helpers
import isEmptyInput from '../helpers/isEmptyInput';

export const useForm = ( initialState = {} ) => {
    const [form, setForm] = useState(initialState);
    const handleInputChange = ({target}) => {
        setForm({
            ...form,
            [target.name] : target.value
        });
    };

    /**
     * Valida a todos las cajas de texto antes de ser enviados al servidor
     * 
     * @param  {Element} FormElements El formulario a validar
     * @returns {Boolean} La respuesta de un formulario válido o inválido
     */
    const validateForm = (formElements) => {
        let isValidForm = true;

        formElements.map( item => {
            if ( isEmptyInput(item) ) {
                item.classList.add('is-invalid');
                isValidForm = false;
            } else
                item.classList.remove('is-invalid');
            return isValidForm;
        });
        return isValidForm;
    }

    const reset = () => setForm(initialState);

    return [ form, handleInputChange, reset, validateForm ];
}