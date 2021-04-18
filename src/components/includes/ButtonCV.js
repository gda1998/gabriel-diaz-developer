import React from 'react';
import { useLang } from '../../hooks/useLang';

import pdf_en from '../../docs/Gabriel_DIaz_Resume.pdf';
import pdf_es from '../../docs/Curriculum_Gabriel_Diaz.pdf';


export const ButtonCV = () => {

    const [ t, , lang ] = useLang();

    return (
        <a
            className="button" 
            href={ lang === 'en' ? pdf_en : pdf_es }
            id="CV_Gabriel_Diaz"
            download="CV_Gabriel_Diaz"
        >
            { t('header.download-cv') }
        </a>
    );
}
