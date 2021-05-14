import React from 'react';
import { useLang } from '../../hooks/useLang';
import { useSectionShow } from '../../hooks/useSectionShow';
import { PortfolioContext } from '../../hooks/PortfolioContext';

import { PortfolioFilters } from '../includes/portfolio/PortfolioFilters';
import { PortfolioContainer } from '../includes/portfolio/PortfolioContainer';
import { useImageFiltering } from '../../hooks/useImageFiltering';
import imgPortfolioData from '../../data/imgPortfolioData';

export const Portfolio = () => {
    console.log('Componente Renderizado');
    const [ t ] = useLang();
    const sectionShow = useSectionShow();
    const [ setFilter, filteredImages ] = useImageFiltering(imgPortfolioData);

    return (
        // ======= Portfolio Section =======
        <section id="portfolio" className={ `portfolio ${sectionShow}` } >
            <div className="container" style={{ height: '100%' }} >

                <div className="section-title">
                    <h2>{ t('header.portfolio') }</h2>
                    <p>{ t('portfolio.projects-worked') }</p>
                </div>{/* /.section-title */}

                <PortfolioContext.Provider value={{
                    setFilter,
                    filteredImages
                }}>
                    <PortfolioFilters />
                    <PortfolioContainer />
                </PortfolioContext.Provider>

            </div>{/* /.container */}
        </section>/* End Portfolio Section */
    )
}