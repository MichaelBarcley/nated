import React from 'react';
import { NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './Header.css'
import logo from '../Resources/logo.PNG'

const header = () => {
    return (
        <nav class="header">
            <h1 class="logo"><NavLink className="navbaritem" to="/nated"><img src={logo} alt="logo"></img></NavLink></h1>
            <ul class="main-nav">
                <li><AnchorLink offset='125' className="navbaritem" href='#natedintro'>Natedről</AnchorLink></li>
                <li><AnchorLink offset='125' className="navbaritem" href='#businessactivity'>Szolgáltatásaink</AnchorLink></li>
                <li><AnchorLink offset='125' className="navbaritem" href='#referenceworks'>Referenciáink</AnchorLink></li>
                <li><AnchorLink offset='125' className="navbaritem" href='#contactus'>Elérhetőségeink</AnchorLink></li>
            </ul>
        </nav> 
    );
};

export default header;