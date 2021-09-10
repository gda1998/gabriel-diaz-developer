// * React Hooks
import React from 'react';
import PropTypes from 'prop-types';

// * Hooks and libraries
import { useLang } from '../../../hooks/useLang';

export const LiPortfolioItem = ({title, text}) => {
    const [ t ] = useLang();
    return (
        <li>
            <strong>{ t(title) }</strong>
            { text && ` : ${ text }` }
        </li>
    );
}

LiPortfolioItem.propTypes = {
    title: PropTypes.string.isRequired, 
    text: PropTypes.string
}