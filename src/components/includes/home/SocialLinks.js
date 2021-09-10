// * React Hooks
import React from 'react';
import PropTypes from 'prop-types';

// * Components
import { SocialLinkItem } from './SocialLinkItem';

// * Data
import socialNetworks from '../../../data/socialNetworks';

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