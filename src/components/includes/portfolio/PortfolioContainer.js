import React, { useContext } from 'react';

import { PortfolioContext } from '../../../hooks/PortfolioContext';
import { PortfolioItem } from './PortfolioItem';

export const PortfolioContainer = () => {
    const { filteredImages } = useContext(PortfolioContext);

    return (
        /* id, path, title, type */
        <div className="row portfolio-container">
            {
                filteredImages.map( item => ( <PortfolioItem key={ item.id } { ...item } /> ) )
            }
        </div>/* /,row portfolio-container */
    );
}
