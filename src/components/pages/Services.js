import React from 'react';
import servicesData from '../../data/servicesData';
import { useLang } from '../../hooks/useLang';
import { useSectionShow } from '../../hooks/useSectionShow';
import { ServiceItem } from '../includes/services/ServiceItem';

export const Services = () => {
    const sectionShow = useSectionShow();
    const [ t ] = useLang();

    return (
        // ======= Services Section =======
        <section id="services" className={ `services ${sectionShow}` }>
            
            <div className="container">

                <div className="section-title">
                    <h2>{ t('header.services') }</h2>
                    <p>{ t('services.my-services') }</p>
                </div>{/* /.section-title */}

                <div className="row">
                    {
                        servicesData.map( item => <ServiceItem key={ item.id } { ...item } /> )
                    }
                </div>{/* /.row */}

            </div>{/* /.container */}

        </section>/* End Services Section */
    );
}