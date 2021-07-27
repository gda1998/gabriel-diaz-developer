import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useLang } from '../../../hooks/useLang';
import { PortfolioContext } from '../../../hooks/PortfolioContext';

export const PortfolioContainerItem = ({ item }) => {
    const [ t ] = useLang();
    const { path, title, type } = item;
    const { setCurrentPortfolio } = useContext(PortfolioContext);
    
    return (
        <div className="col-lg-4 col-md-6 portfolio-item animate__animated animate__fadeInDown">
            <div className="portfolio-wrap">
                <img loading="lazy" src={ path } className="img-fluid" alt={ title } />
                <div className="portfolio-info">
                    <h4>{ title }</h4>
                    <p>{ t(type) }</p>
                    <div className="portfolio-links">
                        <button
                            className="btn" 
                            title={ t('portfolio.details') }
                            data-bs-toggle="modal" 
                            data-bs-target="#exampleModal"
                            onClick={ () => setCurrentPortfolio(item) }
                        >
                            <i className="bx bx-link"></i>
                        </button>
                    </div>{/* /.portfolio-link */}
                </div>{/* /.portfolio-info */}
            </div>{/* /.portfolio-wrap */}
        </div>/* /.col-lg-4 */
    )
}

PortfolioContainerItem.propTypes = {
    item: PropTypes.object.isRequired
}