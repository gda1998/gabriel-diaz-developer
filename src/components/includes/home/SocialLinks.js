import React from 'react';
import PropTypes from 'prop-types';

import socialNetworks from '../../../data/socialNetworks';
import { SocialLinkItem } from './SocialLinkItem';

export const SocialLinks = ({ displayBlock }) => {
    return (
        <div className="social-links" style={displayBlock}>
            {
                socialNetworks.map( item => <SocialLinkItem key={item.icon} {...item} /> )
            }
        </div>
    );
}

SocialLinks.propTypes = {
    isDisplayBlock: PropTypes.object
}