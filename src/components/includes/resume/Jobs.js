import React from 'react';
import { useLang } from '../../../hooks/useLang';

import experienceEn from '../../../data/en/experienceEn';
import experienceEs from '../../../data/es/experienceEs';
import { ResumeItem } from './ResumeItem';


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
