import React from 'react';
import { useLang } from '../../hooks/useLang';
import { useSectionShow } from '../../hooks/useSectionShow';
import { PersonalInfo } from '../includes/about/PersonalInfo';

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
      
          {/* ======= Counts ======= */}
          <div className="counts container">
      
            <div className="row">
      
              <div className="col-lg-4 col-md-6">
                <div className="count-box">
                  <i className="bi bi-journal-richtext"></i>
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Projects</p>
                </div>
              </div>
      
              <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
                <div className="count-box">
                  <i className="bi bi-headset"></i>
                  <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Hours Of Support</p>
                </div>
              </div>
      
              <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="bi bi-award"></i>
                  <span data-purecounter-start="0" data-purecounter-end="24" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Awards</p>
                </div>
              </div>
    
      
            </div>
      
          </div>{/* End Counts */}
      
          {/* ======= Skills  ======= */}
          <div className="skills container">
      
            <div className="section-title">
              <h2>Skills</h2>
            </div>
      
            <div className="row skills-content">
      
              <div className="col-lg-6">
      
                <div className="progress">
                  <span className="skill">HTML 
                    <i className="val">
                      <span className="myselector" cup-end="100" cup-append="%"></span>
                    </i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
      
                <div className="progress">
                  <span className="skill">CSS 
                    <i className="val">
                      <span className="myselector" cup-end="90" cup-append="%"></span>
                    </i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
      
                <div className="progress">
                  <span className="skill">JavaScript 
                    <i className="val">
                      <span className="myselector" cup-end="75" cup-append="%"></span>
                    </i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
      
              </div>
      
              <div className="col-lg-6">
      
                <div className="progress">
                  <span className="skill">PHP
                    <i className="val">
                      <span className="myselector" cup-end="80" cup-append="%"></span>
                    </i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
      
                <div className="progress">
                  <span className="skill">WordPress/CMS
                    <i className="val">
                      <span className="myselector" cup-end="90" cup-append="%"></span>
                    </i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
      
                <div className="progress">
                  <span className="skill">Photoshop
                    <i className="val">
                      <span className="myselector" cup-end="55" cup-append="%"></span>
                    </i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
      
              </div>
      
            </div>
      
          </div>{/* End Skills */}
      
          {/* ======= Interests ======= */}
          <div className="interests container">
      
            <div className="section-title">
              <h2>Interests</h2>
            </div>
      
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="icon-box">
                  <i className="ri-store-line" style={{ color: "#ffbb2c" }}></i>
                  <h3>Lorem Ipsum</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="ri-bar-chart-box-line" style={{ color: "#5578ff" }}></i>
                  <h3>Dolor Sitema</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="ri-calendar-todo-line" style={{ color: "#e80368" }}></i>
                  <h3>Sed perspiciatis</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                <div className="icon-box">
                  <i className="ri-paint-brush-line" style={{ color: "#e361ff" }}></i>
                  <h3>Magni Dolores</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-database-2-line" style={{ color: "#47aeff" }}></i>
                  <h3>Nemo Enim</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-gradienter-line" style={{ color: "#ffa76e" }}></i>
                  <h3>Eiusmod Tempor</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-file-list-3-line" style={{ color: "#11dbcf" }}></i>
                  <h3>Midela Teren</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-price-tag-2-line" style={{ color: "#4233ff" }}></i>
                  <h3>Pira Neve</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-anchor-line" style={{ color: "#b2904f" }}></i>
                  <h3>Dirada Pack</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-disc-line" style={{ color: "#b20969" }}></i>
                  <h3>Moton Ideal</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-base-station-line" style={{ color: "#ff5828" }}></i>
                  <h3>Verdo Park</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-fingerprint-line" style={{ color: "#29cc61" }}></i>
                  <h3>Flavor Nivelanda</h3>
                </div>
              </div>
            </div>
      
          </div>{/* End Interests */}
      

      
        </section>/* End About Section */
    );
}
