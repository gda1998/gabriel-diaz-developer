import React, { useContext } from 'react';
import { useLang } from '../../../hooks/useLang';
import { PortfolioContext } from '../../../hooks/PortfolioContext';

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
                <li><strong> { t('portfolio.title') } </strong>: { title }</li>
                <li><strong> { t('portfolio.category') } </strong>: { t(type) }</li>
                {
                    client && <li><strong> { t('portfolio.client') } </strong>: { client }</li>
                }
                <li><strong> { t('portfolio.project-date') } </strong>: { project_dates }</li>
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