import React from 'react';
import './HeaderAppointment.css'

function Header() {
    return(
        <header className="headerStyle">
            <h1>Appointments</h1>
            <ul className="ulStyle">
                <li className="liStyleHeader">Id</li>
                <li className="liStyleHeader">Building Id</li>
                <li className="liStyleHeader">Boiler Id</li>
                <li className="liStyleHeader">Date</li>
                <li className="liStyleHeader">Estimated Time</li>
                <li className="liStyleHeader">Maintenance Type</li>                
                <li className="liStyleHeader">Actions</li>
            </ul>
        </header>
    )
}

export default Header;