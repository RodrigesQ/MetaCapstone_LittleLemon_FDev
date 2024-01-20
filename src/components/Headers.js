// Nav.js
import React, { useState } from 'react'
import './styles/Nav.css'
import Logo from "./assets/Logo.svg"
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
        <NavLink to = "#">
          <img className="logo-img" src={Logo} alt="Little Lemon logo" />
        </NavLink>

        {/* Navigation content goes here */}
        <nav className={isMenuOpen ? 'open' : ''}>
          <ul>
            <li><NavLink to="#">Home</NavLink></li>
            <li><NavLink to="#">About</NavLink></li>
            <li><NavLink to="#">Menu</NavLink></li>
            <li><NavLink to="#">Reservations</NavLink></li>
            <li><NavLink to="#">Order online</NavLink></li>
            <li><NavLink to="#">Login</NavLink></li>
          </ul>
        </nav>

        {/* Hamburger menu icon */}
        <div
          className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <img src={HamburgerIcon} alt="Hamburger Menu" />
        </div>

        {/* Dropdown menu */}
        {isMenuOpen && (
          <nav className="dropdown-menu">
            <ul>
            <li><NavLink to="#">Home</NavLink></li>
            <li><NavLink to="#">About</NavLink></li>
            <li><NavLink to="#">Menu</NavLink></li>
            <li><NavLink to="#">Reservations</NavLink></li>
            <li><NavLink to="#">Order online</NavLink></li>
            <li><NavLink to="#">Login</NavLink></li>
            </ul>
          </nav>
        )}


      </header>


    </>
  );
}

export default Nav;
