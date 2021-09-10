// * React Hooks
import React from 'react';

// * Hooks and libraries
import { useSectionShow } from '../../hooks/useSectionShow';
import { useLang } from '../../hooks/useLang';

// * Components
import { TourComponent } from '../includes/react-tour/TourComponent';
import { ContactCards } from '../includes/contact/ContactCards';
import { FormContact } from '../includes/contact/FormContact';

// * Types
import types from '../../types/types';

export const Contact = () => {
    const sectionShow = useSectionShow();
    const [ t ] = useLang();

    return (
        // ======= Contact Section =======
        <section id="contact" className={ `contact ${sectionShow}` }>

            <TourComponent pageName="contact" type={ types.contact } />
            
            <div className="container">

                <div className="section-title">
                    <h2>{ t('header.contact') }</h2>
                    <p>{ t('contact.contact-me') }</p>
                </div>{/* /.section-title */}

                <ContactCards />
                <FormContact />

            </div>{/* /.container */}

        </section>/* End Contact Section */
    );
}