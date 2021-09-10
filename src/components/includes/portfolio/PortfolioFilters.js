// * React Hooks
import React from 'react';

// * Components
import { LiFilterItem } from './LiFilterItem';

// * Data
import portfolioFiltersList from '../../../data/portfolioFiltersList';

export const PortfolioFilters = React.memo( () => {
    return (
        <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                    {
                        portfolioFiltersList.map( item => <LiFilterItem key={ item.id } { ...item } /> )
                    }
                </ul>
            </div>{/* /.col-lg-12 d-flex justify-content-center */}
        </div>/* /.row */
    );
})