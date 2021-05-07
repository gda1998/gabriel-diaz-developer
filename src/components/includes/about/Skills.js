import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';

import select from '../../../helpers/select';
import skillsData from '../../../data/skillsData';
import arraySlice from '../../../helpers/arraySlice';
import { SkillItem } from './SkillItem';

export const Skills = React.memo( () => {

    const skillsArray = arraySlice(skillsData, 5);

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
                    <div key={ `colSkill${i}` } className="col-lg-4">
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