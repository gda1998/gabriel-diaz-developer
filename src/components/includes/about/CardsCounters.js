import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';

import countersBox from '../../../data/countersBox';
import { CountBoxItem } from './CountBoxItem';

export const CardsCounters = () => {

    const [showCounter, setshowCounter] = useState(false);

    const handleWayPointEnter = () => setshowCounter(true);

    return (
        /* ======= Counts ======= */
        <div className="counts container">

            <div className="row">

                <Waypoint onEnter={ handleWayPointEnter } />
                {
                    countersBox.map( (item) => (
                        <CountBoxItem key={ item.name } counterBoxInfo={ item } showCounter={ showCounter } />
                    ))
                }

            </div>{/* /.row */}

        </div>/* End Counts */
    );
}
