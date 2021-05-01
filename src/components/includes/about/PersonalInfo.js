import React from 'react';

import arraySlice from '../../../helpers/arraySlice';
import personalInfo from '../../../data/personalInfo';
import { PersonalInfoItem } from './PersonalInfoItem';

export const PersonalInfo = () => {
    const personalInfoArrays = arraySlice(personalInfo, 4);

    return (
        <div className="row">{
            personalInfoArrays.map( (personalInfo, i) => (
                <div key={`divPersonalInfo${i}`} className="col-lg-6">
                    <ul>
                        {
                            personalInfo.map( item => <PersonalInfoItem key={item.name} {...item} /> )
                        }
                    </ul>
                </div>
            ))
        }</div>/* ./row */
    );
}
