import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css'
class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <nav>
                    <p className="nav-logo">LOGO</p>
                    <ul className="nav-links">
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/users">Users</NavLink></li>
                        <li><NavLink to="/counter">Counter</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;