import React from 'react';

import { useLang } from '../../hooks/useLang';
import { useSectionShow } from '../../hooks/useSectionShow';

import { PersonalInfo } from '../includes/about/PersonalInfo';
import { CardsCounters } from '../includes/about/CardsCounters';
import { Skills } from '../includes/about/Skills';
import { Interests } from '../includes/about/Interests';

export const About = () => {
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
            </div>
      
            <div className="row">

              <div className="col-lg-4 profile-img" data-aos="fade-right">
                <img src="assets/img/me.jpg" className="img-fluid" alt="Profile" />
              </div>{/* .col-lg-4 */}

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

            <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
                <div className="swiper-wrapper">
                    
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                    </div>
                  </div>{/* End testimonial item */}

                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                    </div>
                  </div>{/* End testimonial item */}

                </div>{/* /.swiper-wrapper */}
                <div className="swiper-pagination" />
            </div>

            <div className="owl-carousel testimonials-carousel" />

          </div>{/* End Testimonials  */}
      
        </section>/* End About Section */
    );
}