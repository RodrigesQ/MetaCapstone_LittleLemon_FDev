import React from 'react'
import "../components/styles/Specials.css"
import SpecialsCard from './SpecialsCard'
import { NavLink } from 'react-router-dom'
import './styles/HeroSection.css'

const Specials = () => {
  return (
    <div className="specials-section-container">
      <div className="specials-section-title">
        <h1>This Week`s Specials</h1>
        <div className="btn-container">
          <NavLink to="/menu" className="btn btn-menu">
            Online Menu
          </NavLink>
        </div>
      </div>
      <SpecialsCard />
    </div>
  )
}

export default Specials
