// * React Hooks
import React from 'react';

// * Hooks and libraries
import { useLang } from '../../../hooks/useLang';

// * Components
import { ResumeItem } from './ResumeItem';

// * Data
import educationEn from '../../../data/en/educationEn';
import educationEs from '../../../data/es/educationEs';

export const Education = () => {
    const [ ,, lang ] = useLang();
    const education = lang === 'en' ? educationEn : educationEs;
    return (
        <>
            {
                education.map( item => <ResumeItem key={ item.id }  {...item } /> )
            }
        </>
    )
}
