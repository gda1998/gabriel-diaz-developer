// * React Hooks
import React, { Suspense } from 'react';

// * Hooks and libraries
import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

// * Routes
import { AppRouter } from './routes/AppRouter';

// * Components
import { LoadComponentDefault } from './components/includes/loading/LoadComponentDefault';

import './config/i18next-config';
import './css/style.css';

export const App = () => {

    return (
        <Router>
            <div>
                <Suspense fallback={ <LoadComponentDefault /> }>
                    <Switch>
                        <Route path="/" component={ AppRouter } />
                    </Switch>
                </Suspense>
            </div>
        </Router>
    )
};

export default App;