// * React Hooks
import React from 'react';

// * Hooks and libraries
import { useLang } from '../../../hooks/useLang';

// * Documents
import pdf_en from '../../../docs/Gabriel_Diaz_Resume.pdf';
import pdf_es from '../../../docs/Curriculum_Gabriel_Diaz.pdf';


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
