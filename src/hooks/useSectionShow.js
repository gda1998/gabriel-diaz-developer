import { useEffect, useState } from 'react';

export const useSectionShow = () => {
    const [sectionShow, setSectionShow] = useState('');

    useEffect(() => {
        const changeSectionShow = setTimeout( () => setSectionShow('section-show'), 150);
        return () => clearTimeout(changeSectionShow);
    }, []);

    return sectionShow;
}