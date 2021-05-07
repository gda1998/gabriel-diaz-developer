import React from 'react';
import PropTypes from 'prop-types';
import { useLang } from '../../../hooks/useLang';

export const ServiceItem = ({ title, text, icon, className }) => {
    const [ t ] = useLang();

    return (
        <div className={ `col-md-6 ${ className ? className : '' }` }>
            <div className="icon-box">
                <div className="icon">
                    <i className={ icon }></i>
                </div>
                <h4>{ t(title) }</h4>
                <p>{ t(text) }</p>
            </div>
        </div>
    );
}

ServiceItem.propTypes = {
    title : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired,
    className : PropTypes.string
}