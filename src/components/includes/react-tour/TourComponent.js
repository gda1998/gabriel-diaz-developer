// * React Hooks
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// * Hooks and libraries
import { useLang } from '../../../hooks/useLang';
import { ShepherdTour } from 'react-shepherd';

// * Components
import { BtnHandleTourSteps } from './BtnHandleTourSteps';

// * Data
import tourOptions from '../../../data/tourOptions';
import tourDataEn from '../../../data/en/tourDataEn';
import tourDataEs from '../../../data/es/tourDataEs';


/**
 * @param  {String} {pageName The object name where the tour steps will be obtained
 * @param  {String} type} The object name, which keeps the condition that if the tour has already been shown
 */
export const TourComponent = ({ useModalOverlay, pageName, type }) => {
    const [ , ,lang ] = useLang();

    const getTourSteps = () => {
        const tourData = lang === 'en' ? tourDataEn : tourDataEs;
        if( tourData.defaultTour[pageName] !== undefined ) return tourData.defaultTour[pageName];
        // Computadora > 992, Telefono o Tablet <= 992
        const tourAccordingToSize = window.innerWidth > 992 ? tourData.computerTour : tourData.phoneTour;
        return tourAccordingToSize[pageName];
    }

    useEffect(() => {
        document.querySelector('.button-dark').click();
    }, []);

    return (
        <ShepherdTour 
            tourOptions={ tourOptions }
            steps={ getTourSteps() }
        >
            <BtnHandleTourSteps 
                useModalOverlay={ useModalOverlay }
                type={ type }
            />
        </ShepherdTour>
    );
}

TourComponent.propTypes = {
    pageName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    useModalOverlay: PropTypes.bool
}

TourComponent.defaultProps = {
    useModalOverlay: false
}