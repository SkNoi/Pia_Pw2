import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarPantallaPrincipal.css';

function NavbarPantallaPrincipal() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    La Butaca Critca
                </Link>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">
                            Reseñas
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">
                            Tendencias
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">
                            Foros
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavbarPantallaPrincipal;