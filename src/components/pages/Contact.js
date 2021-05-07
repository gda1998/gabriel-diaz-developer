import React from 'react';
import { useLang } from '../../hooks/useLang';
import { useSectionShow } from '../../hooks/useSectionShow';
import { ContactCards } from '../includes/contact/ContactCards';
import { FormContact } from '../includes/contact/FormContact';

export const Contact = () => {
    const sectionShow = useSectionShow();
    const [ t ] = useLang();

    return (
        // ======= Contact Section =======
        <section id="contact" className={ `contact ${sectionShow}` }>
            
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