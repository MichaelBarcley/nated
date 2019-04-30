import React from 'react';
import { NavLink } from 'react-router-dom'

import './Header.css'
import logo from '../Resources/logo.PNG'

const header = () => {
    return (
        <div className="header">
            <NavLink className="navbaritem" to="/nated"><img src={logo} alt="logo"></img></NavLink>
            <NavLink className="navbaritem" to="/nated/company">Szolgáltatások</NavLink>
            <NavLink className="navbaritem" to="/nated">Magunkról</NavLink>
        </div>
    );
};

export default header;