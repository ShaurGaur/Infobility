import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './HomePage';
import AboutUs from './AboutUs';
import ADHD from "./ADHD";
import Autism from "./Autism";
import Advocacy from "./Advocacy";
import Fun from "./Fun";

const Main = () => (
    <Switch>
        <Route exact path = "/" component = {HomePage}/>
        <Route path = "/aboutus" component = {AboutUs}/>
        <Route path = "/adhd" component = {ADHD}/>
        <Route path ="/autism" component = {Autism}/>
        <Route path ="/advocacy" component = {Advocacy}/>
        <Route path ="/fun" component = {Fun}/>
    </Switch>
)

export default Main;