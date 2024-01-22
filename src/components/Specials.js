import React from 'react'
import "../components/styles/Specials.css"
import SpecialsCard from './SpecialsCard'
import { NavLink } from 'react-router-dom'

const Specials = () => {
  return (
    <div className="specials-section-container">
      <div className="specials-section-title">
            <h1>This Week`s Specials</h1>
            <div className="btn-container">
                <button className="btn btn-menu"><NavLink to="/menu">Online Menu</NavLink></button>
            </div>
      </div>
      <SpecialsCard />
    </div>
  )
}

export default Specials
