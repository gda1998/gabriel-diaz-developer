import React, { useContext } from 'react';
import { useLang } from '../../../hooks/useLang';
import { PortfolioContext } from '../../../hooks/PortfolioContext';

import { LiPortfolioItem } from './LiPortfolioItem';

import portfolioDataEn from '../../../data/en/portfolioDataEn';
import portfolioDataEs from '../../../data/es/portfolioDataEs';

export const PortfolioInfo = () => {
    const [ t, , lang ] = useLang();

    // Obtenemos los datos generales del portafolio
    const { currentPortfolio } = useContext(PortfolioContext);
    const { id, title, type, client, url } = currentPortfolio;

    // Obtenemos la fecha del desarrollo y la descripcion del portafolio
    const portfolioData = lang === 'en' ? portfolioDataEn : portfolioDataEs;
    const { project_dates, description } = portfolioData.find( item => item.id === id)

    return (
        <div className="col-lg-4 portfolio-info">
            <h3>{ t('portfolio.project-info') }</h3>
            <ul>
                <LiPortfolioItem key="LiTitleProject" title="portfolio.title" text={ title } />
                <LiPortfolioItem key="LiCategory" title="portfolio.category" text={ t(type) } />
                {
                    client &&
                    <LiPortfolioItem key="LiClient" title="portfolio.client" text={ client } />
                }
                <LiPortfolioItem key="LiDates" title="portfolio.project-date" text={ project_dates } />
                {
                    url && 
                    <li>
                        <strong>URL</strong> : &nbsp; 
                        <a 
                            href={ url.href } 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            { url.urlTitle }
                        </a>
                    </li>
                }
            </ul>
            <p 
                style={{ textAlign: 'justify' }}
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </div>/* /.col-lg-4 */
    );
}