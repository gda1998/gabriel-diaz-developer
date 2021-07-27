import React from 'react';
import PropTypes from 'prop-types';

export const BtnChangeImage = ({ side, setKeyBoardDisable }) => {
    return (
        <button 
            type="button" 
            className={ `carousel-control-${ side }` }
            data-bs-target="#carouselExampleControls" 
            data-bs-slide={ side }
            onFocus={ () => setKeyBoardDisable(true) }
            onBlur={ () => setKeyBoardDisable(false) }
        >
            <span 
                className={ `carousel-control-${ side }-icon` } 
                aria-hidden="true"
            ></span>
        </button>
    );
}

BtnChangeImage.propTypes = {
    side: PropTypes.string.isRequired,
    setKeyBoardDisable: PropTypes.func.isRequired
}