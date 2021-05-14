import  { useEffect, useState } from 'react';

export const useImageFiltering = (initialState) => {
    const [filter, setFilter] = useState('*');
    const [filteredImages, setFilteredImages] = useState(initialState);

    useEffect(() => {
        filter === '*' ? 
        setFilteredImages(initialState) 
        : 
        setFilteredImages( 
            initialState.filter( image => image.filter === filter )
        );
    }, [filter, initialState]);

    return [ setFilter, filteredImages ];
}
