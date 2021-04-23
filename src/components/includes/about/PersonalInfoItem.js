import React from 'react';
import PropTypes from 'prop-types';
import { useLang } from '../../../hooks/useLang';

export const PersonalInfoItem = ({ name, value }) => {
    const [ t ] = useLang();
    return (
        <li>
            <i className="bi bi-chevron-right"></i> 
            <strong>{ t(name) }:</strong>
            <span>
                {
                    value.includes('about.') ? t(value) : value
                }
            </span>
        </li>
    );
}

PersonalInfoItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}