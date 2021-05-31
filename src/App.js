import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import FilterCountry from './Component/FilterCountry/FilterCountry';
import Home from './Component/Home/Home';
import Navigation from './Component/Navigation/Navigation';
import NoMatch from './Component/NoMatch/NoMatch';
import Single from './Component/Single/Single';

function App() {
    return (
        <Router>
            <div>
                <Navigation />

                <Switch>
                    <Route path="/" exact>
                        <FilterCountry />
                        <Home />
                    </Route>
                    <Route path="/home">
                        <FilterCountry />
                        <Home />
                    </Route>

                    <Route path="/single" exact>
                        <FilterCountry />
                        <Single />
                    </Route>
                    <Route path="/single/:name">
                        <Single />
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
