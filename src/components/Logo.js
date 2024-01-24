// Logo.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoImage from './assets/Logo.svg'


const Logo = () => {
  return (
    <NavLink to="/">
      <img className="logo-img" src={LogoImage} alt="Little Lemon logo" />
    </NavLink>
  );
}



export default Logo ;
