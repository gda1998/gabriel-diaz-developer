import React from 'react';
import portfolioFiltersList from '../../../data/portfolioFiltersList';
import { LiFilterItem } from './LiFilterItem';

export const PortfolioFilters = () => {
    return (
        <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                    {
                        portfolioFiltersList.map( item => (<LiFilterItem key={ item.id } { ...item } /> ))
                    }
                </ul>
            </div>{/* /.col-lg-12 d-flex justify-content-center */}
        </div>/* /.row */
    );
}