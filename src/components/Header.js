// Header.js
import React, { useState } from 'react'
import './styles/Header.css'
import Logo from './Logo'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import NavigationLinks from './NavigationLinks';


const Header = () => {
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
          <NavigationLinks />
        </nav>

        {/* Hamburger menu icon */}
        <div
          className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? (<AiOutlineClose size={30} style={{ color: "#333333" }} />) : (<AiOutlineMenu size={30} style={{ color: "#333333" }} />)}
        </div>

      </header>


    </>
  );
}

export default Header;
