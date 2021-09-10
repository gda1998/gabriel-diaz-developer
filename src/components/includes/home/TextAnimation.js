// * React Hooks
import React from 'react';

// * Hooks and libraries
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