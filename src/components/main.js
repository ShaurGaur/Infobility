import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './HomePage';
import AboutUs from './AboutUs';
import ADHD from "./ADHD";

const Main = () => (
    <Switch>
        <Route exact path = "/" component = {HomePage}/>
        <Route path = "/aboutus" component = {AboutUs}/>
        <Route path = "/adhd" component = {ADHD}/>
    </Switch>
)

export default Main;