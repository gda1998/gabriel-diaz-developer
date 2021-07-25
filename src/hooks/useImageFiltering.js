import  { useEffect, useState } from 'react';

export const useImageFiltering = (initialState) => {
    const [filter, setFilter] = useState('*');
    const [filteredImages, setFilteredImages] = useState(initialState);

    const getNextPortfolio = (currentId) => {
        const currentIndex = filteredImages.findIndex(item => item.id === currentId);
        const nextIndex = currentIndex + 1 < filteredImages.length ? currentIndex + 1 : 0;
        return filteredImages.find( (item, i) => i === nextIndex );
    }

    const getPrevPortfolio = (currentId) => {
        const currentIndex = filteredImages.findIndex(item => item.id === currentId);
        const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : filteredImages.length - 1;
        return filteredImages.find( (item, i) => i === prevIndex );
    }

    useEffect(() => {
        filter === '*' ? 
        setFilteredImages(initialState) 
        : 
        setFilteredImages( 
            initialState.filter( image => image.filter === filter )
        );
    }, [filter, initialState]);

    return [ setFilter, filteredImages, getNextPortfolio, getPrevPortfolio ];
}