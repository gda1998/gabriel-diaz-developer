import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay, Mousewheel } from 'swiper';

import { useLang } from '../../../hooks/useLang';
import testimonialsEn from '../../../data/testimonialsEn';
import testimonialsEs from '../../../data/testimonialsEs';
import { TestimonialItem } from './TestimonialItem';

// install Swiper modules
SwiperCore.use([ Pagination, Autoplay, Mousewheel ]);

export const Testimonials = () => {
    const [ ,, lang ] = useLang();
    const testimonials = lang === 'en' ? testimonialsEn : testimonialsEs;

    const breakpoint = {
        // when window width is <= 320px
        320: { slidesPerView: 1 },
        // when window width is <= 480px
        480: { slidesPerView: 2 },
        // when window width is <= 768px
        768: { slidesPerView: 3 }
    };

    return (
        <div className="testimonials-slider swiper-container">
            <div className="swiper-wrapper">
            
                <Swiper
                    loop={true} 
                    mousewheel={true} 
                    pagination={{ clickable: true }} 
                    autoplay 
                    grabCursor={ true } 
                    breakpoints={ breakpoint }
                >
                    {
                        testimonials.map( item => (
                            <SwiperSlide>
                                <TestimonialItem key={ item.key } { ...item } />
                            </SwiperSlide>
                        ))
                    }
                    ...
                </Swiper>

            </div>{/* /.swiper-wrapper */}
        </div>/* testimonials-slider swiper-container */
    )
}
