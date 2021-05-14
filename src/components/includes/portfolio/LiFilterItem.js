import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PortfolioContext } from '../../../hooks/PortfolioContext';
import select from '../../../helpers/select';

export const LiFilterItem = ({ name, data_filter }) => {
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
            { name }
        </li>
    );
}

LiFilterItem.propTypes = {
    name: PropTypes.string.isRequired,
    data_filter: PropTypes.string.isRequired
}