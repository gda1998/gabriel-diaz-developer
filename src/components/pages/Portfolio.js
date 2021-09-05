import React, { useState } from 'react';
import { useLang } from '../../hooks/useLang';
import { useSectionShow } from '../../hooks/useSectionShow';
import { useImageFiltering } from '../../hooks/useImageFiltering';
import { PortfolioContext } from '../../hooks/PortfolioContext';

import { TourComponent } from '../includes/react-tour/TourComponent';
import { PortfolioFilters } from '../includes/portfolio/PortfolioFilters';
import { PortfolioContainer } from '../includes/portfolio/PortfolioContainer';
import { Modal } from '../includes/portfolio/Modal';

import portfolioData from '../../data/portfolioData';
import types from '../../types/types';

const Portfolio = () => {
    const [ t ] = useLang();
    const sectionShow = useSectionShow();
    const [ setFilter, filteredImages, getNextPortfolio, getPrevPortfolio ] = useImageFiltering(portfolioData);
    const [currentPortfolio, setCurrentPortfolio] = useState(filteredImages[0]);

    return (
        <PortfolioContext.Provider value={{
            setFilter, 
            filteredImages, 
            getNextPortfolio, 
            getPrevPortfolio,
            currentPortfolio, 
            setCurrentPortfolio
        }}>

            {/* ======= Portfolio Section ======= */}
            <section id="portfolio" className={ `portfolio ${sectionShow}` } >

                <TourComponent pageName="portfolio" type={ types.portfolio } />

                <div className="container" style={{ height: '100%' }} >

                    <div className="section-title">
                        <h2>{ t('header.portfolio') }</h2>
                        <p>{ t('portfolio.projects-worked') }</p>
                    </div>{/* /.section-title */}

                    <PortfolioFilters />
                    <PortfolioContainer />

                </div>{/* /.container */}
            </section>{/* End Portfolio Section */}

            <Modal />

        </PortfolioContext.Provider>
    );
}

export default Portfolio;