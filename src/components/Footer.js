// Footer.js
import React from 'react'
import Logo from './assets/Logo.svg'
import './styles/Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="logo-section">
        <img src={Logo} alt="Little Lemon Logo" />
      </div>

      <div className="navigation-section">
        <figure>
          <figcaption>Navigation</figcaption>
          <ul>
            <li><NavLink to="#">Home</NavLink></li>
            <li><NavLink to="#">About</NavLink></li>
            <li><NavLink to="#">Menu</NavLink></li>
            <li><NavLink to="#">Reservations</NavLink></li>
            <li><NavLink to="#">Order online</NavLink></li>
            <li><NavLink to="#">Login</NavLink></li>
          </ul>
        </figure>
      </div>

      <div className="contact-section">
        <figure>
          <figcaption>Contact</figcaption>
          <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </figure>
      </div>

      <div className="social-media-section">
        <figure>
          <figcaption>Social media links</figcaption>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Pinterest</li>
          </ul>
        </figure>
      </div>
    </footer>
  );
}

export default Footer;
