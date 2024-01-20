// Header.js
import React from 'react';
import './styles/HeroSection.css'
import HeroImage from './assets/restauranfood.jpg'


const HeroSection = () => {
    return (
            <div className="hero-section-background">
                <div className="hero-section-container">
                    <div className="section-left">
                        <h1>Little lemon</h1>
                        <h2>Chicago</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent sit amet massa quis neque porta blandit et non leo. Nunc malesuada egestas arcu quis rutrum. Sed consequat efficitur sagittis.</p>
                        <button className="btn">Reserve a Table</button>
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
