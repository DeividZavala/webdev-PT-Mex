import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Detail from "./components/Details/Details";
import Form from "./components/Form/Form";
import Auth from "./components/auth/Auth";
import Profile from "./components/profile/Profile";

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:id" component={Detail}/>
        <Route exact path="/new" component={Form}/>
        <Route exact path="/:id/edit" component={Form}/>
        <Route exact path="/login" component={Auth}/>
        <Route exact path="/profile/:id" component={Profile}/>
    </Switch>
);

export default Router;