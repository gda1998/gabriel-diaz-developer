// * React Hooks
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

// * Hooks and libraries
import { ShepherdTourContext } from 'react-shepherd';
import { useTourState } from '../../../hooks/useTourState';

export const BtnHandleTourSteps = ({ useModalOverlay, type }) => {
    // We get the context of Shepherd library
    const tour = useContext(ShepherdTourContext);

    // We indicate if the page we are gonna put the modalOverlay
    useEffect(() => {
        tour.options.useModalOverlay = useModalOverlay;
    }, [tour, useModalOverlay])

    // We get the functions of useTourState hook
    const [ setTourState, getTourState ] = useTourState();

    // We indicate that the page has been shown and completed the tour with setTourState(type)
    ['close', 'cancel', 'complete', 'hide'].forEach(event => tour.on(event, () => 
        setTourState(type)
    ));

    // We ask if this is the first time the tour will be shownn, if the condition is false, we close the tour
    tour.on('start', () => {
        setTimeout(() => !getTourState(type) && tour.hide() , 10);
    });

    // We return a hidden botton that will be clicked every time the main component is loaded
    return (
        <>
            <button
                className="btnRemoveOverlay" 
                onClick={ () => tour.options.useModalOverlay = false }
                style={{ display: 'none' }}
            >
                Remove Overlay
            </button>
            <button 
                className="button-dark" 
                onClick={ tour.start } 
                style={{ display: 'none' }}
            >
                Start Tour
            </button>
        </>
    );
}

BtnHandleTourSteps.propTypes = {
    type: PropTypes.string.isRequired,
    useModalOverlay: PropTypes.bool.isRequired
}