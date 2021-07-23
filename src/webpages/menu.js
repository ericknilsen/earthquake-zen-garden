import React from 'react';
import { Link } from "react-router-dom";
import data from '../data.json';
import "./style.css";

const Menu = () => {
    return (
        <div className="navbar">
            <div className="logo"><Link to='/'><img alt="Logo" src={data.site.logoImage} width="40" height="40" /></Link></div>
            <div className="spacer"></div>
            <div className="title"><h1>{data.site.title}</h1></div>
            <div className="spacer"></div>
            <div className="profile"><b><Link style={{ color: '#6600cc' }} to='/profile'>Welcome {data.profile.firstName}</Link></b></div>
        </div>
    );
};

export default Menu;

