import React from 'react';
import { NavLink } from 'react-router';
import './nav.css'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;