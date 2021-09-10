// * React Hooks
import React, { useState } from 'react';

// * Components
import { Waypoint } from 'react-waypoint';
import { CountBoxItem } from './CountBoxItem';

// * Data
import countersBox from '../../../data/countersBox';

export const CardsCounters = React.memo( () => {

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
})