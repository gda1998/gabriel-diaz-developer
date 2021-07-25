import React, { useContext } from 'react';
import { PortfolioContext } from '../../../hooks/PortfolioContext';
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