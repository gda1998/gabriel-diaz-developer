import React from 'react';
import PropTypes from 'prop-types';

export const BtnCarouselItem = ({ btnNumber, setKeyBoardDisable }) => {
    return (
        <button
            data-bs-target="#carouselExampleControls" 
            data-bs-slide-to={ btnNumber } 
            className={ `${ btnNumber === 0 ? 'active' : '' }` }
            onFocus={ () => setKeyBoardDisable(true) }
            onBlur={ () => setKeyBoardDisable(false) }
        >
        </button>
    );
}

BtnCarouselItem.propTypes = {
    btnNumber: PropTypes.number.isRequired,
    setKeyBoardDisable: PropTypes.func.isRequired
}