// * React Hooks
import React from 'react';
import PropTypes from 'prop-types';

// * Data
import cityDefault from '../../../data/cityDefault';

export const ResumeItem = ({ title, dates, place, text }) => {

    return (
        <div className="resume-item">
            <h4>{ title }</h4>
            <h5>{ dates }</h5>
            <p><em>{ place } { cityDefault }</em></p>
            {
                text && <p style={{ textAlign: 'justify' }}>{text}</p>
            }
        </div>
    );
}

ResumeItem.propTypes = {
    title: PropTypes.string.isRequired,
    dates: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    text: PropTypes.string
}