import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router';

import { Header } from '../components/layouts/Header';
import { About } from '../components/pages/About';
import { Resume } from '../components/pages/Resume';
import { Services } from '../components/pages/Services';
import { Portfolio } from '../components/pages/Portfolio';
import { Contact } from '../components/pages/Contact';
import { Error404 } from '../components/errors/Error404'

export const DashboardRoutes = () => {
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
                <Route exact path="/lang" component={ Contact } />
                { pathname === '/' ? 
                    <Redirect to="/home" /> : 
                    <Route component={ Error404 } />  
                }
            </Switch>
        </>
    )
}
