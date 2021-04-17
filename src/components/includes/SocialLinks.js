import React from 'react';

import socialNetworks from '../../data/socialNetworks';
import { SocialLinkItem } from './SocialLinkItem';

export const SocialLinks = () => {
    return (
        <>
            <div className="social-links">
                {
                    socialNetworks.map( item => <SocialLinkItem key={item.icon} {...item} /> )
                }
            </div>
            <a
                className="button" 
                href="https://google.com.mx" 
                target="_blank" 
                rel="noreferrer"
            >
                Download my CV
            </a>

        </>
    );
}
