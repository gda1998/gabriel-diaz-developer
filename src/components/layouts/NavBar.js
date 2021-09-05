import React, { useRef } from 'react';

import { useLang } from '../../hooks/useLang';
import navLinks from '../../data/navLinks';
import { NavItem } from '../includes/home/NavItem';

export const NavBar = () => {
    const navBarRef = useRef();
    const navToggleRef = useRef();
    const [ t, handleLangToggle ] = useLang();

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
                <li>
                    <button className="btn link btn-handle-toogle" onClick={ handleLangToggle }>
                        { t('header.lang') }
                    </button>
                </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" onClick={ handleToggle } ref={ navToggleRef }></i>

        </nav>/* /.navbar */
    );
}
