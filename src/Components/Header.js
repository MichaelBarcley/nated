import React from 'react';
import { NavLink } from 'react-router-dom'

import './Header.css'
import logo from '../Resources/logo.PNG'

const header = () => {
    return (
        <nav className="Header">
            <NavLink to="/"><img src={logo} alt="logo"></img></NavLink>
            <NavLink to="/individual">Magánszemélyeknek </NavLink>
            <NavLink to="/company">Cégeknek </NavLink>
            <NavLink to="/">Magunkról</NavLink>
        </nav>
    );
};

export default header;