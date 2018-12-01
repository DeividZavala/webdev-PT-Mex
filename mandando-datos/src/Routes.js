import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './404';

const Router = ({state, handleLogin}) => (
    <Switch>
        <Route exact path="/" render={(props) => <Home handleLogin={handleLogin} state={state} {...props} />}/>
        <Route path="*" component={NotFound}/>
    </Switch>
);

export default Router;