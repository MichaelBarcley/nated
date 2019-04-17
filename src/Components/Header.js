import React from 'react';
import { NavLink } from 'react-router-dom'

import './Header.css'
import logo from '../Resources/logo.PNG'

const header = () => {
    return (
        <nav className="Header">
            <NavLink to="/nated"><img src={logo} alt="logo"></img></NavLink>
            <NavLink to="/nated/individual">Magánszemélyeknek </NavLink>
            <NavLink to="/nated/company">Cégeknek </NavLink>
            <NavLink to="/nated">Magunkról</NavLink>
        </nav>
    );
};

export default header;