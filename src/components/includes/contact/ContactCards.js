import React from 'react';
import contactInfoData from '../../../data/contactInfoData';
import { ContactCardsItem } from './ContactCardsItem';

export const ContactCards = () => {
    return (
        <div className="row mt-2">
            {
                contactInfoData.map( item => <ContactCardsItem key={ item.id } { ...item } /> )
            }
        </div>
    );
}