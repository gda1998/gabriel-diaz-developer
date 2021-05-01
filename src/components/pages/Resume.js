import React from 'react';
import { useLang } from '../../hooks/useLang';
import { useSectionShow } from '../../hooks/useSectionShow';

import { Education } from '../includes/resume/Education';
import { Jobs } from '../includes/resume/Jobs';

export const Resume = () => {
    const sectionShow = useSectionShow();
    const [ t ] = useLang();
    const translationVars = { 
        web_tools: 'PHP, Laravel, JavaScript, AJAX, React,'
    };

    return (
        // ======= Resume Section =======
        <section id="resume" className={ `resume ${sectionShow}` }>

            <div className="container">

                <div className="section-title">
                    <h2>{ t('header.resume') }</h2>
                    <p>{ t('resume.check-resume') }</p>
                </div>{/* /.section-title */}

                <div className="row">

                    <div className="col-lg-6">
                        <h3 className="resume-title">{ t('resume.sumary') }</h3>
                        <div className="resume-item pb-0">
                            <h4>{ t('resume.introduction') }</h4>
                            <p style={{ textAlign: 'justify' }}>
                                <em dangerouslySetInnerHTML={{ __html: t('resume.sumary-text', translationVars) }} />
                            </p>
                        </div>

                        <h3 className="resume-title">{ t('resume.education') }</h3>
                        <Education />
                    </div>{/* /.col-lg-6 */}
                    
                    <div className="col-lg-6">
                        <h3 className="resume-title">{ t('resume.experience') }</h3>
                        <Jobs />
                    </div>{/* /.col-lg-6 */}

                </div>{/* /.row */}

            </div>{/* /.container */}

        </section>/* End Resume Section */
    );
}