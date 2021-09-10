// * React Hooks
import React from 'react';

// * Hooks and libraries
import { useLang } from '../../../hooks/useLang';

// * Components
import { ResumeItem } from './ResumeItem';

// * Data
import experienceEn from '../../../data/en/experienceEn';
import experienceEs from '../../../data/es/experienceEs';


export const Jobs = () => {
    const [ ,, lang ] = useLang();
    const jobs = lang === 'en' ? experienceEn : experienceEs;
    return (
        <>
            {
                jobs.map( item => <ResumeItem key={ item.id } { ...item } /> )
            }   
        </>
    )
}
