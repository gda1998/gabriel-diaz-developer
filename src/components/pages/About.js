import React from 'react';

import { useLang } from '../../hooks/useLang';
import { useSectionShow } from '../../hooks/useSectionShow';

import { PersonalInfo } from '../includes/about/PersonalInfo';
import { CardsCounters } from '../includes/about/CardsCounters';
import { Skills } from '../includes/about/Skills';
import { Interests } from '../includes/about/Interests';
import { Testimonials } from '../includes/about/Testimonials';
import { ImgProfile } from '../includes/about/ImgProfile';

const About = () => {
    const sectionShow = useSectionShow();
    const [ t ] = useLang();
    const translationVars = { 
        name: 'Gabriel Díaz Amador',
        web_tools: 'PHP, Laravel, JavaScript, AJAX, React,'
    };

    return (
        // ======= About Section =======
        <section id="about" className={ `about ${sectionShow}` }>

            {/* ======= About Me ======= */}
            <div className="about-me container">

                <div className="section-title">
                    <h2>{ t('header.about') }</h2>
                    <p>{ t('about.learn') }</p>
                </div>{/* /.section-title */}

                <div className="row">
                    <ImgProfile />
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>{ t('words-cursor.web-developer') } Jr.</h3>
                        <p className="fst-italic" style={{ textAlign: 'justify' }}>
                            { t('about.message', translationVars) }
                        </p>
                        <PersonalInfo />
                    </div>{/* /.col-lg-8 .pt-4 .pt-lg-0 .content */}
                </div>{/* /.row */}

            </div>{/* End About Me */}

            <CardsCounters />
          
            {/* ======= Skills  ======= */}
            <div className="skills container">
                <div className="section-title">
                    <h2>{ t('about.skills') }</h2>
                </div>
                <Skills />
            </div>{/* End Skills */}
      
            {/* ======= Interests ======= */}
            <div className="interests container">
                <div className="section-title">
                    <h2>{ t('about.interests') }</h2>
                </div>
                <Interests />
            </div>{/* End Interests */}

            {/* ======= Testimonials ======= */}
            <div className="testimonials container">
                <div className="section-title">
                    <h2>{ t('about.testimonials') }</h2>
                </div>
                <Testimonials />
            </div>{/* End Testimonials  */}

        </section>/* End About Section */
    );
}

export default About;