// * React Hooks
import React from 'react';

// * Hooks and libraries
import { useSectionShow } from '../../../hooks/useSectionShow';

export const LoadComponentDefault = () => {
    const sectionShow = useSectionShow();
    
    return (
        // ======= Loading Section =======
        <section className={sectionShow}>

            <div className="container">

                <div className="text-center">
                    <h1>{ 'Loading...' }</h1>
                    <br />
                    <div className="spinner-border" role="status" />
                </div>{/* /.text-center */}

            </div>{/* /.container */}

        </section>/* End Loading Section */
    );
}