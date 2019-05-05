import React from 'react';
import { NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './Header.css'
import logo from '../Resources/logo.PNG'

const header = () => {
    return (
        <div className="header" id="header">
            <NavLink className="navbaritem" to="/nated"><img src={logo} alt="logo"></img></NavLink>
            <AnchorLink offset='100' className="navbaritem" href='#natedintro'>Natedről</AnchorLink>
            <AnchorLink offset='100' className="navbaritem" href='#businessactivity'>Szolgáltatásaink</AnchorLink>
            <AnchorLink offset='100' className="navbaritem" href='#referenceworks'>Referenciáink</AnchorLink>
            <AnchorLink offset='100' className="navbaritem" href='#contactus'>Elérhetőségeink</AnchorLink>
        </div>
    );
};

export default header;