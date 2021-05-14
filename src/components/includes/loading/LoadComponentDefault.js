import React from 'react';
import { useLang } from '../../../hooks/useLang';
import { useSectionShow } from '../../../hooks/useSectionShow';

export const LoadComponentDefault = () => {
    const [ t ] = useLang();
    const sectionShow = useSectionShow();
    
    return (
        // ======= Loading Section =======
        <section className={sectionShow}>

            <div className="container">

                <div className="text-center">
                    <h1>{ t('messages.loading') }</h1>
                    <br />
                    <div className="spinner-border" role="status" />
                </div>{/* /.text-center */}

            </div>{/* /.container */}

        </section>/* End Loading Section */
    );
}