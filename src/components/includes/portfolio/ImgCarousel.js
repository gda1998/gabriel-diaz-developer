// * React Hooks
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// * Hooks and libraries
import { PortfolioContext } from '../../../hooks/PortfolioContext';

// * Components
import { BtnCarouselItem } from './BtnCarouselItem';
import { ImgCarouselItem } from './ImgCarouselItem';
import { BtnChangeImage } from './BtnChangeImage';

export const ImgCarousel = ({ setKeyBoardDisable }) => {
    const { currentPortfolio:{ images } } = useContext(PortfolioContext);

    return (
        <div className="col-lg-8 my-auto">
            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                
                <div className="carousel-indicators">
                    {
                        images.map( (item, i) => 
                        <BtnCarouselItem
                            key={ `buttonSlidetTo_${item.id}` }
                            btnNumber={ i }
                            setKeyBoardDisable={ setKeyBoardDisable }
                        />)
                    }
                </div>
                <div className="carousel-inner">
                    {
                        images.map( item => <ImgCarouselItem key={ item.id } { ...item } />)
                    }
                </div>
                <BtnChangeImage
                    key="btnChangeImagePrev"
                    side="prev"
                    setKeyBoardDisable={ setKeyBoardDisable }
                />
                <BtnChangeImage
                    key="btnChangeImageNext"
                    side="next"
                    setKeyBoardDisable={ setKeyBoardDisable }
                />
            </div>{/* /.carouser .slide */}
        </div> // /.col-lg-8 */
    );
}

ImgCarousel.propTypes = {
    setKeyBoardDisable: PropTypes.func.isRequired
}