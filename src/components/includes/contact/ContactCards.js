// * React Hooks
import React from 'react';

// * Components
import { ContactCardsItem } from './ContactCardsItem';

// * Data
import contactInfoData from '../../../data/contactInfoData';

export const ContactCards = () => {
    return (
        <div className="row mt-2">
            {
                contactInfoData.map( item => <ContactCardsItem key={ item.id } { ...item } /> )
            }
        </div>
    );
}