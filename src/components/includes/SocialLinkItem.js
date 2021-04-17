import React from 'react';
import PropTypes from 'prop-types';

export const SocialLinkItem = ({ icon, url }) => {
    return (
        <a href={ url } target="_blank" rel="noreferrer">
            <i className={ icon }></i>
        </a>
    );
}

SocialLinkItem.propTypes = {
    icon: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};