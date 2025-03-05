import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Archivo de estilos para el Footer

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Enlaces Rápidos</h4>
                    <ul>
                        <li><Link to="/PantallaPrincipal">Inicio</Link></li>
                        <li><Link to="/Registro">Registro</Link></li>
                        <li><Link to="/Login">Iniciar Sesión</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contacto</h4>
                    <p>Email: info@miapp.com</p>
                    <p>Teléfono: +123 456 789</p>
                </div>
                <div className="footer-section">
                    <h4>Síguenos</h4>
                    <ul className="social-links">
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} La Butaca Critica. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;