// * React Hooks
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// * Components
import { LoadComponentDefault } from './LoadComponentDefault';

export const Loading = ({ LoadingComponent, Component, delay }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeOut = setTimeout(() => setIsLoading(false), delay);
        return () => clearTimeout(timeOut);
    }, [delay]);

    return (
        isLoading ? <LoadingComponent /> : <Component />
    );
}

Loading.propTypes = {
    LoadingComponent : PropTypes.func,
    Component : PropTypes.func.isRequired,
    delay: PropTypes.number.isRequired
}

Loading.defaultProps = {
    LoadingComponent : LoadComponentDefault
}