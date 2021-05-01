import React from 'react';
import { useLang } from '../../../hooks/useLang';

import educationEn from '../../../data/en/educationEn';
import educationEs from '../../../data/es/educationEs';
import { ResumeItem } from './ResumeItem';

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
