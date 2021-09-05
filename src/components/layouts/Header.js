import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLang } from '../../hooks/useLang';

import { NavBar } from './NavBar';
import { SocialLinks } from '../includes/home/SocialLinks';
import { ButtonCV } from '../includes/home/ButtonCV';
import { TextAnimation } from '../includes/home/TextAnimation';
import { TourComponent } from '../includes/react-tour/TourComponent';
import types from '../../types/types';

export const Header = ({ isHome=false }) => {

    const [ t ] = useLang();

    return (
        // ======= Header =======
        <header id="header" className={ !isHome ? 'header-top' : '' }>

            { isHome && <TourComponent useModalOverlay={ false } pageName="home" type={ types.home } /> }
            
            <div className="container">
                <h1> <Link to="/home">Gabriel Díaz</Link> </h1>
                <h2>
                    <small style={{ fontSize: '24px' }} dangerouslySetInnerHTML={{ __html: t('header.welcome-message', { name: 'Gabriel Díaz' }) }} />
                    <small style={{ fontSize: '24px' }}> <TextAnimation /> </small>
                </h2>
                <NavBar />
                <SocialLinks />
                <ButtonCV />
            </div>{/* /.container */}
        </header>/* End Header */
    );
}

Header.propTypes = {
    isHome: PropTypes.bool.isRequired
}