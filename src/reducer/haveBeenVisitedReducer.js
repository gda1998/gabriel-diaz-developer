import types from '../types/types';

/**
 * Metodo reducer para saber si un usuario ha visitado anteriormente una pagina del sitio
 * 
 * @param  {JSON} state={}
 * @param  {JSON} action
 * @returns  {JSON}
 */
export const haveBeenVisitedReducer = (state = {}, action) => {
    switch (action.type) {
        case types.home:
            return {
                ...state,
                home: false
            };
        case types.portfolio:
            return {
                ...state,
                portfolio: false
            };
        case types.contact:
            return {
                ...state,
                contact: false
            };
        default:
            return state;
    }
}