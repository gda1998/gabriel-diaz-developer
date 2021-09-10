// * React Hooks
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// * Components
import { Waypoint } from 'react-waypoint';
import { SkillItem } from './SkillItem';

// * Helpers
import arraySlice from '../../../helpers/arraySlice';
import select from '../../../helpers/select';

export const Skills = React.memo( ({ numColumns, numRows, data }) => {

    const skillsArray = arraySlice(data, numRows);

    const [showPercent, setshowPercent] = useState(false);

    const handleWayPointEnter = () => {
        const progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
        setshowPercent(true);
    }

    return (
        <div className="row skills-content">

            <Waypoint onEnter={ handleWayPointEnter } />

            {
                skillsArray.map( (skillsData, i) => (
                    <div key={ `colSkill${i}` } className={ `col-lg-${ 12 / numColumns }` }>
                        {
                            skillsData.map( item => (
                                <SkillItem key={ `skill${item.name}` } data={ item } showPercent={ showPercent } />
                            ))
                        }
                    </div>
                ))
            }

        </div>/* /.row */
    )
})

Skills.propTypes = {
    numColumns: PropTypes.number.isRequired,
    numRows: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired
}