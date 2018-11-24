import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Detail from "./components/Details/Details";

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Detail}/>
        <Route exact path="/new" component={}/>
        <Route exact path="/:id/edit" component={}/>
    </Switch>
);

export default Router;