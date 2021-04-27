import React from 'react';
import interestsData from '../../../data/interestsData';

import { InterestItem } from './InterestItem';

export const Interests = () => {
    return (
        <div className="row">
            {
                interestsData.map( item => (
                    <InterestItem key={ item.name } {...item} />
                ))
            }
        </div>
    )
}
