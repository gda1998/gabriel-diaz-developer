import React from 'react';
import PropTypes from 'prop-types';

export const TestimonialItem = ({ testimonial, imgPath, name, position }) => {
    return (
        <div className="swiper-slide">
            <div className="testimonial-item">
                <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    { testimonial }
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
                <img loading="lazy" src={ imgPath } className="testimonial-img" alt={ name } />
                <h3>{ name }</h3>
                <h4>{ position }</h4>
            </div>
        </div>
    );
}

TestimonialItem.propTypes = {
    testimonial: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
}