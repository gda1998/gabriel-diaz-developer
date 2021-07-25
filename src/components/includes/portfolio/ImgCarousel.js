import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PortfolioContext } from '../../../hooks/PortfolioContext';

import { ImgCarouselItem } from './ImgCarouselItem';

export const ImgCarousel = ({ setKeyBoardDisable }) => {
    const { currentPortfolio:{ images } } = useContext(PortfolioContext);

    return (
        <div className="col-lg-8 my-auto">
            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                
                <div className="carousel-indicators">
                    {
                        images.map( (item, i) => 
                        <button
                            key={ `buttonSlidetTo_${item.id}` }
                            data-bs-target="#carouselExampleControls" 
                            data-bs-slide-to={ i } 
                            className={ `${ i === 0 ? 'active' : '' }` }
                            onFocus={ () => setKeyBoardDisable(true) }
                            onBlur={ () => setKeyBoardDisable(false) }
                        >
                        </button>)
                    }
                </div>
                <div className="carousel-inner">
                    {
                        images.map( item => <ImgCarouselItem key={ item.id } { ...item } />)
                    }
                </div>
                <button 
                    type="button" 
                    className={ `carousel-control-${ 'prev' }` }
                    data-bs-target="#carouselExampleControls" 
                    data-bs-slide={ 'prev' }
                    onFocus={ () => setKeyBoardDisable(true) }
                    onBlur={ () => setKeyBoardDisable(false) }
                >
                    <span className={ `carousel-control-${ 'prev' }-icon` } aria-hidden="true"></span>
                </button>
                <button 
                    type="button" 
                    className={ `carousel-control-${ 'next' }` }
                    data-bs-target="#carouselExampleControls" 
                    data-bs-slide={ 'next' }
                    onFocus={ () => setKeyBoardDisable(true) }
                    onBlur={ () => setKeyBoardDisable(false) }
                >
                    <span className={ `carousel-control-${ 'next' }-icon` } aria-hidden="true"></span>
                </button>
            </div>{/* /.carouser .slide */}
        </div> // /.col-lg-8 */
    )
}

ImgCarousel.propTypes = {
    setKeyBoardDisable: PropTypes.func.isRequired
}