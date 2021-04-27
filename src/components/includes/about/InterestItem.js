import React from 'react';
import PropTypes from 'prop-types';
import { useLang } from '../../../hooks/useLang';

export const InterestItem = ({ className, icon, color, name }) => {
    const [ t ] = useLang();
    return (
        <div className={ className }>
            <div className="icon-box">
                <i className={ icon } style={{ color: color }}></i>
                <h3>{ t(name) }</h3>
            </div>
        </div>
    )
}

InterestItem.propTypes = {
    className : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired,
    color : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
}