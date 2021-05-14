import React from 'react';
import PropTypes from 'prop-types';

export const PortfolioItem = ({ path, title, type }) => {
    return (
        <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap animate__animated animate__fadeInDown">
                <img src={ path } className="img-fluid" alt={ title } />
                <div className="portfolio-info">
                    <h4>{ title }</h4>
                    <p>{ type }</p>
                    <div className="portfolio-links">
                        <a href={ path } data-gallery="portfolioGallery" className="portfolio-lightbox" title={ title }><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>{/* /.portfolio-link */}
                </div>{/* /.portfolio-info */}
            </div>{/* /.portfolio-wrap */}
        </div>/* /.col-lg-4 */
    )
}

PortfolioItem.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}