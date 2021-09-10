// * React Hooks
import React from 'react';
import PropTypes from 'prop-types';

// * Hooks and libraries
import { useLang } from '../../../hooks/useLang';

// * Components
import { FastCounter } from 'react-smooth-counter';

export const SkillItem = ({ data, showPercent }) => {
    const [ t ] = useLang();
    const { name, percent } = data;
    
    return (
        <div className="progress">
            <span className="skill">
                { 
                    // If the word has a translate, we put the word translated, if not, we put just the name
                    t(name) !== name ? t(name) : name
                }
                <i className="val">
                    { showPercent && 
                        <FastCounter startNumber={0} to={ percent } /> 
                    }
                    %
                </i>
            </span>
            <div className="progress-bar-wrap">
                <div 
                    className="progress-bar" 
                    role="progressbar" 
                    aria-valuenow={ percent } 
                    aria-valuemin="0" 
                    aria-valuemax="100" 
                />
            </div>
        </div>/* /.progress */
    );
}

SkillItem.propTypes = {
    data : PropTypes.object.isRequired,
    showPercent: PropTypes.bool.isRequired
}