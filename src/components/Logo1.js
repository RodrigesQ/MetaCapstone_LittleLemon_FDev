// Logo.js

import React from 'react';
import { NavLink } from 'react-router-dom';

import LogoImage1 from './assets/logo.png'


const Logo1 = () => {
  return (
    <NavLink to="/">
      <img className="logo-img" src={LogoImage1} alt="Little Lemon logo" />
    </NavLink>
  );
}

export default Logo1;
