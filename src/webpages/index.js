import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import Home from './home';
import Profile from './profile';
import Detail from './detail';
import "./style.css";
import Menu from './menu';

const Webpages = () => {
    return (
        <Router>
            <Menu />
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/detail/:id" component={Detail} />
        </Router>
    );
};

export default Webpages;