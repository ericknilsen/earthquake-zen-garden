import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

import Home from './home';
import Profile from './profile';
import Detail from './detail';
import data from '../data.json';
import "./style.css";

const Webpages = () => {
    return (
        <Router>

            <div className="navbar">
                <div className="logo"><Link to='/'><img alt="Logo" src={data.site.logoImage} width="40" height="40" /></Link></div>
                <div className="spacer"></div>
                <div className="title"><h1>{data.site.title}</h1></div>
                <div className="spacer"></div>
                <div className="profile"><b><Link to='/profile'>Welcome {data.profile.firstName}</Link></b></div>
            </div>
        
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/detail/:id" component={Detail} />
        </Router>
    );
};

export default Webpages;