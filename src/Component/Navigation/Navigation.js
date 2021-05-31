import { faGlobe, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="nav-container">
            <div className="logo">
                <h2 className="nav-title">
                    <Link to="/home" className="logo-link">
                        <FontAwesomeIcon icon={faGlobe} />
                        Rest-Countries
                    </Link>
                </h2>
            </div>
            <div className="nav-bar">
                <h2>
                    <FontAwesomeIcon icon={faMoon} />
                </h2>
            </div>
        </div>
    );
}

export default Navigation;
