// Nav.js
import React, { useState } from 'react'
import './styles/Nav.css'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'
import HamburgerIcon from "./assets/hamburger-menu.svg"


const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
      <header className="header-container">
        {/* Logo */}
        <Logo />

        {/* Navigation content goes here */}
        <nav className={isMenuOpen ? 'open' : ''}>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/reservations">Reservations</NavLink></li>
            <li><NavLink to="/order-online">Order Online</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>
        </nav>

        {/* Hamburger menu icon */}
        <div
          className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <img src={HamburgerIcon} alt="Hamburger Menu" />
        </div>

      </header>


    </>
  );
}

export default Nav;
