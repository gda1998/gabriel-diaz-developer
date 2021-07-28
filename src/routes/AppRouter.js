import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router';

import { Header } from '../components/layouts/Header';
import { Resume } from '../components/pages/Resume';
import { Services } from '../components/pages/Services';
import { Contact } from '../components/pages/Contact';
import { Error404 } from '../components/errors/Error404';

const Portfolio = React.lazy( () => import('../components/pages/Portfolio') );
const About = React.lazy( () => import('../components/pages/About') );

export const AppRouter = () => {
    const { pathname } = useLocation();
    return (
        <>
            <Header isHome={ pathname === '/home' } />
            <Switch>
                <Route exact path="/home" />
                <Route exact path="/about" component={ About } />   
                <Route exact path="/resume" component={ Resume } />   
                <Route exact path="/services" component={ Services } />   
                <Route exact path="/portfolio" component={ Portfolio } />   
                <Route exact path="/contact" component={ Contact } />   
                { pathname === '/' ? 
                    <Redirect to="/home" /> : 
                    <Route component={ Error404 } />  
                }
            </Switch>
        </>
    );
}
