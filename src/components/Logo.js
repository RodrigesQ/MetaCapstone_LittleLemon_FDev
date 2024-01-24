// Logo.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoImage from './assets/Logo.svg'


const Logo = () => {
  return (
    <div className='logo'>
    <NavLink to="/">
      <img className="logo-img" src={LogoImage} alt="Little Lemon logo" />
    </NavLink>
    </div>
  );
}



export default Logo ;
