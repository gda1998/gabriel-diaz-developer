import React from 'react';
import PropTypes from 'prop-types';

import { FastCounter } from 'react-smooth-counter';
import { useLang } from '../../../hooks/useLang';

export const CountBoxItem = ({ counterBoxInfo, showCounter }) => {
    const [ t ] = useLang();
    const { icon, numberTo, name, className } = counterBoxInfo;

    return (
        <div className={ className }>
            <div className="count-box">
                <i className={icon}></i>
                { showCounter && <FastCounter delay={300} startNumber={0} to={numberTo} /> }
                <p>{ t(name) }</p>
            </div>
        </div>
    );
}

CountBoxItem.propTypes = {
    counterBoxInfo : PropTypes.object.isRequired,
    showCounter: PropTypes.bool.isRequired
}