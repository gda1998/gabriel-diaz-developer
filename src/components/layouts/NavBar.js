import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import navLinks from '../../data/navLinks';
import { NavItem } from '../includes/NavItem';

export const NavBar = () => {
    const navBarRef = useRef();
    const navToggleRef = useRef();

    const handleToggle = () => {
        // Navbar
        navBarRef.current.classList.toggle('navbar-mobile');

        // Btn Hamburguer Toggle
        navToggleRef.current.classList.toggle('bi-list');
        navToggleRef.current.classList.toggle('bi-x');
    };

    return (
        <nav id="navbar" className="navbar" ref={ navBarRef }>

            <ul>
                {
                    navLinks.map( item => <NavItem key={item.path} {...item} />)
                }
                <li> <Link to="/home">English</Link> </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" onClick={ handleToggle } ref={ navToggleRef }></i>

        </nav>/* /.navbar */
    );
}
