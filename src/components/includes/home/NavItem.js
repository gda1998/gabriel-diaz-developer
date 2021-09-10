// * React Hooks
import React from 'react';
import PropTypes from 'prop-types';

// * Hooks and libraries
import { useLang } from '../../../hooks/useLang';

// * Components
import { NavLink } from 'react-router-dom';

// * Helpers
import select from '../../../helpers/select';

export const NavItem = ({ path, name }) => {
    const [ t ] = useLang();

    const handleNavClick = () => {
        // Navbar Mobile
        const navbar = select('#navbar');
        if (navbar.classList.contains('navbar-mobile')) {
            navbar.classList.remove('navbar-mobile')
            
            // Btn Hamburguer Toggle
            const navbarToggle = select('.mobile-nav-toggle')
            navbarToggle.classList.toggle('bi-list')
            navbarToggle.classList.toggle('bi-x')
        }
    }

    return (
        <li>
            <NavLink 
                className="nav-link" 
                activeClassName="active" 
                to={path} 
                onClick={ handleNavClick } 
            >
                { t(name) }
            </NavLink> 
        </li>
    )
}

NavItem.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};