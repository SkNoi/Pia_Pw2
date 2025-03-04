import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    La Butaca Critca
                </Link>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">
                            Inicio
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/Registro" className="navbar-link">
                            Registro
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/Login" className="navbar-link">
                            Iniciar Sesión
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;