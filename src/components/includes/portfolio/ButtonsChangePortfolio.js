import React from 'react'
import PropTypes from 'prop-types'

export const ButtonsChangePortfolio = ({ changeCurrentPortfolio }) => {
    return (
        /* Botones de desplazamiento de proyectos */
        <>
            <button
                className="btn btn-sm btn-arrow arrow-left" 
                onClick={ () => changeCurrentPortfolio('Left') }
            >
                <i className="bi bi-chevron-left"></i>
            </button>
            <button 
                className="btn btn-sm btn-arrow arrow-right" 
                onClick={ () => changeCurrentPortfolio('Right') }
            >
                <i className="bi bi-chevron-right"></i>
            </button>
        </>
    );
}

ButtonsChangePortfolio.propTypes = {
    changeCurrentPortfolio: PropTypes.func.isRequired
}
