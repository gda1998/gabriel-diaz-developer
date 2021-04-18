import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLang } from '../../hooks/useLang';

import { NavBar } from './NavBar';
import { SocialLinks } from '../includes/SocialLinks';
import { ButtonCV } from '../includes/ButtonCV';
import { TextAnimation } from '../includes/TextAnimation';

export const Header = ({ isHome=false }) => {

    const [ t ] = useLang();

    return (
        // ======= Header =======
        <header id="header" className={ !isHome ? 'header-top' : '' }>
      
          <div className="container">
      
            <h1> <Link to="/home">Gabriel Díaz</Link> </h1>

            <h2>
                <small style={{ fontSize: '24px' }} dangerouslySetInnerHTML={{ __html: t('header.welcome-message') }} />
                <small style={{ fontSize: '24px' }}> <TextAnimation /> </small>
            </h2>
            <NavBar />
            <SocialLinks />
            <ButtonCV />
      
          </div>{/* /.container */}
        </header>/* End Header */
    )
}

Header.propTypes = {
    isHome: PropTypes.bool.isRequired
};