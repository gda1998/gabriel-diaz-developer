// * React Hooks
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

// * Hooks and libraries
import { useLang } from '../../../hooks/useLang';
import { PortfolioContext } from '../../../hooks/PortfolioContext';

// * Helpers
import select from '../../../helpers/select';

export const LiFilterItem = ({ name, data_filter }) => {
    const [ t ] = useLang();
    const { setFilter } = useContext(PortfolioContext);

    useEffect(() => {
        select('#portfolio-flters li').classList.add('filter-active');
    }, []);

    const handleFilter = ({ target }) => {
        const LiItems = select('#portfolio-flters li', true);
        LiItems.map( item => item.classList.remove('filter-active') );
        target.classList.add('filter-active');
        setFilter(data_filter);
    }

    return (
        <li onClick={ handleFilter }>
            { t(name) }
        </li>
    );
}

LiFilterItem.propTypes = {
    name: PropTypes.string.isRequired,
    data_filter: PropTypes.string.isRequired
}