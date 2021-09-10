// * React Hooks
import React from 'react';

// * Data
import interestsData from '../../../data/interestsData';

import { InterestItem } from './InterestItem';

export const Interests = React.memo( () => {
    return (
        <div className="row">
            {
                interestsData.map( item => <InterestItem key={ item.name } {...item} /> )
            }
        </div>
    );
})