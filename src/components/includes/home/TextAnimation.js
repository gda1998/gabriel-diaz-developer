import React from 'react';
import { useTextAnimation } from '../../../hooks/useTextAnimation';

export const TextAnimation = () => {
    const currentWord = useTextAnimation();
    return (
        <span>
            { currentWord }
            <span className="cursor">|</span>
        </span>
    );
}