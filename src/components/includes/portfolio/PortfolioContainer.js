// * React Hooks
import React, { useContext } from 'react';

// * Hooks and libraries
import { PortfolioContext } from '../../../hooks/PortfolioContext';

// * Components
import { PortfolioContainerItem } from './PortfolioContainerItem';

export const PortfolioContainer = () => {
    const { filteredImages } = useContext(PortfolioContext);

    return (
        /* id, path, title, type */
        <div className="row portfolio-container">
            {
                filteredImages.map( item => ( 
                    <PortfolioContainerItem 
                        key={ item.id } 
                        item={ item }
                    />) 
                )
            }
        </div>/* /,row portfolio-container */
    );
}