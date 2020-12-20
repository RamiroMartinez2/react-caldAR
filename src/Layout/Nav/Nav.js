import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import './Nav.css'

function Nav () {

    return (
        <nav>
            <Link to='/'>
            <div className="logo">
                <h3>CALDAR</h3>
            </div>
            </Link>
            <ul className="nav-links">
                <NavLink activeClassName="selected" to='/technician'>
                    <li>Technician</li>
                </NavLink>
                <NavLink activeClassName="selected" to='/customers'>
                    <li>Customers</li>
                </NavLink>
                <NavLink activeClassName="selected" to='/appointments'>
                    <li>Appointments</li>
                </NavLink>
                <NavLink activeClassName="selected" to='/buildings'>
                    <li>Buildings</li>
                </NavLink>
                <NavLink activeClassName="selected" to='/boilers'>
                    <li>Boilers</li>
                </NavLink>
                <NavLink activeClassName="selected" to='/boilersTypes'>
                    <li>Boilers Type</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Nav;