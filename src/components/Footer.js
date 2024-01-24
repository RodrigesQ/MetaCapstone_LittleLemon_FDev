// Footer.js
import React from 'react'
import './styles/Footer.css'
import NavigationLinks from './NavigationLinks';
import Logo1 from './Logo1';


const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Logo */}
      <Logo1 />

      <div className="navigation-section">
        <figure>
          <figcaption>Navigation</figcaption>
          <NavigationLinks />
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
          <figcaption>Social media</figcaption>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Pinterest</li>
          </ul>
        </figure>
      </div>

      <div className="copyright">
        <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
