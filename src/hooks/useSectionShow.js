import { useState } from 'react';

export const useSectionShow = () => {
    const [sectionShow, setSectionShow] = useState('');

    const changeSectionShow = () => {
        setTimeout( () => setSectionShow('section-show'), 150);
    }

    return [ sectionShow, changeSectionShow ];
}
