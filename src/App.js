import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
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