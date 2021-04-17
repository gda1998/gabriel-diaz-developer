import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { NavBar } from './NavBar';
import { SocialLinks } from '../includes/SocialLinks';

export const Header = ({ isHome=false }) => {

    return (
        // ======= Header =======
        <header id="header" className={ !isHome ? 'header-top' : '' }>
      
          <div className="container">
      
            <h1>
                <Link to="/home">Gabriel Díaz</Link>
            </h1>
            <h2>I'm a passionate <span className="word">Web Developer</span> from the world</h2>

            <NavBar />
            <SocialLinks />
      
          </div>{/* /.container */}
        </header>/* End Header */
    )
}

Header.propTypes = {
    isHome: PropTypes.bool.isRequired
};