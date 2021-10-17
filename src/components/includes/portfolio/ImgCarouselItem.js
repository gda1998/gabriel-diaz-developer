import React from 'react';
import PropTypes from 'prop-types';

export const ImgCarouselItem = ({ title, path, isActive }) => {
    return (
        <div className={ `carousel-item ${ isActive ? 'active' : '' }` }>
            <div className="portfolio-item">
                <div className="portfolio-wrap">
                    <img className="img-fluid" loading="lazy" src={ path } alt={ title } />
                    <div className="portfolio-info">
                        <h5>{ title }</h5>
                        <div className="portfolio-links">
                            <a
                                href={ path }
                                className="portfolio-lightbox" 
                                title={ title }
                            >
                                <i className="bx bx-zoom-in"></i>
                            </a>
                        </div>{ /* /.portfolio-links */ }
                    </div>{ /* /.portfolio-info */ }
                </div>{ /* /.portfolio-wrap */ }
            </div>{ /* /.portfolio-item */ }
        </div> // /.carousel-item
    );
}

ImgCarouselItem.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    isActive: PropTypes.bool
}

ImgCarouselItem.defaultProps = {
    isActive: false
}