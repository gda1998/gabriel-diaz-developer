import React from 'react';
import { PersonalInfoItem } from './PersonalInfoItem';
import personalInfo from '../../../data/personalInfo';

export const PersonalInfo = () => {
    const sizeOfArray = 4;
    let personalInfoArrays = [];

    for (let i = 0; i < personalInfo.length; i+= sizeOfArray) {
        const newArray = personalInfo.slice(i, i + sizeOfArray);
        personalInfoArrays = [...personalInfoArrays, newArray];
    }

    return (
        <div className="row">{
            personalInfoArrays.map( (personalInfo, i) => (
                <div key={`divPersonalInfo${i}`} className="col-lg-6">
                    <ul>
                        {
                            personalInfo.map( item => (
                                <PersonalInfoItem key={item.name} {...item} />
                            ))
                        }
                    </ul>
                </div>
            ))
        }</div>/* ./row */
    );
}
