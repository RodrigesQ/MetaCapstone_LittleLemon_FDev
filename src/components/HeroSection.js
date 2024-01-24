// Header.js
import React from 'react';
import './styles/HeroSection.css'
import HeroImage from './assets/restauranfood.jpg'
import { NavLink } from 'react-router-dom'


const HeroSection = () => {
    return (
        <div className="hero-section-background">
            <div className="hero-section-container">
                <div className="section-left">
                    <h1>Little lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <div className="btn-container">
                        <NavLink to="/reservations" className="btn">
                            Reserve a Table
                        </NavLink>
                    </div>
                </div>

                <div className="section-right">
                    <div className="image-box">
                        <img src={HeroImage} alt="HeroImage" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HeroSection;
