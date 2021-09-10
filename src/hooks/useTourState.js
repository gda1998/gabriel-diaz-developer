// * React Hooks
import { useEffect, useReducer } from 'react';

// * Helpers
import { decryptString, encryptText } from '../helpers/encryption';

// * Reducers
import { haveBeenVisitedReducer } from '../reducer/haveBeenVisitedReducer';

// * Data
import { initialState } from '../reducer/initialState';

// * Types
import types from '../types/types';

/**
 * We get the JSON form localStorage, or in case of not existing, we get the initial state of reducer
 */
const init = () => {
    if ( localStorage.getItem('tourState') !== null ){
        const jsonString = decryptString( localStorage.getItem('tourState') );
        return JSON.parse(jsonString);
    }
    else return initialState;
}

export const useTourState = () => {
    const [haveBeenVisitedList, dispatch] = useReducer(haveBeenVisitedReducer, {}, init);

    const setTourState = (type) => {
        dispatch({
            type: type
        });
    }

    const getTourState = (type) => {
        switch (type) {
            case types.home:
                return haveBeenVisitedList.home;
            case types.portfolio:
                return haveBeenVisitedList.portfolio;
            case types.contact:
                return haveBeenVisitedList.contact;
            default:
                return haveBeenVisitedList;
        }
    }

    // This useEffect will be executed every time the reducer has been changed
    useEffect(() => {
        // We encrypt the current state of reducer y it is saved in the localStorage
        const encryptedJSON = encryptText( JSON.stringify(haveBeenVisitedList) );
        localStorage.setItem('tourState', encryptedJSON);
    }, [haveBeenVisitedList]);

    return [ setTourState, getTourState ];
}