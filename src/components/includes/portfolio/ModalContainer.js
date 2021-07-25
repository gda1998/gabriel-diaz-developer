import React from 'react';
import PropTypes from 'prop-types';

import { ImgCarousel } from './ImgCarousel';
import { PortfolioInfo } from './PortfolioInfo';
import { UsedTools } from './UsedTools';

export const ModalContainer = ({ setKeyBoardDisable, changeCurrentPortfolio }) => {
    return (
        <div className="container">

            <div className="row">

                <ImgCarousel setKeyBoardDisable={ setKeyBoardDisable } />
                <PortfolioInfo />
                <UsedTools />

            </div>{/* /.row */}

            {/* Botones de desplazamiento de proyectos */}
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

        </div>/* /.container */
    );
}

ModalContainer.propTypes = {
    setKeyBoardDisable: PropTypes.func.isRequired, 
    changeCurrentPortfolio: PropTypes.func.isRequired
}