// * React Hooks
import React from 'react';

// * Components
import { PersonalInfoItem } from './PersonalInfoItem';

// * Helpers
import arraySlice from '../../../helpers/arraySlice';

// * Data
import personalInfo from '../../../data/personalInfo';

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
