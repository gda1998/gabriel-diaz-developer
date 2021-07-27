import React from 'react';
import PropTypes from 'prop-types';

export const UsedToolsItem = ({ path, toolName }) => {
    return (
        <li>
            <img loading="lazy" src={ path } alt={ toolName } />
            <span className="mx-2">{ toolName }</span>
        </li>
    );
}

UsedToolsItem.propTypes = {
    path: PropTypes.string.isRequired,
    toolName: PropTypes.string.isRequired,
}