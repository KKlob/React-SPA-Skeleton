import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className="NavBar">
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/form">Form</NavLink>
        </div>
    )
}

export default NavBar;